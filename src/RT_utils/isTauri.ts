export default function isTauri() {
  return "__TAURI__" in window;
}