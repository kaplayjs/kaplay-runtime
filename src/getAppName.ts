import { invoke } from "@tauri-apps/api";

export default async function getAppName() {
  if ("__TAURI__" in window) {
    return await invoke("get_app");
  }
  return "game";
}
