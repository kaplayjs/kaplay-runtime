import getAppName from "./getAppName";
import readTextFile from "./readTextFile";

export default async function kapFile() {
  let kapFile = JSON.parse(await readTextFile(await getAppName()+".kap"));
  return kapFile;
}