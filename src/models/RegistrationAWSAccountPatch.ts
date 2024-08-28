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
 * @interface RegistrationAWSAccountPatch
 */
export interface RegistrationAWSAccountPatch {
    /**
     *
     * @type {string}
     * @memberof RegistrationAWSAccountPatch
     */
    accountId: string;
    /**
     *
     * @type {boolean}
     * @memberof RegistrationAWSAccountPatch
     */
    behaviorAssessmentEnabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof RegistrationAWSAccountPatch
     */
    cloudtrailRegion?: string;
    /**
     *
     * @type {boolean}
     * @memberof RegistrationAWSAccountPatch
     */
    dspmEnabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof RegistrationAWSAccountPatch
     */
    dspmRole?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationAWSAccountPatch
     */
    environment?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationAWSAccountPatch
     */
    iamRoleArn: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationAWSAccountPatch
     */
    remediationRegion?: string;
    /**
     *
     * @type {Date}
     * @memberof RegistrationAWSAccountPatch
     */
    remediationTouAccepted?: Date;
    /**
     *
     * @type {boolean}
     * @memberof RegistrationAWSAccountPatch
     */
    sensorManagementEnabled?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof RegistrationAWSAccountPatch
     */
    targetOus?: Array<string>;
}

/**
 * Check if a given object implements the RegistrationAWSAccountPatch interface.
 */
export function instanceOfRegistrationAWSAccountPatch(value: object): value is RegistrationAWSAccountPatch {
    if (!("accountId" in value) || value["accountId"] === undefined) return false;
    if (!("iamRoleArn" in value) || value["iamRoleArn"] === undefined) return false;
    return true;
}

export function RegistrationAWSAccountPatchFromJSON(json: any): RegistrationAWSAccountPatch {
    return RegistrationAWSAccountPatchFromJSONTyped(json, false);
}

export function RegistrationAWSAccountPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationAWSAccountPatch {
    if (json == null) {
        return json;
    }
    return {
        accountId: json["account_id"],
        behaviorAssessmentEnabled: json["behavior_assessment_enabled"] == null ? undefined : json["behavior_assessment_enabled"],
        cloudtrailRegion: json["cloudtrail_region"] == null ? undefined : json["cloudtrail_region"],
        dspmEnabled: json["dspm_enabled"] == null ? undefined : json["dspm_enabled"],
        dspmRole: json["dspm_role"] == null ? undefined : json["dspm_role"],
        environment: json["environment"] == null ? undefined : json["environment"],
        iamRoleArn: json["iam_role_arn"],
        remediationRegion: json["remediation_region"] == null ? undefined : json["remediation_region"],
        remediationTouAccepted: json["remediation_tou_accepted"] == null ? undefined : new Date(json["remediation_tou_accepted"]),
        sensorManagementEnabled: json["sensor_management_enabled"] == null ? undefined : json["sensor_management_enabled"],
        targetOus: json["target_ous"] == null ? undefined : json["target_ous"],
    };
}

export function RegistrationAWSAccountPatchToJSON(value?: RegistrationAWSAccountPatch | null): any {
    if (value == null) {
        return value;
    }
    return {
        account_id: value["accountId"],
        behavior_assessment_enabled: value["behaviorAssessmentEnabled"],
        cloudtrail_region: value["cloudtrailRegion"],
        dspm_enabled: value["dspmEnabled"],
        dspm_role: value["dspmRole"],
        environment: value["environment"],
        iam_role_arn: value["iamRoleArn"],
        remediation_region: value["remediationRegion"],
        remediation_tou_accepted: value["remediationTouAccepted"] == null ? undefined : value["remediationTouAccepted"].toISOString(),
        sensor_management_enabled: value["sensorManagementEnabled"],
        target_ous: value["targetOus"],
    };
}
