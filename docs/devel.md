# SDK Developer Guide 

## Checklist before submitting PR

Build typescript in `src/` directory to javascript in `dist/` directory.
```
tsc
```

alternatively you can use `npm` command to the same
```
npm run build
```

Reformat codebase to fit nicely with the rest
```
npm run format:fix
```

Ask linter to fix any issues it can fix
```
npm run lint:fix
```

Ensure linter output is empty (this checks for issues that cannot be fixed automatically)
```
npm run lint
```

## How to experiment with SDK under node

The SDK codebase uses `fetch` API to interface with CrowdStrike Falcon platform. The `fetch` API while available in browsers
is usually not available in `node` environment. We recommend to install any `fetch` API alternative. For instance

```
npm install cross-fetch
```

In your codebase you then need to pass `fetch` API implementation down to the Falcon client. Example:
```
import fetch from "cross-fetch";
import { FalconClient } from "./src";


const client = new FalconClient({
    fetchApi: fetch,
    ...
})
```

After placing this into `./example.ts` you can execute it under node with
```
tsc && node ./build/example.js
```

## How to release falconjs

- bump version in `package.json` (`npm version patch`)
- verify codebase is well formed `npm run lint:fix && npm run format:fix`
- build javascript `npm run clean && npm run build && npm run build:browser`
- build package (`npm pack`)
- review contents of the package
- `npm publish`
