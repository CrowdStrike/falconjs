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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface FwmgrApiNetworkLocationsMetadataV1
 */
export interface FwmgrApiNetworkLocationsMetadataV1 {
    /**
     *
     * @type {number}
     * @memberof FwmgrApiNetworkLocationsMetadataV1
     */
    dnsResolutionTargetsPollingInterval: number;
    /**
     *
     * @type {number}
     * @memberof FwmgrApiNetworkLocationsMetadataV1
     */
    httpsReachableHostsPollingInterval: number;
    /**
     *
     * @type {number}
     * @memberof FwmgrApiNetworkLocationsMetadataV1
     */
    icmpRequestTargetsPollingInterval: number;
}

/**
 * Check if a given object implements the FwmgrApiNetworkLocationsMetadataV1 interface.
 */
export function instanceOfFwmgrApiNetworkLocationsMetadataV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dnsResolutionTargetsPollingInterval" in value;
    isInstance = isInstance && "httpsReachableHostsPollingInterval" in value;
    isInstance = isInstance && "icmpRequestTargetsPollingInterval" in value;

    return isInstance;
}

export function FwmgrApiNetworkLocationsMetadataV1FromJSON(json: any): FwmgrApiNetworkLocationsMetadataV1 {
    return FwmgrApiNetworkLocationsMetadataV1FromJSONTyped(json, false);
}

export function FwmgrApiNetworkLocationsMetadataV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrApiNetworkLocationsMetadataV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        dnsResolutionTargetsPollingInterval: json["dns_resolution_targets_polling_interval"],
        httpsReachableHostsPollingInterval: json["https_reachable_hosts_polling_interval"],
        icmpRequestTargetsPollingInterval: json["icmp_request_targets_polling_interval"],
    };
}

export function FwmgrApiNetworkLocationsMetadataV1ToJSON(value?: FwmgrApiNetworkLocationsMetadataV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        dns_resolution_targets_polling_interval: value.dnsResolutionTargetsPollingInterval,
        https_reachable_hosts_polling_interval: value.httpsReachableHostsPollingInterval,
        icmp_request_targets_polling_interval: value.icmpRequestTargetsPollingInterval,
    };
}
