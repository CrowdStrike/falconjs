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
import type { V2ForLoop } from "./V2ForLoop";
import { V2ForLoopFromJSON, V2ForLoopFromJSONTyped, V2ForLoopToJSON } from "./V2ForLoop";
import type { V2Condition } from "./V2Condition";
import { V2ConditionFromJSON, V2ConditionFromJSONTyped, V2ConditionToJSON } from "./V2Condition";
import type { V2Activity } from "./V2Activity";
import { V2ActivityFromJSON, V2ActivityFromJSONTyped, V2ActivityToJSON } from "./V2Activity";
import type { V2Trigger } from "./V2Trigger";
import { V2TriggerFromJSON, V2TriggerFromJSONTyped, V2TriggerToJSON } from "./V2Trigger";

/**
 *
 * @export
 * @interface V2Loop
 */
export interface V2Loop {
    /**
     *
     * @type {{ [key: string]: V2Activity; }}
     * @memberof V2Loop
     */
    actions?: { [key: string]: V2Activity };
    /**
     *
     * @type {{ [key: string]: V2Condition; }}
     * @memberof V2Loop
     */
    conditions?: { [key: string]: V2Condition };
    /**
     *
     * @type {V2ForLoop}
     * @memberof V2Loop
     */
    _for: V2ForLoop;
    /**
     *
     * @type {Array<string>}
     * @memberof V2Loop
     */
    next?: Array<string>;
    /**
     *
     * @type {V2Trigger}
     * @memberof V2Loop
     */
    trigger?: V2Trigger;
}

/**
 * Check if a given object implements the V2Loop interface.
 */
export function instanceOfV2Loop(value: object): value is V2Loop {
    if (!("_for" in value) || value["_for"] === undefined) return false;
    return true;
}

export function V2LoopFromJSON(json: any): V2Loop {
    return V2LoopFromJSONTyped(json, false);
}

export function V2LoopFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Loop {
    if (json == null) {
        return json;
    }
    return {
        actions: json["actions"] == null ? undefined : mapValues(json["actions"], V2ActivityFromJSON),
        conditions: json["conditions"] == null ? undefined : mapValues(json["conditions"], V2ConditionFromJSON),
        _for: V2ForLoopFromJSON(json["for"]),
        next: json["next"] == null ? undefined : json["next"],
        trigger: json["trigger"] == null ? undefined : V2TriggerFromJSON(json["trigger"]),
    };
}

export function V2LoopToJSON(value?: V2Loop | null): any {
    if (value == null) {
        return value;
    }
    return {
        actions: value["actions"] == null ? undefined : mapValues(value["actions"], V2ActivityToJSON),
        conditions: value["conditions"] == null ? undefined : mapValues(value["conditions"], V2ConditionToJSON),
        for: V2ForLoopToJSON(value["_for"]),
        next: value["next"],
        trigger: V2TriggerToJSON(value["trigger"]),
    };
}
