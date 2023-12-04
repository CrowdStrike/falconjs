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
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";

/**
 *
 * @export
 * @interface DomainMultiPulseSensorResponse
 */
export interface DomainMultiPulseSensorResponse {
    /**
     *
     * @type {string}
     * @memberof DomainMultiPulseSensorResponse
     */
    aid: string;
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof DomainMultiPulseSensorResponse
     */
    errors: Array<MsaAPIError> | null;
    /**
     *
     * @type {string}
     * @memberof DomainMultiPulseSensorResponse
     */
    sessionId: string;
}

/**
 * Check if a given object implements the DomainMultiPulseSensorResponse interface.
 */
export function instanceOfDomainMultiPulseSensorResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "aid" in value;
    isInstance = isInstance && "errors" in value;
    isInstance = isInstance && "sessionId" in value;

    return isInstance;
}

export function DomainMultiPulseSensorResponseFromJSON(json: any): DomainMultiPulseSensorResponse {
    return DomainMultiPulseSensorResponseFromJSONTyped(json, false);
}

export function DomainMultiPulseSensorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainMultiPulseSensorResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        aid: json["aid"],
        errors: json["errors"] === null ? null : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        sessionId: json["session_id"],
    };
}

export function DomainMultiPulseSensorResponseToJSON(value?: DomainMultiPulseSensorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        aid: value.aid,
        errors: value.errors === null ? null : (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        session_id: value.sessionId,
    };
}
