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
import type { ContentchangesContent } from "./ContentchangesContent";
import { ContentchangesContentFromJSON, ContentchangesContentFromJSONTyped, ContentchangesContentToJSON } from "./ContentchangesContent";

/**
 *
 * @export
 * @interface ContentchangesContentDiff
 */
export interface ContentchangesContentDiff {
    /**
     *
     * @type {ContentchangesContent}
     * @memberof ContentchangesContentDiff
     */
    after?: ContentchangesContent;
    /**
     *
     * @type {ContentchangesContent}
     * @memberof ContentchangesContentDiff
     */
    before?: ContentchangesContent;
    /**
     *
     * @type {string}
     * @memberof ContentchangesContentDiff
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ContentchangesContentDiff
     */
    id: string;
}

/**
 * Check if a given object implements the ContentchangesContentDiff interface.
 */
export function instanceOfContentchangesContentDiff(value: object): value is ContentchangesContentDiff {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    return true;
}

export function ContentchangesContentDiffFromJSON(json: any): ContentchangesContentDiff {
    return ContentchangesContentDiffFromJSONTyped(json, false);
}

export function ContentchangesContentDiffFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentchangesContentDiff {
    if (json == null) {
        return json;
    }
    return {
        after: json["after"] == null ? undefined : ContentchangesContentFromJSON(json["after"]),
        before: json["before"] == null ? undefined : ContentchangesContentFromJSON(json["before"]),
        cid: json["cid"],
        id: json["id"],
    };
}

export function ContentchangesContentDiffToJSON(value?: ContentchangesContentDiff | null): any {
    if (value == null) {
        return value;
    }
    return {
        after: ContentchangesContentToJSON(value["after"]),
        before: ContentchangesContentToJSON(value["before"]),
        cid: value["cid"],
        id: value["id"],
    };
}
