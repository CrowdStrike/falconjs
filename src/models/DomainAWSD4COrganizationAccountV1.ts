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
 * @interface DomainAWSD4COrganizationAccountV1
 */
export interface DomainAWSD4COrganizationAccountV1 {
    /**
     * 12 digit AWS provided unique identifier for the account.
     * @type {string}
     * @memberof DomainAWSD4COrganizationAccountV1
     */
    accountId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAWSD4COrganizationAccountV1
     */
    cid?: string;
    /**
     * Up to 34 character AWS provided unique identifier for the organization.
     * @type {string}
     * @memberof DomainAWSD4COrganizationAccountV1
     */
    organizationId?: string;
    /**
     * 12 digit AWS provided unique identifier for the account.
     * @type {string}
     * @memberof DomainAWSD4COrganizationAccountV1
     */
    rootAccountId?: string;
}

/**
 * Check if a given object implements the DomainAWSD4COrganizationAccountV1 interface.
 */
export function instanceOfDomainAWSD4COrganizationAccountV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DomainAWSD4COrganizationAccountV1FromJSON(json: any): DomainAWSD4COrganizationAccountV1 {
    return DomainAWSD4COrganizationAccountV1FromJSONTyped(json, false);
}

export function DomainAWSD4COrganizationAccountV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAWSD4COrganizationAccountV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accountId: !exists(json, "account_id") ? undefined : json["account_id"],
        cid: !exists(json, "cid") ? undefined : json["cid"],
        organizationId: !exists(json, "organization_id") ? undefined : json["organization_id"],
        rootAccountId: !exists(json, "root_account_id") ? undefined : json["root_account_id"],
    };
}

export function DomainAWSD4COrganizationAccountV1ToJSON(value?: DomainAWSD4COrganizationAccountV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        account_id: value.accountId,
        cid: value.cid,
        organization_id: value.organizationId,
        root_account_id: value.rootAccountId,
    };
}
