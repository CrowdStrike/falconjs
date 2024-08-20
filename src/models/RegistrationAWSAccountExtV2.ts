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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RegistrationAWSAccountExtV2
 */
export interface RegistrationAWSAccountExtV2 {
    /**
     * 
     * @type {string}
     * @memberof RegistrationAWSAccountExtV2
     */
    accountId: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAWSAccountExtV2
     */
    accountType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationAWSAccountExtV2
     */
    behaviorAssessmentEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAWSAccountExtV2
     */
    cloudtrailRegion: string;
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationAWSAccountExtV2
     */
    dspmEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAWSAccountExtV2
     */
    dspmRole?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAWSAccountExtV2
     */
    iamRoleArn: string;
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationAWSAccountExtV2
     */
    isMaster?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAWSAccountExtV2
     */
    organizationId: string;
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationAWSAccountExtV2
     */
    sensorManagementEnabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof RegistrationAWSAccountExtV2
     */
    targetOus?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationAWSAccountExtV2
     */
    useExistingCloudtrail?: boolean;
}

/**
 * Check if a given object implements the RegistrationAWSAccountExtV2 interface.
 */
export function instanceOfRegistrationAWSAccountExtV2(value: object): value is RegistrationAWSAccountExtV2 {
    if (!('accountId' in value) || value['accountId'] === undefined) return false;
    if (!('cloudtrailRegion' in value) || value['cloudtrailRegion'] === undefined) return false;
    if (!('iamRoleArn' in value) || value['iamRoleArn'] === undefined) return false;
    if (!('organizationId' in value) || value['organizationId'] === undefined) return false;
    return true;
}

export function RegistrationAWSAccountExtV2FromJSON(json: any): RegistrationAWSAccountExtV2 {
    return RegistrationAWSAccountExtV2FromJSONTyped(json, false);
}

export function RegistrationAWSAccountExtV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationAWSAccountExtV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'accountId': json['account_id'],
        'accountType': json['account_type'] == null ? undefined : json['account_type'],
        'behaviorAssessmentEnabled': json['behavior_assessment_enabled'] == null ? undefined : json['behavior_assessment_enabled'],
        'cloudtrailRegion': json['cloudtrail_region'],
        'dspmEnabled': json['dspm_enabled'] == null ? undefined : json['dspm_enabled'],
        'dspmRole': json['dspm_role'] == null ? undefined : json['dspm_role'],
        'iamRoleArn': json['iam_role_arn'],
        'isMaster': json['is_master'] == null ? undefined : json['is_master'],
        'organizationId': json['organization_id'],
        'sensorManagementEnabled': json['sensor_management_enabled'] == null ? undefined : json['sensor_management_enabled'],
        'targetOus': json['target_ous'] == null ? undefined : json['target_ous'],
        'useExistingCloudtrail': json['use_existing_cloudtrail'] == null ? undefined : json['use_existing_cloudtrail'],
    };
}

export function RegistrationAWSAccountExtV2ToJSON(value?: RegistrationAWSAccountExtV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_id': value['accountId'],
        'account_type': value['accountType'],
        'behavior_assessment_enabled': value['behaviorAssessmentEnabled'],
        'cloudtrail_region': value['cloudtrailRegion'],
        'dspm_enabled': value['dspmEnabled'],
        'dspm_role': value['dspmRole'],
        'iam_role_arn': value['iamRoleArn'],
        'is_master': value['isMaster'],
        'organization_id': value['organizationId'],
        'sensor_management_enabled': value['sensorManagementEnabled'],
        'target_ous': value['targetOus'],
        'use_existing_cloudtrail': value['useExistingCloudtrail'],
    };
}

