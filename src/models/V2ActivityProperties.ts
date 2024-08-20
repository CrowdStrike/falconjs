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
import type { ParameterActivityConfigParameterValue } from './ParameterActivityConfigParameterValue';
import {
    ParameterActivityConfigParameterValueFromJSON,
    ParameterActivityConfigParameterValueFromJSONTyped,
    ParameterActivityConfigParameterValueToJSON,
} from './ParameterActivityConfigParameterValue';

/**
 * 
 * @export
 * @interface V2ActivityProperties
 */
export interface V2ActivityProperties {
    /**
     * 
     * @type {{ [key: string]: ParameterActivityConfigParameterValue; }}
     * @memberof V2ActivityProperties
     */
    properties: { [key: string]: ParameterActivityConfigParameterValue; };
}

/**
 * Check if a given object implements the V2ActivityProperties interface.
 */
export function instanceOfV2ActivityProperties(value: object): value is V2ActivityProperties {
    if (!('properties' in value) || value['properties'] === undefined) return false;
    return true;
}

export function V2ActivityPropertiesFromJSON(json: any): V2ActivityProperties {
    return V2ActivityPropertiesFromJSONTyped(json, false);
}

export function V2ActivityPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ActivityProperties {
    if (json == null) {
        return json;
    }
    return {
        
        'properties': (mapValues(json['properties'], ParameterActivityConfigParameterValueFromJSON)),
    };
}

export function V2ActivityPropertiesToJSON(value?: V2ActivityProperties | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'properties': (mapValues(value['properties'], ParameterActivityConfigParameterValueToJSON)),
    };
}

