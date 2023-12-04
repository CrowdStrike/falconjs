#!/usr/bin/node

import fetch from "cross-fetch";
import { FalconClient, FalconErrorExplain, FalconClientOptions } from "../../src";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
    const clientConfig: FalconClientOptions = {
        fetchApi: fetch,
        cloud: cloud,
        clientId: process.env.FALCON_CLIENT_ID,
        clientSecret: process.env.FALCON_CLIENT_SECRET,
    };

    if (typeof process.env.FALCON_MEMBER_CID === "string") {
        clientConfig.memberCid = process.env.FALCON_MEMBER_CID;
    }

    return new FalconClient(clientConfig);
}

const client = falconClientFromEnv();

try {
    const startSession = await client.realTimeResponse.rTRInitSession({ deviceId: process.env.FALCON_DEVICE_HOST_ID as string, origin: "", queueOffline: true }, 300);
    console.log("Session ID: ", startSession.resources[0].sessionId);

    const runLsCmd = await client.realTimeResponseAdmin.rTRExecuteAdminCommand({
        baseCommand: "ls",
        commandString: "ls /Users",
        id: 0,
        deviceId: process.env.FALCON_DEVICE_HOST_ID as string,
        persist: true,
        sessionId: startSession.resources[0].sessionId,
    });
    const queuedSessionInfo1 = await client.realTimeResponse.rTRListQueuedSessions({ ids: [startSession.resources[0].sessionId] });
    console.log("Queued Session Info: ", queuedSessionInfo1);
    console.log("LS Command: ", runLsCmd);
    await delay(4000);
    const queuedSessionInfo2 = await client.realTimeResponse.rTRListQueuedSessions({ ids: [startSession.resources[0].sessionId] });
    console.log("Queued Session Info: ", queuedSessionInfo2);

    const lsCmdResults = await client.realTimeResponseAdmin.rTRCheckAdminCommandStatus(runLsCmd.resources[0].cloudRequestId, 0);
    console.log("Command Results: ", lsCmdResults);

    const getFileCmd = await client.realTimeResponseAdmin.rTRExecuteAdminCommand({
        baseCommand: "get",
        commandString: "get '/System/Library/Fonts/NewYork.ttf'",
        id: 1,
        deviceId: process.env.FALCON_DEVICE_HOST_ID as string,
        persist: true,
        sessionId: startSession.resources[0].sessionId,
    });
    console.log("LS Command: ", runLsCmd);

    const getFileResults = await client.realTimeResponseAdmin.rTRCheckAdminCommandStatus(getFileCmd.resources[0].cloudRequestId, 0);
    console.log("Command Results: ", getFileResults);

    const queuedSessionInfo = await client.realTimeResponse.rTRListQueuedSessions({ ids: [startSession.resources[0].sessionId] });
    console.log("Queued Session Info: ", queuedSessionInfo);
} catch (err) {
    console.log("Batch Session Command Error", err);
    console.log(await FalconErrorExplain(err));
}
