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
import type { RegistrationGCPServiceAccountValidationRequestObjV1 } from './RegistrationGCPServiceAccountValidationRequestObjV1';
import {
    RegistrationGCPServiceAccountValidationRequestObjV1FromJSON,
    RegistrationGCPServiceAccountValidationRequestObjV1FromJSONTyped,
    RegistrationGCPServiceAccountValidationRequestObjV1ToJSON,
} from './RegistrationGCPServiceAccountValidationRequestObjV1';

/**
 * 
 * @export
 * @interface RegistrationGCPServiceAccountValidationRequestV1
 */
export interface RegistrationGCPServiceAccountValidationRequestV1 {
    /**
     * 
     * @type {Array<RegistrationGCPServiceAccountValidationRequestObjV1>}
     * @memberof RegistrationGCPServiceAccountValidationRequestV1
     */
    resources: Array<RegistrationGCPServiceAccountValidationRequestObjV1>;
}

/**
 * Check if a given object implements the RegistrationGCPServiceAccountValidationRequestV1 interface.
 */
export function instanceOfRegistrationGCPServiceAccountValidationRequestV1(value: object): value is RegistrationGCPServiceAccountValidationRequestV1 {
    if (!('resources' in value) || value['resources'] === undefined) return false;
    return true;
}

export function RegistrationGCPServiceAccountValidationRequestV1FromJSON(json: any): RegistrationGCPServiceAccountValidationRequestV1 {
    return RegistrationGCPServiceAccountValidationRequestV1FromJSONTyped(json, false);
}

export function RegistrationGCPServiceAccountValidationRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationGCPServiceAccountValidationRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': ((json['resources'] as Array<any>).map(RegistrationGCPServiceAccountValidationRequestObjV1FromJSON)),
    };
}

export function RegistrationGCPServiceAccountValidationRequestV1ToJSON(value?: RegistrationGCPServiceAccountValidationRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'resources': ((value['resources'] as Array<any>).map(RegistrationGCPServiceAccountValidationRequestObjV1ToJSON)),
    };
}

