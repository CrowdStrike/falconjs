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
 * @interface DomainUserRole
 */
export interface DomainUserRole {
    /**
     *
     * @type {string}
     * @memberof DomainUserRole
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserRole
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserRole
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserRole
     */
    id: string;
}

/**
 * Check if a given object implements the DomainUserRole interface.
 */
export function instanceOfDomainUserRole(value: object): value is DomainUserRole {
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("displayName" in value) || value["displayName"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    return true;
}

export function DomainUserRoleFromJSON(json: any): DomainUserRole {
    return DomainUserRoleFromJSONTyped(json, false);
}

export function DomainUserRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainUserRole {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"] == null ? undefined : json["cid"],
        description: json["description"],
        displayName: json["display_name"],
        id: json["id"],
    };
}

export function DomainUserRoleToJSON(value?: DomainUserRole | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        description: value["description"],
        display_name: value["displayName"],
        id: value["id"],
    };
}
