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
 * @interface SadomainSubmissionInformation
 */
export interface SadomainSubmissionInformation {
    /**
     *
     * @type {Date}
     * @memberof SadomainSubmissionInformation
     */
    date: Date;
    /**
     *
     * @type {string}
     * @memberof SadomainSubmissionInformation
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof SadomainSubmissionInformation
     */
    userUuid: string;
}

/**
 * Check if a given object implements the SadomainSubmissionInformation interface.
 */
export function instanceOfSadomainSubmissionInformation(value: object): value is SadomainSubmissionInformation {
    if (!("date" in value) || value["date"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    if (!("userUuid" in value) || value["userUuid"] === undefined) return false;
    return true;
}

export function SadomainSubmissionInformationFromJSON(json: any): SadomainSubmissionInformation {
    return SadomainSubmissionInformationFromJSONTyped(json, false);
}

export function SadomainSubmissionInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SadomainSubmissionInformation {
    if (json == null) {
        return json;
    }
    return {
        date: new Date(json["date"]),
        status: json["status"],
        userUuid: json["user_uuid"],
    };
}

export function SadomainSubmissionInformationToJSON(value?: SadomainSubmissionInformation | null): any {
    if (value == null) {
        return value;
    }
    return {
        date: value["date"].toISOString(),
        status: value["status"],
        user_uuid: value["userUuid"],
    };
}
