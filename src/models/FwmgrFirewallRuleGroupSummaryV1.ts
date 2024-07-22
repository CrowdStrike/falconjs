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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FwmgrFirewallRuleGroupSummaryV1
 */
export interface FwmgrFirewallRuleGroupSummaryV1 {
    /**
     * 
     * @type {string}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    createdOn: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    modifiedBy: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    modifiedOn: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    platform: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FwmgrFirewallRuleGroupSummaryV1
     */
    policyIds: Array<string>;
}

/**
 * Check if a given object implements the FwmgrFirewallRuleGroupSummaryV1 interface.
 */
export function instanceOfFwmgrFirewallRuleGroupSummaryV1(value: object): value is FwmgrFirewallRuleGroupSummaryV1 {
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('createdOn' in value) || value['createdOn'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('modifiedBy' in value) || value['modifiedBy'] === undefined) return false;
    if (!('modifiedOn' in value) || value['modifiedOn'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('platform' in value) || value['platform'] === undefined) return false;
    if (!('policyIds' in value) || value['policyIds'] === undefined) return false;
    return true;
}

export function FwmgrFirewallRuleGroupSummaryV1FromJSON(json: any): FwmgrFirewallRuleGroupSummaryV1 {
    return FwmgrFirewallRuleGroupSummaryV1FromJSONTyped(json, false);
}

export function FwmgrFirewallRuleGroupSummaryV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrFirewallRuleGroupSummaryV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'createdBy': json['created_by'],
        'createdOn': json['created_on'],
        'description': json['description'],
        'enabled': json['enabled'],
        'id': json['id'],
        'modifiedBy': json['modified_by'],
        'modifiedOn': json['modified_on'],
        'name': json['name'],
        'platform': json['platform'],
        'policyIds': json['policy_ids'],
    };
}

export function FwmgrFirewallRuleGroupSummaryV1ToJSON(value?: FwmgrFirewallRuleGroupSummaryV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_by': value['createdBy'],
        'created_on': value['createdOn'],
        'description': value['description'],
        'enabled': value['enabled'],
        'id': value['id'],
        'modified_by': value['modifiedBy'],
        'modified_on': value['modifiedOn'],
        'name': value['name'],
        'platform': value['platform'],
        'policy_ids': value['policyIds'],
    };
}

