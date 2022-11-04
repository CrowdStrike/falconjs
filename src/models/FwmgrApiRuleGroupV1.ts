/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
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
 * @interface FwmgrApiRuleGroupV1
 */
export interface FwmgrApiRuleGroupV1 {
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    createdBy: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    createdOn: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    customerId: string;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrApiRuleGroupV1
     */
    deleted: boolean;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    description: string;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrApiRuleGroupV1
     */
    enabled: boolean;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    modifiedBy: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    modifiedOn: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    platform: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FwmgrApiRuleGroupV1
     */
    policyIds: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FwmgrApiRuleGroupV1
     */
    ruleIds: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupV1
     */
    tracking: string;
}

/**
 * Check if a given object implements the FwmgrApiRuleGroupV1 interface.
 */
export function instanceOfFwmgrApiRuleGroupV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdOn" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "modifiedBy" in value;
    isInstance = isInstance && "modifiedOn" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "policyIds" in value;
    isInstance = isInstance && "ruleIds" in value;
    isInstance = isInstance && "tracking" in value;

    return isInstance;
}

export function FwmgrApiRuleGroupV1FromJSON(json: any): FwmgrApiRuleGroupV1 {
    return FwmgrApiRuleGroupV1FromJSONTyped(json, false);
}

export function FwmgrApiRuleGroupV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrApiRuleGroupV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdBy: json["created_by"],
        createdOn: json["created_on"],
        customerId: json["customer_id"],
        deleted: json["deleted"],
        description: json["description"],
        enabled: json["enabled"],
        id: json["id"],
        modifiedBy: json["modified_by"],
        modifiedOn: json["modified_on"],
        name: json["name"],
        platform: json["platform"],
        policyIds: json["policy_ids"],
        ruleIds: json["rule_ids"],
        tracking: json["tracking"],
    };
}

export function FwmgrApiRuleGroupV1ToJSON(value?: FwmgrApiRuleGroupV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        created_by: value.createdBy,
        created_on: value.createdOn,
        customer_id: value.customerId,
        deleted: value.deleted,
        description: value.description,
        enabled: value.enabled,
        id: value.id,
        modified_by: value.modifiedBy,
        modified_on: value.modifiedOn,
        name: value.name,
        platform: value.platform,
        policy_ids: value.policyIds,
        rule_ids: value.ruleIds,
        tracking: value.tracking,
    };
}
