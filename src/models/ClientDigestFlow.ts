/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and examples, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation).     To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`.    Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ClientDigestFlow
 */
export interface ClientDigestFlow {
    /**
     *
     * @type {number}
     * @memberof ClientDigestFlow
     */
    ingestTimeKnownGood: number;
    /**
     *
     * @type {number}
     * @memberof ClientDigestFlow
     */
    maxIngestLatency: number;
    /**
     *
     * @type {number}
     * @memberof ClientDigestFlow
     */
    minIngestTimeIncluded: number;
}

/**
 * Check if a given object implements the ClientDigestFlow interface.
 */
export function instanceOfClientDigestFlow(value: object): value is ClientDigestFlow {
    if (!("ingestTimeKnownGood" in value) || value["ingestTimeKnownGood"] === undefined) return false;
    if (!("maxIngestLatency" in value) || value["maxIngestLatency"] === undefined) return false;
    if (!("minIngestTimeIncluded" in value) || value["minIngestTimeIncluded"] === undefined) return false;
    return true;
}

export function ClientDigestFlowFromJSON(json: any): ClientDigestFlow {
    return ClientDigestFlowFromJSONTyped(json, false);
}

export function ClientDigestFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientDigestFlow {
    if (json == null) {
        return json;
    }
    return {
        ingestTimeKnownGood: json["ingestTimeKnownGood"],
        maxIngestLatency: json["maxIngestLatency"],
        minIngestTimeIncluded: json["minIngestTimeIncluded"],
    };
}

export function ClientDigestFlowToJSON(value?: ClientDigestFlow | null): any {
    if (value == null) {
        return value;
    }
    return {
        ingestTimeKnownGood: value["ingestTimeKnownGood"],
        maxIngestLatency: value["maxIngestLatency"],
        minIngestTimeIncluded: value["minIngestTimeIncluded"],
    };
}
