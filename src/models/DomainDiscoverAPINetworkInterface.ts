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
 * The local IPv4 address or addresses of the network interface associated with the asset over time.
 * @export
 * @interface DomainDiscoverAPINetworkInterface
 */
export interface DomainDiscoverAPINetworkInterface {
    /**
     * The name or alias of the network interface associated with the asset.
     * @type {string}
     * @memberof DomainDiscoverAPINetworkInterface
     */
    interfaceAlias?: string;
    /**
     * The description of the network interface associated with the asset.
     * @type {string}
     * @memberof DomainDiscoverAPINetworkInterface
     */
    interfaceDescription?: string;
    /**
     * The local IPv4 address or addresses of the network interface associated with the asset over time
     * @type {string}
     * @memberof DomainDiscoverAPINetworkInterface
     */
    localIp?: string;
    /**
     * The MAC address of the network interface associated with the asset.
     * @type {string}
     * @memberof DomainDiscoverAPINetworkInterface
     */
    macAddress?: string;
    /**
     * The prefix or prefixes of the network over time, made of the first two bytes of the IP address.
     * @type {string}
     * @memberof DomainDiscoverAPINetworkInterface
     */
    networkPrefix?: string;
}

/**
 * Check if a given object implements the DomainDiscoverAPINetworkInterface interface.
 */
export function instanceOfDomainDiscoverAPINetworkInterface(value: object): value is DomainDiscoverAPINetworkInterface {
    return true;
}

export function DomainDiscoverAPINetworkInterfaceFromJSON(json: any): DomainDiscoverAPINetworkInterface {
    return DomainDiscoverAPINetworkInterfaceFromJSONTyped(json, false);
}

export function DomainDiscoverAPINetworkInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPINetworkInterface {
    if (json == null) {
        return json;
    }
    return {
        
        'interfaceAlias': json['interface_alias'] == null ? undefined : json['interface_alias'],
        'interfaceDescription': json['interface_description'] == null ? undefined : json['interface_description'],
        'localIp': json['local_ip'] == null ? undefined : json['local_ip'],
        'macAddress': json['mac_address'] == null ? undefined : json['mac_address'],
        'networkPrefix': json['network_prefix'] == null ? undefined : json['network_prefix'],
    };
}

export function DomainDiscoverAPINetworkInterfaceToJSON(value?: DomainDiscoverAPINetworkInterface | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'interface_alias': value['interfaceAlias'],
        'interface_description': value['interfaceDescription'],
        'local_ip': value['localIp'],
        'mac_address': value['macAddress'],
        'network_prefix': value['networkPrefix'],
    };
}

