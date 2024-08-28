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
 * @interface ApiTokenDetailsResourceV1
 */
export interface ApiTokenDetailsResourceV1 {
    /**
     *
     * @type {Date}
     * @memberof ApiTokenDetailsResourceV1
     */
    createdTimestamp: Date;
    /**
     *
     * @type {Date}
     * @memberof ApiTokenDetailsResourceV1
     */
    expiresTimestamp: Date;
    /**
     *
     * @type {string}
     * @memberof ApiTokenDetailsResourceV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ApiTokenDetailsResourceV1
     */
    label: string;
    /**
     *
     * @type {Date}
     * @memberof ApiTokenDetailsResourceV1
     */
    lastUsedTimestamp: Date;
    /**
     *
     * @type {Date}
     * @memberof ApiTokenDetailsResourceV1
     */
    revokedTimestamp: Date;
    /**
     *
     * @type {string}
     * @memberof ApiTokenDetailsResourceV1
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof ApiTokenDetailsResourceV1
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof ApiTokenDetailsResourceV1
     */
    value: string;
}

/**
 * Check if a given object implements the ApiTokenDetailsResourceV1 interface.
 */
export function instanceOfApiTokenDetailsResourceV1(value: object): value is ApiTokenDetailsResourceV1 {
    if (!("createdTimestamp" in value) || value["createdTimestamp"] === undefined) return false;
    if (!("expiresTimestamp" in value) || value["expiresTimestamp"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("label" in value) || value["label"] === undefined) return false;
    if (!("lastUsedTimestamp" in value) || value["lastUsedTimestamp"] === undefined) return false;
    if (!("revokedTimestamp" in value) || value["revokedTimestamp"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    if (!("type" in value) || value["type"] === undefined) return false;
    if (!("value" in value) || value["value"] === undefined) return false;
    return true;
}

export function ApiTokenDetailsResourceV1FromJSON(json: any): ApiTokenDetailsResourceV1 {
    return ApiTokenDetailsResourceV1FromJSONTyped(json, false);
}

export function ApiTokenDetailsResourceV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiTokenDetailsResourceV1 {
    if (json == null) {
        return json;
    }
    return {
        createdTimestamp: new Date(json["created_timestamp"]),
        expiresTimestamp: new Date(json["expires_timestamp"]),
        id: json["id"],
        label: json["label"],
        lastUsedTimestamp: new Date(json["last_used_timestamp"]),
        revokedTimestamp: new Date(json["revoked_timestamp"]),
        status: json["status"],
        type: json["type"],
        value: json["value"],
    };
}

export function ApiTokenDetailsResourceV1ToJSON(value?: ApiTokenDetailsResourceV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        created_timestamp: value["createdTimestamp"].toISOString(),
        expires_timestamp: value["expiresTimestamp"].toISOString(),
        id: value["id"],
        label: value["label"],
        last_used_timestamp: value["lastUsedTimestamp"].toISOString(),
        revoked_timestamp: value["revokedTimestamp"].toISOString(),
        status: value["status"],
        type: value["type"],
        value: value["value"],
    };
}
