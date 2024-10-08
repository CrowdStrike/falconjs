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
import type { ApidomainViewConnectionV1 } from "./ApidomainViewConnectionV1";
import { ApidomainViewConnectionV1FromJSON, ApidomainViewConnectionV1FromJSONTyped, ApidomainViewConnectionV1ToJSON } from "./ApidomainViewConnectionV1";

/**
 *
 * @export
 * @interface ApidomainRepoViewListItemV1
 */
export interface ApidomainRepoViewListItemV1 {
    /**
     *
     * @type {Array<ApidomainViewConnectionV1>}
     * @memberof ApidomainRepoViewListItemV1
     */
    connections?: Array<ApidomainViewConnectionV1>;
    /**
     *
     * @type {string}
     * @memberof ApidomainRepoViewListItemV1
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainRepoViewListItemV1
     */
    displayName: string;
    /**
     *
     * @type {boolean}
     * @memberof ApidomainRepoViewListItemV1
     */
    hasTestData: boolean;
    /**
     *
     * @type {string}
     * @memberof ApidomainRepoViewListItemV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainRepoViewListItemV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainRepoViewListItemV1
     */
    nameContracted: string;
    /**
     *
     * @type {number}
     * @memberof ApidomainRepoViewListItemV1
     */
    size?: number;
    /**
     *
     * @type {string}
     * @memberof ApidomainRepoViewListItemV1
     */
    typeName: string;
}

/**
 * Check if a given object implements the ApidomainRepoViewListItemV1 interface.
 */
export function instanceOfApidomainRepoViewListItemV1(value: object): value is ApidomainRepoViewListItemV1 {
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("displayName" in value) || value["displayName"] === undefined) return false;
    if (!("hasTestData" in value) || value["hasTestData"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("nameContracted" in value) || value["nameContracted"] === undefined) return false;
    if (!("typeName" in value) || value["typeName"] === undefined) return false;
    return true;
}

export function ApidomainRepoViewListItemV1FromJSON(json: any): ApidomainRepoViewListItemV1 {
    return ApidomainRepoViewListItemV1FromJSONTyped(json, false);
}

export function ApidomainRepoViewListItemV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApidomainRepoViewListItemV1 {
    if (json == null) {
        return json;
    }
    return {
        connections: json["connections"] == null ? undefined : (json["connections"] as Array<any>).map(ApidomainViewConnectionV1FromJSON),
        description: json["description"],
        displayName: json["display_name"],
        hasTestData: json["has_test_data"],
        id: json["id"],
        name: json["name"],
        nameContracted: json["name_contracted"],
        size: json["size"] == null ? undefined : json["size"],
        typeName: json["type_name"],
    };
}

export function ApidomainRepoViewListItemV1ToJSON(value?: ApidomainRepoViewListItemV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        connections: value["connections"] == null ? undefined : (value["connections"] as Array<any>).map(ApidomainViewConnectionV1ToJSON),
        description: value["description"],
        display_name: value["displayName"],
        has_test_data: value["hasTestData"],
        id: value["id"],
        name: value["name"],
        name_contracted: value["nameContracted"],
        size: value["size"],
        type_name: value["typeName"],
    };
}
