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
 * @interface ParameterActivitySelectionParameter
 */
export interface ParameterActivitySelectionParameter {
    /**
     * A static activity ID that is a suitable candidate for specifying at provisioning time.
     * @type {string}
     * @memberof ParameterActivitySelectionParameter
     */
    id: string;
    /**
     * Statically defines properties that will be applied to the referenced activity.
     * @type {object}
     * @memberof ParameterActivitySelectionParameter
     */
    properties: object;
    /**
     * The ID of the node in the model the activity should be bound to at provisioning time. The activity will be generated along with a flow node that connects it to this source node.
     * @type {string}
     * @memberof ParameterActivitySelectionParameter
     */
    source: string;
}

/**
 * Check if a given object implements the ParameterActivitySelectionParameter interface.
 */
export function instanceOfParameterActivitySelectionParameter(value: object): value is ParameterActivitySelectionParameter {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('properties' in value) || value['properties'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function ParameterActivitySelectionParameterFromJSON(json: any): ParameterActivitySelectionParameter {
    return ParameterActivitySelectionParameterFromJSONTyped(json, false);
}

export function ParameterActivitySelectionParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterActivitySelectionParameter {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'properties': json['properties'],
        'source': json['source'],
    };
}

export function ParameterActivitySelectionParameterToJSON(value?: ParameterActivitySelectionParameter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'properties': value['properties'],
        'source': value['source'],
    };
}

