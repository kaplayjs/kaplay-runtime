import { invoke } from "@tauri-apps/api";

export const dir = await invoke("get_dir");

export default dir;