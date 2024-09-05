import appName from "./getAppName";
import readTextFile from "./readTextFile";

import * as ld from "lodash";

export default async function getKapFile() {
  let truth = JSON.parse(await readTextFile((await appName()) + ".kap"));
  let paks = JSON.parse(JSON.stringify(truth.import));
  let deniedPaks: string[] = [];
  while (paks.length > 0) {
    let pak = paks.pop();
    if (deniedPaks.includes(pak)) continue;
    deniedPaks.push(pak);
    let pakFile = JSON.parse(await readTextFile(pak));
    if (pakFile.import) {
      paks.push(...pakFile.import);
    }
    truth = ld.mergeWith(truth, pakFile, (objValue, srcValue)=> {
      if (ld.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    });
  }

  if (truth["import"]) {
    delete truth["import"];
  }

  return truth;
}
