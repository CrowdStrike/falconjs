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
 * @interface ApiCredPayload
 */
export interface ApiCredPayload {
    /**
     * 
     * @type {object}
     * @memberof ApiCredPayload
     */
    details: object;
    /**
     * 
     * @type {string}
     * @memberof ApiCredPayload
     */
    type: string;
}

/**
 * Check if a given object implements the ApiCredPayload interface.
 */
export function instanceOfApiCredPayload(value: object): value is ApiCredPayload {
    if (!('details' in value) || value['details'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ApiCredPayloadFromJSON(json: any): ApiCredPayload {
    return ApiCredPayloadFromJSONTyped(json, false);
}

export function ApiCredPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCredPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'details': json['details'],
        'type': json['type'],
    };
}

export function ApiCredPayloadToJSON(value?: ApiCredPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'details': value['details'],
        'type': value['type'],
    };
}

