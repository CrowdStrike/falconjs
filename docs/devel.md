# SDK Developer Guide 

## How to orient yourself in the source code?

 - most of the files are autogenerated by `openapitools/openapi-generator-cli`
   - please consult `./rebuild.sh` script to understand how the automated code generation works
   - autogenerated files contain the following text: `This class is auto generated by OpenAPI Generator`
   - What is autogenerated?
     - All the api end-point calls implementations (`./src/apis`)
     - input (request) and output (response) classes (`./src/models`)
     - common middleware (`./src/runtime.ts`)
 - small portion of the files in the repo has been hand written by human (without assistance of AI or ML)
   - Top level files like package.json
   - all the readme and examples files
   - middleware for oauth2 and user-agent configuration
   - and `./src/client.ts` that is meant to represent an entry point class for end-users

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

## How to update to the latest swagger

- read & run `./rebuild.sh` script

## How to release falconjs

- bump version in `package.json` (`npm version patch`)
- build package (`npm run build:release`)
- review contents of the package (`.tgz` file in working directory)
- `npm publish`
