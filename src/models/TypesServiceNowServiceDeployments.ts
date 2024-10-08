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
import type { TypesServiceNowDeployment } from "./TypesServiceNowDeployment";
import { TypesServiceNowDeploymentFromJSON, TypesServiceNowDeploymentFromJSONTyped, TypesServiceNowDeploymentToJSON } from "./TypesServiceNowDeployment";

/**
 *
 * @export
 * @interface TypesServiceNowServiceDeployments
 */
export interface TypesServiceNowServiceDeployments {
    /**
     *
     * @type {Array<TypesServiceNowDeployment>}
     * @memberof TypesServiceNowServiceDeployments
     */
    deployments: Array<TypesServiceNowDeployment>;
    /**
     *
     * @type {string}
     * @memberof TypesServiceNowServiceDeployments
     */
    serviceId: string;
}

/**
 * Check if a given object implements the TypesServiceNowServiceDeployments interface.
 */
export function instanceOfTypesServiceNowServiceDeployments(value: object): value is TypesServiceNowServiceDeployments {
    if (!("deployments" in value) || value["deployments"] === undefined) return false;
    if (!("serviceId" in value) || value["serviceId"] === undefined) return false;
    return true;
}

export function TypesServiceNowServiceDeploymentsFromJSON(json: any): TypesServiceNowServiceDeployments {
    return TypesServiceNowServiceDeploymentsFromJSONTyped(json, false);
}

export function TypesServiceNowServiceDeploymentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesServiceNowServiceDeployments {
    if (json == null) {
        return json;
    }
    return {
        deployments: (json["deployments"] as Array<any>).map(TypesServiceNowDeploymentFromJSON),
        serviceId: json["service_id"],
    };
}

export function TypesServiceNowServiceDeploymentsToJSON(value?: TypesServiceNowServiceDeployments | null): any {
    if (value == null) {
        return value;
    }
    return {
        deployments: (value["deployments"] as Array<any>).map(TypesServiceNowDeploymentToJSON),
        service_id: value["serviceId"],
    };
}
