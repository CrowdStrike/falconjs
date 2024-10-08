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
 * @interface DomainDiscoverAPIOsSecurity
 */
export interface DomainDiscoverAPIOsSecurity {
    /**
     * The credential guard status of the host
     * @type {boolean}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    credentialGuardStatus?: boolean;
    /**
     * The device guard status of the host
     * @type {boolean}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    deviceGuardStatus?: boolean;
    /**
     * The iommu protection status of the host
     * @type {string}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    iommuProtectionStatus?: string;
    /**
     * The kernel dma protection status of the host
     * @type {boolean}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    kernelDmaProtectionStatus?: boolean;
    /**
     * The secure boot enabled status of the host
     * @type {boolean}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    secureBootEnabledStatus?: boolean;
    /**
     * The secure boot requested status of the host
     * @type {boolean}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    secureBootRequestedStatus?: boolean;
    /**
     * The secure memory overwrite requested status of the host
     * @type {string}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    secureMemoryOverwriteRequestedStatus?: string;
    /**
     * The system guard status of the host
     * @type {string}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    systemGuardStatus?: string;
    /**
     * The uefi memory protection status of the host
     * @type {string}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    uefiMemoryProtectionStatus?: string;
    /**
     * The virtualization based security status of the host
     * @type {boolean}
     * @memberof DomainDiscoverAPIOsSecurity
     */
    virtualizationBasedSecurityStatus?: boolean;
}

/**
 * Check if a given object implements the DomainDiscoverAPIOsSecurity interface.
 */
export function instanceOfDomainDiscoverAPIOsSecurity(value: object): value is DomainDiscoverAPIOsSecurity {
    return true;
}

export function DomainDiscoverAPIOsSecurityFromJSON(json: any): DomainDiscoverAPIOsSecurity {
    return DomainDiscoverAPIOsSecurityFromJSONTyped(json, false);
}

export function DomainDiscoverAPIOsSecurityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPIOsSecurity {
    if (json == null) {
        return json;
    }
    return {
        credentialGuardStatus: json["credential_guard_status"] == null ? undefined : json["credential_guard_status"],
        deviceGuardStatus: json["device_guard_status"] == null ? undefined : json["device_guard_status"],
        iommuProtectionStatus: json["iommu_protection_status"] == null ? undefined : json["iommu_protection_status"],
        kernelDmaProtectionStatus: json["kernel_dma_protection_status"] == null ? undefined : json["kernel_dma_protection_status"],
        secureBootEnabledStatus: json["secure_boot_enabled_status"] == null ? undefined : json["secure_boot_enabled_status"],
        secureBootRequestedStatus: json["secure_boot_requested_status"] == null ? undefined : json["secure_boot_requested_status"],
        secureMemoryOverwriteRequestedStatus: json["secure_memory_overwrite_requested_status"] == null ? undefined : json["secure_memory_overwrite_requested_status"],
        systemGuardStatus: json["system_guard_status"] == null ? undefined : json["system_guard_status"],
        uefiMemoryProtectionStatus: json["uefi_memory_protection_status"] == null ? undefined : json["uefi_memory_protection_status"],
        virtualizationBasedSecurityStatus: json["virtualization_based_security_status"] == null ? undefined : json["virtualization_based_security_status"],
    };
}

export function DomainDiscoverAPIOsSecurityToJSON(value?: DomainDiscoverAPIOsSecurity | null): any {
    if (value == null) {
        return value;
    }
    return {
        credential_guard_status: value["credentialGuardStatus"],
        device_guard_status: value["deviceGuardStatus"],
        iommu_protection_status: value["iommuProtectionStatus"],
        kernel_dma_protection_status: value["kernelDmaProtectionStatus"],
        secure_boot_enabled_status: value["secureBootEnabledStatus"],
        secure_boot_requested_status: value["secureBootRequestedStatus"],
        secure_memory_overwrite_requested_status: value["secureMemoryOverwriteRequestedStatus"],
        system_guard_status: value["systemGuardStatus"],
        uefi_memory_protection_status: value["uefiMemoryProtectionStatus"],
        virtualization_based_security_status: value["virtualizationBasedSecurityStatus"],
    };
}
