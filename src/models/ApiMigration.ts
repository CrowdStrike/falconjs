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
/**
 *
 * @export
 * @interface ApiMigration
 */
export interface ApiMigration {
    /**
     *
     * @type {string}
     * @memberof ApiMigration
     */
    canceledBy?: string;
    /**
     *
     * @type {Date}
     * @memberof ApiMigration
     */
    completedTime?: Date;
    /**
     *
     * @type {string}
     * @memberof ApiMigration
     */
    createdBy: string;
    /**
     *
     * @type {Date}
     * @memberof ApiMigration
     */
    createdTime: Date;
    /**
     *
     * @type {string}
     * @memberof ApiMigration
     */
    migrationId: string;
    /**
     *
     * @type {string}
     * @memberof ApiMigration
     */
    migrationStatus: string;
    /**
     *
     * @type {string}
     * @memberof ApiMigration
     */
    name: string;
    /**
     *
     * @type {Date}
     * @memberof ApiMigration
     */
    startedTime?: Date;
    /**
     *
     * @type {string}
     * @memberof ApiMigration
     */
    targetCid: string;
    /**
     *
     * @type {number}
     * @memberof ApiMigration
     */
    totalHosts: number;
    /**
     *
     * @type {string}
     * @memberof ApiMigration
     */
    updatedBy: string;
    /**
     *
     * @type {Date}
     * @memberof ApiMigration
     */
    updatedTime: Date;
}

/**
 * Check if a given object implements the ApiMigration interface.
 */
export function instanceOfApiMigration(value: object): value is ApiMigration {
    if (!("createdBy" in value) || value["createdBy"] === undefined) return false;
    if (!("createdTime" in value) || value["createdTime"] === undefined) return false;
    if (!("migrationId" in value) || value["migrationId"] === undefined) return false;
    if (!("migrationStatus" in value) || value["migrationStatus"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("targetCid" in value) || value["targetCid"] === undefined) return false;
    if (!("totalHosts" in value) || value["totalHosts"] === undefined) return false;
    if (!("updatedBy" in value) || value["updatedBy"] === undefined) return false;
    if (!("updatedTime" in value) || value["updatedTime"] === undefined) return false;
    return true;
}

export function ApiMigrationFromJSON(json: any): ApiMigration {
    return ApiMigrationFromJSONTyped(json, false);
}

export function ApiMigrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiMigration {
    if (json == null) {
        return json;
    }
    return {
        canceledBy: json["canceled_by"] == null ? undefined : json["canceled_by"],
        completedTime: json["completed_time"] == null ? undefined : new Date(json["completed_time"]),
        createdBy: json["created_by"],
        createdTime: new Date(json["created_time"]),
        migrationId: json["migration_id"],
        migrationStatus: json["migration_status"],
        name: json["name"],
        startedTime: json["started_time"] == null ? undefined : new Date(json["started_time"]),
        targetCid: json["target_cid"],
        totalHosts: json["total_hosts"],
        updatedBy: json["updated_by"],
        updatedTime: new Date(json["updated_time"]),
    };
}

export function ApiMigrationToJSON(value?: ApiMigration | null): any {
    if (value == null) {
        return value;
    }
    return {
        canceled_by: value["canceledBy"],
        completed_time: value["completedTime"] == null ? undefined : value["completedTime"].toISOString(),
        created_by: value["createdBy"],
        created_time: value["createdTime"].toISOString(),
        migration_id: value["migrationId"],
        migration_status: value["migrationStatus"],
        name: value["name"],
        started_time: value["startedTime"] == null ? undefined : value["startedTime"].toISOString(),
        target_cid: value["targetCid"],
        total_hosts: value["totalHosts"],
        updated_by: value["updatedBy"],
        updated_time: value["updatedTime"].toISOString(),
    };
}
