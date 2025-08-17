#!/usr/bin/node

import fetch from "cross-fetch";
import { FalconClient, MsaQueryResponse } from "../../src";

function falconClientFromEnv() {
    if (!process.env.FALCON_CLIENT_ID) {
        throw new Error("Missing FALCON_CLIENT_ID environment variable. Please provide your OAuth2 API Client ID for authentication with CrowdStrike Falcon platform. Establishing and retrieving OAuth2 API credentials can be performed at https://falcon.crowdstrike.com/support/api-clients-and-keys.");
    }
    if (!process.env.FALCON_CLIENT_SECRET) {
        throw new Error("Missing FALCON_CLIENT_SECRET environment variable. Please provide your OAuth2 API Client Secret for authentication with CrowdStrike Falcon platform. Establishing and retrieving OAuth2 API credentials can be performed at https://falcon.crowdstrike.com/support/api-clients-and-keys.");
    }
    const cloud = process.env.FALCON_CLOUD;
    if (!cloud) {
        throw new Error("Missing FALCON_CLOUD environment variable.")
    }
    if (cloud != "us-1" && cloud != "us-2" && cloud != "eu-1" && cloud != "us-gov-1") {
        throw new Error("Invalid FALCON_CLOUD environment variable: " + cloud);
    }
    return new FalconClient({
        fetchApi: fetch,
        cloud: cloud,
        clientId: process.env.FALCON_CLIENT_ID,
        clientSecret: process.env.FALCON_CLIENT_SECRET,
    });
}

const client = falconClientFromEnv();
const response = client.customIoa.queryRuleGroupsMixin0()
      .catch((err) => {
          console.log("Could not fetch custom IOAs rule group ids: ", err);
      })
      .then(((response) => {
          if (!response) {
              throw "Got an empty response from custom IOAs rule group query";
          }
          return response.resources;
      }))
      .then((resourceIds) => {
          if (resourceIds) {
              const response2 = client.customIoa.getRuleGroupsMixin0(resourceIds)
                    .catch((err) => {
                        console.log("Could not fetch custom IOAs rule groups: ", err);
                    })
                    .then((response => {
                        console.dir(response, { depth: null })
                    }))
          }
      })

console.log(response);
