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
/**
 *
 * @export
 * @interface ClientCosts
 */
export interface ClientCosts {
    /**
     *
     * @type {number}
     * @memberof ClientCosts
     */
    liveCost: number;
    /**
     *
     * @type {number}
     * @memberof ClientCosts
     */
    liveCostRate: number;
    /**
     *
     * @type {number}
     * @memberof ClientCosts
     */
    staticCost: number;
    /**
     *
     * @type {number}
     * @memberof ClientCosts
     */
    staticCostRate: number;
}

/**
 * Check if a given object implements the ClientCosts interface.
 */
export function instanceOfClientCosts(value: object): value is ClientCosts {
    if (!("liveCost" in value) || value["liveCost"] === undefined) return false;
    if (!("liveCostRate" in value) || value["liveCostRate"] === undefined) return false;
    if (!("staticCost" in value) || value["staticCost"] === undefined) return false;
    if (!("staticCostRate" in value) || value["staticCostRate"] === undefined) return false;
    return true;
}

export function ClientCostsFromJSON(json: any): ClientCosts {
    return ClientCostsFromJSONTyped(json, false);
}

export function ClientCostsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientCosts {
    if (json == null) {
        return json;
    }
    return {
        liveCost: json["liveCost"],
        liveCostRate: json["liveCostRate"],
        staticCost: json["staticCost"],
        staticCostRate: json["staticCostRate"],
    };
}

export function ClientCostsToJSON(value?: ClientCosts | null): any {
    if (value == null) {
        return value;
    }
    return {
        liveCost: value["liveCost"],
        liveCostRate: value["liveCostRate"],
        staticCost: value["staticCost"],
        staticCostRate: value["staticCostRate"],
    };
}
