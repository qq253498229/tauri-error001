use tauri::Invoke;
use steamworks::Client;
use std::process;

pub fn command_list() -> fn(Invoke) {
  tauri::generate_handler![greet,greet1]
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn greet1(name: &str) -> String {
  let result = Client::init();
  if result.is_err() {
    let error = result.err().unwrap();
    eprintln!("{}", error.to_string());
    process::exit(1);
  }
  let (_, _) = result.unwrap();

  format!("Hello, {}! You've been greeted from Rust!", name)
}
