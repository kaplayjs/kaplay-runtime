import { KAPLAYCtx } from "kaplay";
import { VERSION_Fallback } from "./constants";
import kapFile from "./RT_utils/getKap";
import getkOpt from "./RT_utils/getkOpt";

const version = kapFile.VERSION ?? VERSION_Fallback;
const kaplay = (await import(`./libs/${version}.mjs`)).default;

export const k: KAPLAYCtx = kaplay(await getkOpt());
export default k