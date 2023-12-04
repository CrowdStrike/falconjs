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
import type { ApiValidationRequestFieldV1 } from "./ApiValidationRequestFieldV1";
import { ApiValidationRequestFieldV1FromJSON, ApiValidationRequestFieldV1FromJSONTyped, ApiValidationRequestFieldV1ToJSON } from "./ApiValidationRequestFieldV1";

/**
 *
 * @export
 * @interface ApiValidationRequestV1
 */
export interface ApiValidationRequestV1 {
    /**
     *
     * @type {Array<ApiValidationRequestFieldV1>}
     * @memberof ApiValidationRequestV1
     */
    fields: Array<ApiValidationRequestFieldV1>;
}

/**
 * Check if a given object implements the ApiValidationRequestV1 interface.
 */
export function instanceOfApiValidationRequestV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fields" in value;

    return isInstance;
}

export function ApiValidationRequestV1FromJSON(json: any): ApiValidationRequestV1 {
    return ApiValidationRequestV1FromJSONTyped(json, false);
}

export function ApiValidationRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiValidationRequestV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        fields: (json["fields"] as Array<any>).map(ApiValidationRequestFieldV1FromJSON),
    };
}

export function ApiValidationRequestV1ToJSON(value?: ApiValidationRequestV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        fields: (value.fields as Array<any>).map(ApiValidationRequestFieldV1ToJSON),
    };
}
