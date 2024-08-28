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
import type { ChangesDACLEntity } from "./ChangesDACLEntity";
import { ChangesDACLEntityFromJSON, ChangesDACLEntityFromJSONTyped, ChangesDACLEntityToJSON } from "./ChangesDACLEntity";

/**
 *
 * @export
 * @interface ChangesDACL
 */
export interface ChangesDACL {
    /**
     * Possible values: 0 - MODIFIED, 1 - NULL, 2 - EMPTY, 3 - SAME
     * @type {number}
     * @memberof ChangesDACL
     */
    changesType?: number;
    /**
     *
     * @type {Array<ChangesDACLEntity>}
     * @memberof ChangesDACL
     */
    entityList?: Array<ChangesDACLEntity>;
}

/**
 * Check if a given object implements the ChangesDACL interface.
 */
export function instanceOfChangesDACL(value: object): value is ChangesDACL {
    return true;
}

export function ChangesDACLFromJSON(json: any): ChangesDACL {
    return ChangesDACLFromJSONTyped(json, false);
}

export function ChangesDACLFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesDACL {
    if (json == null) {
        return json;
    }
    return {
        changesType: json["changes_type"] == null ? undefined : json["changes_type"],
        entityList: json["entity_list"] == null ? undefined : (json["entity_list"] as Array<any>).map(ChangesDACLEntityFromJSON),
    };
}

export function ChangesDACLToJSON(value?: ChangesDACL | null): any {
    if (value == null) {
        return value;
    }
    return {
        changes_type: value["changesType"],
        entity_list: value["entityList"] == null ? undefined : (value["entityList"] as Array<any>).map(ChangesDACLEntityToJSON),
    };
}
