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
import type { DeviceDevicePolicy } from "./DeviceDevicePolicy";
import { DeviceDevicePolicyFromJSON, DeviceDevicePolicyFromJSONTyped, DeviceDevicePolicyToJSON } from "./DeviceDevicePolicy";

/**
 *
 * @export
 * @interface DeviceMappedDevicePolicies
 */
export interface DeviceMappedDevicePolicies {
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    airlock?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    automox?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    deviceControl?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    fim?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    firewall?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    globalConfig?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    identityProtection?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    jumpcloud?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    mobile?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    netskope?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    prevention?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    remoteResponse?: DeviceDevicePolicy;
    /**
     *
     * @type {DeviceDevicePolicy}
     * @memberof DeviceMappedDevicePolicies
     */
    sensorUpdate?: DeviceDevicePolicy;
}

/**
 * Check if a given object implements the DeviceMappedDevicePolicies interface.
 */
export function instanceOfDeviceMappedDevicePolicies(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceMappedDevicePoliciesFromJSON(json: any): DeviceMappedDevicePolicies {
    return DeviceMappedDevicePoliciesFromJSONTyped(json, false);
}

export function DeviceMappedDevicePoliciesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceMappedDevicePolicies {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        airlock: !exists(json, "airlock") ? undefined : DeviceDevicePolicyFromJSON(json["airlock"]),
        automox: !exists(json, "automox") ? undefined : DeviceDevicePolicyFromJSON(json["automox"]),
        deviceControl: !exists(json, "device_control") ? undefined : DeviceDevicePolicyFromJSON(json["device_control"]),
        fim: !exists(json, "fim") ? undefined : DeviceDevicePolicyFromJSON(json["fim"]),
        firewall: !exists(json, "firewall") ? undefined : DeviceDevicePolicyFromJSON(json["firewall"]),
        globalConfig: !exists(json, "global_config") ? undefined : DeviceDevicePolicyFromJSON(json["global_config"]),
        identityProtection: !exists(json, "identity-protection") ? undefined : DeviceDevicePolicyFromJSON(json["identity-protection"]),
        jumpcloud: !exists(json, "jumpcloud") ? undefined : DeviceDevicePolicyFromJSON(json["jumpcloud"]),
        mobile: !exists(json, "mobile") ? undefined : DeviceDevicePolicyFromJSON(json["mobile"]),
        netskope: !exists(json, "netskope") ? undefined : DeviceDevicePolicyFromJSON(json["netskope"]),
        prevention: !exists(json, "prevention") ? undefined : DeviceDevicePolicyFromJSON(json["prevention"]),
        remoteResponse: !exists(json, "remote_response") ? undefined : DeviceDevicePolicyFromJSON(json["remote_response"]),
        sensorUpdate: !exists(json, "sensor_update") ? undefined : DeviceDevicePolicyFromJSON(json["sensor_update"]),
    };
}

export function DeviceMappedDevicePoliciesToJSON(value?: DeviceMappedDevicePolicies | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        airlock: DeviceDevicePolicyToJSON(value.airlock),
        automox: DeviceDevicePolicyToJSON(value.automox),
        device_control: DeviceDevicePolicyToJSON(value.deviceControl),
        fim: DeviceDevicePolicyToJSON(value.fim),
        firewall: DeviceDevicePolicyToJSON(value.firewall),
        global_config: DeviceDevicePolicyToJSON(value.globalConfig),
        "identity-protection": DeviceDevicePolicyToJSON(value.identityProtection),
        jumpcloud: DeviceDevicePolicyToJSON(value.jumpcloud),
        mobile: DeviceDevicePolicyToJSON(value.mobile),
        netskope: DeviceDevicePolicyToJSON(value.netskope),
        prevention: DeviceDevicePolicyToJSON(value.prevention),
        remote_response: DeviceDevicePolicyToJSON(value.remoteResponse),
        sensor_update: DeviceDevicePolicyToJSON(value.sensorUpdate),
    };
}
