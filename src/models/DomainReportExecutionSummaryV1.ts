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
import type { DomainExecutionMetadataSummary } from "./DomainExecutionMetadataSummary";
import { DomainExecutionMetadataSummaryFromJSON, DomainExecutionMetadataSummaryFromJSONTyped, DomainExecutionMetadataSummaryToJSON } from "./DomainExecutionMetadataSummary";
import type { DomainResultMetadata } from "./DomainResultMetadata";
import { DomainResultMetadataFromJSON, DomainResultMetadataFromJSONTyped, DomainResultMetadataToJSON } from "./DomainResultMetadata";
import type { DomainReportParams } from "./DomainReportParams";
import { DomainReportParamsFromJSON, DomainReportParamsFromJSONTyped, DomainReportParamsToJSON } from "./DomainReportParams";

/**
 *
 * @export
 * @interface DomainReportExecutionSummaryV1
 */
export interface DomainReportExecutionSummaryV1 {
    /**
     *
     * @type {DomainExecutionMetadataSummary}
     * @memberof DomainReportExecutionSummaryV1
     */
    executionMetadata: DomainExecutionMetadataSummary;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionSummaryV1
     */
    id: string;
    /**
     *
     * @type {Date}
     * @memberof DomainReportExecutionSummaryV1
     */
    lastUpdatedOn: Date;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionSummaryV1
     */
    reportFileReference?: string;
    /**
     *
     * @type {DomainReportParams}
     * @memberof DomainReportExecutionSummaryV1
     */
    reportParams: DomainReportParams;
    /**
     *
     * @type {DomainResultMetadata}
     * @memberof DomainReportExecutionSummaryV1
     */
    resultMetadata?: DomainResultMetadata;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionSummaryV1
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionSummaryV1
     */
    statusDisplay: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionSummaryV1
     */
    statusMsg: string;
}

/**
 * Check if a given object implements the DomainReportExecutionSummaryV1 interface.
 */
export function instanceOfDomainReportExecutionSummaryV1(value: object): value is DomainReportExecutionSummaryV1 {
    if (!("executionMetadata" in value) || value["executionMetadata"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("lastUpdatedOn" in value) || value["lastUpdatedOn"] === undefined) return false;
    if (!("reportParams" in value) || value["reportParams"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    if (!("statusDisplay" in value) || value["statusDisplay"] === undefined) return false;
    if (!("statusMsg" in value) || value["statusMsg"] === undefined) return false;
    return true;
}

export function DomainReportExecutionSummaryV1FromJSON(json: any): DomainReportExecutionSummaryV1 {
    return DomainReportExecutionSummaryV1FromJSONTyped(json, false);
}

export function DomainReportExecutionSummaryV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainReportExecutionSummaryV1 {
    if (json == null) {
        return json;
    }
    return {
        executionMetadata: DomainExecutionMetadataSummaryFromJSON(json["execution_metadata"]),
        id: json["id"],
        lastUpdatedOn: new Date(json["last_updated_on"]),
        reportFileReference: json["report_file_reference"] == null ? undefined : json["report_file_reference"],
        reportParams: DomainReportParamsFromJSON(json["report_params"]),
        resultMetadata: json["result_metadata"] == null ? undefined : DomainResultMetadataFromJSON(json["result_metadata"]),
        status: json["status"],
        statusDisplay: json["status_display"],
        statusMsg: json["status_msg"],
    };
}

export function DomainReportExecutionSummaryV1ToJSON(value?: DomainReportExecutionSummaryV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        execution_metadata: DomainExecutionMetadataSummaryToJSON(value["executionMetadata"]),
        id: value["id"],
        last_updated_on: value["lastUpdatedOn"].toISOString(),
        report_file_reference: value["reportFileReference"],
        report_params: DomainReportParamsToJSON(value["reportParams"]),
        result_metadata: DomainResultMetadataToJSON(value["resultMetadata"]),
        status: value["status"],
        status_display: value["statusDisplay"],
        status_msg: value["statusMsg"],
    };
}
