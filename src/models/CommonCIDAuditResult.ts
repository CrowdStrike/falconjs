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
import type { CommonOSAudit } from './CommonOSAudit';
import {
    CommonOSAuditFromJSON,
    CommonOSAuditFromJSONTyped,
    CommonOSAuditToJSON,
} from './CommonOSAudit';

/**
 * 
 * @export
 * @interface CommonCIDAuditResult
 */
export interface CommonCIDAuditResult {
    /**
     * 
     * @type {number}
     * @memberof CommonCIDAuditResult
     */
    averageOverallScore: number;
    /**
     * 
     * @type {string}
     * @memberof CommonCIDAuditResult
     */
    cid: string;
    /**
     * 
     * @type {number}
     * @memberof CommonCIDAuditResult
     */
    numAids: number;
    /**
     * 
     * @type {Array<CommonOSAudit>}
     * @memberof CommonCIDAuditResult
     */
    platforms: Array<CommonOSAudit>;
}

/**
 * Check if a given object implements the CommonCIDAuditResult interface.
 */
export function instanceOfCommonCIDAuditResult(value: object): value is CommonCIDAuditResult {
    if (!('averageOverallScore' in value) || value['averageOverallScore'] === undefined) return false;
    if (!('cid' in value) || value['cid'] === undefined) return false;
    if (!('numAids' in value) || value['numAids'] === undefined) return false;
    if (!('platforms' in value) || value['platforms'] === undefined) return false;
    return true;
}

export function CommonCIDAuditResultFromJSON(json: any): CommonCIDAuditResult {
    return CommonCIDAuditResultFromJSONTyped(json, false);
}

export function CommonCIDAuditResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonCIDAuditResult {
    if (json == null) {
        return json;
    }
    return {
        
        'averageOverallScore': json['average_overall_score'],
        'cid': json['cid'],
        'numAids': json['num_aids'],
        'platforms': ((json['platforms'] as Array<any>).map(CommonOSAuditFromJSON)),
    };
}

export function CommonCIDAuditResultToJSON(value?: CommonCIDAuditResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'average_overall_score': value['averageOverallScore'],
        'cid': value['cid'],
        'num_aids': value['numAids'],
        'platforms': ((value['platforms'] as Array<any>).map(CommonOSAuditToJSON)),
    };
}

