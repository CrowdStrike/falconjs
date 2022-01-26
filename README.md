# falconjs
[![Version](https://img.shields.io/npm/v/crowdstrike-falcon.svg)](https://www.npmjs.com/package/crowdstrike-falcon)
[![Build](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml/badge.svg)](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml)
[![Maintenance](https://img.shields.io/maintenance/yes/2022.svg)](https://github.com/crowdstrike/falconjs/graphs/commit-activity)
[![License](https://img.shields.io/github/license/crowdstrike/falconjs.svg)](https://github.com/crowdstrike/falconjs/blob/main/LICENSE)

[![NPM](https://nodei.co/npm/crowdstrike-falcon.png?mini=true)](https://npmjs.org/package/crowdstrike-falcon)

TypeScript based SDK for CrowdStrike's Falcon APIs

## Experimental

> falconjs is an open source project, not a CrowdStrike product. As such it carries no formal support, expressed or implied.

## Exemplary use

```typescript
import fetch from "cross-fetch"; // Node-only. Not needed in browser

const client = new FalconClient({
    fetchApi: fetch,
    cloud: "us-1",
    clientId: "",
    clientSecret: "",
});

const response = client.sensorDownload
    .getSensorInstallersCCIDByQuery()
    .then((value) => {
        console.log("my CCID: ", value);
    })
    .catch((err) => {
        console.log("Could not fetch CCID: ", err);
    });

```

## Developer docs

[Developer documentation](docs/devel.md)
