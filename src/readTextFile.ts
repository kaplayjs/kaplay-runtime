import * as fs from "@tauri-apps/api/fs";
import getDir from "./getDir";
import { path } from "@tauri-apps/api";

export default async function readTextFile(file: string): Promise<string> {
  if ("__TAURI__" in window){
    return await fs.readTextFile(await getDir() + path.sep + file);
  }

  return await fetch(file).then(response => response.text());
}