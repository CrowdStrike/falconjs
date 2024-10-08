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
import type { ApiEvent } from "./ApiEvent";
import { ApiEventFromJSON, ApiEventFromJSONTyped, ApiEventToJSON } from "./ApiEvent";

/**
 *
 * @export
 * @interface ApiHostMigration
 */
export interface ApiHostMigration {
    /**
     *
     * @type {Date}
     * @memberof ApiHostMigration
     */
    createdTime: Date;
    /**
     *
     * @type {Array<ApiEvent>}
     * @memberof ApiHostMigration
     */
    events?: Array<ApiEvent>;
    /**
     *
     * @type {string}
     * @memberof ApiHostMigration
     */
    hostMigrationId: string;
    /**
     * assigned static hostgroups, may need more details here
     * @type {Array<string>}
     * @memberof ApiHostMigration
     */
    hostgroups: Array<string>;
    /**
     * hostname at the time of migration
     * @type {string}
     * @memberof ApiHostMigration
     */
    hostname: string;
    /**
     *
     * @type {string}
     * @memberof ApiHostMigration
     */
    migrationId: string;
    /**
     * platform at the time of migration
     * @type {string}
     * @memberof ApiHostMigration
     */
    platform: string;
    /**
     *
     * @type {string}
     * @memberof ApiHostMigration
     */
    sourceCid: string;
    /**
     * device_id in the source cid
     * @type {string}
     * @memberof ApiHostMigration
     */
    sourceDeviceId: string;
    /**
     *
     * @type {string}
     * @memberof ApiHostMigration
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof ApiHostMigration
     */
    statusDetails: string;
    /**
     * not sure if this is necessary since it's common
     * @type {string}
     * @memberof ApiHostMigration
     */
    targetCid: string;
    /**
     * device_id in the target cid. This may change while the migration is incomplete.
     * @type {string}
     * @memberof ApiHostMigration
     */
    targetDeviceId: string;
    /**
     *
     * @type {Date}
     * @memberof ApiHostMigration
     */
    updatedTime: Date;
}

/**
 * Check if a given object implements the ApiHostMigration interface.
 */
export function instanceOfApiHostMigration(value: object): value is ApiHostMigration {
    if (!("createdTime" in value) || value["createdTime"] === undefined) return false;
    if (!("hostMigrationId" in value) || value["hostMigrationId"] === undefined) return false;
    if (!("hostgroups" in value) || value["hostgroups"] === undefined) return false;
    if (!("hostname" in value) || value["hostname"] === undefined) return false;
    if (!("migrationId" in value) || value["migrationId"] === undefined) return false;
    if (!("platform" in value) || value["platform"] === undefined) return false;
    if (!("sourceCid" in value) || value["sourceCid"] === undefined) return false;
    if (!("sourceDeviceId" in value) || value["sourceDeviceId"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    if (!("statusDetails" in value) || value["statusDetails"] === undefined) return false;
    if (!("targetCid" in value) || value["targetCid"] === undefined) return false;
    if (!("targetDeviceId" in value) || value["targetDeviceId"] === undefined) return false;
    if (!("updatedTime" in value) || value["updatedTime"] === undefined) return false;
    return true;
}

export function ApiHostMigrationFromJSON(json: any): ApiHostMigration {
    return ApiHostMigrationFromJSONTyped(json, false);
}

export function ApiHostMigrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiHostMigration {
    if (json == null) {
        return json;
    }
    return {
        createdTime: new Date(json["created_time"]),
        events: json["events"] == null ? undefined : (json["events"] as Array<any>).map(ApiEventFromJSON),
        hostMigrationId: json["host_migration_id"],
        hostgroups: json["hostgroups"],
        hostname: json["hostname"],
        migrationId: json["migration_id"],
        platform: json["platform"],
        sourceCid: json["source_cid"],
        sourceDeviceId: json["source_device_id"],
        status: json["status"],
        statusDetails: json["status_details"],
        targetCid: json["target_cid"],
        targetDeviceId: json["target_device_id"],
        updatedTime: new Date(json["updated_time"]),
    };
}

export function ApiHostMigrationToJSON(value?: ApiHostMigration | null): any {
    if (value == null) {
        return value;
    }
    return {
        created_time: value["createdTime"].toISOString(),
        events: value["events"] == null ? undefined : (value["events"] as Array<any>).map(ApiEventToJSON),
        host_migration_id: value["hostMigrationId"],
        hostgroups: value["hostgroups"],
        hostname: value["hostname"],
        migration_id: value["migrationId"],
        platform: value["platform"],
        source_cid: value["sourceCid"],
        source_device_id: value["sourceDeviceId"],
        status: value["status"],
        status_details: value["statusDetails"],
        target_cid: value["targetCid"],
        target_device_id: value["targetDeviceId"],
        updated_time: value["updatedTime"].toISOString(),
    };
}
