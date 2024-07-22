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
import type { TypesReasonTag } from './TypesReasonTag';
import {
    TypesReasonTagFromJSON,
    TypesReasonTagFromJSONTyped,
    TypesReasonTagToJSON,
} from './TypesReasonTag';

/**
 * 
 * @export
 * @interface TypesTag
 */
export interface TypesTag {
    /**
     * 
     * @type {boolean}
     * @memberof TypesTag
     */
    automated?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TypesTag
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TypesTag
     */
    isDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TypesTag
     */
    isSensitive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TypesTag
     */
    name?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof TypesTag
     */
    persistentSignatures?: Array<object>;
    /**
     * 
     * @type {Array<TypesReasonTag>}
     * @memberof TypesTag
     */
    reasonTag?: Array<TypesReasonTag>;
    /**
     * 
     * @type {string}
     * @memberof TypesTag
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof TypesTag
     */
    value?: string;
}

/**
 * Check if a given object implements the TypesTag interface.
 */
export function instanceOfTypesTag(value: object): value is TypesTag {
    return true;
}

export function TypesTagFromJSON(json: any): TypesTag {
    return TypesTagFromJSONTyped(json, false);
}

export function TypesTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesTag {
    if (json == null) {
        return json;
    }
    return {
        
        'automated': json['automated'] == null ? undefined : json['automated'],
        'id': json['id'] == null ? undefined : json['id'],
        'isDefault': json['isDefault'] == null ? undefined : json['isDefault'],
        'isSensitive': json['is_sensitive'] == null ? undefined : json['is_sensitive'],
        'name': json['name'] == null ? undefined : json['name'],
        'persistentSignatures': json['persistentSignatures'] == null ? undefined : json['persistentSignatures'],
        'reasonTag': json['reason_tag'] == null ? undefined : ((json['reason_tag'] as Array<any>).map(TypesReasonTagFromJSON)),
        'type': json['type'] == null ? undefined : json['type'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function TypesTagToJSON(value?: TypesTag | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'automated': value['automated'],
        'id': value['id'],
        'isDefault': value['isDefault'],
        'is_sensitive': value['isSensitive'],
        'name': value['name'],
        'persistentSignatures': value['persistentSignatures'],
        'reason_tag': value['reasonTag'] == null ? undefined : ((value['reasonTag'] as Array<any>).map(TypesReasonTagToJSON)),
        'type': value['type'],
        'value': value['value'],
    };
}

