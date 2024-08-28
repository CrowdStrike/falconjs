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
import type { DeviceControlCreatePolicyReqV1 } from "./DeviceControlCreatePolicyReqV1";
import { DeviceControlCreatePolicyReqV1FromJSON, DeviceControlCreatePolicyReqV1FromJSONTyped, DeviceControlCreatePolicyReqV1ToJSON } from "./DeviceControlCreatePolicyReqV1";

/**
 * A req to create DeviceControl policies
 * @export
 * @interface DeviceControlCreatePoliciesV1
 */
export interface DeviceControlCreatePoliciesV1 {
    /**
     * A collection of policies to create
     * @type {Array<DeviceControlCreatePolicyReqV1>}
     * @memberof DeviceControlCreatePoliciesV1
     */
    resources: Array<DeviceControlCreatePolicyReqV1>;
}

/**
 * Check if a given object implements the DeviceControlCreatePoliciesV1 interface.
 */
export function instanceOfDeviceControlCreatePoliciesV1(value: object): value is DeviceControlCreatePoliciesV1 {
    if (!("resources" in value) || value["resources"] === undefined) return false;
    return true;
}

export function DeviceControlCreatePoliciesV1FromJSON(json: any): DeviceControlCreatePoliciesV1 {
    return DeviceControlCreatePoliciesV1FromJSONTyped(json, false);
}

export function DeviceControlCreatePoliciesV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceControlCreatePoliciesV1 {
    if (json == null) {
        return json;
    }
    return {
        resources: (json["resources"] as Array<any>).map(DeviceControlCreatePolicyReqV1FromJSON),
    };
}

export function DeviceControlCreatePoliciesV1ToJSON(value?: DeviceControlCreatePoliciesV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        resources: (value["resources"] as Array<any>).map(DeviceControlCreatePolicyReqV1ToJSON),
    };
}
