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
import type { DomainFieldValue } from "./DomainFieldValue";
import { DomainFieldValueFromJSON, DomainFieldValueFromJSONTyped, DomainFieldValueToJSON } from "./DomainFieldValue";

/**
 *
 * @export
 * @interface ApiRuleUpdateV2
 */
export interface ApiRuleUpdateV2 {
    /**
     *
     * @type {string}
     * @memberof ApiRuleUpdateV2
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof ApiRuleUpdateV2
     */
    dispositionId: number;
    /**
     *
     * @type {boolean}
     * @memberof ApiRuleUpdateV2
     */
    enabled: boolean;
    /**
     *
     * @type {Array<DomainFieldValue>}
     * @memberof ApiRuleUpdateV2
     */
    fieldValues: Array<DomainFieldValue>;
    /**
     *
     * @type {string}
     * @memberof ApiRuleUpdateV2
     */
    instanceId: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleUpdateV2
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleUpdateV2
     */
    patternSeverity: string;
    /**
     *
     * @type {number}
     * @memberof ApiRuleUpdateV2
     */
    rulegroupVersion: number;
}

/**
 * Check if a given object implements the ApiRuleUpdateV2 interface.
 */
export function instanceOfApiRuleUpdateV2(value: object): value is ApiRuleUpdateV2 {
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("dispositionId" in value) || value["dispositionId"] === undefined) return false;
    if (!("enabled" in value) || value["enabled"] === undefined) return false;
    if (!("fieldValues" in value) || value["fieldValues"] === undefined) return false;
    if (!("instanceId" in value) || value["instanceId"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("patternSeverity" in value) || value["patternSeverity"] === undefined) return false;
    if (!("rulegroupVersion" in value) || value["rulegroupVersion"] === undefined) return false;
    return true;
}

export function ApiRuleUpdateV2FromJSON(json: any): ApiRuleUpdateV2 {
    return ApiRuleUpdateV2FromJSONTyped(json, false);
}

export function ApiRuleUpdateV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiRuleUpdateV2 {
    if (json == null) {
        return json;
    }
    return {
        description: json["description"],
        dispositionId: json["disposition_id"],
        enabled: json["enabled"],
        fieldValues: (json["field_values"] as Array<any>).map(DomainFieldValueFromJSON),
        instanceId: json["instance_id"],
        name: json["name"],
        patternSeverity: json["pattern_severity"],
        rulegroupVersion: json["rulegroup_version"],
    };
}

export function ApiRuleUpdateV2ToJSON(value?: ApiRuleUpdateV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        description: value["description"],
        disposition_id: value["dispositionId"],
        enabled: value["enabled"],
        field_values: (value["fieldValues"] as Array<any>).map(DomainFieldValueToJSON),
        instance_id: value["instanceId"],
        name: value["name"],
        pattern_severity: value["patternSeverity"],
        rulegroup_version: value["rulegroupVersion"],
    };
}