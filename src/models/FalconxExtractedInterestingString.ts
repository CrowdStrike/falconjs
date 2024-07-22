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
 * @interface FalconxExtractedInterestingString
 */
export interface FalconxExtractedInterestingString {
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedInterestingString
     */
    filename?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedInterestingString
     */
    process?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedInterestingString
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedInterestingString
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedInterestingString
     */
    value?: string;
}

/**
 * Check if a given object implements the FalconxExtractedInterestingString interface.
 */
export function instanceOfFalconxExtractedInterestingString(value: object): value is FalconxExtractedInterestingString {
    return true;
}

export function FalconxExtractedInterestingStringFromJSON(json: any): FalconxExtractedInterestingString {
    return FalconxExtractedInterestingStringFromJSONTyped(json, false);
}

export function FalconxExtractedInterestingStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxExtractedInterestingString {
    if (json == null) {
        return json;
    }
    return {
        
        'filename': json['filename'] == null ? undefined : json['filename'],
        'process': json['process'] == null ? undefined : json['process'],
        'source': json['source'] == null ? undefined : json['source'],
        'type': json['type'] == null ? undefined : json['type'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function FalconxExtractedInterestingStringToJSON(value?: FalconxExtractedInterestingString | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'filename': value['filename'],
        'process': value['process'],
        'source': value['source'],
        'type': value['type'],
        'value': value['value'],
    };
}

