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
import type { DomainCondition } from "./DomainCondition";
import { DomainConditionFromJSON, DomainConditionFromJSONTyped, DomainConditionToJSON } from "./DomainCondition";
import type { DomainPermission } from "./DomainPermission";
import { DomainPermissionFromJSON, DomainPermissionFromJSONTyped, DomainPermissionToJSON } from "./DomainPermission";
import type { DomainAzureManagementGroupRoleAssignment } from "./DomainAzureManagementGroupRoleAssignment";
import {
    DomainAzureManagementGroupRoleAssignmentFromJSON,
    DomainAzureManagementGroupRoleAssignmentFromJSONTyped,
    DomainAzureManagementGroupRoleAssignmentToJSON,
} from "./DomainAzureManagementGroupRoleAssignment";

/**
 *
 * @export
 * @interface RegistrationAzureManagementGroupV1Ext
 */
export interface RegistrationAzureManagementGroupV1Ext {
    /**
     *
     * @type {Date}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    deletedAt: Date;
    /**
     *
     * @type {number}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    iD: number;
    /**
     *
     * @type {Date}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    updatedAt: Date;
    /**
     * Azure Management Group ID.
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    azureManagementGroupId: string;
    /**
     * Azure Management Group Name.
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    azureManagementGroupName?: string;
    /**
     * Permissions status returned via API.
     * @type {Array<DomainPermission>}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    azurePermissionsStatus?: Array<DomainPermission>;
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    clientId?: string;
    /**
     *
     * @type {Array<DomainCondition>}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    conditions?: Array<DomainCondition>;
    /**
     *
     * @type {Date}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    credentialsEndDate?: Date;
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    credentialsType?: string;
    /**
     * Default Azure Subscription ID to provision shared IOA infrastructure.
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    defaultSubscriptionId?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    objectId?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    publicCertificate?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    publicCertificateRaw?: string;
    /**
     *
     * @type {Array<DomainAzureManagementGroupRoleAssignment>}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    roleAssignments?: Array<DomainAzureManagementGroupRoleAssignment>;
    /**
     * Account registration status.
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    status?: string;
    /**
     * Azure Tenant ID to use.
     * @type {string}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    tenantId: string;
    /**
     *
     * @type {number}
     * @memberof RegistrationAzureManagementGroupV1Ext
     */
    yearsValid?: number;
}

/**
 * Check if a given object implements the RegistrationAzureManagementGroupV1Ext interface.
 */
export function instanceOfRegistrationAzureManagementGroupV1Ext(value: object): value is RegistrationAzureManagementGroupV1Ext {
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("deletedAt" in value) || value["deletedAt"] === undefined) return false;
    if (!("iD" in value) || value["iD"] === undefined) return false;
    if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
    if (!("azureManagementGroupId" in value) || value["azureManagementGroupId"] === undefined) return false;
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("tenantId" in value) || value["tenantId"] === undefined) return false;
    return true;
}

export function RegistrationAzureManagementGroupV1ExtFromJSON(json: any): RegistrationAzureManagementGroupV1Ext {
    return RegistrationAzureManagementGroupV1ExtFromJSONTyped(json, false);
}

export function RegistrationAzureManagementGroupV1ExtFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationAzureManagementGroupV1Ext {
    if (json == null) {
        return json;
    }
    return {
        createdAt: new Date(json["CreatedAt"]),
        deletedAt: new Date(json["DeletedAt"]),
        iD: json["ID"],
        updatedAt: new Date(json["UpdatedAt"]),
        azureManagementGroupId: json["azure_management_group_id"],
        azureManagementGroupName: json["azure_management_group_name"] == null ? undefined : json["azure_management_group_name"],
        azurePermissionsStatus: json["azure_permissions_status"] == null ? undefined : (json["azure_permissions_status"] as Array<any>).map(DomainPermissionFromJSON),
        cid: json["cid"],
        clientId: json["client_id"] == null ? undefined : json["client_id"],
        conditions: json["conditions"] == null ? undefined : (json["conditions"] as Array<any>).map(DomainConditionFromJSON),
        credentialsEndDate: json["credentials_end_date"] == null ? undefined : new Date(json["credentials_end_date"]),
        credentialsType: json["credentials_type"] == null ? undefined : json["credentials_type"],
        defaultSubscriptionId: json["default_subscription_id"] == null ? undefined : json["default_subscription_id"],
        objectId: json["object_id"] == null ? undefined : json["object_id"],
        publicCertificate: json["public_certificate"] == null ? undefined : json["public_certificate"],
        publicCertificateRaw: json["public_certificate_raw"] == null ? undefined : json["public_certificate_raw"],
        roleAssignments: json["role_assignments"] == null ? undefined : (json["role_assignments"] as Array<any>).map(DomainAzureManagementGroupRoleAssignmentFromJSON),
        status: json["status"] == null ? undefined : json["status"],
        tenantId: json["tenant_id"],
        yearsValid: json["years_valid"] == null ? undefined : json["years_valid"],
    };
}

export function RegistrationAzureManagementGroupV1ExtToJSON(value?: RegistrationAzureManagementGroupV1Ext | null): any {
    if (value == null) {
        return value;
    }
    return {
        CreatedAt: value["createdAt"].toISOString(),
        DeletedAt: value["deletedAt"].toISOString(),
        ID: value["iD"],
        UpdatedAt: value["updatedAt"].toISOString(),
        azure_management_group_id: value["azureManagementGroupId"],
        azure_management_group_name: value["azureManagementGroupName"],
        azure_permissions_status: value["azurePermissionsStatus"] == null ? undefined : (value["azurePermissionsStatus"] as Array<any>).map(DomainPermissionToJSON),
        cid: value["cid"],
        client_id: value["clientId"],
        conditions: value["conditions"] == null ? undefined : (value["conditions"] as Array<any>).map(DomainConditionToJSON),
        credentials_end_date: value["credentialsEndDate"] == null ? undefined : value["credentialsEndDate"].toISOString(),
        credentials_type: value["credentialsType"],
        default_subscription_id: value["defaultSubscriptionId"],
        object_id: value["objectId"],
        public_certificate: value["publicCertificate"],
        public_certificate_raw: value["publicCertificateRaw"],
        role_assignments: value["roleAssignments"] == null ? undefined : (value["roleAssignments"] as Array<any>).map(DomainAzureManagementGroupRoleAssignmentToJSON),
        status: value["status"],
        tenant_id: value["tenantId"],
        years_valid: value["yearsValid"],
    };
}
