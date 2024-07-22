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
import type { MsaAPIError } from './MsaAPIError';
import {
    MsaAPIErrorFromJSON,
    MsaAPIErrorFromJSONTyped,
    MsaAPIErrorToJSON,
} from './MsaAPIError';
import type { RemoteResponsePolicyV1 } from './RemoteResponsePolicyV1';
import {
    RemoteResponsePolicyV1FromJSON,
    RemoteResponsePolicyV1FromJSONTyped,
    RemoteResponsePolicyV1ToJSON,
} from './RemoteResponsePolicyV1';
import type { MsaMetaInfo } from './MsaMetaInfo';
import {
    MsaMetaInfoFromJSON,
    MsaMetaInfoFromJSONTyped,
    MsaMetaInfoToJSON,
} from './MsaMetaInfo';

/**
 * 
 * @export
 * @interface RemoteResponseRespV1
 */
export interface RemoteResponseRespV1 {
    /**
     * A collection of any errors which occurred during execution of the request
     * @type {Array<MsaAPIError>}
     * @memberof RemoteResponseRespV1
     */
    errors: Array<MsaAPIError>;
    /**
     * 
     * @type {MsaMetaInfo}
     * @memberof RemoteResponseRespV1
     */
    meta: MsaMetaInfo;
    /**
     * 
     * @type {Array<RemoteResponsePolicyV1>}
     * @memberof RemoteResponseRespV1
     */
    resources: Array<RemoteResponsePolicyV1>;
}

/**
 * Check if a given object implements the RemoteResponseRespV1 interface.
 */
export function instanceOfRemoteResponseRespV1(value: object): value is RemoteResponseRespV1 {
    if (!('errors' in value) || value['errors'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('resources' in value) || value['resources'] === undefined) return false;
    return true;
}

export function RemoteResponseRespV1FromJSON(json: any): RemoteResponseRespV1 {
    return RemoteResponseRespV1FromJSONTyped(json, false);
}

export function RemoteResponseRespV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoteResponseRespV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'errors': ((json['errors'] as Array<any>).map(MsaAPIErrorFromJSON)),
        'meta': MsaMetaInfoFromJSON(json['meta']),
        'resources': ((json['resources'] as Array<any>).map(RemoteResponsePolicyV1FromJSON)),
    };
}

export function RemoteResponseRespV1ToJSON(value?: RemoteResponseRespV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errors': ((value['errors'] as Array<any>).map(MsaAPIErrorToJSON)),
        'meta': MsaMetaInfoToJSON(value['meta']),
        'resources': ((value['resources'] as Array<any>).map(RemoteResponsePolicyV1ToJSON)),
    };
}

