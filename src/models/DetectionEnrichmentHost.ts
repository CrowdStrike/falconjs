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
import type { DetectionHostNetwork } from './DetectionHostNetwork';
import {
    DetectionHostNetworkFromJSON,
    DetectionHostNetworkFromJSONTyped,
    DetectionHostNetworkToJSON,
} from './DetectionHostNetwork';

/**
 * 
 * @export
 * @interface DetectionEnrichmentHost
 */
export interface DetectionEnrichmentHost {
    /**
     * 
     * @type {string}
     * @memberof DetectionEnrichmentHost
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof DetectionEnrichmentHost
     */
    launchTime?: number;
    /**
     * 
     * @type {string}
     * @memberof DetectionEnrichmentHost
     */
    name?: string;
    /**
     * 
     * @type {DetectionHostNetwork}
     * @memberof DetectionEnrichmentHost
     */
    network?: DetectionHostNetwork;
    /**
     * 
     * @type {string}
     * @memberof DetectionEnrichmentHost
     */
    platform?: string;
    /**
     * 
     * @type {string}
     * @memberof DetectionEnrichmentHost
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof DetectionEnrichmentHost
     */
    type?: string;
}

/**
 * Check if a given object implements the DetectionEnrichmentHost interface.
 */
export function instanceOfDetectionEnrichmentHost(value: object): value is DetectionEnrichmentHost {
    return true;
}

export function DetectionEnrichmentHostFromJSON(json: any): DetectionEnrichmentHost {
    return DetectionEnrichmentHostFromJSONTyped(json, false);
}

export function DetectionEnrichmentHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectionEnrichmentHost {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'launchTime': json['launch_time'] == null ? undefined : json['launch_time'],
        'name': json['name'] == null ? undefined : json['name'],
        'network': json['network'] == null ? undefined : DetectionHostNetworkFromJSON(json['network']),
        'platform': json['platform'] == null ? undefined : json['platform'],
        'region': json['region'] == null ? undefined : json['region'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function DetectionEnrichmentHostToJSON(value?: DetectionEnrichmentHost | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'launch_time': value['launchTime'],
        'name': value['name'],
        'network': DetectionHostNetworkToJSON(value['network']),
        'platform': value['platform'],
        'region': value['region'],
        'type': value['type'],
    };
}

