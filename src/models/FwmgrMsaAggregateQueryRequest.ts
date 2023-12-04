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
import type { FwmgrMsaDateRangeSpec } from "./FwmgrMsaDateRangeSpec";
import { FwmgrMsaDateRangeSpecFromJSON, FwmgrMsaDateRangeSpecFromJSONTyped, FwmgrMsaDateRangeSpecToJSON } from "./FwmgrMsaDateRangeSpec";
import type { FwmgrMsaRangeSpec } from "./FwmgrMsaRangeSpec";
import { FwmgrMsaRangeSpecFromJSON, FwmgrMsaRangeSpecFromJSONTyped, FwmgrMsaRangeSpecToJSON } from "./FwmgrMsaRangeSpec";

/**
 *
 * @export
 * @interface FwmgrMsaAggregateQueryRequest
 */
export interface FwmgrMsaAggregateQueryRequest {
    /**
     *
     * @type {Array<FwmgrMsaDateRangeSpec>}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    dateRanges: Array<FwmgrMsaDateRangeSpec>;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    exclude: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    field: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    filter: string;
    /**
     *
     * @type {number}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    from: number;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    include: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    interval: string;
    /**
     *
     * @type {number}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    maxDocCount?: number;
    /**
     *
     * @type {number}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    minDocCount?: number;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    missing: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    q: string;
    /**
     *
     * @type {Array<FwmgrMsaRangeSpec>}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    ranges: Array<FwmgrMsaRangeSpec>;
    /**
     *
     * @type {number}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    size: number;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    sort: string;
    /**
     *
     * @type {Array<FwmgrMsaAggregateQueryRequest>}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    subAggregates: Array<FwmgrMsaAggregateQueryRequest>;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    timeZone: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregateQueryRequest
     */
    type: string;
}

/**
 * Check if a given object implements the FwmgrMsaAggregateQueryRequest interface.
 */
export function instanceOfFwmgrMsaAggregateQueryRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dateRanges" in value;
    isInstance = isInstance && "exclude" in value;
    isInstance = isInstance && "field" in value;
    isInstance = isInstance && "filter" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "include" in value;
    isInstance = isInstance && "interval" in value;
    isInstance = isInstance && "missing" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "q" in value;
    isInstance = isInstance && "ranges" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "sort" in value;
    isInstance = isInstance && "subAggregates" in value;
    isInstance = isInstance && "timeZone" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function FwmgrMsaAggregateQueryRequestFromJSON(json: any): FwmgrMsaAggregateQueryRequest {
    return FwmgrMsaAggregateQueryRequestFromJSONTyped(json, false);
}

export function FwmgrMsaAggregateQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrMsaAggregateQueryRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        dateRanges: (json["date_ranges"] as Array<any>).map(FwmgrMsaDateRangeSpecFromJSON),
        exclude: json["exclude"],
        field: json["field"],
        filter: json["filter"],
        from: json["from"],
        include: json["include"],
        interval: json["interval"],
        maxDocCount: !exists(json, "max_doc_count") ? undefined : json["max_doc_count"],
        minDocCount: !exists(json, "min_doc_count") ? undefined : json["min_doc_count"],
        missing: json["missing"],
        name: json["name"],
        q: json["q"],
        ranges: (json["ranges"] as Array<any>).map(FwmgrMsaRangeSpecFromJSON),
        size: json["size"],
        sort: json["sort"],
        subAggregates: (json["sub_aggregates"] as Array<any>).map(FwmgrMsaAggregateQueryRequestFromJSON),
        timeZone: json["time_zone"],
        type: json["type"],
    };
}

export function FwmgrMsaAggregateQueryRequestToJSON(value?: FwmgrMsaAggregateQueryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        date_ranges: (value.dateRanges as Array<any>).map(FwmgrMsaDateRangeSpecToJSON),
        exclude: value.exclude,
        field: value.field,
        filter: value.filter,
        from: value.from,
        include: value.include,
        interval: value.interval,
        max_doc_count: value.maxDocCount,
        min_doc_count: value.minDocCount,
        missing: value.missing,
        name: value.name,
        q: value.q,
        ranges: (value.ranges as Array<any>).map(FwmgrMsaRangeSpecToJSON),
        size: value.size,
        sort: value.sort,
        sub_aggregates: (value.subAggregates as Array<any>).map(FwmgrMsaAggregateQueryRequestToJSON),
        time_zone: value.timeZone,
        type: value.type,
    };
}
