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
 * @interface ApiRuleV1
 */
export interface ApiRuleV1 {
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    actionLabel: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    comment: string;
    /**
     *
     * @type {Date}
     * @memberof ApiRuleV1
     */
    committedOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    createdBy: string;
    /**
     *
     * @type {Date}
     * @memberof ApiRuleV1
     */
    createdOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    customerId: string;
    /**
     *
     * @type {boolean}
     * @memberof ApiRuleV1
     */
    deleted: boolean;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    description: string;
    /**
     *
     * @type {number}
     * @memberof ApiRuleV1
     */
    dispositionId: number;
    /**
     *
     * @type {boolean}
     * @memberof ApiRuleV1
     */
    enabled: boolean;
    /**
     *
     * @type {Array<DomainFieldValue>}
     * @memberof ApiRuleV1
     */
    fieldValues: Array<DomainFieldValue>;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    instanceId: string;
    /**
     *
     * @type {number}
     * @memberof ApiRuleV1
     */
    instanceVersion: number;
    /**
     *
     * @type {number}
     * @memberof ApiRuleV1
     */
    magicCookie: number;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    modifiedBy: string;
    /**
     *
     * @type {Date}
     * @memberof ApiRuleV1
     */
    modifiedOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    patternId: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    patternSeverity: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    rulegroupId: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    ruletypeId: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleV1
     */
    ruletypeName: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiRuleV1
     */
    versionIds: Array<string>;
}

/**
 * Check if a given object implements the ApiRuleV1 interface.
 */
export function instanceOfApiRuleV1(value: object): value is ApiRuleV1 {
    if (!("actionLabel" in value) || value["actionLabel"] === undefined) return false;
    if (!("comment" in value) || value["comment"] === undefined) return false;
    if (!("committedOn" in value) || value["committedOn"] === undefined) return false;
    if (!("createdBy" in value) || value["createdBy"] === undefined) return false;
    if (!("createdOn" in value) || value["createdOn"] === undefined) return false;
    if (!("customerId" in value) || value["customerId"] === undefined) return false;
    if (!("deleted" in value) || value["deleted"] === undefined) return false;
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("dispositionId" in value) || value["dispositionId"] === undefined) return false;
    if (!("enabled" in value) || value["enabled"] === undefined) return false;
    if (!("fieldValues" in value) || value["fieldValues"] === undefined) return false;
    if (!("instanceId" in value) || value["instanceId"] === undefined) return false;
    if (!("instanceVersion" in value) || value["instanceVersion"] === undefined) return false;
    if (!("magicCookie" in value) || value["magicCookie"] === undefined) return false;
    if (!("modifiedBy" in value) || value["modifiedBy"] === undefined) return false;
    if (!("modifiedOn" in value) || value["modifiedOn"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("patternId" in value) || value["patternId"] === undefined) return false;
    if (!("patternSeverity" in value) || value["patternSeverity"] === undefined) return false;
    if (!("rulegroupId" in value) || value["rulegroupId"] === undefined) return false;
    if (!("ruletypeId" in value) || value["ruletypeId"] === undefined) return false;
    if (!("ruletypeName" in value) || value["ruletypeName"] === undefined) return false;
    if (!("versionIds" in value) || value["versionIds"] === undefined) return false;
    return true;
}

export function ApiRuleV1FromJSON(json: any): ApiRuleV1 {
    return ApiRuleV1FromJSONTyped(json, false);
}

export function ApiRuleV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiRuleV1 {
    if (json == null) {
        return json;
    }
    return {
        actionLabel: json["action_label"],
        comment: json["comment"],
        committedOn: new Date(json["committed_on"]),
        createdBy: json["created_by"],
        createdOn: new Date(json["created_on"]),
        customerId: json["customer_id"],
        deleted: json["deleted"],
        description: json["description"],
        dispositionId: json["disposition_id"],
        enabled: json["enabled"],
        fieldValues: (json["field_values"] as Array<any>).map(DomainFieldValueFromJSON),
        instanceId: json["instance_id"],
        instanceVersion: json["instance_version"],
        magicCookie: json["magic_cookie"],
        modifiedBy: json["modified_by"],
        modifiedOn: new Date(json["modified_on"]),
        name: json["name"],
        patternId: json["pattern_id"],
        patternSeverity: json["pattern_severity"],
        rulegroupId: json["rulegroup_id"],
        ruletypeId: json["ruletype_id"],
        ruletypeName: json["ruletype_name"],
        versionIds: json["version_ids"],
    };
}

export function ApiRuleV1ToJSON(value?: ApiRuleV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        action_label: value["actionLabel"],
        comment: value["comment"],
        committed_on: value["committedOn"].toISOString(),
        created_by: value["createdBy"],
        created_on: value["createdOn"].toISOString(),
        customer_id: value["customerId"],
        deleted: value["deleted"],
        description: value["description"],
        disposition_id: value["dispositionId"],
        enabled: value["enabled"],
        field_values: (value["fieldValues"] as Array<any>).map(DomainFieldValueToJSON),
        instance_id: value["instanceId"],
        instance_version: value["instanceVersion"],
        magic_cookie: value["magicCookie"],
        modified_by: value["modifiedBy"],
        modified_on: value["modifiedOn"].toISOString(),
        name: value["name"],
        pattern_id: value["patternId"],
        pattern_severity: value["patternSeverity"],
        rulegroup_id: value["rulegroupId"],
        ruletype_id: value["ruletypeId"],
        ruletype_name: value["ruletypeName"],
        version_ids: value["versionIds"],
    };
}
