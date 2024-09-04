import { invoke } from "@tauri-apps/api";
import isTauri from "./isTauri";

export const dir = getDir

async function getDir() {
  if (isTauri()) {
    return await invoke("get_dir");
  }
  return "";
}

export default dir;