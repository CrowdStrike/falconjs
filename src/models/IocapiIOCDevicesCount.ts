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
 * @interface IocapiIOCDevicesCount
 */
export interface IocapiIOCDevicesCount {
    /**
     *
     * @type {number}
     * @memberof IocapiIOCDevicesCount
     */
    deviceCount: number;
    /**
     *
     * @type {string}
     * @memberof IocapiIOCDevicesCount
     */
    id: string;
    /**
     *
     * @type {boolean}
     * @memberof IocapiIOCDevicesCount
     */
    limitExceeded?: boolean;
    /**
     *
     * @type {string}
     * @memberof IocapiIOCDevicesCount
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof IocapiIOCDevicesCount
     */
    value: string;
}

/**
 * Check if a given object implements the IocapiIOCDevicesCount interface.
 */
export function instanceOfIocapiIOCDevicesCount(value: object): value is IocapiIOCDevicesCount {
    if (!("deviceCount" in value) || value["deviceCount"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("type" in value) || value["type"] === undefined) return false;
    if (!("value" in value) || value["value"] === undefined) return false;
    return true;
}

export function IocapiIOCDevicesCountFromJSON(json: any): IocapiIOCDevicesCount {
    return IocapiIOCDevicesCountFromJSONTyped(json, false);
}

export function IocapiIOCDevicesCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): IocapiIOCDevicesCount {
    if (json == null) {
        return json;
    }
    return {
        deviceCount: json["device_count"],
        id: json["id"],
        limitExceeded: json["limit_exceeded"] == null ? undefined : json["limit_exceeded"],
        type: json["type"],
        value: json["value"],
    };
}

export function IocapiIOCDevicesCountToJSON(value?: IocapiIOCDevicesCount | null): any {
    if (value == null) {
        return value;
    }
    return {
        device_count: value["deviceCount"],
        id: value["id"],
        limit_exceeded: value["limitExceeded"],
        type: value["type"],
        value: value["value"],
    };
}
