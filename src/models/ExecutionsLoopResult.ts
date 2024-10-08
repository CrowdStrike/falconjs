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
import type { ExecutionsIterations } from "./ExecutionsIterations";
import { ExecutionsIterationsFromJSON, ExecutionsIterationsFromJSONTyped, ExecutionsIterationsToJSON } from "./ExecutionsIterations";
import type { ExecutionsChildExecutionResult } from "./ExecutionsChildExecutionResult";
import { ExecutionsChildExecutionResultFromJSON, ExecutionsChildExecutionResultFromJSONTyped, ExecutionsChildExecutionResultToJSON } from "./ExecutionsChildExecutionResult";

/**
 *
 * @export
 * @interface ExecutionsLoopResult
 */
export interface ExecutionsLoopResult {
    /**
     * Details of all child executions associated with the loop. A child execution is generated for each iteration of the input data.
     * @type {Array<ExecutionsChildExecutionResult>}
     * @memberof ExecutionsLoopResult
     */
    childExecutions: Array<ExecutionsChildExecutionResult>;
    /**
     * Timestamp of when the execution completed. Only present when status is an end state.
     * @type {Date}
     * @memberof ExecutionsLoopResult
     */
    endTimestamp?: Date;
    /**
     * When a node execution is in an error status this field is present and provides an error code that can be used to determine details why the failure occurred.
     * @type {number}
     * @memberof ExecutionsLoopResult
     */
    errorCode?: number;
    /**
     * When a node execution is in an error status this field is present and provides a user friendly error message.
     * @type {string}
     * @memberof ExecutionsLoopResult
     */
    errorMessage?: string;
    /**
     * Display name of the input field that the sub model is iterating over.
     * @type {string}
     * @memberof ExecutionsLoopResult
     */
    inputField: string;
    /**
     *
     * @type {ExecutionsIterations}
     * @memberof ExecutionsLoopResult
     */
    iterations: ExecutionsIterations;
    /**
     * Whether this node's result is mocked
     * @type {boolean}
     * @memberof ExecutionsLoopResult
     */
    mocked?: boolean;
    /**
     * Unique id of the node as specified in the definition.
     * @type {string}
     * @memberof ExecutionsLoopResult
     */
    nodeId: string;
    /**
     * Outputs from all the iterations of the sub model
     * @type {Array<object>}
     * @memberof ExecutionsLoopResult
     */
    outputs?: Array<object>;
    /**
     * Timestamp of when the execution first started.
     * @type {Date}
     * @memberof ExecutionsLoopResult
     */
    startTimestamp: Date;
    /**
     * Current status of execution for the activity.
     * @type {string}
     * @memberof ExecutionsLoopResult
     */
    status: string;
}

/**
 * Check if a given object implements the ExecutionsLoopResult interface.
 */
export function instanceOfExecutionsLoopResult(value: object): value is ExecutionsLoopResult {
    if (!("childExecutions" in value) || value["childExecutions"] === undefined) return false;
    if (!("inputField" in value) || value["inputField"] === undefined) return false;
    if (!("iterations" in value) || value["iterations"] === undefined) return false;
    if (!("nodeId" in value) || value["nodeId"] === undefined) return false;
    if (!("startTimestamp" in value) || value["startTimestamp"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    return true;
}

export function ExecutionsLoopResultFromJSON(json: any): ExecutionsLoopResult {
    return ExecutionsLoopResultFromJSONTyped(json, false);
}

export function ExecutionsLoopResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecutionsLoopResult {
    if (json == null) {
        return json;
    }
    return {
        childExecutions: (json["child_executions"] as Array<any>).map(ExecutionsChildExecutionResultFromJSON),
        endTimestamp: json["end_timestamp"] == null ? undefined : new Date(json["end_timestamp"]),
        errorCode: json["error_code"] == null ? undefined : json["error_code"],
        errorMessage: json["error_message"] == null ? undefined : json["error_message"],
        inputField: json["input_field"],
        iterations: ExecutionsIterationsFromJSON(json["iterations"]),
        mocked: json["mocked"] == null ? undefined : json["mocked"],
        nodeId: json["node_id"],
        outputs: json["outputs"] == null ? undefined : json["outputs"],
        startTimestamp: new Date(json["start_timestamp"]),
        status: json["status"],
    };
}

export function ExecutionsLoopResultToJSON(value?: ExecutionsLoopResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        child_executions: (value["childExecutions"] as Array<any>).map(ExecutionsChildExecutionResultToJSON),
        end_timestamp: value["endTimestamp"] == null ? undefined : value["endTimestamp"].toISOString(),
        error_code: value["errorCode"],
        error_message: value["errorMessage"],
        input_field: value["inputField"],
        iterations: ExecutionsIterationsToJSON(value["iterations"]),
        mocked: value["mocked"],
        node_id: value["nodeId"],
        outputs: value["outputs"],
        start_timestamp: value["startTimestamp"].toISOString(),
        status: value["status"],
    };
}
