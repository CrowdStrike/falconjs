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
 * @interface DomainUserCreateRequest
 */
export interface DomainUserCreateRequest {
    /**
     *
     * @type {string}
     * @memberof DomainUserCreateRequest
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserCreateRequest
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserCreateRequest
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof DomainUserCreateRequest
     */
    uid?: string;
}

/**
 * Check if a given object implements the DomainUserCreateRequest interface.
 */
export function instanceOfDomainUserCreateRequest(value: object): value is DomainUserCreateRequest {
    return true;
}

export function DomainUserCreateRequestFromJSON(json: any): DomainUserCreateRequest {
    return DomainUserCreateRequestFromJSONTyped(json, false);
}

export function DomainUserCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainUserCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        firstName: json["firstName"] == null ? undefined : json["firstName"],
        lastName: json["lastName"] == null ? undefined : json["lastName"],
        password: json["password"] == null ? undefined : json["password"],
        uid: json["uid"] == null ? undefined : json["uid"],
    };
}

export function DomainUserCreateRequestToJSON(value?: DomainUserCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        firstName: value["firstName"],
        lastName: value["lastName"],
        password: value["password"],
        uid: value["uid"],
    };
}
