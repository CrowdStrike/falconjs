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
 * @interface ApidomainDynamicExecuteSearchRequestV1
 */
export interface ApidomainDynamicExecuteSearchRequestV1 {
    /**
     *
     * @type {string}
     * @memberof ApidomainDynamicExecuteSearchRequestV1
     */
    end?: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainDynamicExecuteSearchRequestV1
     */
    repoOrView: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainDynamicExecuteSearchRequestV1
     */
    searchQuery: string;
    /**
     *
     * @type {object}
     * @memberof ApidomainDynamicExecuteSearchRequestV1
     */
    searchQueryArgs: object;
    /**
     *
     * @type {string}
     * @memberof ApidomainDynamicExecuteSearchRequestV1
     */
    start?: string;
}

/**
 * Check if a given object implements the ApidomainDynamicExecuteSearchRequestV1 interface.
 */
export function instanceOfApidomainDynamicExecuteSearchRequestV1(value: object): value is ApidomainDynamicExecuteSearchRequestV1 {
    if (!("repoOrView" in value) || value["repoOrView"] === undefined) return false;
    if (!("searchQuery" in value) || value["searchQuery"] === undefined) return false;
    if (!("searchQueryArgs" in value) || value["searchQueryArgs"] === undefined) return false;
    return true;
}

export function ApidomainDynamicExecuteSearchRequestV1FromJSON(json: any): ApidomainDynamicExecuteSearchRequestV1 {
    return ApidomainDynamicExecuteSearchRequestV1FromJSONTyped(json, false);
}

export function ApidomainDynamicExecuteSearchRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApidomainDynamicExecuteSearchRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        end: json["end"] == null ? undefined : json["end"],
        repoOrView: json["repo_or_view"],
        searchQuery: json["search_query"],
        searchQueryArgs: json["search_query_args"],
        start: json["start"] == null ? undefined : json["start"],
    };
}

export function ApidomainDynamicExecuteSearchRequestV1ToJSON(value?: ApidomainDynamicExecuteSearchRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        end: value["end"],
        repo_or_view: value["repoOrView"],
        search_query: value["searchQuery"],
        search_query_args: value["searchQueryArgs"],
        start: value["start"],
    };
}
