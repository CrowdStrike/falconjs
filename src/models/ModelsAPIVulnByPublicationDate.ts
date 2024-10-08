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
 * @interface ModelsAPIVulnByPublicationDate
 */
export interface ModelsAPIVulnByPublicationDate {
    /**
     *
     * @type {number}
     * @memberof ModelsAPIVulnByPublicationDate
     */
    containersImpacted: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIVulnByPublicationDate
     */
    cveId: string;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIVulnByPublicationDate
     */
    cvssScore: number;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIVulnByPublicationDate
     */
    imagesImpacted: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIVulnByPublicationDate
     */
    publishedDate: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIVulnByPublicationDate
     */
    severity: string;
}

/**
 * Check if a given object implements the ModelsAPIVulnByPublicationDate interface.
 */
export function instanceOfModelsAPIVulnByPublicationDate(value: object): value is ModelsAPIVulnByPublicationDate {
    if (!("containersImpacted" in value) || value["containersImpacted"] === undefined) return false;
    if (!("cveId" in value) || value["cveId"] === undefined) return false;
    if (!("cvssScore" in value) || value["cvssScore"] === undefined) return false;
    if (!("imagesImpacted" in value) || value["imagesImpacted"] === undefined) return false;
    if (!("publishedDate" in value) || value["publishedDate"] === undefined) return false;
    if (!("severity" in value) || value["severity"] === undefined) return false;
    return true;
}

export function ModelsAPIVulnByPublicationDateFromJSON(json: any): ModelsAPIVulnByPublicationDate {
    return ModelsAPIVulnByPublicationDateFromJSONTyped(json, false);
}

export function ModelsAPIVulnByPublicationDateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIVulnByPublicationDate {
    if (json == null) {
        return json;
    }
    return {
        containersImpacted: json["containers_impacted"],
        cveId: json["cve_id"],
        cvssScore: json["cvss_score"],
        imagesImpacted: json["images_impacted"],
        publishedDate: json["published_date"],
        severity: json["severity"],
    };
}

export function ModelsAPIVulnByPublicationDateToJSON(value?: ModelsAPIVulnByPublicationDate | null): any {
    if (value == null) {
        return value;
    }
    return {
        containers_impacted: value["containersImpacted"],
        cve_id: value["cveId"],
        cvss_score: value["cvssScore"],
        images_impacted: value["imagesImpacted"],
        published_date: value["publishedDate"],
        severity: value["severity"],
    };
}
