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
import type { DomainAPIFindingRuleV1 } from "./DomainAPIFindingRuleV1";
import { DomainAPIFindingRuleV1FromJSON, DomainAPIFindingRuleV1FromJSONTyped, DomainAPIFindingRuleV1ToJSON } from "./DomainAPIFindingRuleV1";

/**
 *
 * @export
 * @interface DomainAPIFindingWithRuleV1
 */
export interface DomainAPIFindingWithRuleV1 {
    /**
     * Example values: NOT_AVAILABLE, AVAILABLE, DISABLE_RULE, UNSUPPORTED_RULE, OVERRIDE_STATUS
     * @type {string}
     * @memberof DomainAPIFindingWithRuleV1
     */
    evaluationLogicType?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIFindingWithRuleV1
     */
    evaluationReason?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIFindingWithRuleV1
     */
    hostId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainAPIFindingWithRuleV1
     */
    policyHostGroups?: Array<string>;
    /**
     *
     * @type {DomainAPIFindingRuleV1}
     * @memberof DomainAPIFindingWithRuleV1
     */
    rule?: DomainAPIFindingRuleV1;
    /**
     *
     * @type {string}
     * @memberof DomainAPIFindingWithRuleV1
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIFindingWithRuleV1
     */
    statusSinceTimestamp?: string;
}

/**
 * Check if a given object implements the DomainAPIFindingWithRuleV1 interface.
 */
export function instanceOfDomainAPIFindingWithRuleV1(value: object): value is DomainAPIFindingWithRuleV1 {
    return true;
}

export function DomainAPIFindingWithRuleV1FromJSON(json: any): DomainAPIFindingWithRuleV1 {
    return DomainAPIFindingWithRuleV1FromJSONTyped(json, false);
}

export function DomainAPIFindingWithRuleV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIFindingWithRuleV1 {
    if (json == null) {
        return json;
    }
    return {
        evaluationLogicType: json["evaluation_logic_type"] == null ? undefined : json["evaluation_logic_type"],
        evaluationReason: json["evaluation_reason"] == null ? undefined : json["evaluation_reason"],
        hostId: json["host_id"] == null ? undefined : json["host_id"],
        policyHostGroups: json["policy_host_groups"] == null ? undefined : json["policy_host_groups"],
        rule: json["rule"] == null ? undefined : DomainAPIFindingRuleV1FromJSON(json["rule"]),
        status: json["status"] == null ? undefined : json["status"],
        statusSinceTimestamp: json["status_since_timestamp"] == null ? undefined : json["status_since_timestamp"],
    };
}

export function DomainAPIFindingWithRuleV1ToJSON(value?: DomainAPIFindingWithRuleV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        evaluation_logic_type: value["evaluationLogicType"],
        evaluation_reason: value["evaluationReason"],
        host_id: value["hostId"],
        policy_host_groups: value["policyHostGroups"],
        rule: DomainAPIFindingRuleV1ToJSON(value["rule"]),
        status: value["status"],
        status_since_timestamp: value["statusSinceTimestamp"],
    };
}
