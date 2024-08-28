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
 * @interface DomainPastebinTextSource
 */
export interface DomainPastebinTextSource {
    /**
     * The name of the author
     * @type {string}
     * @memberof DomainPastebinTextSource
     */
    authorName: string;
    /**
     *
     * @type {object}
     * @memberof DomainPastebinTextSource
     */
    legacySource?: object;
    /**
     * Unique ID of the Pastebin content
     * @type {string}
     * @memberof DomainPastebinTextSource
     */
    pastebinId: string;
    /**
     * The Pastebin URL
     * @type {string}
     * @memberof DomainPastebinTextSource
     */
    sourceLink: string;
    /**
     * The title of the Pastebin content
     * @type {string}
     * @memberof DomainPastebinTextSource
     */
    title: string;
}

/**
 * Check if a given object implements the DomainPastebinTextSource interface.
 */
export function instanceOfDomainPastebinTextSource(value: object): value is DomainPastebinTextSource {
    if (!("authorName" in value) || value["authorName"] === undefined) return false;
    if (!("pastebinId" in value) || value["pastebinId"] === undefined) return false;
    if (!("sourceLink" in value) || value["sourceLink"] === undefined) return false;
    if (!("title" in value) || value["title"] === undefined) return false;
    return true;
}

export function DomainPastebinTextSourceFromJSON(json: any): DomainPastebinTextSource {
    return DomainPastebinTextSourceFromJSONTyped(json, false);
}

export function DomainPastebinTextSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainPastebinTextSource {
    if (json == null) {
        return json;
    }
    return {
        authorName: json["author_name"],
        legacySource: json["legacy_source"] == null ? undefined : json["legacy_source"],
        pastebinId: json["pastebin_id"],
        sourceLink: json["source_link"],
        title: json["title"],
    };
}

export function DomainPastebinTextSourceToJSON(value?: DomainPastebinTextSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        author_name: value["authorName"],
        legacy_source: value["legacySource"],
        pastebin_id: value["pastebinId"],
        source_link: value["sourceLink"],
        title: value["title"],
    };
}
