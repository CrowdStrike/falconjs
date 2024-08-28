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
 * @interface DomainIOMCounts
 */
export interface DomainIOMCounts {
    /**
     *
     * @type {number}
     * @memberof DomainIOMCounts
     */
    critical: number;
    /**
     *
     * @type {number}
     * @memberof DomainIOMCounts
     */
    high: number;
    /**
     *
     * @type {number}
     * @memberof DomainIOMCounts
     */
    informational?: number;
    /**
     *
     * @type {number}
     * @memberof DomainIOMCounts
     */
    medium?: number;
}

/**
 * Check if a given object implements the DomainIOMCounts interface.
 */
export function instanceOfDomainIOMCounts(value: object): value is DomainIOMCounts {
    if (!("critical" in value) || value["critical"] === undefined) return false;
    if (!("high" in value) || value["high"] === undefined) return false;
    return true;
}

export function DomainIOMCountsFromJSON(json: any): DomainIOMCounts {
    return DomainIOMCountsFromJSONTyped(json, false);
}

export function DomainIOMCountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainIOMCounts {
    if (json == null) {
        return json;
    }
    return {
        critical: json["critical"],
        high: json["high"],
        informational: json["informational"] == null ? undefined : json["informational"],
        medium: json["medium"] == null ? undefined : json["medium"],
    };
}

export function DomainIOMCountsToJSON(value?: DomainIOMCounts | null): any {
    if (value == null) {
        return value;
    }
    return {
        critical: value["critical"],
        high: value["high"],
        informational: value["informational"],
        medium: value["medium"],
    };
}
