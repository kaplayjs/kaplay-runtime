// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::path::PathBuf;
#[tauri::command]
fn get_dir() -> Option<PathBuf> {
    let current_exe = std::env::current_exe().unwrap();
    return current_exe.parent().map(|p| p.to_path_buf());
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
