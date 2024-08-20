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
 * @interface FwmgrDomainDNSTarget
 */
export interface FwmgrDomainDNSTarget {
    /**
     * 
     * @type {string}
     * @memberof FwmgrDomainDNSTarget
     */
    hostname: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FwmgrDomainDNSTarget
     */
    ipMatch?: Array<string>;
}

/**
 * Check if a given object implements the FwmgrDomainDNSTarget interface.
 */
export function instanceOfFwmgrDomainDNSTarget(value: object): value is FwmgrDomainDNSTarget {
    if (!('hostname' in value) || value['hostname'] === undefined) return false;
    return true;
}

export function FwmgrDomainDNSTargetFromJSON(json: any): FwmgrDomainDNSTarget {
    return FwmgrDomainDNSTargetFromJSONTyped(json, false);
}

export function FwmgrDomainDNSTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrDomainDNSTarget {
    if (json == null) {
        return json;
    }
    return {
        
        'hostname': json['hostname'],
        'ipMatch': json['ip_match'] == null ? undefined : json['ip_match'],
    };
}

export function FwmgrDomainDNSTargetToJSON(value?: FwmgrDomainDNSTarget | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'hostname': value['hostname'],
        'ip_match': value['ipMatch'],
    };
}

