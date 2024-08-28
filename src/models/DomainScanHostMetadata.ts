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
import type { DomainFileCount } from "./DomainFileCount";
import { DomainFileCountFromJSON, DomainFileCountFromJSONTyped, DomainFileCountToJSON } from "./DomainFileCount";

/**
 *
 * @export
 * @interface DomainScanHostMetadata
 */
export interface DomainScanHostMetadata {
    /**
     *
     * @type {string}
     * @memberof DomainScanHostMetadata
     */
    cid?: string;
    /**
     *
     * @type {Date}
     * @memberof DomainScanHostMetadata
     */
    completedOn?: Date;
    /**
     *
     * @type {DomainFileCount}
     * @memberof DomainScanHostMetadata
     */
    filecount?: DomainFileCount;
    /**
     *
     * @type {string}
     * @memberof DomainScanHostMetadata
     */
    hostId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainScanHostMetadata
     */
    hostScanId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainScanHostMetadata
     */
    id: string;
    /**
     *
     * @type {Date}
     * @memberof DomainScanHostMetadata
     */
    lastUpdated?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainScanHostMetadata
     */
    profileId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainScanHostMetadata
     */
    scanControlReason?: string;
    /**
     *
     * @type {string}
     * @memberof DomainScanHostMetadata
     */
    scanId?: string;
    /**
     *
     * @type {number}
     * @memberof DomainScanHostMetadata
     */
    severity?: number;
    /**
     *
     * @type {Date}
     * @memberof DomainScanHostMetadata
     */
    startedOn?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainScanHostMetadata
     */
    status?: string;
}

/**
 * Check if a given object implements the DomainScanHostMetadata interface.
 */
export function instanceOfDomainScanHostMetadata(value: object): value is DomainScanHostMetadata {
    if (!("id" in value) || value["id"] === undefined) return false;
    return true;
}

export function DomainScanHostMetadataFromJSON(json: any): DomainScanHostMetadata {
    return DomainScanHostMetadataFromJSONTyped(json, false);
}

export function DomainScanHostMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainScanHostMetadata {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"] == null ? undefined : json["cid"],
        completedOn: json["completed_on"] == null ? undefined : new Date(json["completed_on"]),
        filecount: json["filecount"] == null ? undefined : DomainFileCountFromJSON(json["filecount"]),
        hostId: json["host_id"] == null ? undefined : json["host_id"],
        hostScanId: json["host_scan_id"] == null ? undefined : json["host_scan_id"],
        id: json["id"],
        lastUpdated: json["last_updated"] == null ? undefined : new Date(json["last_updated"]),
        profileId: json["profile_id"] == null ? undefined : json["profile_id"],
        scanControlReason: json["scan_control_reason"] == null ? undefined : json["scan_control_reason"],
        scanId: json["scan_id"] == null ? undefined : json["scan_id"],
        severity: json["severity"] == null ? undefined : json["severity"],
        startedOn: json["started_on"] == null ? undefined : new Date(json["started_on"]),
        status: json["status"] == null ? undefined : json["status"],
    };
}

export function DomainScanHostMetadataToJSON(value?: DomainScanHostMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        completed_on: value["completedOn"] == null ? undefined : value["completedOn"].toISOString(),
        filecount: DomainFileCountToJSON(value["filecount"]),
        host_id: value["hostId"],
        host_scan_id: value["hostScanId"],
        id: value["id"],
        last_updated: value["lastUpdated"] == null ? undefined : value["lastUpdated"].toISOString(),
        profile_id: value["profileId"],
        scan_control_reason: value["scanControlReason"],
        scan_id: value["scanId"],
        severity: value["severity"],
        started_on: value["startedOn"] == null ? undefined : value["startedOn"].toISOString(),
        status: value["status"],
    };
}
