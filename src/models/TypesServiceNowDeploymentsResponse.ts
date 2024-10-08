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

import { mapValues } from "../runtime";
import type { TypesServiceNowServiceDeployments } from "./TypesServiceNowServiceDeployments";
import { TypesServiceNowServiceDeploymentsFromJSON, TypesServiceNowServiceDeploymentsFromJSONTyped, TypesServiceNowServiceDeploymentsToJSON } from "./TypesServiceNowServiceDeployments";

/**
 *
 * @export
 * @interface TypesServiceNowDeploymentsResponse
 */
export interface TypesServiceNowDeploymentsResponse {
    /**
     *
     * @type {Array<TypesServiceNowServiceDeployments>}
     * @memberof TypesServiceNowDeploymentsResponse
     */
    deploymentUnits: Array<TypesServiceNowServiceDeployments>;
    /**
     *
     * @type {string}
     * @memberof TypesServiceNowDeploymentsResponse
     */
    error: string;
    /**
     *
     * @type {number}
     * @memberof TypesServiceNowDeploymentsResponse
     */
    totalDeployments: number;
}

/**
 * Check if a given object implements the TypesServiceNowDeploymentsResponse interface.
 */
export function instanceOfTypesServiceNowDeploymentsResponse(value: object): value is TypesServiceNowDeploymentsResponse {
    if (!("deploymentUnits" in value) || value["deploymentUnits"] === undefined) return false;
    if (!("error" in value) || value["error"] === undefined) return false;
    if (!("totalDeployments" in value) || value["totalDeployments"] === undefined) return false;
    return true;
}

export function TypesServiceNowDeploymentsResponseFromJSON(json: any): TypesServiceNowDeploymentsResponse {
    return TypesServiceNowDeploymentsResponseFromJSONTyped(json, false);
}

export function TypesServiceNowDeploymentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesServiceNowDeploymentsResponse {
    if (json == null) {
        return json;
    }
    return {
        deploymentUnits: (json["deployment_units"] as Array<any>).map(TypesServiceNowServiceDeploymentsFromJSON),
        error: json["error"],
        totalDeployments: json["total_deployments"],
    };
}

export function TypesServiceNowDeploymentsResponseToJSON(value?: TypesServiceNowDeploymentsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        deployment_units: (value["deploymentUnits"] as Array<any>).map(TypesServiceNowServiceDeploymentsToJSON),
        error: value["error"],
        total_deployments: value["totalDeployments"],
    };
}
