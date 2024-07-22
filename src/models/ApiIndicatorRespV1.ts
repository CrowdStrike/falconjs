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
import type { ApiIndicatorsQueryMeta } from './ApiIndicatorsQueryMeta';
import {
    ApiIndicatorsQueryMetaFromJSON,
    ApiIndicatorsQueryMetaFromJSONTyped,
    ApiIndicatorsQueryMetaToJSON,
} from './ApiIndicatorsQueryMeta';
import type { MsaAPIError } from './MsaAPIError';
import {
    MsaAPIErrorFromJSON,
    MsaAPIErrorFromJSONTyped,
    MsaAPIErrorToJSON,
} from './MsaAPIError';
import type { ApiIndicatorV1 } from './ApiIndicatorV1';
import {
    ApiIndicatorV1FromJSON,
    ApiIndicatorV1FromJSONTyped,
    ApiIndicatorV1ToJSON,
} from './ApiIndicatorV1';

/**
 * 
 * @export
 * @interface ApiIndicatorRespV1
 */
export interface ApiIndicatorRespV1 {
    /**
     * 
     * @type {Array<MsaAPIError>}
     * @memberof ApiIndicatorRespV1
     */
    errors: Array<MsaAPIError>;
    /**
     * 
     * @type {ApiIndicatorsQueryMeta}
     * @memberof ApiIndicatorRespV1
     */
    meta: ApiIndicatorsQueryMeta;
    /**
     * 
     * @type {Array<ApiIndicatorV1>}
     * @memberof ApiIndicatorRespV1
     */
    resources: Array<ApiIndicatorV1>;
}

/**
 * Check if a given object implements the ApiIndicatorRespV1 interface.
 */
export function instanceOfApiIndicatorRespV1(value: object): value is ApiIndicatorRespV1 {
    if (!('errors' in value) || value['errors'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('resources' in value) || value['resources'] === undefined) return false;
    return true;
}

export function ApiIndicatorRespV1FromJSON(json: any): ApiIndicatorRespV1 {
    return ApiIndicatorRespV1FromJSONTyped(json, false);
}

export function ApiIndicatorRespV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiIndicatorRespV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'errors': ((json['errors'] as Array<any>).map(MsaAPIErrorFromJSON)),
        'meta': ApiIndicatorsQueryMetaFromJSON(json['meta']),
        'resources': ((json['resources'] as Array<any>).map(ApiIndicatorV1FromJSON)),
    };
}

export function ApiIndicatorRespV1ToJSON(value?: ApiIndicatorRespV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errors': ((value['errors'] as Array<any>).map(MsaAPIErrorToJSON)),
        'meta': ApiIndicatorsQueryMetaToJSON(value['meta']),
        'resources': ((value['resources'] as Array<any>).map(ApiIndicatorV1ToJSON)),
    };
}

