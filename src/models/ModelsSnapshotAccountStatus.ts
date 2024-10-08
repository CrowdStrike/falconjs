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
import type { DomainAWSBatchClusterRegion } from "./DomainAWSBatchClusterRegion";
import { DomainAWSBatchClusterRegionFromJSON, DomainAWSBatchClusterRegionFromJSONTyped, DomainAWSBatchClusterRegionToJSON } from "./DomainAWSBatchClusterRegion";

/**
 *
 * @export
 * @interface ModelsSnapshotAccountStatus
 */
export interface ModelsSnapshotAccountStatus {
    /**
     *
     * @type {string}
     * @memberof ModelsSnapshotAccountStatus
     */
    accountId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsSnapshotAccountStatus
     */
    accountStatus: string;
    /**
     *
     * @type {Array<DomainAWSBatchClusterRegion>}
     * @memberof ModelsSnapshotAccountStatus
     */
    batchRegions: Array<DomainAWSBatchClusterRegion>;
    /**
     *
     * @type {number}
     * @memberof ModelsSnapshotAccountStatus
     */
    cloudProvider: number;
    /**
     *
     * @type {string}
     * @memberof ModelsSnapshotAccountStatus
     */
    iamExternalId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsSnapshotAccountStatus
     */
    iamRoleArn: string;
    /**
     *
     * @type {string}
     * @memberof ModelsSnapshotAccountStatus
     */
    processingAccount: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsSnapshotAccountStatus
     */
    regions: Array<string>;
}

/**
 * Check if a given object implements the ModelsSnapshotAccountStatus interface.
 */
export function instanceOfModelsSnapshotAccountStatus(value: object): value is ModelsSnapshotAccountStatus {
    if (!("accountId" in value) || value["accountId"] === undefined) return false;
    if (!("accountStatus" in value) || value["accountStatus"] === undefined) return false;
    if (!("batchRegions" in value) || value["batchRegions"] === undefined) return false;
    if (!("cloudProvider" in value) || value["cloudProvider"] === undefined) return false;
    if (!("iamExternalId" in value) || value["iamExternalId"] === undefined) return false;
    if (!("iamRoleArn" in value) || value["iamRoleArn"] === undefined) return false;
    if (!("processingAccount" in value) || value["processingAccount"] === undefined) return false;
    if (!("regions" in value) || value["regions"] === undefined) return false;
    return true;
}

export function ModelsSnapshotAccountStatusFromJSON(json: any): ModelsSnapshotAccountStatus {
    return ModelsSnapshotAccountStatusFromJSONTyped(json, false);
}

export function ModelsSnapshotAccountStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsSnapshotAccountStatus {
    if (json == null) {
        return json;
    }
    return {
        accountId: json["account_id"],
        accountStatus: json["account_status"],
        batchRegions: (json["batch_regions"] as Array<any>).map(DomainAWSBatchClusterRegionFromJSON),
        cloudProvider: json["cloud_provider"],
        iamExternalId: json["iam_external_id"],
        iamRoleArn: json["iam_role_arn"],
        processingAccount: json["processing_account"],
        regions: json["regions"],
    };
}

export function ModelsSnapshotAccountStatusToJSON(value?: ModelsSnapshotAccountStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        account_id: value["accountId"],
        account_status: value["accountStatus"],
        batch_regions: (value["batchRegions"] as Array<any>).map(DomainAWSBatchClusterRegionToJSON),
        cloud_provider: value["cloudProvider"],
        iam_external_id: value["iamExternalId"],
        iam_role_arn: value["iamRoleArn"],
        processing_account: value["processingAccount"],
        regions: value["regions"],
    };
}
