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
import type { DomainCondition } from './DomainCondition';
import {
    DomainConditionFromJSON,
    DomainConditionFromJSONTyped,
    DomainConditionToJSON,
} from './DomainCondition';
import type { DomainAWSD4CAccountV1 } from './DomainAWSD4CAccountV1';
import {
    DomainAWSD4CAccountV1FromJSON,
    DomainAWSD4CAccountV1FromJSONTyped,
    DomainAWSD4CAccountV1ToJSON,
} from './DomainAWSD4CAccountV1';
import type { DomainCloudScope } from './DomainCloudScope';
import {
    DomainCloudScopeFromJSON,
    DomainCloudScopeFromJSONTyped,
    DomainCloudScopeToJSON,
} from './DomainCloudScope';
import type { DomainPermission } from './DomainPermission';
import {
    DomainPermissionFromJSON,
    DomainPermissionFromJSONTyped,
    DomainPermissionToJSON,
} from './DomainPermission';
import type { DomainAWSInventoryFilterSetting } from './DomainAWSInventoryFilterSetting';
import {
    DomainAWSInventoryFilterSettingFromJSON,
    DomainAWSInventoryFilterSettingFromJSONTyped,
    DomainAWSInventoryFilterSettingToJSON,
} from './DomainAWSInventoryFilterSetting';

/**
 * 
 * @export
 * @interface DomainAWSAccountV2
 */
export interface DomainAWSAccountV2 {
    /**
     * 
     * @type {Date}
     * @memberof DomainAWSAccountV2
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof DomainAWSAccountV2
     */
    deletedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof DomainAWSAccountV2
     */
    iD: number;
    /**
     * 
     * @type {Date}
     * @memberof DomainAWSAccountV2
     */
    updatedAt: Date;
    /**
     * 12 digit AWS provided unique identifier for the account.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    accountId?: string;
    /**
     * AWS account name
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    accountName?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    accountType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainAWSAccountV2
     */
    activeRegions?: Array<string>;
    /**
     * AWS CloudTrail bucket name to store logs.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    awsCloudtrailBucketName?: string;
    /**
     * AWS CloudTrail region.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    awsCloudtrailRegion?: string;
    /**
     * AWS Eventbus ARN.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    awsEventbusArn?: string;
    /**
     * Permissions status returned via API.
     * @type {Array<DomainPermission>}
     * @memberof DomainAWSAccountV2
     */
    awsPermissionsStatus: Array<DomainPermission>;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    behaviorAssessmentEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    cid?: string;
    /**
     * 
     * @type {Array<DomainCloudScope>}
     * @memberof DomainAWSAccountV2
     */
    cloudScopes?: Array<DomainCloudScope>;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    cloudformationUrl?: string;
    /**
     * 
     * @type {Array<DomainCondition>}
     * @memberof DomainAWSAccountV2
     */
    conditions?: Array<DomainCondition>;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    cspmEnabled?: boolean;
    /**
     * 
     * @type {DomainAWSD4CAccountV1}
     * @memberof DomainAWSAccountV2
     */
    d4c?: DomainAWSD4CAccountV1;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    d4cMigrated?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    dspmEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    dspmRoleArn?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    environment?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    eventbusName?: string;
    /**
     * ID assigned for use with cross account IAM role access.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    externalId?: string;
    /**
     * The full arn of the IAM role created in this account to control access.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    iamRoleArn?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    intermediateRoleArn?: string;
    /**
     * 
     * @type {Array<DomainAWSInventoryFilterSetting>}
     * @memberof DomainAWSAccountV2
     */
    inventoryFilter: Array<DomainAWSInventoryFilterSetting>;
    /**
     * Is CSPM Lite enabled.
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    isCspmLite?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    isCustomRolename: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    isMaster?: boolean;
    /**
     * Up to 34 character AWS provided unique identifier for the organization.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    organizationId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainAWSAccountV2
     */
    products?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    remediationCloudformationUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    remediationRegion?: string;
    /**
     * 
     * @type {Date}
     * @memberof DomainAWSAccountV2
     */
    remediationTouAccepted?: Date;
    /**
     * 12 digit AWS provided unique identifier for the root account (of the organization this account belongs to).
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    rootAccountId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    rootIamRole?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    secondaryRoleArn?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    sensorManagementEnabled: boolean;
    /**
     * 
     * @type {object}
     * @memberof DomainAWSAccountV2
     */
    settings?: object;
    /**
     * Account registration status.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    status?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainAWSAccountV2
     */
    targetOus?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    useExistingCloudtrail?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    valid?: boolean;
}

