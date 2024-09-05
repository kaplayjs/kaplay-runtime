import { KAPLAYCtx } from "kaplay";
import { VERSION_Fallback, KAPLAY_Versions } from "./constants";
import kapFile from "./RT_utils/getKap";
import getkOpt from "./RT_utils/getkOpt";

const version = kapFile.VERSION ?? VERSION_Fallback;
if (!KAPLAY_Versions.includes(version)) {
  throw new Error(`KAPLAY version ${version} is not supported`);
}
const kaplay = (await import(`./libs/${version}.mjs`)).default;

export const k: KAPLAYCtx = kaplay(await getkOpt());
export default k;
