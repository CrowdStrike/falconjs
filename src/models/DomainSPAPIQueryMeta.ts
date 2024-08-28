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
import type { DomainSPAPIQueryPaging } from "./DomainSPAPIQueryPaging";
import { DomainSPAPIQueryPagingFromJSON, DomainSPAPIQueryPagingFromJSONTyped, DomainSPAPIQueryPagingToJSON } from "./DomainSPAPIQueryPaging";
import type { DomainQuota } from "./DomainQuota";
import { DomainQuotaFromJSON, DomainQuotaFromJSONTyped, DomainQuotaToJSON } from "./DomainQuota";

/**
 *
 * @export
 * @interface DomainSPAPIQueryMeta
 */
export interface DomainSPAPIQueryMeta {
    /**
     *
     * @type {DomainSPAPIQueryPaging}
     * @memberof DomainSPAPIQueryMeta
     */
    pagination?: DomainSPAPIQueryPaging;
    /**
     *
     * @type {string}
     * @memberof DomainSPAPIQueryMeta
     */
    poweredBy?: string;
    /**
     *
     * @type {number}
     * @memberof DomainSPAPIQueryMeta
     */
    queryTime: number;
    /**
     *
     * @type {DomainQuota}
     * @memberof DomainSPAPIQueryMeta
     */
    quota?: DomainQuota;
    /**
     *
     * @type {string}
     * @memberof DomainSPAPIQueryMeta
     */
    traceId: string;
}

/**
 * Check if a given object implements the DomainSPAPIQueryMeta interface.
 */
export function instanceOfDomainSPAPIQueryMeta(value: object): value is DomainSPAPIQueryMeta {
    if (!("queryTime" in value) || value["queryTime"] === undefined) return false;
    if (!("traceId" in value) || value["traceId"] === undefined) return false;
    return true;
}

export function DomainSPAPIQueryMetaFromJSON(json: any): DomainSPAPIQueryMeta {
    return DomainSPAPIQueryMetaFromJSONTyped(json, false);
}

export function DomainSPAPIQueryMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSPAPIQueryMeta {
    if (json == null) {
        return json;
    }
    return {
        pagination: json["pagination"] == null ? undefined : DomainSPAPIQueryPagingFromJSON(json["pagination"]),
        poweredBy: json["powered_by"] == null ? undefined : json["powered_by"],
        queryTime: json["query_time"],
        quota: json["quota"] == null ? undefined : DomainQuotaFromJSON(json["quota"]),
        traceId: json["trace_id"],
    };
}

export function DomainSPAPIQueryMetaToJSON(value?: DomainSPAPIQueryMeta | null): any {
    if (value == null) {
        return value;
    }
    return {
        pagination: DomainSPAPIQueryPagingToJSON(value["pagination"]),
        powered_by: value["poweredBy"],
        query_time: value["queryTime"],
        quota: DomainQuotaToJSON(value["quota"]),
        trace_id: value["traceId"],
    };
}
