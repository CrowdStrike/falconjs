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
 * @interface DomainExternalCredentialResponse
 */
export interface DomainExternalCredentialResponse {
    /**
     *
     * @type {string}
     * @memberof DomainExternalCredentialResponse
     */
    createdAt: string;
    /**
     *
     * @type {object}
     * @memberof DomainExternalCredentialResponse
     */
    details: object;
    /**
     *
     * @type {boolean}
     * @memberof DomainExternalCredentialResponse
     */
    expired: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainExternalCredentialResponse
     */
    expiredAt: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalCredentialResponse
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalCredentialResponse
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the DomainExternalCredentialResponse interface.
 */
export function instanceOfDomainExternalCredentialResponse(value: object): value is DomainExternalCredentialResponse {
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("details" in value) || value["details"] === undefined) return false;
    if (!("expired" in value) || value["expired"] === undefined) return false;
    if (!("expiredAt" in value) || value["expiredAt"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
    return true;
}

export function DomainExternalCredentialResponseFromJSON(json: any): DomainExternalCredentialResponse {
    return DomainExternalCredentialResponseFromJSONTyped(json, false);
}

export function DomainExternalCredentialResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExternalCredentialResponse {
    if (json == null) {
        return json;
    }
    return {
        createdAt: json["created_at"],
        details: json["details"],
        expired: json["expired"],
        expiredAt: json["expired_at"],
        id: json["id"],
        updatedAt: json["updated_at"],
    };
}

export function DomainExternalCredentialResponseToJSON(value?: DomainExternalCredentialResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        created_at: value["createdAt"],
        details: value["details"],
        expired: value["expired"],
        expired_at: value["expiredAt"],
        id: value["id"],
        updated_at: value["updatedAt"],
    };
}