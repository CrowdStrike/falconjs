# falconjs
[![Version](https://img.shields.io/npm/v/crowdstrike-falcon.svg)](https://www.npmjs.com/package/crowdstrike-falcon)
[![Build](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml/badge.svg)](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml)
[![License](https://img.shields.io/github/license/crowdstrike/falconjs.svg)](https://github.com/crowdstrike/falconjs/blob/main/LICENSE)

[![NPM](https://nodei.co/npm/crowdstrike-falcon.png?mini=true)](https://npmjs.org/package/crowdstrike-falcon)

CrowdStrike Falcon API JS library for the browser and Node

## Experimental

> falconjs is an open source project, not a CrowdStrike product. As such it carries no formal support, expressed or implied.

## Installation

```
npm install crowdstrike-falcon
```

## Exemplary use

With falconjs, there are two ways to call CrowdStrike API service collections. You can use the FalconClient object, which has always been available, or you can use the new Falcon object, which behaves like the API Harness, or UberClass, from FalconPy.

### FalconClient

```typescript
import { FalconClient, FalconErrorExplain } from "crowdstrike-falcon";

const client = new FalconClient({
    cloud: "us-1",
    clientId: "",
    clientSecret: "",
});

await client.sensorDownload
    .getSensorInstallersCCIDByQuery()
    .catch(async function (err) {
        alert("Could not fetch CCID: " + (await FalconErrorExplain(err)));
    })
    .then((value) => {
        console.log("my CCID: ", value);
    });
```
## Falcon
when using request body properties:
```js
const body = { ids: ["123", "456", "789"]}
try {
    detDetails = await falcon.command("GetDetectSummaries", body)
    return detDetails
} catch (error) {
    console.log(error)
    return
}
```

when using query params:
```js
const params = { filter: "score:<=75"}
const args = {"getAssessmentsByScoreV1", params }
try {
    ztaDetails = await falcon.command(args)
    return ztaDetails
} catch(error) {
    console.log(error)
    return
}
```

## Documentation

 - [Example usage under nodejs](examples/node/README.md)
 - [Example usage inside browser](examples/browser/README.md)

 - [SDK Developer documentation](docs/devel.md)
