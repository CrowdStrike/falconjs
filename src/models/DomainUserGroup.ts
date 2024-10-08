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
 * @interface DomainUserGroup
 */
export interface DomainUserGroup {
    /**
     *
     * @type {string}
     * @memberof DomainUserGroup
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserGroup
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserGroup
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserGroup
     */
    userGroupId?: string;
}

/**
 * Check if a given object implements the DomainUserGroup interface.
 */
export function instanceOfDomainUserGroup(value: object): value is DomainUserGroup {
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    return true;
}

export function DomainUserGroupFromJSON(json: any): DomainUserGroup {
    return DomainUserGroupFromJSONTyped(json, false);
}

export function DomainUserGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainUserGroup {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"] == null ? undefined : json["cid"],
        description: json["description"],
        name: json["name"],
        userGroupId: json["user_group_id"] == null ? undefined : json["user_group_id"],
    };
}

export function DomainUserGroupToJSON(value?: DomainUserGroup | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        description: value["description"],
        name: value["name"],
        user_group_id: value["userGroupId"],
    };
}
