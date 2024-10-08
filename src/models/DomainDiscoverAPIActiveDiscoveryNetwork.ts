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
/**
 * Information about an active discovery network this asset is associated with.
 * @export
 * @interface DomainDiscoverAPIActiveDiscoveryNetwork
 */
export interface DomainDiscoverAPIActiveDiscoveryNetwork {
    /**
     * The id of the network
     * @type {string}
     * @memberof DomainDiscoverAPIActiveDiscoveryNetwork
     */
    id: string;
}

/**
 * Check if a given object implements the DomainDiscoverAPIActiveDiscoveryNetwork interface.
 */
export function instanceOfDomainDiscoverAPIActiveDiscoveryNetwork(value: object): value is DomainDiscoverAPIActiveDiscoveryNetwork {
    if (!("id" in value) || value["id"] === undefined) return false;
    return true;
}

export function DomainDiscoverAPIActiveDiscoveryNetworkFromJSON(json: any): DomainDiscoverAPIActiveDiscoveryNetwork {
    return DomainDiscoverAPIActiveDiscoveryNetworkFromJSONTyped(json, false);
}

export function DomainDiscoverAPIActiveDiscoveryNetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPIActiveDiscoveryNetwork {
    if (json == null) {
        return json;
    }
    return {
        id: json["id"],
    };
}

export function DomainDiscoverAPIActiveDiscoveryNetworkToJSON(value?: DomainDiscoverAPIActiveDiscoveryNetwork | null): any {
    if (value == null) {
        return value;
    }
    return {
        id: value["id"],
    };
}
