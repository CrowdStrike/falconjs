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
 * @interface DeviceapiUpdateDeviceTagsRequestV1
 */
export interface DeviceapiUpdateDeviceTagsRequestV1 {
    /**
     *
     * @type {string}
     * @memberof DeviceapiUpdateDeviceTagsRequestV1
     */
    action: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DeviceapiUpdateDeviceTagsRequestV1
     */
    deviceIds: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DeviceapiUpdateDeviceTagsRequestV1
     */
    tags: Array<string>;
}

/**
 * Check if a given object implements the DeviceapiUpdateDeviceTagsRequestV1 interface.
 */
export function instanceOfDeviceapiUpdateDeviceTagsRequestV1(value: object): value is DeviceapiUpdateDeviceTagsRequestV1 {
    if (!("action" in value) || value["action"] === undefined) return false;
    if (!("deviceIds" in value) || value["deviceIds"] === undefined) return false;
    if (!("tags" in value) || value["tags"] === undefined) return false;
    return true;
}

export function DeviceapiUpdateDeviceTagsRequestV1FromJSON(json: any): DeviceapiUpdateDeviceTagsRequestV1 {
    return DeviceapiUpdateDeviceTagsRequestV1FromJSONTyped(json, false);
}

export function DeviceapiUpdateDeviceTagsRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceapiUpdateDeviceTagsRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        action: json["action"],
        deviceIds: json["device_ids"],
        tags: json["tags"],
    };
}

export function DeviceapiUpdateDeviceTagsRequestV1ToJSON(value?: DeviceapiUpdateDeviceTagsRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        action: value["action"],
        device_ids: value["deviceIds"],
        tags: value["tags"],
    };
}
