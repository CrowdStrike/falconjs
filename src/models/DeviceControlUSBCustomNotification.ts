/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface DeviceControlUSBCustomNotification
 */
export interface DeviceControlUSBCustomNotification {
    /**
     * The notification to be displayed to the end-user
     * @type {string}
     * @memberof DeviceControlUSBCustomNotification
     */
    customMessage: string;
    /**
     * If the custom notification or the default notification is in-use
     * @type {boolean}
     * @memberof DeviceControlUSBCustomNotification
     */
    useCustom: boolean;
}

/**
 * Check if a given object implements the DeviceControlUSBCustomNotification interface.
 */
export function instanceOfDeviceControlUSBCustomNotification(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customMessage" in value;
    isInstance = isInstance && "useCustom" in value;

    return isInstance;
}

export function DeviceControlUSBCustomNotificationFromJSON(json: any): DeviceControlUSBCustomNotification {
    return DeviceControlUSBCustomNotificationFromJSONTyped(json, false);
}

export function DeviceControlUSBCustomNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceControlUSBCustomNotification {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        customMessage: json["custom_message"],
        useCustom: json["use_custom"],
    };
}

export function DeviceControlUSBCustomNotificationToJSON(value?: DeviceControlUSBCustomNotification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        custom_message: value.customMessage,
        use_custom: value.useCustom,
    };
}