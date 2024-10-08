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
import type { GraphCondition } from "./GraphCondition";
import { GraphConditionFromJSON, GraphConditionFromJSONTyped, GraphConditionToJSON } from "./GraphCondition";

/**
 *
 * @export
 * @interface GraphMulti
 */
export interface GraphMulti {
    /**
     * Name of the field that contains the array in input data
     * @type {string}
     * @memberof GraphMulti
     */
    arrayField: string;
    /**
     * Display name of the field that contains the array in input data
     * @type {string}
     * @memberof GraphMulti
     */
    arrayFieldDisplayName: string;
    /**
     *
     * @type {GraphCondition}
     * @memberof GraphMulti
     */
    condition?: GraphCondition;
    /**
     * If true will allow the workflow to continue execution even if some loop iterations fail or when there are no iterations to execute
     * @type {boolean}
     * @memberof GraphMulti
     */
    continueOnPartialExecution: boolean;
    /**
     * Maximum number of seconds the submodel will run for, if this is exceeded no new iterations will run. If unset a default value is used during execution
     * @type {number}
     * @memberof GraphMulti
     */
    maxExecutionSeconds: number;
    /**
     * Maximum number of iterations allowed in sub model
     * @type {number}
     * @memberof GraphMulti
     */
    maxIterationCount: number;
    /**
     * Indicates the loop will run sequentially
     * @type {boolean}
     * @memberof GraphMulti
     */
    sequential?: boolean;
}

/**
 * Check if a given object implements the GraphMulti interface.
 */
export function instanceOfGraphMulti(value: object): value is GraphMulti {
    if (!("arrayField" in value) || value["arrayField"] === undefined) return false;
    if (!("arrayFieldDisplayName" in value) || value["arrayFieldDisplayName"] === undefined) return false;
    if (!("continueOnPartialExecution" in value) || value["continueOnPartialExecution"] === undefined) return false;
    if (!("maxExecutionSeconds" in value) || value["maxExecutionSeconds"] === undefined) return false;
    if (!("maxIterationCount" in value) || value["maxIterationCount"] === undefined) return false;
    return true;
}

export function GraphMultiFromJSON(json: any): GraphMulti {
    return GraphMultiFromJSONTyped(json, false);
}

export function GraphMultiFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphMulti {
    if (json == null) {
        return json;
    }
    return {
        arrayField: json["array_field"],
        arrayFieldDisplayName: json["array_field_display_name"],
        condition: json["condition"] == null ? undefined : GraphConditionFromJSON(json["condition"]),
        continueOnPartialExecution: json["continue_on_partial_execution"],
        maxExecutionSeconds: json["max_execution_seconds"],
        maxIterationCount: json["max_iteration_count"],
        sequential: json["sequential"] == null ? undefined : json["sequential"],
    };
}

export function GraphMultiToJSON(value?: GraphMulti | null): any {
    if (value == null) {
        return value;
    }
    return {
        array_field: value["arrayField"],
        array_field_display_name: value["arrayFieldDisplayName"],
        condition: GraphConditionToJSON(value["condition"]),
        continue_on_partial_execution: value["continueOnPartialExecution"],
        max_execution_seconds: value["maxExecutionSeconds"],
        max_iteration_count: value["maxIterationCount"],
        sequential: value["sequential"],
    };
}
