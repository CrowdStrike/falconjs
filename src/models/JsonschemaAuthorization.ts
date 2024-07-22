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
import type { JsonschemaComplexPermissions } from './JsonschemaComplexPermissions';
import {
    JsonschemaComplexPermissionsFromJSON,
    JsonschemaComplexPermissionsFromJSONTyped,
    JsonschemaComplexPermissionsToJSON,
} from './JsonschemaComplexPermissions';
import type { JsonschemaPermission } from './JsonschemaPermission';
import {
    JsonschemaPermissionFromJSON,
    JsonschemaPermissionFromJSONTyped,
    JsonschemaPermissionToJSON,
} from './JsonschemaPermission';

/**
 * 
 * @export
 * @interface JsonschemaAuthorization
 */
export interface JsonschemaAuthorization {
    /**
     * 
     * @type {string}
     * @memberof JsonschemaAuthorization
     */
    apiScope?: string;
    /**
     * 
     * @type {JsonschemaComplexPermissions}
     * @memberof JsonschemaAuthorization
     */
    complexPermissions: JsonschemaComplexPermissions;
    /**
     * 
     * @type {string}
     * @memberof JsonschemaAuthorization
     */
    featureFlag: string;
    /**
     * 
     * @type {Array<JsonschemaPermission>}
     * @memberof JsonschemaAuthorization
     */
    permissions: Array<JsonschemaPermission>;
}

/**
 * Check if a given object implements the JsonschemaAuthorization interface.
 */
export function instanceOfJsonschemaAuthorization(value: object): value is JsonschemaAuthorization {
    if (!('complexPermissions' in value) || value['complexPermissions'] === undefined) return false;
    if (!('featureFlag' in value) || value['featureFlag'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    return true;
}

export function JsonschemaAuthorizationFromJSON(json: any): JsonschemaAuthorization {
    return JsonschemaAuthorizationFromJSONTyped(json, false);
}

export function JsonschemaAuthorizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonschemaAuthorization {
    if (json == null) {
        return json;
    }
    return {
        
        'apiScope': json['apiScope'] == null ? undefined : json['apiScope'],
        'complexPermissions': JsonschemaComplexPermissionsFromJSON(json['complexPermissions']),
        'featureFlag': json['featureFlag'],
        'permissions': ((json['permissions'] as Array<any>).map(JsonschemaPermissionFromJSON)),
    };
}

export function JsonschemaAuthorizationToJSON(value?: JsonschemaAuthorization | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiScope': value['apiScope'],
        'complexPermissions': JsonschemaComplexPermissionsToJSON(value['complexPermissions']),
        'featureFlag': value['featureFlag'],
        'permissions': ((value['permissions'] as Array<any>).map(JsonschemaPermissionToJSON)),
    };
}

