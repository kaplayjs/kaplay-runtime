import k from "../kaplay";
import getAsset from "../RT_utils/getAsset";
import kapFile from "../RT_utils/getKap";

export default async function loadAtlas() {
  const assets = kapFile.assets;
  if (!assets) return;
  const atlas = assets.atlas;
  if (!atlas) return;
  for (const i in atlas) {
    k.loadSound(await getAsset(atlas[i].src), atlas[i].data);
  }
}