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
import type { V2ActivityProperties } from './V2ActivityProperties';
import {
    V2ActivityPropertiesFromJSON,
    V2ActivityPropertiesFromJSONTyped,
    V2ActivityPropertiesToJSON,
} from './V2ActivityProperties';

/**
 * 
 * @export
 * @interface V2ActivityParameters
 */
export interface V2ActivityParameters {
    /**
     * 
     * @type {{ [key: string]: V2ActivityProperties; }}
     * @memberof V2ActivityParameters
     */
    _configuration: { [key: string]: V2ActivityProperties; };
}

/**
 * Check if a given object implements the V2ActivityParameters interface.
 */
export function instanceOfV2ActivityParameters(value: object): value is V2ActivityParameters {
    if (!('_configuration' in value) || value['_configuration'] === undefined) return false;
    return true;
}

export function V2ActivityParametersFromJSON(json: any): V2ActivityParameters {
    return V2ActivityParametersFromJSONTyped(json, false);
}

export function V2ActivityParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ActivityParameters {
    if (json == null) {
        return json;
    }
    return {
        
        '_configuration': (mapValues(json['configuration'], V2ActivityPropertiesFromJSON)),
    };
}

export function V2ActivityParametersToJSON(value?: V2ActivityParameters | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'configuration': (mapValues(value['_configuration'], V2ActivityPropertiesToJSON)),
    };
}

