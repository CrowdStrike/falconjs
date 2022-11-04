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
 * @interface FwmgrFirewallPolicyContainerV1
 */
export interface FwmgrFirewallPolicyContainerV1 {
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    createdBy?: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    createdOn?: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    defaultInbound: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    defaultOutbound: string;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    deleted?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    enforce: boolean;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    isDefaultPolicy?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    localLogging: boolean;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    modifiedBy?: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    modifiedOn?: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    platformId: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    policyId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    ruleGroupIds: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    testMode: boolean;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallPolicyContainerV1
     */
    tracking?: string;
}

/**
 * Check if a given object implements the FwmgrFirewallPolicyContainerV1 interface.
 */
export function instanceOfFwmgrFirewallPolicyContainerV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "defaultInbound" in value;
    isInstance = isInstance && "defaultOutbound" in value;
    isInstance = isInstance && "enforce" in value;
    isInstance = isInstance && "localLogging" in value;
    isInstance = isInstance && "platformId" in value;
    isInstance = isInstance && "policyId" in value;
    isInstance = isInstance && "ruleGroupIds" in value;
    isInstance = isInstance && "testMode" in value;

    return isInstance;
}

export function FwmgrFirewallPolicyContainerV1FromJSON(json: any): FwmgrFirewallPolicyContainerV1 {
    return FwmgrFirewallPolicyContainerV1FromJSONTyped(json, false);
}

export function FwmgrFirewallPolicyContainerV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrFirewallPolicyContainerV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdBy: !exists(json, "created_by") ? undefined : json["created_by"],
        createdOn: !exists(json, "created_on") ? undefined : json["created_on"],
        defaultInbound: json["default_inbound"],
        defaultOutbound: json["default_outbound"],
        deleted: !exists(json, "deleted") ? undefined : json["deleted"],
        enforce: json["enforce"],
        isDefaultPolicy: !exists(json, "is_default_policy") ? undefined : json["is_default_policy"],
        localLogging: json["local_logging"],
        modifiedBy: !exists(json, "modified_by") ? undefined : json["modified_by"],
        modifiedOn: !exists(json, "modified_on") ? undefined : json["modified_on"],
        platformId: json["platform_id"],
        policyId: json["policy_id"],
        ruleGroupIds: json["rule_group_ids"],
        testMode: json["test_mode"],
        tracking: !exists(json, "tracking") ? undefined : json["tracking"],
    };
}

export function FwmgrFirewallPolicyContainerV1ToJSON(value?: FwmgrFirewallPolicyContainerV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        created_by: value.createdBy,
        created_on: value.createdOn,
        default_inbound: value.defaultInbound,
        default_outbound: value.defaultOutbound,
        deleted: value.deleted,
        enforce: value.enforce,
        is_default_policy: value.isDefaultPolicy,
        local_logging: value.localLogging,
        modified_by: value.modifiedBy,
        modified_on: value.modifiedOn,
        platform_id: value.platformId,
        policy_id: value.policyId,
        rule_group_ids: value.ruleGroupIds,
        test_mode: value.testMode,
        tracking: value.tracking,
    };
}
