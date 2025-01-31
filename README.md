# @qiwi/esm

[![CI](https://github.com/qiwi-forks/esm/workflows/CI/badge.svg)](https://github.com/qiwi-forks/esm/actions)
![npm (scoped)](https://img.shields.io/npm/v/@qiwi/esm)

Fork of [esm](https://github.com/standard-things/esm) with some useful patches:
* [Adam Thornburn's fix for mixed esm-cjs graphs](https://github.com/qiwi-forks/esm/tree/feature/patch-module-loader-for-mixed-cjs-esm-dependency-graphs)
* [Jonathan Grimes' tweak ups](https://github.com/jsg2021/esm/tree/master)
* added `.cjs` to allowed extensions
* supported `node:`-prefixed modules
* bumped deps, fixed some vulnerabilities

## Usage
### CLI
```shell
node -r @qiwi/esm main.js
```
### JS API
```js
// Set options as a parameter, environment variable, or rc file.
require = require("@qiwi/esm")(module/*, options*/)
module.exports = require("./main.js")
```
https://github.com/standard-things/esm

## License
[MIT](LICENSE)
