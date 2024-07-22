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
 * @interface PoliciesUpdateRequest
 */
export interface PoliciesUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof PoliciesUpdateRequest
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PoliciesUpdateRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PoliciesUpdateRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PoliciesUpdateRequest
     */
    name?: string;
}

/**
 * Check if a given object implements the PoliciesUpdateRequest interface.
 */
export function instanceOfPoliciesUpdateRequest(value: object): value is PoliciesUpdateRequest {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function PoliciesUpdateRequestFromJSON(json: any): PoliciesUpdateRequest {
    return PoliciesUpdateRequestFromJSONTyped(json, false);
}

export function PoliciesUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoliciesUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function PoliciesUpdateRequestToJSON(value?: PoliciesUpdateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'enabled': value['enabled'],
        'id': value['id'],
        'name': value['name'],
    };
}

