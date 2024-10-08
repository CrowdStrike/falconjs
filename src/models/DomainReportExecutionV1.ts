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
import type { DomainExecutionMetadataV1 } from "./DomainExecutionMetadataV1";
import { DomainExecutionMetadataV1FromJSON, DomainExecutionMetadataV1FromJSONTyped, DomainExecutionMetadataV1ToJSON } from "./DomainExecutionMetadataV1";
import type { DomainResultMetadata } from "./DomainResultMetadata";
import { DomainResultMetadataFromJSON, DomainResultMetadataFromJSONTyped, DomainResultMetadataToJSON } from "./DomainResultMetadata";
import type { DomainReportParams } from "./DomainReportParams";
import { DomainReportParamsFromJSON, DomainReportParamsFromJSONTyped, DomainReportParamsToJSON } from "./DomainReportParams";

/**
 *
 * @export
 * @interface DomainReportExecutionV1
 */
export interface DomainReportExecutionV1 {
    /**
     *
     * @type {boolean}
     * @memberof DomainReportExecutionV1
     */
    canWrite?: boolean;
    /**
     *
     * @type {Date}
     * @memberof DomainReportExecutionV1
     */
    createdOn: Date;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    customerId: string;
    /**
     *
     * @type {DomainExecutionMetadataV1}
     * @memberof DomainReportExecutionV1
     */
    executionMetadata?: DomainExecutionMetadataV1;
    /**
     *
     * @type {Date}
     * @memberof DomainReportExecutionV1
     */
    expirationOn: Date;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    jobReference?: string;
    /**
     *
     * @type {Date}
     * @memberof DomainReportExecutionV1
     */
    lastUpdatedOn: Date;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    reportFileReference?: string;
    /**
     *
     * @type {DomainReportParams}
     * @memberof DomainReportExecutionV1
     */
    reportParams: DomainReportParams;
    /**
     *
     * @type {DomainResultMetadata}
     * @memberof DomainReportExecutionV1
     */
    resultMetadata?: DomainResultMetadata;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    scheduledReportId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainReportExecutionV1
     */
    sharedWith: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    statusDisplay: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    statusMsg: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    tracking?: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    triggerReference?: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportExecutionV1
     */
    userUuid: string;
}

/**
 * Check if a given object implements the DomainReportExecutionV1 interface.
 */
export function instanceOfDomainReportExecutionV1(value: object): value is DomainReportExecutionV1 {
    if (!("createdOn" in value) || value["createdOn"] === undefined) return false;
    if (!("customerId" in value) || value["customerId"] === undefined) return false;
    if (!("expirationOn" in value) || value["expirationOn"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("lastUpdatedOn" in value) || value["lastUpdatedOn"] === undefined) return false;
    if (!("reportParams" in value) || value["reportParams"] === undefined) return false;
    if (!("scheduledReportId" in value) || value["scheduledReportId"] === undefined) return false;
    if (!("sharedWith" in value) || value["sharedWith"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    if (!("statusDisplay" in value) || value["statusDisplay"] === undefined) return false;
    if (!("statusMsg" in value) || value["statusMsg"] === undefined) return false;
    if (!("type" in value) || value["type"] === undefined) return false;
    if (!("userId" in value) || value["userId"] === undefined) return false;
    if (!("userUuid" in value) || value["userUuid"] === undefined) return false;
    return true;
}

export function DomainReportExecutionV1FromJSON(json: any): DomainReportExecutionV1 {
    return DomainReportExecutionV1FromJSONTyped(json, false);
}

export function DomainReportExecutionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainReportExecutionV1 {
    if (json == null) {
        return json;
    }
    return {
        canWrite: json["can_write"] == null ? undefined : json["can_write"],
        createdOn: new Date(json["created_on"]),
        customerId: json["customer_id"],
        executionMetadata: json["execution_metadata"] == null ? undefined : DomainExecutionMetadataV1FromJSON(json["execution_metadata"]),
        expirationOn: new Date(json["expiration_on"]),
        id: json["id"],
        jobReference: json["job_reference"] == null ? undefined : json["job_reference"],
        lastUpdatedOn: new Date(json["last_updated_on"]),
        reportFileReference: json["report_file_reference"] == null ? undefined : json["report_file_reference"],
        reportParams: DomainReportParamsFromJSON(json["report_params"]),
        resultMetadata: json["result_metadata"] == null ? undefined : DomainResultMetadataFromJSON(json["result_metadata"]),
        scheduledReportId: json["scheduled_report_id"],
        sharedWith: json["shared_with"],
        status: json["status"],
        statusDisplay: json["status_display"],
        statusMsg: json["status_msg"],
        tracking: json["tracking"] == null ? undefined : json["tracking"],
        triggerReference: json["trigger_reference"] == null ? undefined : json["trigger_reference"],
        type: json["type"],
        userId: json["user_id"],
        userUuid: json["user_uuid"],
    };
}

export function DomainReportExecutionV1ToJSON(value?: DomainReportExecutionV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        can_write: value["canWrite"],
        created_on: value["createdOn"].toISOString(),
        customer_id: value["customerId"],
        execution_metadata: DomainExecutionMetadataV1ToJSON(value["executionMetadata"]),
        expiration_on: value["expirationOn"].toISOString(),
        id: value["id"],
        job_reference: value["jobReference"],
        last_updated_on: value["lastUpdatedOn"].toISOString(),
        report_file_reference: value["reportFileReference"],
        report_params: DomainReportParamsToJSON(value["reportParams"]),
        result_metadata: DomainResultMetadataToJSON(value["resultMetadata"]),
        scheduled_report_id: value["scheduledReportId"],
        shared_with: value["sharedWith"],
        status: value["status"],
        status_display: value["statusDisplay"],
        status_msg: value["statusMsg"],
        tracking: value["tracking"],
        trigger_reference: value["triggerReference"],
        type: value["type"],
        user_id: value["userId"],
        user_uuid: value["userUuid"],
    };
}
