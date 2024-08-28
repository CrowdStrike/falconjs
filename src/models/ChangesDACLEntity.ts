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
import type { ChangesAttribute } from "./ChangesAttribute";
import { ChangesAttributeFromJSON, ChangesAttributeFromJSONTyped, ChangesAttributeToJSON } from "./ChangesAttribute";

/**
 *
 * @export
 * @interface ChangesDACLEntity
 */
export interface ChangesDACLEntity {
    /**
     *
     * @type {number}
     * @memberof ChangesDACLEntity
     */
    aclChangeType?: number;
    /**
     *
     * @type {Array<ChangesAttribute>}
     * @memberof ChangesDACLEntity
     */
    aclPermissionChange: Array<ChangesAttribute>;
    /**
     *
     * @type {string}
     * @memberof ChangesDACLEntity
     */
    aclPrincipal: string;
    /**
     *
     * @type {string}
     * @memberof ChangesDACLEntity
     */
    aclPrincipalId: string;
    /**
     * Possible values: 0 - ALLOW, 1 - DENY
     * @type {number}
     * @memberof ChangesDACLEntity
     */
    aclType: number;
}

/**
 * Check if a given object implements the ChangesDACLEntity interface.
 */
export function instanceOfChangesDACLEntity(value: object): value is ChangesDACLEntity {
    if (!("aclPermissionChange" in value) || value["aclPermissionChange"] === undefined) return false;
    if (!("aclPrincipal" in value) || value["aclPrincipal"] === undefined) return false;
    if (!("aclPrincipalId" in value) || value["aclPrincipalId"] === undefined) return false;
    if (!("aclType" in value) || value["aclType"] === undefined) return false;
    return true;
}

export function ChangesDACLEntityFromJSON(json: any): ChangesDACLEntity {
    return ChangesDACLEntityFromJSONTyped(json, false);
}

export function ChangesDACLEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesDACLEntity {
    if (json == null) {
        return json;
    }
    return {
        aclChangeType: json["acl_change_type"] == null ? undefined : json["acl_change_type"],
        aclPermissionChange: (json["acl_permission_change"] as Array<any>).map(ChangesAttributeFromJSON),
        aclPrincipal: json["acl_principal"],
        aclPrincipalId: json["acl_principal_id"],
        aclType: json["acl_type"],
    };
}

export function ChangesDACLEntityToJSON(value?: ChangesDACLEntity | null): any {
    if (value == null) {
        return value;
    }
    return {
        acl_change_type: value["aclChangeType"],
        acl_permission_change: (value["aclPermissionChange"] as Array<any>).map(ChangesAttributeToJSON),
        acl_principal: value["aclPrincipal"],
        acl_principal_id: value["aclPrincipalId"],
        acl_type: value["aclType"],
    };
}
