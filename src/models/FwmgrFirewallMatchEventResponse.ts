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
import type { FwmgrFirewallFlags } from "./FwmgrFirewallFlags";
import { FwmgrFirewallFlagsFromJSON, FwmgrFirewallFlagsFromJSONTyped, FwmgrFirewallFlagsToJSON } from "./FwmgrFirewallFlags";

/**
 *
 * @export
 * @interface FwmgrFirewallMatchEventResponse
 */
export interface FwmgrFirewallMatchEventResponse {
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    aid: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    commandLine: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    connectionDirection: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    domainNameList: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    eventType: string;
    /**
     *
     * @type {FwmgrFirewallFlags}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    flags: FwmgrFirewallFlags;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    hidden: boolean;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    hostName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    icmpCode: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    icmpType: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    imageFileName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ipv: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    localAddress: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    localPort: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    matchCount: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    matchCountSinceLastEvent: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    networkProfile: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    pid: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    platform: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    policyId: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    policyName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    protocol: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    remoteAddress: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    remotePort: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleAction: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleDescription: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleFamilyId: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleGroupName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleId: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    timestamp: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    treeId: string;
}

/**
 * Check if a given object implements the FwmgrFirewallMatchEventResponse interface.
 */
export function instanceOfFwmgrFirewallMatchEventResponse(value: object): value is FwmgrFirewallMatchEventResponse {
    if (!("aid" in value) || value["aid"] === undefined) return false;
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("commandLine" in value) || value["commandLine"] === undefined) return false;
    if (!("connectionDirection" in value) || value["connectionDirection"] === undefined) return false;
    if (!("domainNameList" in value) || value["domainNameList"] === undefined) return false;
    if (!("eventType" in value) || value["eventType"] === undefined) return false;
    if (!("flags" in value) || value["flags"] === undefined) return false;
    if (!("hidden" in value) || value["hidden"] === undefined) return false;
    if (!("hostName" in value) || value["hostName"] === undefined) return false;
    if (!("icmpCode" in value) || value["icmpCode"] === undefined) return false;
    if (!("icmpType" in value) || value["icmpType"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("imageFileName" in value) || value["imageFileName"] === undefined) return false;
    if (!("ipv" in value) || value["ipv"] === undefined) return false;
    if (!("localAddress" in value) || value["localAddress"] === undefined) return false;
    if (!("localPort" in value) || value["localPort"] === undefined) return false;
    if (!("matchCount" in value) || value["matchCount"] === undefined) return false;
    if (!("matchCountSinceLastEvent" in value) || value["matchCountSinceLastEvent"] === undefined) return false;
    if (!("networkProfile" in value) || value["networkProfile"] === undefined) return false;
    if (!("pid" in value) || value["pid"] === undefined) return false;
    if (!("platform" in value) || value["platform"] === undefined) return false;
    if (!("policyId" in value) || value["policyId"] === undefined) return false;
    if (!("policyName" in value) || value["policyName"] === undefined) return false;
    if (!("protocol" in value) || value["protocol"] === undefined) return false;
    if (!("remoteAddress" in value) || value["remoteAddress"] === undefined) return false;
    if (!("remotePort" in value) || value["remotePort"] === undefined) return false;
    if (!("ruleAction" in value) || value["ruleAction"] === undefined) return false;
    if (!("ruleDescription" in value) || value["ruleDescription"] === undefined) return false;
    if (!("ruleFamilyId" in value) || value["ruleFamilyId"] === undefined) return false;
    if (!("ruleGroupName" in value) || value["ruleGroupName"] === undefined) return false;
    if (!("ruleId" in value) || value["ruleId"] === undefined) return false;
    if (!("ruleName" in value) || value["ruleName"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    if (!("timestamp" in value) || value["timestamp"] === undefined) return false;
    if (!("treeId" in value) || value["treeId"] === undefined) return false;
    return true;
}

export function FwmgrFirewallMatchEventResponseFromJSON(json: any): FwmgrFirewallMatchEventResponse {
    return FwmgrFirewallMatchEventResponseFromJSONTyped(json, false);
}

export function FwmgrFirewallMatchEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrFirewallMatchEventResponse {
    if (json == null) {
        return json;
    }
    return {
        aid: json["aid"],
        cid: json["cid"],
        commandLine: json["command_line"],
        connectionDirection: json["connection_direction"],
        domainNameList: json["domain_name_list"],
        eventType: json["event_type"],
        flags: FwmgrFirewallFlagsFromJSON(json["flags"]),
        hidden: json["hidden"],
        hostName: json["host_name"],
        icmpCode: json["icmp_code"],
        icmpType: json["icmp_type"],
        id: json["id"],
        imageFileName: json["image_file_name"],
        ipv: json["ipv"],
        localAddress: json["local_address"],
        localPort: json["local_port"],
        matchCount: json["match_count"],
        matchCountSinceLastEvent: json["match_count_since_last_event"],
        networkProfile: json["network_profile"],
        pid: json["pid"],
        platform: json["platform"],
        policyId: json["policy_id"],
        policyName: json["policy_name"],
        protocol: json["protocol"],
        remoteAddress: json["remote_address"],
        remotePort: json["remote_port"],
        ruleAction: json["rule_action"],
        ruleDescription: json["rule_description"],
        ruleFamilyId: json["rule_family_id"],
        ruleGroupName: json["rule_group_name"],
        ruleId: json["rule_id"],
        ruleName: json["rule_name"],
        status: json["status"],
        timestamp: json["timestamp"],
        treeId: json["tree_id"],
    };
}

export function FwmgrFirewallMatchEventResponseToJSON(value?: FwmgrFirewallMatchEventResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        aid: value["aid"],
        cid: value["cid"],
        command_line: value["commandLine"],
        connection_direction: value["connectionDirection"],
        domain_name_list: value["domainNameList"],
        event_type: value["eventType"],
        flags: FwmgrFirewallFlagsToJSON(value["flags"]),
        hidden: value["hidden"],
        host_name: value["hostName"],
        icmp_code: value["icmpCode"],
        icmp_type: value["icmpType"],
        id: value["id"],
        image_file_name: value["imageFileName"],
        ipv: value["ipv"],
        local_address: value["localAddress"],
        local_port: value["localPort"],
        match_count: value["matchCount"],
        match_count_since_last_event: value["matchCountSinceLastEvent"],
        network_profile: value["networkProfile"],
        pid: value["pid"],
        platform: value["platform"],
        policy_id: value["policyId"],
        policy_name: value["policyName"],
        protocol: value["protocol"],
        remote_address: value["remoteAddress"],
        remote_port: value["remotePort"],
        rule_action: value["ruleAction"],
        rule_description: value["ruleDescription"],
        rule_family_id: value["ruleFamilyId"],
        rule_group_name: value["ruleGroupName"],
        rule_id: value["ruleId"],
        rule_name: value["ruleName"],
        status: value["status"],
        timestamp: value["timestamp"],
        tree_id: value["treeId"],
    };
}
