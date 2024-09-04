import { invoke } from "@tauri-apps/api";
import isTauri from "./isTauri";

export const appName = getAppName;

export default appName;

async function getAppName() {
  if (isTauri()) {
    return await invoke("get_app");
  }
  return "game";
}
