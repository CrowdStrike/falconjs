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
import type { FalconxActorSummary } from "./FalconxActorSummary";
import { FalconxActorSummaryFromJSON, FalconxActorSummaryFromJSONTyped, FalconxActorSummaryToJSON } from "./FalconxActorSummary";

/**
 *
 * @export
 * @interface FalconxIntelSummaryReportV1
 */
export interface FalconxIntelSummaryReportV1 {
    /**
     *
     * @type {Array<FalconxActorSummary>}
     * @memberof FalconxIntelSummaryReportV1
     */
    actors?: Array<FalconxActorSummary>;
}

/**
 * Check if a given object implements the FalconxIntelSummaryReportV1 interface.
 */
export function instanceOfFalconxIntelSummaryReportV1(value: object): value is FalconxIntelSummaryReportV1 {
    return true;
}

export function FalconxIntelSummaryReportV1FromJSON(json: any): FalconxIntelSummaryReportV1 {
    return FalconxIntelSummaryReportV1FromJSONTyped(json, false);
}

export function FalconxIntelSummaryReportV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxIntelSummaryReportV1 {
    if (json == null) {
        return json;
    }
    return {
        actors: json["actors"] == null ? undefined : (json["actors"] as Array<any>).map(FalconxActorSummaryFromJSON),
    };
}

export function FalconxIntelSummaryReportV1ToJSON(value?: FalconxIntelSummaryReportV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        actors: value["actors"] == null ? undefined : (value["actors"] as Array<any>).map(FalconxActorSummaryToJSON),
    };
}
