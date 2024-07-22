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
 * @interface ExclusionsCreateReqV1
 */
export interface ExclusionsCreateReqV1 {
    /**
     * 
     * @type {string}
     * @memberof ExclusionsCreateReqV1
     */
    comment?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExclusionsCreateReqV1
     */
    excludedFrom?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExclusionsCreateReqV1
     */
    groups?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ExclusionsCreateReqV1
     */
    value?: string;
}

/**
 * Check if a given object implements the ExclusionsCreateReqV1 interface.
 */
export function instanceOfExclusionsCreateReqV1(value: object): value is ExclusionsCreateReqV1 {
    return true;
}

export function ExclusionsCreateReqV1FromJSON(json: any): ExclusionsCreateReqV1 {
    return ExclusionsCreateReqV1FromJSONTyped(json, false);
}

export function ExclusionsCreateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ExclusionsCreateReqV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'comment': json['comment'] == null ? undefined : json['comment'],
        'excludedFrom': json['excluded_from'] == null ? undefined : json['excluded_from'],
        'groups': json['groups'] == null ? undefined : json['groups'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function ExclusionsCreateReqV1ToJSON(value?: ExclusionsCreateReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'comment': value['comment'],
        'excluded_from': value['excludedFrom'],
        'groups': value['groups'],
        'value': value['value'],
    };
}

