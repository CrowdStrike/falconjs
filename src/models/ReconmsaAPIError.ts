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
import type { ReconmsaAPIErrorDetail } from "./ReconmsaAPIErrorDetail";
import { ReconmsaAPIErrorDetailFromJSON, ReconmsaAPIErrorDetailFromJSONTyped, ReconmsaAPIErrorDetailToJSON } from "./ReconmsaAPIErrorDetail";

/**
 *
 * @export
 * @interface ReconmsaAPIError
 */
export interface ReconmsaAPIError {
    /**
     *
     * @type {number}
     * @memberof ReconmsaAPIError
     */
    code: number;
    /**
     *
     * @type {Array<ReconmsaAPIErrorDetail>}
     * @memberof ReconmsaAPIError
     */
    details?: Array<ReconmsaAPIErrorDetail>;
    /**
     *
     * @type {string}
     * @memberof ReconmsaAPIError
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof ReconmsaAPIError
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof ReconmsaAPIError
     */
    messageKey?: string;
}

/**
 * Check if a given object implements the ReconmsaAPIError interface.
 */
export function instanceOfReconmsaAPIError(value: object): value is ReconmsaAPIError {
    if (!("code" in value) || value["code"] === undefined) return false;
    if (!("message" in value) || value["message"] === undefined) return false;
    return true;
}

export function ReconmsaAPIErrorFromJSON(json: any): ReconmsaAPIError {
    return ReconmsaAPIErrorFromJSONTyped(json, false);
}

export function ReconmsaAPIErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReconmsaAPIError {
    if (json == null) {
        return json;
    }
    return {
        code: json["code"],
        details: json["details"] == null ? undefined : (json["details"] as Array<any>).map(ReconmsaAPIErrorDetailFromJSON),
        id: json["id"] == null ? undefined : json["id"],
        message: json["message"],
        messageKey: json["message_key"] == null ? undefined : json["message_key"],
    };
}

export function ReconmsaAPIErrorToJSON(value?: ReconmsaAPIError | null): any {
    if (value == null) {
        return value;
    }
    return {
        code: value["code"],
        details: value["details"] == null ? undefined : (value["details"] as Array<any>).map(ReconmsaAPIErrorDetailToJSON),
        id: value["id"],
        message: value["message"],
        message_key: value["messageKey"],
    };
}
