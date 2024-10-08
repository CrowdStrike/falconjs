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
import type { MalqueryExternalHuntOptions } from "./MalqueryExternalHuntOptions";
import { MalqueryExternalHuntOptionsFromJSON, MalqueryExternalHuntOptionsFromJSONTyped, MalqueryExternalHuntOptionsToJSON } from "./MalqueryExternalHuntOptions";
import type { MsaPaging } from "./MsaPaging";
import { MsaPagingFromJSON, MsaPagingFromJSONTyped, MsaPagingToJSON } from "./MsaPaging";
import type { MsaspecWrites } from "./MsaspecWrites";
import { MsaspecWritesFromJSON, MsaspecWritesFromJSONTyped, MsaspecWritesToJSON } from "./MsaspecWrites";
import type { MalqueryStats } from "./MalqueryStats";
import { MalqueryStatsFromJSON, MalqueryStatsFromJSONTyped, MalqueryStatsToJSON } from "./MalqueryStats";
import type { MalquerySearchParameter } from "./MalquerySearchParameter";
import { MalquerySearchParameterFromJSON, MalquerySearchParameterFromJSONTyped, MalquerySearchParameterToJSON } from "./MalquerySearchParameter";

/**
 *
 * @export
 * @interface MalqueryRequestMetaInfo
 */
export interface MalqueryRequestMetaInfo {
    /**
     *
     * @type {MalqueryExternalHuntOptions}
     * @memberof MalqueryRequestMetaInfo
     */
    options?: MalqueryExternalHuntOptions;
    /**
     *
     * @type {MsaPaging}
     * @memberof MalqueryRequestMetaInfo
     */
    pagination?: MsaPaging;
    /**
     * Patterns to search for
     * @type {Array<MalquerySearchParameter>}
     * @memberof MalqueryRequestMetaInfo
     */
    patterns?: Array<MalquerySearchParameter>;
    /**
     *
     * @type {string}
     * @memberof MalqueryRequestMetaInfo
     */
    poweredBy?: string;
    /**
     * Elapsed time since the request started in seconds
     * @type {number}
     * @memberof MalqueryRequestMetaInfo
     */
    queryTime?: number;
    /**
     * Request ID returned after creating a hunt or exact search
     * @type {string}
     * @memberof MalqueryRequestMetaInfo
     */
    reqid?: string;
    /**
     * Request type. Possible values: hunt, search
     * @type {string}
     * @memberof MalqueryRequestMetaInfo
     */
    reqtype?: string;
    /**
     * Sample ID
     * @type {string}
     * @memberof MalqueryRequestMetaInfo
     */
    sample?: string;
    /**
     *
     * @type {MalqueryStats}
     * @memberof MalqueryRequestMetaInfo
     */
    stats?: MalqueryStats;
    /**
     * Request status. Possible values: inprogress, failed, done
     * @type {string}
     * @memberof MalqueryRequestMetaInfo
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof MalqueryRequestMetaInfo
     */
    traceId: string;
    /**
     *
     * @type {MsaspecWrites}
     * @memberof MalqueryRequestMetaInfo
     */
    writes?: MsaspecWrites;
    /**
     * YARA rule to be monitored
     * @type {string}
     * @memberof MalqueryRequestMetaInfo
     */
    yaraRule?: string;
}

/**
 * Check if a given object implements the MalqueryRequestMetaInfo interface.
 */
export function instanceOfMalqueryRequestMetaInfo(value: object): value is MalqueryRequestMetaInfo {
    if (!("traceId" in value) || value["traceId"] === undefined) return false;
    return true;
}

export function MalqueryRequestMetaInfoFromJSON(json: any): MalqueryRequestMetaInfo {
    return MalqueryRequestMetaInfoFromJSONTyped(json, false);
}

export function MalqueryRequestMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MalqueryRequestMetaInfo {
    if (json == null) {
        return json;
    }
    return {
        options: json["options"] == null ? undefined : MalqueryExternalHuntOptionsFromJSON(json["options"]),
        pagination: json["pagination"] == null ? undefined : MsaPagingFromJSON(json["pagination"]),
        patterns: json["patterns"] == null ? undefined : (json["patterns"] as Array<any>).map(MalquerySearchParameterFromJSON),
        poweredBy: json["powered_by"] == null ? undefined : json["powered_by"],
        queryTime: json["query_time"] == null ? undefined : json["query_time"],
        reqid: json["reqid"] == null ? undefined : json["reqid"],
        reqtype: json["reqtype"] == null ? undefined : json["reqtype"],
        sample: json["sample"] == null ? undefined : json["sample"],
        stats: json["stats"] == null ? undefined : MalqueryStatsFromJSON(json["stats"]),
        status: json["status"] == null ? undefined : json["status"],
        traceId: json["trace_id"],
        writes: json["writes"] == null ? undefined : MsaspecWritesFromJSON(json["writes"]),
        yaraRule: json["yara_rule"] == null ? undefined : json["yara_rule"],
    };
}

export function MalqueryRequestMetaInfoToJSON(value?: MalqueryRequestMetaInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        options: MalqueryExternalHuntOptionsToJSON(value["options"]),
        pagination: MsaPagingToJSON(value["pagination"]),
        patterns: value["patterns"] == null ? undefined : (value["patterns"] as Array<any>).map(MalquerySearchParameterToJSON),
        powered_by: value["poweredBy"],
        query_time: value["queryTime"],
        reqid: value["reqid"],
        reqtype: value["reqtype"],
        sample: value["sample"],
        stats: MalqueryStatsToJSON(value["stats"]),
        status: value["status"],
        trace_id: value["traceId"],
        writes: MsaspecWritesToJSON(value["writes"]),
        yara_rule: value["yaraRule"],
    };
}
