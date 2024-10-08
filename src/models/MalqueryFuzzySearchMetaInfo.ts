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
import type { MsaPaging } from "./MsaPaging";
import { MsaPagingFromJSON, MsaPagingFromJSONTyped, MsaPagingToJSON } from "./MsaPaging";
import type { MsaspecWrites } from "./MsaspecWrites";
import { MsaspecWritesFromJSON, MsaspecWritesFromJSONTyped, MsaspecWritesToJSON } from "./MsaspecWrites";
import type { MalqueryStats } from "./MalqueryStats";
import { MalqueryStatsFromJSON, MalqueryStatsFromJSONTyped, MalqueryStatsToJSON } from "./MalqueryStats";

/**
 *
 * @export
 * @interface MalqueryFuzzySearchMetaInfo
 */
export interface MalqueryFuzzySearchMetaInfo {
    /**
     *
     * @type {MsaPaging}
     * @memberof MalqueryFuzzySearchMetaInfo
     */
    pagination?: MsaPaging;
    /**
     *
     * @type {string}
     * @memberof MalqueryFuzzySearchMetaInfo
     */
    poweredBy?: string;
    /**
     * Elapsed time since the request started in seconds
     * @type {number}
     * @memberof MalqueryFuzzySearchMetaInfo
     */
    queryTime?: number;
    /**
     * Request ID returned after creating a hunt or exact search
     * @type {string}
     * @memberof MalqueryFuzzySearchMetaInfo
     */
    reqid?: string;
    /**
     *
     * @type {MalqueryStats}
     * @memberof MalqueryFuzzySearchMetaInfo
     */
    stats?: MalqueryStats;
    /**
     * Request status. Possible values: inprogress, failed, done
     * @type {string}
     * @memberof MalqueryFuzzySearchMetaInfo
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof MalqueryFuzzySearchMetaInfo
     */
    traceId: string;
    /**
     *
     * @type {MsaspecWrites}
     * @memberof MalqueryFuzzySearchMetaInfo
     */
    writes?: MsaspecWrites;
}

/**
 * Check if a given object implements the MalqueryFuzzySearchMetaInfo interface.
 */
export function instanceOfMalqueryFuzzySearchMetaInfo(value: object): value is MalqueryFuzzySearchMetaInfo {
    if (!("traceId" in value) || value["traceId"] === undefined) return false;
    return true;
}

export function MalqueryFuzzySearchMetaInfoFromJSON(json: any): MalqueryFuzzySearchMetaInfo {
    return MalqueryFuzzySearchMetaInfoFromJSONTyped(json, false);
}

export function MalqueryFuzzySearchMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MalqueryFuzzySearchMetaInfo {
    if (json == null) {
        return json;
    }
    return {
        pagination: json["pagination"] == null ? undefined : MsaPagingFromJSON(json["pagination"]),
        poweredBy: json["powered_by"] == null ? undefined : json["powered_by"],
        queryTime: json["query_time"] == null ? undefined : json["query_time"],
        reqid: json["reqid"] == null ? undefined : json["reqid"],
        stats: json["stats"] == null ? undefined : MalqueryStatsFromJSON(json["stats"]),
        status: json["status"] == null ? undefined : json["status"],
        traceId: json["trace_id"],
        writes: json["writes"] == null ? undefined : MsaspecWritesFromJSON(json["writes"]),
    };
}

export function MalqueryFuzzySearchMetaInfoToJSON(value?: MalqueryFuzzySearchMetaInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        pagination: MsaPagingToJSON(value["pagination"]),
        powered_by: value["poweredBy"],
        query_time: value["queryTime"],
        reqid: value["reqid"],
        stats: MalqueryStatsToJSON(value["stats"]),
        status: value["status"],
        trace_id: value["traceId"],
        writes: MsaspecWritesToJSON(value["writes"]),
    };
}
