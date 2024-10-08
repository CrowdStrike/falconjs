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
import type { DomainXDRData } from "./DomainXDRData";
import { DomainXDRDataFromJSON, DomainXDRDataFromJSONTyped, DomainXDRDataToJSON } from "./DomainXDRData";
import type { DomainXDRParams } from "./DomainXDRParams";
import { DomainXDRParamsFromJSON, DomainXDRParamsFromJSONTyped, DomainXDRParamsToJSON } from "./DomainXDRParams";
import type { DomainReportParams } from "./DomainReportParams";
import { DomainReportParamsFromJSON, DomainReportParamsFromJSONTyped, DomainReportParamsToJSON } from "./DomainReportParams";

/**
 *
 * @export
 * @interface DomainExecutionMetadataV1
 */
export interface DomainExecutionMetadataV1 {
    /**
     *
     * @type {DomainReportParams}
     * @memberof DomainExecutionMetadataV1
     */
    reportParams: DomainReportParams;
    /**
     *
     * @type {boolean}
     * @memberof DomainExecutionMetadataV1
     */
    retryAllowed: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DomainExecutionMetadataV1
     */
    retryPerformed: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainExecutionMetadataV1
     */
    retryReportExecutionId: string;
    /**
     *
     * @type {string}
     * @memberof DomainExecutionMetadataV1
     */
    subtype: string;
    /**
     *
     * @type {string}
     * @memberof DomainExecutionMetadataV1
     */
    unscheduledExecutionType: string;
    /**
     *
     * @type {DomainXDRData}
     * @memberof DomainExecutionMetadataV1
     */
    xdrData: DomainXDRData;
    /**
     *
     * @type {DomainXDRParams}
     * @memberof DomainExecutionMetadataV1
     */
    xdrParams: DomainXDRParams;
}

/**
 * Check if a given object implements the DomainExecutionMetadataV1 interface.
 */
export function instanceOfDomainExecutionMetadataV1(value: object): value is DomainExecutionMetadataV1 {
    if (!("reportParams" in value) || value["reportParams"] === undefined) return false;
    if (!("retryAllowed" in value) || value["retryAllowed"] === undefined) return false;
    if (!("retryPerformed" in value) || value["retryPerformed"] === undefined) return false;
    if (!("retryReportExecutionId" in value) || value["retryReportExecutionId"] === undefined) return false;
    if (!("subtype" in value) || value["subtype"] === undefined) return false;
    if (!("unscheduledExecutionType" in value) || value["unscheduledExecutionType"] === undefined) return false;
    if (!("xdrData" in value) || value["xdrData"] === undefined) return false;
    if (!("xdrParams" in value) || value["xdrParams"] === undefined) return false;
    return true;
}

export function DomainExecutionMetadataV1FromJSON(json: any): DomainExecutionMetadataV1 {
    return DomainExecutionMetadataV1FromJSONTyped(json, false);
}

export function DomainExecutionMetadataV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExecutionMetadataV1 {
    if (json == null) {
        return json;
    }
    return {
        reportParams: DomainReportParamsFromJSON(json["report_params"]),
        retryAllowed: json["retry_allowed"],
        retryPerformed: json["retry_performed"],
        retryReportExecutionId: json["retry_report_execution_id"],
        subtype: json["subtype"],
        unscheduledExecutionType: json["unscheduled_execution_type"],
        xdrData: DomainXDRDataFromJSON(json["xdr_data"]),
        xdrParams: DomainXDRParamsFromJSON(json["xdr_params"]),
    };
}

export function DomainExecutionMetadataV1ToJSON(value?: DomainExecutionMetadataV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        report_params: DomainReportParamsToJSON(value["reportParams"]),
        retry_allowed: value["retryAllowed"],
        retry_performed: value["retryPerformed"],
        retry_report_execution_id: value["retryReportExecutionId"],
        subtype: value["subtype"],
        unscheduled_execution_type: value["unscheduledExecutionType"],
        xdr_data: DomainXDRDataToJSON(value["xdrData"]),
        xdr_params: DomainXDRParamsToJSON(value["xdrParams"]),
    };
}
