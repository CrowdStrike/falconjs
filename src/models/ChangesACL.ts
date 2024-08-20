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
import type { ChangesACLChange } from "./ChangesACLChange";
import { ChangesACLChangeFromJSON, ChangesACLChangeFromJSONTyped, ChangesACLChangeToJSON } from "./ChangesACLChange";

/**
 *
 * @export
 * @interface ChangesACL
 */
export interface ChangesACL {
    /**
     *
     * @type {Array<ChangesACLChange>}
     * @memberof ChangesACL
     */
    aclPermissionChange?: Array<ChangesACLChange>;
    /**
     *
     * @type {string}
     * @memberof ChangesACL
     */
    entity?: string;
    /**
     *
     * @type {string}
     * @memberof ChangesACL
     */
    entityId?: string;
    /**
     *
     * @type {string}
     * @memberof ChangesACL
     */
    entityName?: string;
}

/**
 * Check if a given object implements the ChangesACL interface.
 */
export function instanceOfChangesACL(value: object): value is ChangesACL {
    return true;
}

export function ChangesACLFromJSON(json: any): ChangesACL {
    return ChangesACLFromJSONTyped(json, false);
}

export function ChangesACLFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesACL {
    if (json == null) {
        return json;
    }
    return {
        aclPermissionChange: json["acl_permission_change"] == null ? undefined : (json["acl_permission_change"] as Array<any>).map(ChangesACLChangeFromJSON),
        entity: json["entity"] == null ? undefined : json["entity"],
        entityId: json["entity_id"] == null ? undefined : json["entity_id"],
        entityName: json["entity_name"] == null ? undefined : json["entity_name"],
    };
}

export function ChangesACLToJSON(value?: ChangesACL | null): any {
    if (value == null) {
        return value;
    }
    return {
        acl_permission_change: value["aclPermissionChange"] == null ? undefined : (value["aclPermissionChange"] as Array<any>).map(ChangesACLChangeToJSON),
        entity: value["entity"],
        entity_id: value["entityId"],
        entity_name: value["entityName"],
    };
}