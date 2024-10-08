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
import type { DomainLastScheduledExecution } from "./DomainLastScheduledExecution";
import { DomainLastScheduledExecutionFromJSON, DomainLastScheduledExecutionFromJSONTyped, DomainLastScheduledExecutionToJSON } from "./DomainLastScheduledExecution";
import type { DomainXDRParams } from "./DomainXDRParams";
import { DomainXDRParamsFromJSON, DomainXDRParamsFromJSONTyped, DomainXDRParamsToJSON } from "./DomainXDRParams";
import type { DomainLastUnscheduledExecution } from "./DomainLastUnscheduledExecution";
import { DomainLastUnscheduledExecutionFromJSON, DomainLastUnscheduledExecutionFromJSONTyped, DomainLastUnscheduledExecutionToJSON } from "./DomainLastUnscheduledExecution";
import type { DomainDiscoverParams } from "./DomainDiscoverParams";
import { DomainDiscoverParamsFromJSON, DomainDiscoverParamsFromJSONTyped, DomainDiscoverParamsToJSON } from "./DomainDiscoverParams";

/**
 *
 * @export
 * @interface DomainReportMetadata
 */
export interface DomainReportMetadata {
    /**
     *
     * @type {string}
     * @memberof DomainReportMetadata
     */
    createdByUserId: string;
    /**
     *
     * @type {string}
     * @memberof DomainReportMetadata
     */
    createdByUuid: string;
    /**
     *
     * @type {DomainDiscoverParams}
     * @memberof DomainReportMetadata
     */
    discoverParams?: DomainDiscoverParams;
    /**
     *
     * @type {DomainLastScheduledExecution}
     * @memberof DomainReportMetadata
     */
    lastScheduledExecution?: DomainLastScheduledExecution;
    /**
     *
     * @type {DomainLastUnscheduledExecution}
     * @memberof DomainReportMetadata
     */
    lastUnscheduledExecution: DomainLastUnscheduledExecution;
    /**
     *
     * @type {string}
     * @memberof DomainReportMetadata
     */
    subtype: string;
    /**
     *
     * @type {DomainXDRParams}
     * @memberof DomainReportMetadata
     */
    xdrParams?: DomainXDRParams;
}

/**
 * Check if a given object implements the DomainReportMetadata interface.
 */
export function instanceOfDomainReportMetadata(value: object): value is DomainReportMetadata {
    if (!("createdByUserId" in value) || value["createdByUserId"] === undefined) return false;
    if (!("createdByUuid" in value) || value["createdByUuid"] === undefined) return false;
    if (!("lastUnscheduledExecution" in value) || value["lastUnscheduledExecution"] === undefined) return false;
    if (!("subtype" in value) || value["subtype"] === undefined) return false;
    return true;
}

export function DomainReportMetadataFromJSON(json: any): DomainReportMetadata {
    return DomainReportMetadataFromJSONTyped(json, false);
}

export function DomainReportMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainReportMetadata {
    if (json == null) {
        return json;
    }
    return {
        createdByUserId: json["created_by_user_id"],
        createdByUuid: json["created_by_uuid"],
        discoverParams: json["discover_params"] == null ? undefined : DomainDiscoverParamsFromJSON(json["discover_params"]),
        lastScheduledExecution: json["last_scheduled_execution"] == null ? undefined : DomainLastScheduledExecutionFromJSON(json["last_scheduled_execution"]),
        lastUnscheduledExecution: DomainLastUnscheduledExecutionFromJSON(json["last_unscheduled_execution"]),
        subtype: json["subtype"],
        xdrParams: json["xdr_params"] == null ? undefined : DomainXDRParamsFromJSON(json["xdr_params"]),
    };
}

export function DomainReportMetadataToJSON(value?: DomainReportMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        created_by_user_id: value["createdByUserId"],
        created_by_uuid: value["createdByUuid"],
        discover_params: DomainDiscoverParamsToJSON(value["discoverParams"]),
        last_scheduled_execution: DomainLastScheduledExecutionToJSON(value["lastScheduledExecution"]),
        last_unscheduled_execution: DomainLastUnscheduledExecutionToJSON(value["lastUnscheduledExecution"]),
        subtype: value["subtype"],
        xdr_params: DomainXDRParamsToJSON(value["xdrParams"]),
    };
}
