import { window } from "@tauri-apps/api";
import isTauri from "./isTauri";
import { appWindow } from "@tauri-apps/api/window";
import { KAPLAYOPT_Fallback } from "../constants";
import kapFile from "./getKap";

export default async function getkOpt() {
  let given_opt = kapFile.KAPLAYOPT ?? {};
  let opt = JSON.parse(JSON.stringify(KAPLAYOPT_Fallback));
  Object.assign(opt, given_opt);
  if (isTauri()) {
    const winsize = new window.LogicalSize(
      opt.width * opt.scale,
      opt.height * opt.scale,
    );
    appWindow.setSize(winsize);
    appWindow.setFullscreen(opt.fullscreen);
  }

  return opt;
}
