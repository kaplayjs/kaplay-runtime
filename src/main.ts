// #region DEFININITONS
const VERSION_Fallback: string = "4000.0.0-alpha.4";
const KAPLAYOPT_Fallback: KAPLAYOpt | {} = {
  background: [0, 0, 0],
  width: 1280,
  height: 720,
  scale: 1,
  letterbox: true,
  fullscreen: false,
};

// #region KAPLAY
export let k: KAPLAYCtx;

// #region IMPORTS
import { KAPLAYCtx, KAPLAYOpt } from "kaplay";
import appName from "./RT_utils/getAppName";
import kapFile from "./RT_utils/getKap";
import { window } from "@tauri-apps/api";
import { appWindow } from "@tauri-apps/api/window";
import isTauri from "./RT_utils/isTauri";

switch (kapFile.RUNTIME_VERSION ?? 1) {
  case 1:
    // #region LOAD KAPLAY WITH RUNTIME v1
    const version = kapFile.VERSION ?? VERSION_Fallback;
    const kaplay = await import(`./libs/${version}.mjs`);
    let given_opt = kapFile.KAPLAYOPT ?? {};
    let opt = JSON.parse(JSON.stringify(KAPLAYOPT_Fallback));
    Object.assign(opt, given_opt);
    if (isTauri()) {
      const winsize = new window.LogicalSize(
        opt.width * opt.scale,
        opt.height * opt.scale
      );
      appWindow.setSize(winsize);
      appWindow.setFullscreen(opt.fullscreen);
    }
    k = kaplay.default(opt);

    k.add([
      k.text("loading runtime for game...")
    ])

    console.log(kapFile);
    console.log(appName);
    break;
  default:
    throw new Error(`Unsupported KAPLAY runtime version. (v${kapFile.RUNTIME_VERSION})\nSupported versions: v1`);
    break;
}

// #region EXPORT KAPLAY
export default k;
