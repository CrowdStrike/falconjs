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
 * @interface MessagesAttachment
 */
export interface MessagesAttachment {
    /**
     *
     * @type {string}
     * @memberof MessagesAttachment
     */
    createdBy: string;
    /**
     *
     * @type {string}
     * @memberof MessagesAttachment
     */
    createdTime: string;
    /**
     *
     * @type {string}
     * @memberof MessagesAttachment
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof MessagesAttachment
     */
    mimeType: string;
    /**
     *
     * @type {string}
     * @memberof MessagesAttachment
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof MessagesAttachment
     */
    size: number;
}

/**
 * Check if a given object implements the MessagesAttachment interface.
 */
export function instanceOfMessagesAttachment(value: object): value is MessagesAttachment {
    if (!("createdBy" in value) || value["createdBy"] === undefined) return false;
    if (!("createdTime" in value) || value["createdTime"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("mimeType" in value) || value["mimeType"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("size" in value) || value["size"] === undefined) return false;
    return true;
}

export function MessagesAttachmentFromJSON(json: any): MessagesAttachment {
    return MessagesAttachmentFromJSONTyped(json, false);
}

export function MessagesAttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagesAttachment {
    if (json == null) {
        return json;
    }
    return {
        createdBy: json["created_by"],
        createdTime: json["created_time"],
        id: json["id"],
        mimeType: json["mime_type"],
        name: json["name"],
        size: json["size"],
    };
}

export function MessagesAttachmentToJSON(value?: MessagesAttachment | null): any {
    if (value == null) {
        return value;
    }
    return {
        created_by: value["createdBy"],
        created_time: value["createdTime"],
        id: value["id"],
        mime_type: value["mimeType"],
        name: value["name"],
        size: value["size"],
    };
}
