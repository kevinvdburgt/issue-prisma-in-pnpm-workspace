# Prisma in pnpm workspace

```shell
$ pnpm install
$ pnpm --filter=@issue-prisma-in-pnpm-workspace/sample build
$ pnpm --filter=@issue-prisma-in-pnpm-workspace/sample start
```

Results:

```shell
➜  issue-prisma-in-pnpm-workspace git:(development) ✗ pnpm --filter=@issue-prisma-in-pnpm-workspace/sample start

> @issue-prisma-in-pnpm-workspace/sample@ start /Users/kevin/Development/issues/issue-prisma-in-pnpm-workspace/packages/sample
> node ./dist/main.js

node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module '@prisma/client/runtime/index'
Require stack:
- /Users/kevin/Development/issues/issue-prisma-in-pnpm-workspace/node_modules/.prisma/client/index.js
- /Users/kevin/Development/issues/issue-prisma-in-pnpm-workspace/packages/sample/dist/main.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/Users/kevin/Development/issues/issue-prisma-in-pnpm-workspace/node_modules/.prisma/client/index.js:17:5)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/kevin/Development/issues/issue-prisma-in-pnpm-workspace/node_modules/.prisma/client/index.js',
    '/Users/kevin/Development/issues/issue-prisma-in-pnpm-workspace/packages/sample/dist/main.js'
  ]
}
/Users/kevin/Development/issues/issue-prisma-in-pnpm-workspace/packages/sample:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @issue-prisma-in-pnpm-workspace/sample@ start: `node ./dist/main.js`
Exit status 1
```
