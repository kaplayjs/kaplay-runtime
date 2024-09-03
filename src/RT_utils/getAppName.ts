import { invoke } from "@tauri-apps/api";

export const appName = await getAppName();

export default appName;

async function getAppName() {
  if ("__TAURI__" in window) {
    return await invoke("get_app");
  }
  return "game";
}
