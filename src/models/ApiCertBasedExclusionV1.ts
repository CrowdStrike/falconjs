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
import type { ApiCertificateV1 } from "./ApiCertificateV1";
import { ApiCertificateV1FromJSON, ApiCertificateV1FromJSONTyped, ApiCertificateV1ToJSON } from "./ApiCertificateV1";

/**
 *
 * @export
 * @interface ApiCertBasedExclusionV1
 */
export interface ApiCertBasedExclusionV1 {
    /**
     *
     * @type {boolean}
     * @memberof ApiCertBasedExclusionV1
     */
    appliedGlobally?: boolean;
    /**
     *
     * @type {ApiCertificateV1}
     * @memberof ApiCertBasedExclusionV1
     */
    certificate?: ApiCertificateV1;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiCertBasedExclusionV1
     */
    childrenCids?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionV1
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionV1
     */
    comment?: string;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionV1
     */
    createdBy?: string;
    /**
     *
     * @type {Date}
     * @memberof ApiCertBasedExclusionV1
     */
    createdOn?: Date;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionV1
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiCertBasedExclusionV1
     */
    hostGroups?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionV1
     */
    modifiedBy?: string;
    /**
     *
     * @type {Date}
     * @memberof ApiCertBasedExclusionV1
     */
    modifiedOn?: Date;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionV1
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionV1
     */
    status?: string;
}

/**
 * Check if a given object implements the ApiCertBasedExclusionV1 interface.
 */
export function instanceOfApiCertBasedExclusionV1(value: object): value is ApiCertBasedExclusionV1 {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    return true;
}

export function ApiCertBasedExclusionV1FromJSON(json: any): ApiCertBasedExclusionV1 {
    return ApiCertBasedExclusionV1FromJSONTyped(json, false);
}

export function ApiCertBasedExclusionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCertBasedExclusionV1 {
    if (json == null) {
        return json;
    }
    return {
        appliedGlobally: json["applied_globally"] == null ? undefined : json["applied_globally"],
        certificate: json["certificate"] == null ? undefined : ApiCertificateV1FromJSON(json["certificate"]),
        childrenCids: json["children_cids"] == null ? undefined : json["children_cids"],
        cid: json["cid"],
        comment: json["comment"] == null ? undefined : json["comment"],
        createdBy: json["created_by"] == null ? undefined : json["created_by"],
        createdOn: json["created_on"] == null ? undefined : new Date(json["created_on"]),
        description: json["description"] == null ? undefined : json["description"],
        hostGroups: json["host_groups"] == null ? undefined : json["host_groups"],
        id: json["id"],
        modifiedBy: json["modified_by"] == null ? undefined : json["modified_by"],
        modifiedOn: json["modified_on"] == null ? undefined : new Date(json["modified_on"]),
        name: json["name"] == null ? undefined : json["name"],
        status: json["status"] == null ? undefined : json["status"],
    };
}

export function ApiCertBasedExclusionV1ToJSON(value?: ApiCertBasedExclusionV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        applied_globally: value["appliedGlobally"],
        certificate: ApiCertificateV1ToJSON(value["certificate"]),
        children_cids: value["childrenCids"],
        cid: value["cid"],
        comment: value["comment"],
        created_by: value["createdBy"],
        created_on: value["createdOn"] == null ? undefined : value["createdOn"].toISOString(),
        description: value["description"],
        host_groups: value["hostGroups"],
        id: value["id"],
        modified_by: value["modifiedBy"],
        modified_on: value["modifiedOn"] == null ? undefined : value["modifiedOn"].toISOString(),
        name: value["name"],
        status: value["status"],
    };
}
