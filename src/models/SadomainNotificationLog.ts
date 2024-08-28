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
 * @interface SadomainNotificationLog
 */
export interface SadomainNotificationLog {
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    action: string;
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    cid: string;
    /**
     *
     * @type {Date}
     * @memberof SadomainNotificationLog
     */
    createdDate: Date;
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    details: string;
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    notificationId: string;
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    userEmail: string;
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    userUuid: string;
    /**
     *
     * @type {string}
     * @memberof SadomainNotificationLog
     */
    username: string;
}

/**
 * Check if a given object implements the SadomainNotificationLog interface.
 */
export function instanceOfSadomainNotificationLog(value: object): value is SadomainNotificationLog {
    if (!("action" in value) || value["action"] === undefined) return false;
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("createdDate" in value) || value["createdDate"] === undefined) return false;
    if (!("details" in value) || value["details"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("message" in value) || value["message"] === undefined) return false;
    if (!("notificationId" in value) || value["notificationId"] === undefined) return false;
    if (!("userEmail" in value) || value["userEmail"] === undefined) return false;
    if (!("userUuid" in value) || value["userUuid"] === undefined) return false;
    if (!("username" in value) || value["username"] === undefined) return false;
    return true;
}

export function SadomainNotificationLogFromJSON(json: any): SadomainNotificationLog {
    return SadomainNotificationLogFromJSONTyped(json, false);
}

export function SadomainNotificationLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): SadomainNotificationLog {
    if (json == null) {
        return json;
    }
    return {
        action: json["action"],
        cid: json["cid"],
        createdDate: new Date(json["created_date"]),
        details: json["details"],
        id: json["id"],
        message: json["message"],
        notificationId: json["notification_id"],
        userEmail: json["user_email"],
        userUuid: json["user_uuid"],
        username: json["username"],
    };
}

export function SadomainNotificationLogToJSON(value?: SadomainNotificationLog | null): any {
    if (value == null) {
        return value;
    }
    return {
        action: value["action"],
        cid: value["cid"],
        created_date: value["createdDate"].toISOString(),
        details: value["details"],
        id: value["id"],
        message: value["message"],
        notification_id: value["notificationId"],
        user_email: value["userEmail"],
        user_uuid: value["userUuid"],
        username: value["username"],
    };
}
