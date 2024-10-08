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
import type { K8sassetsNodeEnrichmentData } from "./K8sassetsNodeEnrichmentData";
import { K8sassetsNodeEnrichmentDataFromJSON, K8sassetsNodeEnrichmentDataFromJSONTyped, K8sassetsNodeEnrichmentDataToJSON } from "./K8sassetsNodeEnrichmentData";

/**
 *
 * @export
 * @interface K8sassetsNodeEnrichmentEntry
 */
export interface K8sassetsNodeEnrichmentEntry {
    /**
     *
     * @type {K8sassetsNodeEnrichmentData}
     * @memberof K8sassetsNodeEnrichmentEntry
     */
    enrichmentData: K8sassetsNodeEnrichmentData;
    /**
     *
     * @type {string}
     * @memberof K8sassetsNodeEnrichmentEntry
     */
    nodeName: string;
}

/**
 * Check if a given object implements the K8sassetsNodeEnrichmentEntry interface.
 */
export function instanceOfK8sassetsNodeEnrichmentEntry(value: object): value is K8sassetsNodeEnrichmentEntry {
    if (!("enrichmentData" in value) || value["enrichmentData"] === undefined) return false;
    if (!("nodeName" in value) || value["nodeName"] === undefined) return false;
    return true;
}

export function K8sassetsNodeEnrichmentEntryFromJSON(json: any): K8sassetsNodeEnrichmentEntry {
    return K8sassetsNodeEnrichmentEntryFromJSONTyped(json, false);
}

export function K8sassetsNodeEnrichmentEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sassetsNodeEnrichmentEntry {
    if (json == null) {
        return json;
    }
    return {
        enrichmentData: K8sassetsNodeEnrichmentDataFromJSON(json["enrichment_data"]),
        nodeName: json["node_name"],
    };
}

export function K8sassetsNodeEnrichmentEntryToJSON(value?: K8sassetsNodeEnrichmentEntry | null): any {
    if (value == null) {
        return value;
    }
    return {
        enrichment_data: K8sassetsNodeEnrichmentDataToJSON(value["enrichmentData"]),
        node_name: value["nodeName"],
    };
}
