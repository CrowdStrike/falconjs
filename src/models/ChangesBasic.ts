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
 * @interface ChangesBasic
 */
export interface ChangesBasic {
    /**
     * 
     * @type {string}
     * @memberof ChangesBasic
     */
    entity?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangesBasic
     */
    operation?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangesBasic
     */
    permissions?: string;
}

/**
 * Check if a given object implements the ChangesBasic interface.
 */
export function instanceOfChangesBasic(value: object): value is ChangesBasic {
    return true;
}

export function ChangesBasicFromJSON(json: any): ChangesBasic {
    return ChangesBasicFromJSONTyped(json, false);
}

export function ChangesBasicFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesBasic {
    if (json == null) {
        return json;
    }
    return {
        
        'entity': json['entity'] == null ? undefined : json['entity'],
        'operation': json['operation'] == null ? undefined : json['operation'],
        'permissions': json['permissions'] == null ? undefined : json['permissions'],
    };
}

export function ChangesBasicToJSON(value?: ChangesBasic | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entity': value['entity'],
        'operation': value['operation'],
        'permissions': value['permissions'],
    };
}

