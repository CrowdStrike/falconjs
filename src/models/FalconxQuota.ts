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
 * @interface FalconxQuota
 */
export interface FalconxQuota {
    /**
     *
     * @type {number}
     * @memberof FalconxQuota
     */
    inProgress: number;
    /**
     *
     * @type {number}
     * @memberof FalconxQuota
     */
    total: number;
    /**
     *
     * @type {number}
     * @memberof FalconxQuota
     */
    used: number;
}

/**
 * Check if a given object implements the FalconxQuota interface.
 */
export function instanceOfFalconxQuota(value: object): value is FalconxQuota {
    if (!("inProgress" in value) || value["inProgress"] === undefined) return false;
    if (!("total" in value) || value["total"] === undefined) return false;
    if (!("used" in value) || value["used"] === undefined) return false;
    return true;
}

export function FalconxQuotaFromJSON(json: any): FalconxQuota {
    return FalconxQuotaFromJSONTyped(json, false);
}

export function FalconxQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxQuota {
    if (json == null) {
        return json;
    }
    return {
        inProgress: json["in_progress"],
        total: json["total"],
        used: json["used"],
    };
}

export function FalconxQuotaToJSON(value?: FalconxQuota | null): any {
    if (value == null) {
        return value;
    }
    return {
        in_progress: value["inProgress"],
        total: value["total"],
        used: value["used"],
    };
}
