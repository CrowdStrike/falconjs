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
import type { TypesTag } from './TypesTag';
import {
    TypesTagFromJSON,
    TypesTagFromJSONTyped,
    TypesTagToJSON,
} from './TypesTag';

/**
 * 
 * @export
 * @interface TypesInterfaceService
 */
export interface TypesInterfaceService {
    /**
     * 
     * @type {number}
     * @memberof TypesInterfaceService
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TypesInterfaceService
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TypesInterfaceService
     */
    persistentSignature?: string;
    /**
     * 
     * @type {Array<TypesTag>}
     * @memberof TypesInterfaceService
     */
    tags?: Array<TypesTag>;
}

/**
 * Check if a given object implements the TypesInterfaceService interface.
 */
export function instanceOfTypesInterfaceService(value: object): value is TypesInterfaceService {
    return true;
}

export function TypesInterfaceServiceFromJSON(json: any): TypesInterfaceService {
    return TypesInterfaceServiceFromJSONTyped(json, false);
}

export function TypesInterfaceServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesInterfaceService {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'persistentSignature': json['persistentSignature'] == null ? undefined : json['persistentSignature'],
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TypesTagFromJSON)),
    };
}

export function TypesInterfaceServiceToJSON(value?: TypesInterfaceService | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'persistentSignature': value['persistentSignature'],
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TypesTagToJSON)),
    };
}

