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
import type { TypesIntegration } from './TypesIntegration';
import {
    TypesIntegrationFromJSON,
    TypesIntegrationFromJSONTyped,
    TypesIntegrationToJSON,
} from './TypesIntegration';
import type { TypesExecutorNode } from './TypesExecutorNode';
import {
    TypesExecutorNodeFromJSON,
    TypesExecutorNodeFromJSONTyped,
    TypesExecutorNodeToJSON,
} from './TypesExecutorNode';

/**
 * 
 * @export
 * @interface TypesIntegrationResponse
 */
export interface TypesIntegrationResponse {
    /**
     * 
     * @type {TypesIntegration}
     * @memberof TypesIntegrationResponse
     */
    integration?: TypesIntegration;
    /**
     * 
     * @type {TypesExecutorNode}
     * @memberof TypesIntegrationResponse
     */
    newExecutorNode?: TypesExecutorNode;
}

/**
 * Check if a given object implements the TypesIntegrationResponse interface.
 */
export function instanceOfTypesIntegrationResponse(value: object): value is TypesIntegrationResponse {
    return true;
}

export function TypesIntegrationResponseFromJSON(json: any): TypesIntegrationResponse {
    return TypesIntegrationResponseFromJSONTyped(json, false);
}

export function TypesIntegrationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesIntegrationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'integration': json['integration'] == null ? undefined : TypesIntegrationFromJSON(json['integration']),
        'newExecutorNode': json['new_executor_node'] == null ? undefined : TypesExecutorNodeFromJSON(json['new_executor_node']),
    };
}

export function TypesIntegrationResponseToJSON(value?: TypesIntegrationResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'integration': TypesIntegrationToJSON(value['integration']),
        'new_executor_node': TypesExecutorNodeToJSON(value['newExecutorNode']),
    };
}

