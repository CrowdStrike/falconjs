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
import type { RegistrationGCPAccountReqObjV2 } from './RegistrationGCPAccountReqObjV2';
import {
    RegistrationGCPAccountReqObjV2FromJSON,
    RegistrationGCPAccountReqObjV2FromJSONTyped,
    RegistrationGCPAccountReqObjV2ToJSON,
} from './RegistrationGCPAccountReqObjV2';

/**
 * 
 * @export
 * @interface RegistrationGCPAccountExtRequestV2
 */
export interface RegistrationGCPAccountExtRequestV2 {
    /**
     * 
     * @type {Array<RegistrationGCPAccountReqObjV2>}
     * @memberof RegistrationGCPAccountExtRequestV2
     */
    resources: Array<RegistrationGCPAccountReqObjV2>;
}

/**
 * Check if a given object implements the RegistrationGCPAccountExtRequestV2 interface.
 */
export function instanceOfRegistrationGCPAccountExtRequestV2(value: object): value is RegistrationGCPAccountExtRequestV2 {
    if (!('resources' in value) || value['resources'] === undefined) return false;
    return true;
}

export function RegistrationGCPAccountExtRequestV2FromJSON(json: any): RegistrationGCPAccountExtRequestV2 {
    return RegistrationGCPAccountExtRequestV2FromJSONTyped(json, false);
}

export function RegistrationGCPAccountExtRequestV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationGCPAccountExtRequestV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': ((json['resources'] as Array<any>).map(RegistrationGCPAccountReqObjV2FromJSON)),
    };
}

export function RegistrationGCPAccountExtRequestV2ToJSON(value?: RegistrationGCPAccountExtRequestV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'resources': ((value['resources'] as Array<any>).map(RegistrationGCPAccountReqObjV2ToJSON)),
    };
}

