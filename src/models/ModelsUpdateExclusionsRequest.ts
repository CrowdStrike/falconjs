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
import type { ModelsExclusionConditionRequest } from './ModelsExclusionConditionRequest';
import {
    ModelsExclusionConditionRequestFromJSON,
    ModelsExclusionConditionRequestFromJSONTyped,
    ModelsExclusionConditionRequestToJSON,
} from './ModelsExclusionConditionRequest';

/**
 * 
 * @export
 * @interface ModelsUpdateExclusionsRequest
 */
export interface ModelsUpdateExclusionsRequest {
    /**
     * 
     * @type {Array<ModelsExclusionConditionRequest>}
     * @memberof ModelsUpdateExclusionsRequest
     */
    conditions: Array<ModelsExclusionConditionRequest>;
}

/**
 * Check if a given object implements the ModelsUpdateExclusionsRequest interface.
 */
export function instanceOfModelsUpdateExclusionsRequest(value: object): value is ModelsUpdateExclusionsRequest {
    if (!('conditions' in value) || value['conditions'] === undefined) return false;
    return true;
}

export function ModelsUpdateExclusionsRequestFromJSON(json: any): ModelsUpdateExclusionsRequest {
    return ModelsUpdateExclusionsRequestFromJSONTyped(json, false);
}

export function ModelsUpdateExclusionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsUpdateExclusionsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'conditions': ((json['conditions'] as Array<any>).map(ModelsExclusionConditionRequestFromJSON)),
    };
}

export function ModelsUpdateExclusionsRequestToJSON(value?: ModelsUpdateExclusionsRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'conditions': ((value['conditions'] as Array<any>).map(ModelsExclusionConditionRequestToJSON)),
    };
}

