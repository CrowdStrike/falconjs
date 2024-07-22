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
import type { TypesIntegrationTask } from './TypesIntegrationTask';
import {
    TypesIntegrationTaskFromJSON,
    TypesIntegrationTaskFromJSONTyped,
    TypesIntegrationTaskToJSON,
} from './TypesIntegrationTask';

/**
 * 
 * @export
 * @interface TypesListIntegrationTasksResponse
 */
export interface TypesListIntegrationTasksResponse {
    /**
     * 
     * @type {Array<TypesIntegrationTask>}
     * @memberof TypesListIntegrationTasksResponse
     */
    integrationTasks?: Array<TypesIntegrationTask>;
}

/**
 * Check if a given object implements the TypesListIntegrationTasksResponse interface.
 */
export function instanceOfTypesListIntegrationTasksResponse(value: object): value is TypesListIntegrationTasksResponse {
    return true;
}

export function TypesListIntegrationTasksResponseFromJSON(json: any): TypesListIntegrationTasksResponse {
    return TypesListIntegrationTasksResponseFromJSONTyped(json, false);
}

export function TypesListIntegrationTasksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesListIntegrationTasksResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'integrationTasks': json['integration_tasks'] == null ? undefined : ((json['integration_tasks'] as Array<any>).map(TypesIntegrationTaskFromJSON)),
    };
}

export function TypesListIntegrationTasksResponseToJSON(value?: TypesListIntegrationTasksResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'integration_tasks': value['integrationTasks'] == null ? undefined : ((value['integrationTasks'] as Array<any>).map(TypesIntegrationTaskToJSON)),
    };
}

