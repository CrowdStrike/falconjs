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
import type { TypesIntegrationType } from './TypesIntegrationType';
import {
    TypesIntegrationTypeFromJSON,
    TypesIntegrationTypeFromJSONTyped,
    TypesIntegrationTypeToJSON,
} from './TypesIntegrationType';

/**
 * 
 * @export
 * @interface TypesIntegrationTaskType
 */
export interface TypesIntegrationTaskType {
    /**
     * 
     * @type {string}
     * @memberof TypesIntegrationTaskType
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof TypesIntegrationTaskType
     */
    displayName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TypesIntegrationTaskType
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TypesIntegrationTaskType
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TypesIntegrationTaskType
     */
    name?: string;
    /**
     * 
     * @type {Array<TypesIntegrationType>}
     * @memberof TypesIntegrationTaskType
     */
    requiredIntegrationTypes?: Array<TypesIntegrationType>;
}

/**
 * Check if a given object implements the TypesIntegrationTaskType interface.
 */
export function instanceOfTypesIntegrationTaskType(value: object): value is TypesIntegrationTaskType {
    return true;
}

export function TypesIntegrationTaskTypeFromJSON(json: any): TypesIntegrationTaskType {
    return TypesIntegrationTaskTypeFromJSONTyped(json, false);
}

export function TypesIntegrationTaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesIntegrationTaskType {
    if (json == null) {
        return json;
    }
    return {
        
        'category': json['category'] == null ? undefined : json['category'],
        'displayName': json['display_name'] == null ? undefined : json['display_name'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'requiredIntegrationTypes': json['required_integration_types'] == null ? undefined : ((json['required_integration_types'] as Array<any>).map(TypesIntegrationTypeFromJSON)),
    };
}

export function TypesIntegrationTaskTypeToJSON(value?: TypesIntegrationTaskType | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'category': value['category'],
        'display_name': value['displayName'],
        'enabled': value['enabled'],
        'id': value['id'],
        'name': value['name'],
        'required_integration_types': value['requiredIntegrationTypes'] == null ? undefined : ((value['requiredIntegrationTypes'] as Array<any>).map(TypesIntegrationTypeToJSON)),
    };
}

