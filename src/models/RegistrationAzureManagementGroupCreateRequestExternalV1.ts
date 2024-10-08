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
import type { RegistrationAzureManagementGroupExternalV1 } from "./RegistrationAzureManagementGroupExternalV1";
import {
    RegistrationAzureManagementGroupExternalV1FromJSON,
    RegistrationAzureManagementGroupExternalV1FromJSONTyped,
    RegistrationAzureManagementGroupExternalV1ToJSON,
} from "./RegistrationAzureManagementGroupExternalV1";

/**
 *
 * @export
 * @interface RegistrationAzureManagementGroupCreateRequestExternalV1
 */
export interface RegistrationAzureManagementGroupCreateRequestExternalV1 {
    /**
     *
     * @type {Array<RegistrationAzureManagementGroupExternalV1>}
     * @memberof RegistrationAzureManagementGroupCreateRequestExternalV1
     */
    resources: Array<RegistrationAzureManagementGroupExternalV1>;
}

/**
 * Check if a given object implements the RegistrationAzureManagementGroupCreateRequestExternalV1 interface.
 */
export function instanceOfRegistrationAzureManagementGroupCreateRequestExternalV1(value: object): value is RegistrationAzureManagementGroupCreateRequestExternalV1 {
    if (!("resources" in value) || value["resources"] === undefined) return false;
    return true;
}

export function RegistrationAzureManagementGroupCreateRequestExternalV1FromJSON(json: any): RegistrationAzureManagementGroupCreateRequestExternalV1 {
    return RegistrationAzureManagementGroupCreateRequestExternalV1FromJSONTyped(json, false);
}

export function RegistrationAzureManagementGroupCreateRequestExternalV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationAzureManagementGroupCreateRequestExternalV1 {
    if (json == null) {
        return json;
    }
    return {
        resources: (json["resources"] as Array<any>).map(RegistrationAzureManagementGroupExternalV1FromJSON),
    };
}

export function RegistrationAzureManagementGroupCreateRequestExternalV1ToJSON(value?: RegistrationAzureManagementGroupCreateRequestExternalV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        resources: (value["resources"] as Array<any>).map(RegistrationAzureManagementGroupExternalV1ToJSON),
    };
}
