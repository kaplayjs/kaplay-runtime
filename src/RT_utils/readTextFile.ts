import * as fs from "@tauri-apps/api/fs";
import dir from "./getDir";
import { path } from "@tauri-apps/api";
import isTauri from "./isTauri";

export default async function readTextFile(file: string): Promise<string> {
  if (isTauri()){
    return await fs.readTextFile(await dir() + path.sep + file);
  }

  return await fetch(file).then(response => response.text());
}