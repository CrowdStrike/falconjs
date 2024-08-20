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
import type { GraphCondition } from './GraphCondition';
import {
    GraphConditionFromJSON,
    GraphConditionFromJSONTyped,
    GraphConditionToJSON,
} from './GraphCondition';

/**
 * 
 * @export
 * @interface GraphFlow
 */
export interface GraphFlow {
    /**
     * 
     * @type {GraphCondition}
     * @memberof GraphFlow
     */
    condition?: GraphCondition;
    /**
     * Reference to the ID of the node that is the source of the flow.
     * @type {string}
     * @memberof GraphFlow
     */
    source: string;
    /**
     * Alias for the source of the flow.
     * @type {string}
     * @memberof GraphFlow
     */
    sourceAlias?: string;
    /**
     * Reference to the ID of the node that is the target of the flow.
     * @type {string}
     * @memberof GraphFlow
     */
    target: string;
}

/**
 * Check if a given object implements the GraphFlow interface.
 */
export function instanceOfGraphFlow(value: object): value is GraphFlow {
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    return true;
}

export function GraphFlowFromJSON(json: any): GraphFlow {
    return GraphFlowFromJSONTyped(json, false);
}

export function GraphFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphFlow {
    if (json == null) {
        return json;
    }
    return {
        
        'condition': json['condition'] == null ? undefined : GraphConditionFromJSON(json['condition']),
        'source': json['source'],
        'sourceAlias': json['source_alias'] == null ? undefined : json['source_alias'],
        'target': json['target'],
    };
}

export function GraphFlowToJSON(value?: GraphFlow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'condition': GraphConditionToJSON(value['condition']),
        'source': value['source'],
        'source_alias': value['sourceAlias'],
        'target': value['target'],
    };
}

