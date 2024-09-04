import k from "./kaplay";
import kapFile from "./RT_utils/getKap";
import getkOpt from "./RT_utils/getkOpt";
import "./RT_load"


k.add([
  k.text(JSON.stringify(kapFile), {
    width: (await getkOpt()).width,
  })
])

console.log(`kapfile: `, kapFile)