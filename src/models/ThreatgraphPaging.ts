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
 * @interface ThreatgraphPaging
 */
export interface ThreatgraphPaging {
    /**
     *
     * @type {number}
     * @memberof ThreatgraphPaging
     */
    limit: number;
    /**
     *
     * @type {string}
     * @memberof ThreatgraphPaging
     */
    nextPage?: string;
    /**
     *
     * @type {string}
     * @memberof ThreatgraphPaging
     */
    offset?: string;
}

/**
 * Check if a given object implements the ThreatgraphPaging interface.
 */
export function instanceOfThreatgraphPaging(value: object): value is ThreatgraphPaging {
    if (!("limit" in value) || value["limit"] === undefined) return false;
    return true;
}

export function ThreatgraphPagingFromJSON(json: any): ThreatgraphPaging {
    return ThreatgraphPagingFromJSONTyped(json, false);
}

export function ThreatgraphPagingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreatgraphPaging {
    if (json == null) {
        return json;
    }
    return {
        limit: json["limit"],
        nextPage: json["next_page"] == null ? undefined : json["next_page"],
        offset: json["offset"] == null ? undefined : json["offset"],
    };
}

export function ThreatgraphPagingToJSON(value?: ThreatgraphPaging | null): any {
    if (value == null) {
        return value;
    }
    return {
        limit: value["limit"],
        next_page: value["nextPage"],
        offset: value["offset"],
    };
}
