# FalconJS

[![Version](https://img.shields.io/npm/v/crowdstrike-falcon.svg)](https://www.npmjs.com/package/crowdstrike-falcon)
[![Build](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml/badge.svg)](https://github.com/CrowdStrike/falconjs/actions/workflows/sanity_check.yaml)
[![License](https://img.shields.io/github/license/crowdstrike/falconjs.svg)](https://github.com/crowdstrike/falconjs/blob/main/LICENSE)

[![NPM](https://nodei.co/npm/crowdstrike-falcon.png?mini=true)](https://npmjs.org/package/crowdstrike-falcon)

TypeScript SDK for the CrowdStrike Falcon API.

## Experimental

> falconjs is an open source project, not a CrowdStrike product. It carries no formal support, expressed or implied.

## Installation

```bash
npm install crowdstrike-falcon
```

## Features

- **TypeScript-first** — fully typed request and response models
- **120+ API services** — detections, hosts, intel, spotlight, real-time response, and more
- **OAuth2 built-in** — automatic token management via middleware

## Quick Start

```typescript
import { FalconClient, FalconErrorExplain } from "crowdstrike-falcon";

const client = new FalconClient({
    cloud: "us-1",
    clientId: "your-client-id",
    clientSecret: "your-client-secret",
});

await client.sensorDownload
    .getSensorInstallersCCIDByQuery()
    .catch(async function (err) {
        console.error("Could not fetch CCID: " + (await FalconErrorExplain(err)));
    })
    .then((value) => {
        console.log("my CCID: ", value);
    });
```

## Documentation

- [Example usage under nodejs](examples/node/README.md)
- [Example usage inside browser](examples/browser/README.md)
- [SDK Developer documentation](docs/devel.md)
- [CrowdStrike API documentation](https://docs.crowdstrike.com/p/api)
