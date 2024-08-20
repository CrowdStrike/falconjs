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
 * @interface MsaAffectedEntity
 */
export interface MsaAffectedEntity {
    /**
     * 
     * @type {string}
     * @memberof MsaAffectedEntity
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MsaAffectedEntity
     */
    path: string;
}

/**
 * Check if a given object implements the MsaAffectedEntity interface.
 */
export function instanceOfMsaAffectedEntity(value: object): value is MsaAffectedEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    return true;
}

export function MsaAffectedEntityFromJSON(json: any): MsaAffectedEntity {
    return MsaAffectedEntityFromJSONTyped(json, false);
}

export function MsaAffectedEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): MsaAffectedEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'path': json['path'],
    };
}

export function MsaAffectedEntityToJSON(value?: MsaAffectedEntity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'path': value['path'],
    };
}

