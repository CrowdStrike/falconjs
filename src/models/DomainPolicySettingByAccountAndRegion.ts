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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface DomainPolicySettingByAccountAndRegion
 */
export interface DomainPolicySettingByAccountAndRegion {
    /**
     *
     * @type {string}
     * @memberof DomainPolicySettingByAccountAndRegion
     */
    accountId?: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainPolicySettingByAccountAndRegion
     */
    enabled: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPolicySettingByAccountAndRegion
     */
    regions?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainPolicySettingByAccountAndRegion
     */
    severity?: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainPolicySettingByAccountAndRegion
     */
    tagExcluded: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainPolicySettingByAccountAndRegion
     */
    tenantId?: string;
}

/**
 * Check if a given object implements the DomainPolicySettingByAccountAndRegion interface.
 */
export function instanceOfDomainPolicySettingByAccountAndRegion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "tagExcluded" in value;

    return isInstance;
}

export function DomainPolicySettingByAccountAndRegionFromJSON(json: any): DomainPolicySettingByAccountAndRegion {
    return DomainPolicySettingByAccountAndRegionFromJSONTyped(json, false);
}

export function DomainPolicySettingByAccountAndRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainPolicySettingByAccountAndRegion {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accountId: !exists(json, "account_id") ? undefined : json["account_id"],
        enabled: json["enabled"],
        regions: !exists(json, "regions") ? undefined : json["regions"],
        severity: !exists(json, "severity") ? undefined : json["severity"],
        tagExcluded: json["tag_excluded"],
        tenantId: !exists(json, "tenant_id") ? undefined : json["tenant_id"],
    };
}

export function DomainPolicySettingByAccountAndRegionToJSON(value?: DomainPolicySettingByAccountAndRegion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        account_id: value.accountId,
        enabled: value.enabled,
        regions: value.regions,
        severity: value.severity,
        tag_excluded: value.tagExcluded,
        tenant_id: value.tenantId,
    };
}
