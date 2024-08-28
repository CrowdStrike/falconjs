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
import type { ApiPaging } from "./ApiPaging";
import { ApiPagingFromJSON, ApiPagingFromJSONTyped, ApiPagingToJSON } from "./ApiPaging";

/**
 *
 * @export
 * @interface ApiMetaInfo
 */
export interface ApiMetaInfo {
    /**
     *
     * @type {ApiPaging}
     * @memberof ApiMetaInfo
     */
    pagination?: ApiPaging;
    /**
     *
     * @type {string}
     * @memberof ApiMetaInfo
     */
    poweredBy?: string;
    /**
     *
     * @type {number}
     * @memberof ApiMetaInfo
     */
    queryTime: number;
    /**
     *
     * @type {string}
     * @memberof ApiMetaInfo
     */
    traceId: string;
}

/**
 * Check if a given object implements the ApiMetaInfo interface.
 */
export function instanceOfApiMetaInfo(value: object): value is ApiMetaInfo {
    if (!("queryTime" in value) || value["queryTime"] === undefined) return false;
    if (!("traceId" in value) || value["traceId"] === undefined) return false;
    return true;
}

export function ApiMetaInfoFromJSON(json: any): ApiMetaInfo {
    return ApiMetaInfoFromJSONTyped(json, false);
}

export function ApiMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiMetaInfo {
    if (json == null) {
        return json;
    }
    return {
        pagination: json["pagination"] == null ? undefined : ApiPagingFromJSON(json["pagination"]),
        poweredBy: json["powered_by"] == null ? undefined : json["powered_by"],
        queryTime: json["query_time"],
        traceId: json["trace_id"],
    };
}

export function ApiMetaInfoToJSON(value?: ApiMetaInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        pagination: ApiPagingToJSON(value["pagination"]),
        powered_by: value["poweredBy"],
        query_time: value["queryTime"],
        trace_id: value["traceId"],
    };
}