/**
 * Check if a given object implements the DomainAWSAccountV2 interface.
 */
export function instanceOfDomainAWSAccountV2(value: object): value is DomainAWSAccountV2 {
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('deletedAt' in value) || value['deletedAt'] === undefined) return false;
    if (!('iD' in value) || value['iD'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('awsPermissionsStatus' in value) || value['awsPermissionsStatus'] === undefined) return false;
    if (!('inventoryFilter' in value) || value['inventoryFilter'] === undefined) return false;
    if (!('isCustomRolename' in value) || value['isCustomRolename'] === undefined) return false;
    if (!('sensorManagementEnabled' in value) || value['sensorManagementEnabled'] === undefined) return false;
    return true;
}

export function DomainAWSAccountV2FromJSON(json: any): DomainAWSAccountV2 {
    return DomainAWSAccountV2FromJSONTyped(json, false);
}

export function DomainAWSAccountV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAWSAccountV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['CreatedAt'])),
        'deletedAt': (new Date(json['DeletedAt'])),
        'iD': json['ID'],
        'updatedAt': (new Date(json['UpdatedAt'])),
        'accountId': json['account_id'] == null ? undefined : json['account_id'],
        'accountName': json['account_name'] == null ? undefined : json['account_name'],
        'accountType': json['account_type'] == null ? undefined : json['account_type'],
        'activeRegions': json['active_regions'] == null ? undefined : json['active_regions'],
        'awsCloudtrailBucketName': json['aws_cloudtrail_bucket_name'] == null ? undefined : json['aws_cloudtrail_bucket_name'],
        'awsCloudtrailRegion': json['aws_cloudtrail_region'] == null ? undefined : json['aws_cloudtrail_region'],
        'awsEventbusArn': json['aws_eventbus_arn'] == null ? undefined : json['aws_eventbus_arn'],
        'awsPermissionsStatus': ((json['aws_permissions_status'] as Array<any>).map(DomainPermissionFromJSON)),
        'behaviorAssessmentEnabled': json['behavior_assessment_enabled'] == null ? undefined : json['behavior_assessment_enabled'],
        'cid': json['cid'] == null ? undefined : json['cid'],
        'cloudScopes': json['cloud_scopes'] == null ? undefined : ((json['cloud_scopes'] as Array<any>).map(DomainCloudScopeFromJSON)),
        'cloudformationUrl': json['cloudformation_url'] == null ? undefined : json['cloudformation_url'],
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(DomainConditionFromJSON)),
        'cspmEnabled': json['cspm_enabled'] == null ? undefined : json['cspm_enabled'],
        'd4c': json['d4c'] == null ? undefined : DomainAWSD4CAccountV1FromJSON(json['d4c']),
        'd4cMigrated': json['d4c_migrated'] == null ? undefined : json['d4c_migrated'],
        'dspmEnabled': json['dspm_enabled'] == null ? undefined : json['dspm_enabled'],
        'dspmRoleArn': json['dspm_role_arn'] == null ? undefined : json['dspm_role_arn'],
        'environment': json['environment'] == null ? undefined : json['environment'],
        'eventbusName': json['eventbus_name'] == null ? undefined : json['eventbus_name'],
        'externalId': json['external_id'] == null ? undefined : json['external_id'],
        'iamRoleArn': json['iam_role_arn'] == null ? undefined : json['iam_role_arn'],
        'intermediateRoleArn': json['intermediate_role_arn'] == null ? undefined : json['intermediate_role_arn'],
        'inventoryFilter': ((json['inventory_filter'] as Array<any>).map(DomainAWSInventoryFilterSettingFromJSON)),
        'isCspmLite': json['is_cspm_lite'] == null ? undefined : json['is_cspm_lite'],
        'isCustomRolename': json['is_custom_rolename'],
        'isMaster': json['is_master'] == null ? undefined : json['is_master'],
        'organizationId': json['organization_id'] == null ? undefined : json['organization_id'],
        'products': json['products'] == null ? undefined : json['products'],
        'remediationCloudformationUrl': json['remediation_cloudformation_url'] == null ? undefined : json['remediation_cloudformation_url'],
        'remediationRegion': json['remediation_region'] == null ? undefined : json['remediation_region'],
        'remediationTouAccepted': json['remediation_tou_accepted'] == null ? undefined : (new Date(json['remediation_tou_accepted'])),
        'rootAccountId': json['root_account_id'] == null ? undefined : json['root_account_id'],
        'rootIamRole': json['root_iam_role'] == null ? undefined : json['root_iam_role'],
        'secondaryRoleArn': json['secondary_role_arn'] == null ? undefined : json['secondary_role_arn'],
        'sensorManagementEnabled': json['sensor_management_enabled'],
        'settings': json['settings'] == null ? undefined : json['settings'],
        'status': json['status'] == null ? undefined : json['status'],
        'targetOus': json['target_ous'] == null ? undefined : json['target_ous'],
        'useExistingCloudtrail': json['use_existing_cloudtrail'] == null ? undefined : json['use_existing_cloudtrail'],
        'valid': json['valid'] == null ? undefined : json['valid'],
    };
}

