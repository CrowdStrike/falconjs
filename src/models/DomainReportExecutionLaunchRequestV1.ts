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
 * @interface DomainReportExecutionLaunchRequestV1
 */
export interface DomainReportExecutionLaunchRequestV1 {
    /**
     * 
     * @type {string}
     * @memberof DomainReportExecutionLaunchRequestV1
     */
    id: string;
}

/**
 * Check if a given object implements the DomainReportExecutionLaunchRequestV1 interface.
 */
export function instanceOfDomainReportExecutionLaunchRequestV1(value: object): value is DomainReportExecutionLaunchRequestV1 {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function DomainReportExecutionLaunchRequestV1FromJSON(json: any): DomainReportExecutionLaunchRequestV1 {
    return DomainReportExecutionLaunchRequestV1FromJSONTyped(json, false);
}

export function DomainReportExecutionLaunchRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainReportExecutionLaunchRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function DomainReportExecutionLaunchRequestV1ToJSON(value?: DomainReportExecutionLaunchRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
    };
}

