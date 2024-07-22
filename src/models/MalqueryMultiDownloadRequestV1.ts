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
 * @interface MalqueryMultiDownloadRequestV1
 */
export interface MalqueryMultiDownloadRequestV1 {
    /**
     * List of sample sha256 ids
     * @type {Array<string>}
     * @memberof MalqueryMultiDownloadRequestV1
     */
    samples: Array<string>;
}

/**
 * Check if a given object implements the MalqueryMultiDownloadRequestV1 interface.
 */
export function instanceOfMalqueryMultiDownloadRequestV1(value: object): value is MalqueryMultiDownloadRequestV1 {
    if (!('samples' in value) || value['samples'] === undefined) return false;
    return true;
}

export function MalqueryMultiDownloadRequestV1FromJSON(json: any): MalqueryMultiDownloadRequestV1 {
    return MalqueryMultiDownloadRequestV1FromJSONTyped(json, false);
}

export function MalqueryMultiDownloadRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): MalqueryMultiDownloadRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'samples': json['samples'],
    };
}

export function MalqueryMultiDownloadRequestV1ToJSON(value?: MalqueryMultiDownloadRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'samples': value['samples'],
    };
}