export function DomainAWSAccountV2ToJSON(value?: DomainAWSAccountV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'CreatedAt': ((value['createdAt']).toISOString()),
        'DeletedAt': ((value['deletedAt']).toISOString()),
        'ID': value['iD'],
        'UpdatedAt': ((value['updatedAt']).toISOString()),
        'account_id': value['accountId'],
        'account_name': value['accountName'],
        'account_type': value['accountType'],
        'active_regions': value['activeRegions'],
        'aws_cloudtrail_bucket_name': value['awsCloudtrailBucketName'],
        'aws_cloudtrail_region': value['awsCloudtrailRegion'],
        'aws_eventbus_arn': value['awsEventbusArn'],
        'aws_permissions_status': ((value['awsPermissionsStatus'] as Array<any>).map(DomainPermissionToJSON)),
        'behavior_assessment_enabled': value['behaviorAssessmentEnabled'],
        'cid': value['cid'],
        'cloud_scopes': value['cloudScopes'] == null ? undefined : ((value['cloudScopes'] as Array<any>).map(DomainCloudScopeToJSON)),
        'cloudformation_url': value['cloudformationUrl'],
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(DomainConditionToJSON)),
        'cspm_enabled': value['cspmEnabled'],
        'd4c': DomainAWSD4CAccountV1ToJSON(value['d4c']),
        'd4c_migrated': value['d4cMigrated'],
        'dspm_enabled': value['dspmEnabled'],
        'dspm_role_arn': value['dspmRoleArn'],
        'environment': value['environment'],
        'eventbus_name': value['eventbusName'],
        'external_id': value['externalId'],
        'iam_role_arn': value['iamRoleArn'],
        'intermediate_role_arn': value['intermediateRoleArn'],
        'inventory_filter': ((value['inventoryFilter'] as Array<any>).map(DomainAWSInventoryFilterSettingToJSON)),
        'is_cspm_lite': value['isCspmLite'],
        'is_custom_rolename': value['isCustomRolename'],
        'is_master': value['isMaster'],
        'organization_id': value['organizationId'],
        'products': value['products'],
        'remediation_cloudformation_url': value['remediationCloudformationUrl'],
        'remediation_region': value['remediationRegion'],
        'remediation_tou_accepted': value['remediationTouAccepted'] == null ? undefined : ((value['remediationTouAccepted']).toISOString()),
        'root_account_id': value['rootAccountId'],
        'root_iam_role': value['rootIamRole'],
        'secondary_role_arn': value['secondaryRoleArn'],
        'sensor_management_enabled': value['sensorManagementEnabled'],
        'settings': value['settings'],
        'status': value['status'],
        'target_ous': value['targetOus'],
        'use_existing_cloudtrail': value['useExistingCloudtrail'],
        'valid': value['valid'],
    };
}

