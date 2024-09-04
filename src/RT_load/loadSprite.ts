import k from "../kaplay";
import getAsset from "../RT_utils/getAsset";
import kapFile from "../RT_utils/getKap";

export default async function loadSprite() {
  const sprite = kapFile.assets.sprite;
  if (!sprite) return;
  for (const i in sprite) {
    k.loadSprite(sprite[i].name, await getAsset(sprite[i].src), sprite[i].opt ?? {});
  }
}