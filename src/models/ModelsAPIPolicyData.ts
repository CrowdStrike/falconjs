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
import type { ModelsAPIPolicyGroup } from "./ModelsAPIPolicyGroup";
import { ModelsAPIPolicyGroupFromJSON, ModelsAPIPolicyGroupFromJSONTyped, ModelsAPIPolicyGroupToJSON } from "./ModelsAPIPolicyGroup";
import type { ModelsAPIPolicyRule } from "./ModelsAPIPolicyRule";
import { ModelsAPIPolicyRuleFromJSON, ModelsAPIPolicyRuleFromJSONTyped, ModelsAPIPolicyRuleToJSON } from "./ModelsAPIPolicyRule";

/**
 *
 * @export
 * @interface ModelsAPIPolicyData
 */
export interface ModelsAPIPolicyData {
    /**
     *
     * @type {Array<ModelsAPIPolicyGroup>}
     * @memberof ModelsAPIPolicyData
     */
    groups: Array<ModelsAPIPolicyGroup>;
    /**
     *
     * @type {Array<ModelsAPIPolicyRule>}
     * @memberof ModelsAPIPolicyData
     */
    rules: Array<ModelsAPIPolicyRule>;
}

/**
 * Check if a given object implements the ModelsAPIPolicyData interface.
 */
export function instanceOfModelsAPIPolicyData(value: object): value is ModelsAPIPolicyData {
    if (!("groups" in value) || value["groups"] === undefined) return false;
    if (!("rules" in value) || value["rules"] === undefined) return false;
    return true;
}

export function ModelsAPIPolicyDataFromJSON(json: any): ModelsAPIPolicyData {
    return ModelsAPIPolicyDataFromJSONTyped(json, false);
}

export function ModelsAPIPolicyDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIPolicyData {
    if (json == null) {
        return json;
    }
    return {
        groups: (json["groups"] as Array<any>).map(ModelsAPIPolicyGroupFromJSON),
        rules: (json["rules"] as Array<any>).map(ModelsAPIPolicyRuleFromJSON),
    };
}

export function ModelsAPIPolicyDataToJSON(value?: ModelsAPIPolicyData | null): any {
    if (value == null) {
        return value;
    }
    return {
        groups: (value["groups"] as Array<any>).map(ModelsAPIPolicyGroupToJSON),
        rules: (value["rules"] as Array<any>).map(ModelsAPIPolicyRuleToJSON),
    };
}
