#!/usr/bin/node

import fetch from "cross-fetch";
import { FalconClient } from "../../src";

function falconClientFromEnv() {
    if (!process.env.FALCON_CLIENT_ID) {
        throw new Error(
            "Missing FALCON_CLIENT_ID environment variable. Please provide your OAuth2 API Client ID for authentication with CrowdStrike Falcon platform. Establishing and retrieving OAuth2 API credentials can be performed at https://falcon.crowdstrike.com/support/api-clients-and-keys."
        );
    }
    if (!process.env.FALCON_CLIENT_SECRET) {
        throw new Error(
            "Missing FALCON_CLIENT_SECRET environment variable. Please provide your OAuth2 API Client Secret for authentication with CrowdStrike Falcon platform. Establishing and retrieving OAuth2 API credentials can be performed at https://falcon.crowdstrike.com/support/api-clients-and-keys."
        );
    }
    const cloud = process.env.FALCON_CLOUD;
    if (!cloud) {
        throw new Error("Missing FALCON_CLOUD environment variable.");
    }
    if (cloud != "us-1" && cloud != "us-2" && cloud != "eu-1" && cloud != "us-gov-1") {
        throw new Error("Invalid FALCON_CLOUD environment variable: " + cloud);
    }
    if (!process.env.FALCON_DEVICE_HOST_ID) {
        throw new Error("Missing FALCON_DEVICE_HOST_ID environment variable. Please provide a host ID to fetch device details for.");
    }
    return new FalconClient({
        fetchApi: fetch,
        cloud: cloud,
        clientId: process.env.FALCON_CLIENT_ID,
        clientSecret: process.env.FALCON_CLIENT_SECRET,
    });
}

const client = falconClientFromEnv();
const response = client.hosts
    .getDeviceDetailsV2([process.env.FALCON_DEVICE_HOST_ID as string])
    .then((value) => {
        console.log("Device details: ", value);
    })
    .catch((err) => {
        console.log("Could not fetch device: ", err);
    });

console.log(response);
