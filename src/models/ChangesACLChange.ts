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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ChangesACLChange
 */
export interface ChangesACLChange {
    /**
     *
     * @type {string}
     * @memberof ChangesACLChange
     */
    operation?: string;
    /**
     *
     * @type {string}
     * @memberof ChangesACLChange
     */
    permissions?: string;
}

/**
 * Check if a given object implements the ChangesACLChange interface.
 */
export function instanceOfChangesACLChange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangesACLChangeFromJSON(json: any): ChangesACLChange {
    return ChangesACLChangeFromJSONTyped(json, false);
}

export function ChangesACLChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesACLChange {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        operation: !exists(json, "operation") ? undefined : json["operation"],
        permissions: !exists(json, "permissions") ? undefined : json["permissions"],
    };
}

export function ChangesACLChangeToJSON(value?: ChangesACLChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        operation: value.operation,
        permissions: value.permissions,
    };
}
