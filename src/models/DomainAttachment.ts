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
 * @interface DomainAttachment
 */
export interface DomainAttachment {
    /**
     *
     * @type {Date}
     * @memberof DomainAttachment
     */
    date?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainAttachment
     */
    fileName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAttachment
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAttachment
     */
    link: string;
    /**
     *
     * @type {string}
     * @memberof DomainAttachment
     */
    mimeType: string;
    /**
     *
     * @type {string}
     * @memberof DomainAttachment
     */
    sha256?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAttachment
     */
    sourceUrl?: string;
}

/**
 * Check if a given object implements the DomainAttachment interface.
 */
export function instanceOfDomainAttachment(value: object): value is DomainAttachment {
    if (!("link" in value) || value["link"] === undefined) return false;
    if (!("mimeType" in value) || value["mimeType"] === undefined) return false;
    return true;
}

export function DomainAttachmentFromJSON(json: any): DomainAttachment {
    return DomainAttachmentFromJSONTyped(json, false);
}

export function DomainAttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAttachment {
    if (json == null) {
        return json;
    }
    return {
        date: json["date"] == null ? undefined : new Date(json["date"]),
        fileName: json["file_name"] == null ? undefined : json["file_name"],
        id: json["id"] == null ? undefined : json["id"],
        link: json["link"],
        mimeType: json["mime_type"],
        sha256: json["sha256"] == null ? undefined : json["sha256"],
        sourceUrl: json["source_url"] == null ? undefined : json["source_url"],
    };
}

export function DomainAttachmentToJSON(value?: DomainAttachment | null): any {
    if (value == null) {
        return value;
    }
    return {
        date: value["date"] == null ? undefined : value["date"].toISOString(),
        file_name: value["fileName"],
        id: value["id"],
        link: value["link"],
        mime_type: value["mimeType"],
        sha256: value["sha256"],
        source_url: value["sourceUrl"],
    };
}
