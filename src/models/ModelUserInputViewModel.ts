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
 * @interface ModelUserInputViewModel
 */
export interface ModelUserInputViewModel {
    /**
     * if not empty, only listed inputs are allowed
     * @type {Array<string>}
     * @memberof ModelUserInputViewModel
     */
    allowedInputs: Array<string>;
    /**
     * if not empty, only listed responders are allowed to provide input
     * @type {Array<string>}
     * @memberof ModelUserInputViewModel
     */
    allowedResponders: Array<string>;
    /**
     * whether or not the user input is completed yet
     * @type {boolean}
     * @memberof ModelUserInputViewModel
     */
    completed: boolean;
    /**
     * time at which the user input was modified
     * @type {Date}
     * @memberof ModelUserInputViewModel
     */
    completedAt: Date;
    /**
     * time at which the user input was created
     * @type {Date}
     * @memberof ModelUserInputViewModel
     */
    createdAt: Date;
    /**
     * ID of the user input
     * @type {string}
     * @memberof ModelUserInputViewModel
     */
    id: string;
    /**
     * input provided by a responder user
     * @type {string}
     * @memberof ModelUserInputViewModel
     */
    input: string;
    /**
     * note added to user input at the time an input is provided
     * @type {string}
     * @memberof ModelUserInputViewModel
     */
    note: string;
    /**
     * user responding to the user input request
     * @type {string}
     * @memberof ModelUserInputViewModel
     */
    responder: string;
    /**
     * time after which the user input may be expired and no longer actionable
     * @type {Date}
     * @memberof ModelUserInputViewModel
     */
    timeoutAt: Date;
}

/**
 * Check if a given object implements the ModelUserInputViewModel interface.
 */
export function instanceOfModelUserInputViewModel(value: object): value is ModelUserInputViewModel {
    if (!("allowedInputs" in value) || value["allowedInputs"] === undefined) return false;
    if (!("allowedResponders" in value) || value["allowedResponders"] === undefined) return false;
    if (!("completed" in value) || value["completed"] === undefined) return false;
    if (!("completedAt" in value) || value["completedAt"] === undefined) return false;
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("input" in value) || value["input"] === undefined) return false;
    if (!("note" in value) || value["note"] === undefined) return false;
    if (!("responder" in value) || value["responder"] === undefined) return false;
    if (!("timeoutAt" in value) || value["timeoutAt"] === undefined) return false;
    return true;
}

export function ModelUserInputViewModelFromJSON(json: any): ModelUserInputViewModel {
    return ModelUserInputViewModelFromJSONTyped(json, false);
}

export function ModelUserInputViewModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelUserInputViewModel {
    if (json == null) {
        return json;
    }
    return {
        allowedInputs: json["allowed_inputs"],
        allowedResponders: json["allowed_responders"],
        completed: json["completed"],
        completedAt: new Date(json["completed_at"]),
        createdAt: new Date(json["created_at"]),
        id: json["id"],
        input: json["input"],
        note: json["note"],
        responder: json["responder"],
        timeoutAt: new Date(json["timeout_at"]),
    };
}

export function ModelUserInputViewModelToJSON(value?: ModelUserInputViewModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        allowed_inputs: value["allowedInputs"],
        allowed_responders: value["allowedResponders"],
        completed: value["completed"],
        completed_at: value["completedAt"].toISOString(),
        created_at: value["createdAt"].toISOString(),
        id: value["id"],
        input: value["input"],
        note: value["note"],
        responder: value["responder"],
        timeout_at: value["timeoutAt"].toISOString(),
    };
}
