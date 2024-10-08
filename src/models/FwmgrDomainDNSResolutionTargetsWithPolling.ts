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
import type { FwmgrDomainDNSTarget } from "./FwmgrDomainDNSTarget";
import { FwmgrDomainDNSTargetFromJSON, FwmgrDomainDNSTargetFromJSONTyped, FwmgrDomainDNSTargetToJSON } from "./FwmgrDomainDNSTarget";

/**
 *
 * @export
 * @interface FwmgrDomainDNSResolutionTargetsWithPolling
 */
export interface FwmgrDomainDNSResolutionTargetsWithPolling {
    /**
     *
     * @type {number}
     * @memberof FwmgrDomainDNSResolutionTargetsWithPolling
     */
    pollingInterval: number;
    /**
     *
     * @type {Array<FwmgrDomainDNSTarget>}
     * @memberof FwmgrDomainDNSResolutionTargetsWithPolling
     */
    targets?: Array<FwmgrDomainDNSTarget>;
}

/**
 * Check if a given object implements the FwmgrDomainDNSResolutionTargetsWithPolling interface.
 */
export function instanceOfFwmgrDomainDNSResolutionTargetsWithPolling(value: object): value is FwmgrDomainDNSResolutionTargetsWithPolling {
    if (!("pollingInterval" in value) || value["pollingInterval"] === undefined) return false;
    return true;
}

export function FwmgrDomainDNSResolutionTargetsWithPollingFromJSON(json: any): FwmgrDomainDNSResolutionTargetsWithPolling {
    return FwmgrDomainDNSResolutionTargetsWithPollingFromJSONTyped(json, false);
}

export function FwmgrDomainDNSResolutionTargetsWithPollingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrDomainDNSResolutionTargetsWithPolling {
    if (json == null) {
        return json;
    }
    return {
        pollingInterval: json["polling_interval"],
        targets: json["targets"] == null ? undefined : (json["targets"] as Array<any>).map(FwmgrDomainDNSTargetFromJSON),
    };
}

export function FwmgrDomainDNSResolutionTargetsWithPollingToJSON(value?: FwmgrDomainDNSResolutionTargetsWithPolling | null): any {
    if (value == null) {
        return value;
    }
    return {
        polling_interval: value["pollingInterval"],
        targets: value["targets"] == null ? undefined : (value["targets"] as Array<any>).map(FwmgrDomainDNSTargetToJSON),
    };
}
