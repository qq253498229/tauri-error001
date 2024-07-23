// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
pub mod command;

fn main() {
  tauri::Builder::default()
          .setup(|app| {
            #[cfg(debug_assertions)] // only include this code on debug builds
            {
              let window = app.get_window("main").unwrap();
              window.open_devtools();
              window.close_devtools();
            }
            Ok(())
          })
          .invoke_handler(command::command_list())
          .run(tauri::generate_context!())
          .expect("error while running tauri application");
}
