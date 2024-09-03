import readTextFile from "./readTextFile";

export default async function kapFile() {
  let kapFile = JSON.parse(await readTextFile("game.kap"));
  return kapFile;
}