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
import type { DeviceControlSettingsReqV1 } from "./DeviceControlSettingsReqV1";
import { DeviceControlSettingsReqV1FromJSON, DeviceControlSettingsReqV1FromJSONTyped, DeviceControlSettingsReqV1ToJSON } from "./DeviceControlSettingsReqV1";

/**
 *
 * @export
 * @interface DeviceControlCreatePolicyReqV1
 */
export interface DeviceControlCreatePolicyReqV1 {
    /**
     * If specified the settings of the DeviceControl policy identified by the id will be used
     * @type {string}
     * @memberof DeviceControlCreatePolicyReqV1
     */
    cloneId?: string;
    /**
     * The description to use when creating the policy
     * @type {string}
     * @memberof DeviceControlCreatePolicyReqV1
     */
    description?: string;
    /**
     * The name to use when creating the policy
     * @type {string}
     * @memberof DeviceControlCreatePolicyReqV1
     */
    name: string;
    /**
     * The name of the platform
     * @type {string}
     * @memberof DeviceControlCreatePolicyReqV1
     */
    platformName: DeviceControlCreatePolicyReqV1PlatformNameEnum;
    /**
     *
     * @type {DeviceControlSettingsReqV1}
     * @memberof DeviceControlCreatePolicyReqV1
     */
    settings?: DeviceControlSettingsReqV1;
}

/**
 * @export
 */
export const DeviceControlCreatePolicyReqV1PlatformNameEnum = {
    Windows: "Windows",
    Mac: "Mac",
    Linux: "Linux",
} as const;
export type DeviceControlCreatePolicyReqV1PlatformNameEnum = (typeof DeviceControlCreatePolicyReqV1PlatformNameEnum)[keyof typeof DeviceControlCreatePolicyReqV1PlatformNameEnum];

/**
 * Check if a given object implements the DeviceControlCreatePolicyReqV1 interface.
 */
export function instanceOfDeviceControlCreatePolicyReqV1(value: object): value is DeviceControlCreatePolicyReqV1 {
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("platformName" in value) || value["platformName"] === undefined) return false;
    return true;
}

export function DeviceControlCreatePolicyReqV1FromJSON(json: any): DeviceControlCreatePolicyReqV1 {
    return DeviceControlCreatePolicyReqV1FromJSONTyped(json, false);
}

export function DeviceControlCreatePolicyReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceControlCreatePolicyReqV1 {
    if (json == null) {
        return json;
    }
    return {
        cloneId: json["clone_id"] == null ? undefined : json["clone_id"],
        description: json["description"] == null ? undefined : json["description"],
        name: json["name"],
        platformName: json["platform_name"],
        settings: json["settings"] == null ? undefined : DeviceControlSettingsReqV1FromJSON(json["settings"]),
    };
}

export function DeviceControlCreatePolicyReqV1ToJSON(value?: DeviceControlCreatePolicyReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        clone_id: value["cloneId"],
        description: value["description"],
        name: value["name"],
        platform_name: value["platformName"],
        settings: DeviceControlSettingsReqV1ToJSON(value["settings"]),
    };
}
