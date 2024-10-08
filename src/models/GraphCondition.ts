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
 * @interface GraphCondition
 */
export interface GraphCondition {
    /**
     * User friendly description of the FQL expression. This would be supplied by the UI/caller and is not set by the API.
     * @type {Array<string>}
     * @memberof GraphCondition
     */
    display?: Array<string>;
    /**
     * Indicates the boolean result of FQL expression when present. This field should be used only in the api response of a graph execution result
     * @type {boolean}
     * @memberof GraphCondition
     */
    evaluated?: boolean;
    /**
     * FQL expression for the condition on the sequence flow.
     * @type {string}
     * @memberof GraphCondition
     */
    expression?: string;
}

/**
 * Check if a given object implements the GraphCondition interface.
 */
export function instanceOfGraphCondition(value: object): value is GraphCondition {
    return true;
}

export function GraphConditionFromJSON(json: any): GraphCondition {
    return GraphConditionFromJSONTyped(json, false);
}

export function GraphConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphCondition {
    if (json == null) {
        return json;
    }
    return {
        display: json["display"] == null ? undefined : json["display"],
        evaluated: json["evaluated"] == null ? undefined : json["evaluated"],
        expression: json["expression"] == null ? undefined : json["expression"],
    };
}

export function GraphConditionToJSON(value?: GraphCondition | null): any {
    if (value == null) {
        return value;
    }
    return {
        display: value["display"],
        evaluated: value["evaluated"],
        expression: value["expression"],
    };
}
