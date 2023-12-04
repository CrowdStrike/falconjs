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

import { exists, mapValues } from "../runtime";
import type { SensorUpdateSettingsReqV1 } from "./SensorUpdateSettingsReqV1";
import { SensorUpdateSettingsReqV1FromJSON, SensorUpdateSettingsReqV1FromJSONTyped, SensorUpdateSettingsReqV1ToJSON } from "./SensorUpdateSettingsReqV1";

/**
 * An update for a specific policy
 * @export
 * @interface SensorUpdateUpdatePolicyReqV1
 */
export interface SensorUpdateUpdatePolicyReqV1 {
    /**
     * The new description to assign to the policy
     * @type {string}
     * @memberof SensorUpdateUpdatePolicyReqV1
     */
    description?: string;
    /**
     * The id of the policy to update
     * @type {string}
     * @memberof SensorUpdateUpdatePolicyReqV1
     */
    id: string;
    /**
     * The new name to assign to the policy
     * @type {string}
     * @memberof SensorUpdateUpdatePolicyReqV1
     */
    name?: string;
    /**
     *
     * @type {SensorUpdateSettingsReqV1}
     * @memberof SensorUpdateUpdatePolicyReqV1
     */
    settings?: SensorUpdateSettingsReqV1;
}

/**
 * Check if a given object implements the SensorUpdateUpdatePolicyReqV1 interface.
 */
export function instanceOfSensorUpdateUpdatePolicyReqV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SensorUpdateUpdatePolicyReqV1FromJSON(json: any): SensorUpdateUpdatePolicyReqV1 {
    return SensorUpdateUpdatePolicyReqV1FromJSONTyped(json, false);
}

export function SensorUpdateUpdatePolicyReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorUpdateUpdatePolicyReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        description: !exists(json, "description") ? undefined : json["description"],
        id: json["id"],
        name: !exists(json, "name") ? undefined : json["name"],
        settings: !exists(json, "settings") ? undefined : SensorUpdateSettingsReqV1FromJSON(json["settings"]),
    };
}

export function SensorUpdateUpdatePolicyReqV1ToJSON(value?: SensorUpdateUpdatePolicyReqV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        description: value.description,
        id: value.id,
        name: value.name,
        settings: SensorUpdateSettingsReqV1ToJSON(value.settings),
    };
}
