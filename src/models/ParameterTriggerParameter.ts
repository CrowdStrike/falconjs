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
import type { ParameterTriggerFieldParameter } from './ParameterTriggerFieldParameter';
import {
    ParameterTriggerFieldParameterFromJSON,
    ParameterTriggerFieldParameterFromJSONTyped,
    ParameterTriggerFieldParameterToJSON,
} from './ParameterTriggerFieldParameter';

/**
 * 
 * @export
 * @interface ParameterTriggerParameter
 */
export interface ParameterTriggerParameter {
    /**
     * Contains a mapping of each parameterized trigger field with default values.
     * @type {{ [key: string]: ParameterTriggerFieldParameter; }}
     * @memberof ParameterTriggerParameter
     */
    fields: { [key: string]: ParameterTriggerFieldParameter; };
    /**
     * The graph node ID for where these conditions reside.
     * @type {string}
     * @memberof ParameterTriggerParameter
     */
    nodeId: string;
}

/**
 * Check if a given object implements the ParameterTriggerParameter interface.
 */
export function instanceOfParameterTriggerParameter(value: object): value is ParameterTriggerParameter {
    if (!('fields' in value) || value['fields'] === undefined) return false;
    if (!('nodeId' in value) || value['nodeId'] === undefined) return false;
    return true;
}

export function ParameterTriggerParameterFromJSON(json: any): ParameterTriggerParameter {
    return ParameterTriggerParameterFromJSONTyped(json, false);
}

export function ParameterTriggerParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterTriggerParameter {
    if (json == null) {
        return json;
    }
    return {
        
        'fields': (mapValues(json['fields'], ParameterTriggerFieldParameterFromJSON)),
        'nodeId': json['node_id'],
    };
}

export function ParameterTriggerParameterToJSON(value?: ParameterTriggerParameter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'fields': (mapValues(value['fields'], ParameterTriggerFieldParameterToJSON)),
        'node_id': value['nodeId'],
    };
}

