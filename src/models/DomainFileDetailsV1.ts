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
 * @interface DomainFileDetailsV1
 */
export interface DomainFileDetailsV1 {
    /**
     * (Boolean) If it's a complete dataset or not.
     * @type {boolean}
     * @memberof DomainFileDetailsV1
     */
    completeDataSet?: boolean;
    /**
     * A list of download urls for this file.
     * @type {Array<string>}
     * @memberof DomainFileDetailsV1
     */
    downloadUrls: Array<string>;
    /**
     * The name of the file containing the exposed record(s).
     * @type {string}
     * @memberof DomainFileDetailsV1
     */
    name: string;
    /**
     * The size of the file.
     * @type {number}
     * @memberof DomainFileDetailsV1
     */
    size: number;
}

/**
 * Check if a given object implements the DomainFileDetailsV1 interface.
 */
export function instanceOfDomainFileDetailsV1(value: object): value is DomainFileDetailsV1 {
    if (!("downloadUrls" in value) || value["downloadUrls"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("size" in value) || value["size"] === undefined) return false;
    return true;
}

export function DomainFileDetailsV1FromJSON(json: any): DomainFileDetailsV1 {
    return DomainFileDetailsV1FromJSONTyped(json, false);
}

export function DomainFileDetailsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainFileDetailsV1 {
    if (json == null) {
        return json;
    }
    return {
        completeDataSet: json["complete_data_set"] == null ? undefined : json["complete_data_set"],
        downloadUrls: json["download_urls"],
        name: json["name"],
        size: json["size"],
    };
}

export function DomainFileDetailsV1ToJSON(value?: DomainFileDetailsV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        complete_data_set: value["completeDataSet"],
        download_urls: value["downloadUrls"],
        name: value["name"],
        size: value["size"],
    };
}
