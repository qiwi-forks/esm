import Module from "../../module.js"

import extname from "../../path/extname.js"
import moduleState from "../state.js"

function loader(entry, preload) {
  if (! moduleState.parsing &&
      preload) {
    preload(entry)
  }

  const mod = entry.module
  const { filename } = mod
  const { parent } = entry

  let { _extensions } = moduleState
  let ext = extname(filename)

  if (ext === ".js" ||
      (parent &&
       parent.package.options.cjs.extensions)) {
    _extensions = Module._extensions
  }

  if (ext === "" ||
      typeof _extensions[ext] !== "function") {
    ext = ".js"
  }

  if (moduleState.parsing &&
      (ext === ".json" ||
       ext === ".node")) {
    entry.state = 2
    return
  }

  _extensions[ext](mod, filename)

  if (! moduleState.parsing) {
    mod.loaded = true
  }
}

export default loader
