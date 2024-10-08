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
 * @interface TypesCrowdStrikeCloudSecurityMetadata
 */
export interface TypesCrowdStrikeCloudSecurityMetadata {
    /**
     *
     * @type {string}
     * @memberof TypesCrowdStrikeCloudSecurityMetadata
     */
    baseUrl?: string;
    /**
     *
     * @type {string}
     * @memberof TypesCrowdStrikeCloudSecurityMetadata
     */
    clientId?: string;
    /**
     *
     * @type {string}
     * @memberof TypesCrowdStrikeCloudSecurityMetadata
     */
    cloudProvider?: string;
    /**
     *
     * @type {string}
     * @memberof TypesCrowdStrikeCloudSecurityMetadata
     */
    iomID?: string;
    /**
     *
     * @type {number}
     * @memberof TypesCrowdStrikeCloudSecurityMetadata
     */
    policyId?: number;
    /**
     *
     * @type {string}
     * @memberof TypesCrowdStrikeCloudSecurityMetadata
     */
    resourceId?: string;
    /**
     *
     * @type {string}
     * @memberof TypesCrowdStrikeCloudSecurityMetadata
     */
    resourceType?: string;
}

/**
 * Check if a given object implements the TypesCrowdStrikeCloudSecurityMetadata interface.
 */
export function instanceOfTypesCrowdStrikeCloudSecurityMetadata(value: object): value is TypesCrowdStrikeCloudSecurityMetadata {
    return true;
}

export function TypesCrowdStrikeCloudSecurityMetadataFromJSON(json: any): TypesCrowdStrikeCloudSecurityMetadata {
    return TypesCrowdStrikeCloudSecurityMetadataFromJSONTyped(json, false);
}

export function TypesCrowdStrikeCloudSecurityMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesCrowdStrikeCloudSecurityMetadata {
    if (json == null) {
        return json;
    }
    return {
        baseUrl: json["baseUrl"] == null ? undefined : json["baseUrl"],
        clientId: json["clientId"] == null ? undefined : json["clientId"],
        cloudProvider: json["cloudProvider"] == null ? undefined : json["cloudProvider"],
        iomID: json["iomID"] == null ? undefined : json["iomID"],
        policyId: json["policyId"] == null ? undefined : json["policyId"],
        resourceId: json["resourceId"] == null ? undefined : json["resourceId"],
        resourceType: json["resourceType"] == null ? undefined : json["resourceType"],
    };
}

export function TypesCrowdStrikeCloudSecurityMetadataToJSON(value?: TypesCrowdStrikeCloudSecurityMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        baseUrl: value["baseUrl"],
        clientId: value["clientId"],
        cloudProvider: value["cloudProvider"],
        iomID: value["iomID"],
        policyId: value["policyId"],
        resourceId: value["resourceId"],
        resourceType: value["resourceType"],
    };
}
