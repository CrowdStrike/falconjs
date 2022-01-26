# falconjs
[![Version](https://img.shields.io/npm/v/crowdstrike-falcon.svg)](https://www.npmjs.com/package/crowdstrike-falcon)
[![Build](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml/badge.svg)](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml)
[![Maintenance](https://img.shields.io/maintenance/yes/2022.svg)](https://github.com/crowdstrike/falconjs/graphs/commit-activity)
[![License](https://img.shields.io/github/license/crowdstrike/falconjs.svg)](https://github.com/crowdstrike/falconjs/blob/main/LICENSE)

[![NPM](https://nodei.co/npm/crowdstrike-falcon.png?mini=true)](https://npmjs.org/package/crowdstrike-falcon)

CrowdStrike Falcon API JS library for the browser and Node

## Experimental

> falconjs is an open source project, not a CrowdStrike product. As such it carries no formal support, expressed or implied.

## Exemplary use

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

## Documentation

[SDK Developer documentation](docs/devel.md)
