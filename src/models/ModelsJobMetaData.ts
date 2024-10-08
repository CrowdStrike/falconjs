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
 * @interface ModelsJobMetaData
 */
export interface ModelsJobMetaData {
    /**
     *
     * @type {number}
     * @memberof ModelsJobMetaData
     */
    cloudProvider: number;
    /**
     *
     * @type {string}
     * @memberof ModelsJobMetaData
     */
    instanceId: string;
    /**
     *
     * @type {Date}
     * @memberof ModelsJobMetaData
     */
    jobEndTime: Date;
    /**
     *
     * @type {string}
     * @memberof ModelsJobMetaData
     */
    jobId: string;
    /**
     *
     * @type {Date}
     * @memberof ModelsJobMetaData
     */
    jobStartTime: Date;
    /**
     *
     * @type {string}
     * @memberof ModelsJobMetaData
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof ModelsJobMetaData
     */
    scannerVersion: string;
    /**
     *
     * @type {number}
     * @memberof ModelsJobMetaData
     */
    status: number;
}

/**
 * Check if a given object implements the ModelsJobMetaData interface.
 */
export function instanceOfModelsJobMetaData(value: object): value is ModelsJobMetaData {
    if (!("cloudProvider" in value) || value["cloudProvider"] === undefined) return false;
    if (!("instanceId" in value) || value["instanceId"] === undefined) return false;
    if (!("jobEndTime" in value) || value["jobEndTime"] === undefined) return false;
    if (!("jobId" in value) || value["jobId"] === undefined) return false;
    if (!("jobStartTime" in value) || value["jobStartTime"] === undefined) return false;
    if (!("message" in value) || value["message"] === undefined) return false;
    if (!("scannerVersion" in value) || value["scannerVersion"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    return true;
}

export function ModelsJobMetaDataFromJSON(json: any): ModelsJobMetaData {
    return ModelsJobMetaDataFromJSONTyped(json, false);
}

export function ModelsJobMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsJobMetaData {
    if (json == null) {
        return json;
    }
    return {
        cloudProvider: json["cloud_provider"],
        instanceId: json["instance_id"],
        jobEndTime: new Date(json["job_end_time"]),
        jobId: json["job_id"],
        jobStartTime: new Date(json["job_start_time"]),
        message: json["message"],
        scannerVersion: json["scanner_version"],
        status: json["status"],
    };
}

export function ModelsJobMetaDataToJSON(value?: ModelsJobMetaData | null): any {
    if (value == null) {
        return value;
    }
    return {
        cloud_provider: value["cloudProvider"],
        instance_id: value["instanceId"],
        job_end_time: value["jobEndTime"].toISOString(),
        job_id: value["jobId"],
        job_start_time: value["jobStartTime"].toISOString(),
        message: value["message"],
        scanner_version: value["scannerVersion"],
        status: value["status"],
    };
}
