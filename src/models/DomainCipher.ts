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
 * @interface DomainCipher
 */
export interface DomainCipher {
    /**
     * 
     * @type {number}
     * @memberof DomainCipher
     */
    bits?: number;
    /**
     * 
     * @type {string}
     * @memberof DomainCipher
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainCipher
     */
    version?: string;
}

/**
 * Check if a given object implements the DomainCipher interface.
 */
export function instanceOfDomainCipher(value: object): value is DomainCipher {
    return true;
}

export function DomainCipherFromJSON(json: any): DomainCipher {
    return DomainCipherFromJSONTyped(json, false);
}

export function DomainCipherFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainCipher {
    if (json == null) {
        return json;
    }
    return {
        
        'bits': json['bits'] == null ? undefined : json['bits'],
        'name': json['name'] == null ? undefined : json['name'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function DomainCipherToJSON(value?: DomainCipher | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bits': value['bits'],
        'name': value['name'],
        'version': value['version'],
    };
}

