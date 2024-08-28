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
import type { DeviceControlExceptionRespV1 } from "./DeviceControlExceptionRespV1";
import { DeviceControlExceptionRespV1FromJSON, DeviceControlExceptionRespV1FromJSONTyped, DeviceControlExceptionRespV1ToJSON } from "./DeviceControlExceptionRespV1";

/**
 *
 * @export
 * @interface DeviceControlUSBClassExceptionsResponse
 */
export interface DeviceControlUSBClassExceptionsResponse {
    /**
     * Policy action
     * @type {string}
     * @memberof DeviceControlUSBClassExceptionsResponse
     */
    action: DeviceControlUSBClassExceptionsResponseActionEnum;
    /**
     * Exceptions to the rules of this policy setting
     * @type {Array<DeviceControlExceptionRespV1>}
     * @memberof DeviceControlUSBClassExceptionsResponse
     */
    exceptions: Array<DeviceControlExceptionRespV1>;
    /**
     * USB Class id
     * @type {string}
     * @memberof DeviceControlUSBClassExceptionsResponse
     */
    id: string;
}

/**
 * @export
 */
export const DeviceControlUSBClassExceptionsResponseActionEnum = {
    FullAccess: "FULL_ACCESS",
    FullBlock: "FULL_BLOCK",
    ReadOnly: "READ_ONLY",
} as const;
export type DeviceControlUSBClassExceptionsResponseActionEnum = (typeof DeviceControlUSBClassExceptionsResponseActionEnum)[keyof typeof DeviceControlUSBClassExceptionsResponseActionEnum];

/**
 * Check if a given object implements the DeviceControlUSBClassExceptionsResponse interface.
 */
export function instanceOfDeviceControlUSBClassExceptionsResponse(value: object): value is DeviceControlUSBClassExceptionsResponse {
    if (!("action" in value) || value["action"] === undefined) return false;
    if (!("exceptions" in value) || value["exceptions"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    return true;
}

export function DeviceControlUSBClassExceptionsResponseFromJSON(json: any): DeviceControlUSBClassExceptionsResponse {
    return DeviceControlUSBClassExceptionsResponseFromJSONTyped(json, false);
}

export function DeviceControlUSBClassExceptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceControlUSBClassExceptionsResponse {
    if (json == null) {
        return json;
    }
    return {
        action: json["action"],
        exceptions: (json["exceptions"] as Array<any>).map(DeviceControlExceptionRespV1FromJSON),
        id: json["id"],
    };
}

export function DeviceControlUSBClassExceptionsResponseToJSON(value?: DeviceControlUSBClassExceptionsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        action: value["action"],
        exceptions: (value["exceptions"] as Array<any>).map(DeviceControlExceptionRespV1ToJSON),
        id: value["id"],
    };
}
