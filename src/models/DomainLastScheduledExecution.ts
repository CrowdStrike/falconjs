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
/**
 *
 * @export
 * @interface DomainLastScheduledExecution
 */
export interface DomainLastScheduledExecution {
    /**
     *
     * @type {string}
     * @memberof DomainLastScheduledExecution
     */
    id: string;
    /**
     *
     * @type {Date}
     * @memberof DomainLastScheduledExecution
     */
    searchWindowEnd?: Date;
    /**
     *
     * @type {Date}
     * @memberof DomainLastScheduledExecution
     */
    searchWindowStart?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainLastScheduledExecution
     */
    statusDisplay: string;
}

/**
 * Check if a given object implements the DomainLastScheduledExecution interface.
 */
export function instanceOfDomainLastScheduledExecution(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "statusDisplay" in value;

    return isInstance;
}

export function DomainLastScheduledExecutionFromJSON(json: any): DomainLastScheduledExecution {
    return DomainLastScheduledExecutionFromJSONTyped(json, false);
}

export function DomainLastScheduledExecutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainLastScheduledExecution {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json["id"],
        searchWindowEnd: !exists(json, "search_window_end") ? undefined : new Date(json["search_window_end"]),
        searchWindowStart: !exists(json, "search_window_start") ? undefined : new Date(json["search_window_start"]),
        statusDisplay: json["status_display"],
    };
}

export function DomainLastScheduledExecutionToJSON(value?: DomainLastScheduledExecution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        search_window_end: value.searchWindowEnd === undefined ? undefined : value.searchWindowEnd.toISOString(),
        search_window_start: value.searchWindowStart === undefined ? undefined : value.searchWindowStart.toISOString(),
        status_display: value.statusDisplay,
    };
}
