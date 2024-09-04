import k from "../kaplay";
import getAsset from "../RT_utils/getAsset";
import kapFile from "../RT_utils/getKap";

export default async function loadSound() {
  const assets = kapFile.assets;
  if (!assets) return;
  const sound = assets.sound;
  if (!sound) return;
  for (const i in sound) {
    k.loadSound(sound[i].name, await getAsset(sound[i].src));
  }
}