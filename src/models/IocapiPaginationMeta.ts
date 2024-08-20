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
 * @interface IocapiPaginationMeta
 */
export interface IocapiPaginationMeta {
    /**
     * 
     * @type {number}
     * @memberof IocapiPaginationMeta
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof IocapiPaginationMeta
     */
    nextPage?: string;
    /**
     * 
     * @type {object}
     * @memberof IocapiPaginationMeta
     */
    offset?: object;
    /**
     * 
     * @type {number}
     * @memberof IocapiPaginationMeta
     */
    total?: number;
}

/**
 * Check if a given object implements the IocapiPaginationMeta interface.
 */
export function instanceOfIocapiPaginationMeta(value: object): value is IocapiPaginationMeta {
    return true;
}

export function IocapiPaginationMetaFromJSON(json: any): IocapiPaginationMeta {
    return IocapiPaginationMetaFromJSONTyped(json, false);
}

export function IocapiPaginationMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): IocapiPaginationMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'] == null ? undefined : json['limit'],
        'nextPage': json['next_page'] == null ? undefined : json['next_page'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function IocapiPaginationMetaToJSON(value?: IocapiPaginationMeta | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'limit': value['limit'],
        'next_page': value['nextPage'],
        'offset': value['offset'],
        'total': value['total'],
    };
}

