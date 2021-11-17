# [1.1.0](https://github.com/qiwi-forks/esm/compare/v1.0.0...v1.1.0) (2021-11-17)


### Bug Fixes

* **deps:** update deps, fix some vuls ([1c6b11e](https://github.com/qiwi-forks/esm/commit/1c6b11e384b94a04456fb557a9aa5ef5c99e616c))


### Features

* add `.cjs` ext to allowlist, handle `node:`-prefixed modules ([ce4346e](https://github.com/qiwi-forks/esm/commit/ce4346ef916ad5b25cb8e85480bd2b7db1baf2d2))

# 1.0.0 (2021-04-13)


### Bug Fixes

* upadate dependencies. fix broken tests. ([696baf9](https://github.com/qiwi-forks/esm/commit/696baf9c4d75a084ea854d55a84a66fe83d233f0))
* **package:** update acorn to version 5.0.0 ([#97](https://github.com/qiwi-forks/esm/issues/97)) ([aefa703](https://github.com/qiwi-forks/esm/commit/aefa703b76eb83cabf57ea33abae48467b7b0b97))


### Reverts

* Revert "Switch from using mtime to ctime for cache validation. [closes #746]" ([376438c](https://github.com/qiwi-forks/esm/commit/376438c761fde011954905823d7153b64bb3c056)), closes [#746](https://github.com/qiwi-forks/esm/issues/746)
* Revert "Remove SafeJSON." ([5947eb4](https://github.com/qiwi-forks/esm/commit/5947eb481ad32b755a42de092ed5b3891ab3fb1d))
* Revert "Only hoist function declarations." ([55d92f8](https://github.com/qiwi-forks/esm/commit/55d92f8fd02dacd0acf9cd641fb384eb1cd3c86a))
* Revert "Temporarily remove chakracore/latest from appveyor test matrix." ([6968f58](https://github.com/qiwi-forks/esm/commit/6968f58125f09d192888801d915bbfefbf8261a6))
* Revert "Remove unneeded package options cloning." [closes #504] ([7c22f88](https://github.com/qiwi-forks/esm/commit/7c22f88ee0e463624ef43d169dbe3633ec487c1d)), closes [#504](https://github.com/qiwi-forks/esm/issues/504)
* Revert "Remove ava from tips section." ([fbe713f](https://github.com/qiwi-forks/esm/commit/fbe713ffbe57f23859364c5b578053cdfcced5ad))
* Revert "Remove refDestructuringErrors references from acorn plugins." ([c89e922](https://github.com/qiwi-forks/esm/commit/c89e9222331fd37a8a4cffc90378b5d15875d84a))
* Revert "Allow options.generateLegacyModuleImport to force legacy module.import." ([6bf5564](https://github.com/qiwi-forks/esm/commit/6bf5564c61937243ee21730b383cd1512c097261)), closes [#116](https://github.com/qiwi-forks/esm/issues/116)
* Revert "Revert ast-types/fork changes to reinstate JSX types." ([6d5d4fd](https://github.com/qiwi-forks/esm/commit/6d5d4fd7302e2d67e694b96b337b7b4d0be37381)), closes [#87](https://github.com/qiwi-forks/esm/issues/87)
* Revert "Move reify to peerDependencies of Babel plugin." ([428a632](https://github.com/qiwi-forks/esm/commit/428a632a0b4e35edbdf88c412ffff5335ef5928d))
