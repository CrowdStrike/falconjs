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
 * @interface IoaExclusionsIoaExclusionUpdateReqV1
 */
export interface IoaExclusionsIoaExclusionUpdateReqV1 {
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    clRegex: string;
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    detectionJson: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    groups: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    ifnRegex: string;
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    patternId: string;
    /**
     * 
     * @type {string}
     * @memberof IoaExclusionsIoaExclusionUpdateReqV1
     */
    patternName: string;
}

/**
 * Check if a given object implements the IoaExclusionsIoaExclusionUpdateReqV1 interface.
 */
export function instanceOfIoaExclusionsIoaExclusionUpdateReqV1(value: object): value is IoaExclusionsIoaExclusionUpdateReqV1 {
    if (!('clRegex' in value) || value['clRegex'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('detectionJson' in value) || value['detectionJson'] === undefined) return false;
    if (!('groups' in value) || value['groups'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('ifnRegex' in value) || value['ifnRegex'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('patternId' in value) || value['patternId'] === undefined) return false;
    if (!('patternName' in value) || value['patternName'] === undefined) return false;
    return true;
}

export function IoaExclusionsIoaExclusionUpdateReqV1FromJSON(json: any): IoaExclusionsIoaExclusionUpdateReqV1 {
    return IoaExclusionsIoaExclusionUpdateReqV1FromJSONTyped(json, false);
}

export function IoaExclusionsIoaExclusionUpdateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): IoaExclusionsIoaExclusionUpdateReqV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'clRegex': json['cl_regex'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'description': json['description'],
        'detectionJson': json['detection_json'],
        'groups': json['groups'],
        'id': json['id'],
        'ifnRegex': json['ifn_regex'],
        'name': json['name'],
        'patternId': json['pattern_id'],
        'patternName': json['pattern_name'],
    };
}

export function IoaExclusionsIoaExclusionUpdateReqV1ToJSON(value?: IoaExclusionsIoaExclusionUpdateReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cl_regex': value['clRegex'],
        'comment': value['comment'],
        'description': value['description'],
        'detection_json': value['detectionJson'],
        'groups': value['groups'],
        'id': value['id'],
        'ifn_regex': value['ifnRegex'],
        'name': value['name'],
        'pattern_id': value['patternId'],
        'pattern_name': value['patternName'],
    };
}

