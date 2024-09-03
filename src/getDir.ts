import { invoke } from "@tauri-apps/api";

export default async function getDir() {
  return await invoke("get_dir");
}