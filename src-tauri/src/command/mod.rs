use tauri::Invoke;

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
  format!("Hello, {}! You've been greeted from Rust!", name)
}
