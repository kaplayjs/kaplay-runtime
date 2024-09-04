import k from "./kaplay";
import kapFile from "./RT_utils/getKap";
if (!kapFile) {
  throw new Error(`No .kap file found!`)
  k.quit()
}
import getkOpt from "./RT_utils/getkOpt";
import "./RT_load"

k.add([
  k.text(JSON.stringify(kapFile), {
    width: (await getkOpt()).width,
  })
])

console.log(`kapfile: `, kapFile)