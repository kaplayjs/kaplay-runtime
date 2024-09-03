// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn get_dir() -> Option<std::path::PathBuf> {
    let current_exe = std::env::current_exe().unwrap();
    return current_exe.parent().map(|p| p.to_path_buf());
}

#[tauri::command]
fn get_app() -> Option<String> {
    use std::env;
    use std::path::Path;
    use std::ffi::OsStr;

    // Helper function to strip the file extension
    fn strip_extension(filename: &str) -> String {
        Path::new(filename)
            .file_stem()   // Get the file name without the extension
            .and_then(OsStr::to_str) // Convert to &str
            .map(String::from) // Convert to String
            .unwrap_or_else(|| filename.to_string()) // Fall back to original if None
    }

    env::args().next() // Get the first argument (program path)
        .as_ref() // Get reference to the Option
        .map(Path::new) // Convert to Path
        .and_then(|path| path.file_name()) // Get the file name part
        .and_then(OsStr::to_str) // Convert to &str
        .map(strip_extension) // Strip extension
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_dir, get_app])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
