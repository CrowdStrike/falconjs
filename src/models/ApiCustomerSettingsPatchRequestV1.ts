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
 * To require tokens for all installations in your CID, set `tokens_required` to `true`. To disable token requirement, set `tokens_required` to `false`To modify the maximum number of active tokens a customer may have, provide a positive interger value on `max_active_tokens` field
 * @export
 * @interface ApiCustomerSettingsPatchRequestV1
 */
export interface ApiCustomerSettingsPatchRequestV1 {
    /**
     * Set to a positive interger value to set limit of active tokens a customer may have at a time.
     * @type {number}
     * @memberof ApiCustomerSettingsPatchRequestV1
     */
    maxActiveTokens?: number;
    /**
     * Set to true to enable installation tokens for the customer.
     * @type {boolean}
     * @memberof ApiCustomerSettingsPatchRequestV1
     */
    tokensRequired?: boolean;
}

/**
 * Check if a given object implements the ApiCustomerSettingsPatchRequestV1 interface.
 */
export function instanceOfApiCustomerSettingsPatchRequestV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiCustomerSettingsPatchRequestV1FromJSON(json: any): ApiCustomerSettingsPatchRequestV1 {
    return ApiCustomerSettingsPatchRequestV1FromJSONTyped(json, false);
}

export function ApiCustomerSettingsPatchRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCustomerSettingsPatchRequestV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        maxActiveTokens: !exists(json, "max_active_tokens") ? undefined : json["max_active_tokens"],
        tokensRequired: !exists(json, "tokens_required") ? undefined : json["tokens_required"],
    };
}

export function ApiCustomerSettingsPatchRequestV1ToJSON(value?: ApiCustomerSettingsPatchRequestV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        max_active_tokens: value.maxActiveTokens,
        tokens_required: value.tokensRequired,
    };
}