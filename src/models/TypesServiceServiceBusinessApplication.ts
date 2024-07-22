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
import type { TypesBusinessApplication } from './TypesBusinessApplication';
import {
    TypesBusinessApplicationFromJSON,
    TypesBusinessApplicationFromJSONTyped,
    TypesBusinessApplicationToJSON,
} from './TypesBusinessApplication';

/**
 * 
 * @export
 * @interface TypesServiceServiceBusinessApplication
 */
export interface TypesServiceServiceBusinessApplication {
    /**
     * 
     * @type {number}
     * @memberof TypesServiceServiceBusinessApplication
     */
    count?: number;
    /**
     * 
     * @type {Array<TypesBusinessApplication>}
     * @memberof TypesServiceServiceBusinessApplication
     */
    items?: Array<TypesBusinessApplication>;
}

/**
 * Check if a given object implements the TypesServiceServiceBusinessApplication interface.
 */
export function instanceOfTypesServiceServiceBusinessApplication(value: object): value is TypesServiceServiceBusinessApplication {
    return true;
}

export function TypesServiceServiceBusinessApplicationFromJSON(json: any): TypesServiceServiceBusinessApplication {
    return TypesServiceServiceBusinessApplicationFromJSONTyped(json, false);
}

export function TypesServiceServiceBusinessApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesServiceServiceBusinessApplication {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'items': json['items'] == null ? undefined : ((json['items'] as Array<any>).map(TypesBusinessApplicationFromJSON)),
    };
}

export function TypesServiceServiceBusinessApplicationToJSON(value?: TypesServiceServiceBusinessApplication | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'items': value['items'] == null ? undefined : ((value['items'] as Array<any>).map(TypesBusinessApplicationToJSON)),
    };
}

