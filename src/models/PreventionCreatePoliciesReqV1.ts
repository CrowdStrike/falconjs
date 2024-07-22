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
import type { PreventionCreatePolicyReqV1 } from './PreventionCreatePolicyReqV1';
import {
    PreventionCreatePolicyReqV1FromJSON,
    PreventionCreatePolicyReqV1FromJSONTyped,
    PreventionCreatePolicyReqV1ToJSON,
} from './PreventionCreatePolicyReqV1';

/**
 * A request to create prevention policies
 * @export
 * @interface PreventionCreatePoliciesReqV1
 */
export interface PreventionCreatePoliciesReqV1 {
    /**
     * A collection of policies to create
     * @type {Array<PreventionCreatePolicyReqV1>}
     * @memberof PreventionCreatePoliciesReqV1
     */
    resources: Array<PreventionCreatePolicyReqV1>;
}

/**
 * Check if a given object implements the PreventionCreatePoliciesReqV1 interface.
 */
export function instanceOfPreventionCreatePoliciesReqV1(value: object): value is PreventionCreatePoliciesReqV1 {
    if (!('resources' in value) || value['resources'] === undefined) return false;
    return true;
}

export function PreventionCreatePoliciesReqV1FromJSON(json: any): PreventionCreatePoliciesReqV1 {
    return PreventionCreatePoliciesReqV1FromJSONTyped(json, false);
}

export function PreventionCreatePoliciesReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): PreventionCreatePoliciesReqV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'resources': ((json['resources'] as Array<any>).map(PreventionCreatePolicyReqV1FromJSON)),
    };
}

export function PreventionCreatePoliciesReqV1ToJSON(value?: PreventionCreatePoliciesReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'resources': ((value['resources'] as Array<any>).map(PreventionCreatePolicyReqV1ToJSON)),
    };
}

