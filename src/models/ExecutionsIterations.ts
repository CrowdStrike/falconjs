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
 * @interface ExecutionsIterations
 */
export interface ExecutionsIterations {
    /**
     * count of executions with completed status.
     * @type {number}
     * @memberof ExecutionsIterations
     */
    completed: number;
    /**
     * count of executions with failed status.
     * @type {number}
     * @memberof ExecutionsIterations
     */
    failed: number;
    /**
     * count of executions with in progress status
     * @type {number}
     * @memberof ExecutionsIterations
     */
    inProgress: number;
    /**
     * true when sub-model has non recoverable status
     * @type {boolean}
     * @memberof ExecutionsIterations
     */
    isNonrecoverable: boolean;
    /**
     * count of executions that are pending
     * @type {number}
     * @memberof ExecutionsIterations
     */
    pending: number;
    /**
     * count of total executions.
     * @type {number}
     * @memberof ExecutionsIterations
     */
    total: number;
}

/**
 * Check if a given object implements the ExecutionsIterations interface.
 */
export function instanceOfExecutionsIterations(value: object): value is ExecutionsIterations {
    if (!("completed" in value) || value["completed"] === undefined) return false;
    if (!("failed" in value) || value["failed"] === undefined) return false;
    if (!("inProgress" in value) || value["inProgress"] === undefined) return false;
    if (!("isNonrecoverable" in value) || value["isNonrecoverable"] === undefined) return false;
    if (!("pending" in value) || value["pending"] === undefined) return false;
    if (!("total" in value) || value["total"] === undefined) return false;
    return true;
}

export function ExecutionsIterationsFromJSON(json: any): ExecutionsIterations {
    return ExecutionsIterationsFromJSONTyped(json, false);
}

export function ExecutionsIterationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecutionsIterations {
    if (json == null) {
        return json;
    }
    return {
        completed: json["completed"],
        failed: json["failed"],
        inProgress: json["in_progress"],
        isNonrecoverable: json["is_nonrecoverable"],
        pending: json["pending"],
        total: json["total"],
    };
}

export function ExecutionsIterationsToJSON(value?: ExecutionsIterations | null): any {
    if (value == null) {
        return value;
    }
    return {
        completed: value["completed"],
        failed: value["failed"],
        in_progress: value["inProgress"],
        is_nonrecoverable: value["isNonrecoverable"],
        pending: value["pending"],
        total: value["total"],
    };
}
