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
import type { ScheduledexclusionsRepeated } from "./ScheduledexclusionsRepeated";
import { ScheduledexclusionsRepeatedFromJSON, ScheduledexclusionsRepeatedFromJSONTyped, ScheduledexclusionsRepeatedToJSON } from "./ScheduledexclusionsRepeated";

/**
 *
 * @export
 * @interface ScheduledexclusionsCreateRequest
 */
export interface ScheduledexclusionsCreateRequest {
    /**
     *
     * @type {string}
     * @memberof ScheduledexclusionsCreateRequest
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledexclusionsCreateRequest
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledexclusionsCreateRequest
     */
    policyId?: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledexclusionsCreateRequest
     */
    processes?: string;
    /**
     *
     * @type {ScheduledexclusionsRepeated}
     * @memberof ScheduledexclusionsCreateRequest
     */
    repeated?: ScheduledexclusionsRepeated;
    /**
     *
     * @type {string}
     * @memberof ScheduledexclusionsCreateRequest
     */
    scheduleEnd?: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledexclusionsCreateRequest
     */
    scheduleStart?: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledexclusionsCreateRequest
     */
    timezone: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledexclusionsCreateRequest
     */
    users?: string;
}

/**
 * Check if a given object implements the ScheduledexclusionsCreateRequest interface.
 */
export function instanceOfScheduledexclusionsCreateRequest(value: object): value is ScheduledexclusionsCreateRequest {
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("timezone" in value) || value["timezone"] === undefined) return false;
    return true;
}

export function ScheduledexclusionsCreateRequestFromJSON(json: any): ScheduledexclusionsCreateRequest {
    return ScheduledexclusionsCreateRequestFromJSONTyped(json, false);
}

export function ScheduledexclusionsCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledexclusionsCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        description: json["description"] == null ? undefined : json["description"],
        name: json["name"],
        policyId: json["policy_id"] == null ? undefined : json["policy_id"],
        processes: json["processes"] == null ? undefined : json["processes"],
        repeated: json["repeated"] == null ? undefined : ScheduledexclusionsRepeatedFromJSON(json["repeated"]),
        scheduleEnd: json["schedule_end"] == null ? undefined : json["schedule_end"],
        scheduleStart: json["schedule_start"] == null ? undefined : json["schedule_start"],
        timezone: json["timezone"],
        users: json["users"] == null ? undefined : json["users"],
    };
}

export function ScheduledexclusionsCreateRequestToJSON(value?: ScheduledexclusionsCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        description: value["description"],
        name: value["name"],
        policy_id: value["policyId"],
        processes: value["processes"],
        repeated: ScheduledexclusionsRepeatedToJSON(value["repeated"]),
        schedule_end: value["scheduleEnd"],
        schedule_start: value["scheduleStart"],
        timezone: value["timezone"],
        users: value["users"],
    };
}
