import { RUNTIME_Version } from "./constants";
import k from "./kaplay";
import kapFile from "./RT_utils/getKap";
if (!kapFile) {
  throw new Error(`No .kap file found!`);
  k.quit();
}
if ((kapFile.RUNTIME_VERSION ?? RUNTIME_Version) != RUNTIME_Version) {
  k.add([
    k.text(
      `Illegal Runtime Version: expected v${RUNTIME_Version}, given v${kapFile.RUNTIME_VERSION}`,
      {
        width: (await getkOpt()).width,
      },
    ),
  ]);
  throw new Error(
    `Illegal Runtime Version: expected v${RUNTIME_Version}, given v${kapFile.RUNTIME_VERSION}`,
  );
}
import getkOpt from "./RT_utils/getkOpt";
import "./RT_load";

k.add([
  k.text(`KAPLAY Runtime. kapfile: ${JSON.stringify(kapFile)}`, {
    width: (await getkOpt()).width,
  }),
]);

console.log(`kapfile: `, kapFile);
