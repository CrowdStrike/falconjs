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
import type { ApiCertBasedExclusionCreateReqV1 } from "./ApiCertBasedExclusionCreateReqV1";
import { ApiCertBasedExclusionCreateReqV1FromJSON, ApiCertBasedExclusionCreateReqV1FromJSONTyped, ApiCertBasedExclusionCreateReqV1ToJSON } from "./ApiCertBasedExclusionCreateReqV1";

/**
 *
 * @export
 * @interface ApiCertBasedExclusionsCreateReqV1
 */
export interface ApiCertBasedExclusionsCreateReqV1 {
    /**
     *
     * @type {Array<ApiCertBasedExclusionCreateReqV1>}
     * @memberof ApiCertBasedExclusionsCreateReqV1
     */
    exclusions: Array<ApiCertBasedExclusionCreateReqV1>;
}

/**
 * Check if a given object implements the ApiCertBasedExclusionsCreateReqV1 interface.
 */
export function instanceOfApiCertBasedExclusionsCreateReqV1(value: object): value is ApiCertBasedExclusionsCreateReqV1 {
    if (!("exclusions" in value) || value["exclusions"] === undefined) return false;
    return true;
}

export function ApiCertBasedExclusionsCreateReqV1FromJSON(json: any): ApiCertBasedExclusionsCreateReqV1 {
    return ApiCertBasedExclusionsCreateReqV1FromJSONTyped(json, false);
}

export function ApiCertBasedExclusionsCreateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCertBasedExclusionsCreateReqV1 {
    if (json == null) {
        return json;
    }
    return {
        exclusions: (json["exclusions"] as Array<any>).map(ApiCertBasedExclusionCreateReqV1FromJSON),
    };
}

export function ApiCertBasedExclusionsCreateReqV1ToJSON(value?: ApiCertBasedExclusionsCreateReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        exclusions: (value["exclusions"] as Array<any>).map(ApiCertBasedExclusionCreateReqV1ToJSON),
    };
}
