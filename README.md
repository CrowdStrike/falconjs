# falconjs
[![Build](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml/badge.svg)](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml)

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
