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
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { K8sassetsClusterEnrichmentEntry } from "./K8sassetsClusterEnrichmentEntry";
import { K8sassetsClusterEnrichmentEntryFromJSON, K8sassetsClusterEnrichmentEntryFromJSONTyped, K8sassetsClusterEnrichmentEntryToJSON } from "./K8sassetsClusterEnrichmentEntry";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";

/**
 *
 * @export
 * @interface K8sassetsClusterEnrichmentResponse
 */
export interface K8sassetsClusterEnrichmentResponse {
    /**
     *
     * @type {Array<K8sassetsClusterEnrichmentEntry>}
     * @memberof K8sassetsClusterEnrichmentResponse
     */
    enrichmentData: Array<K8sassetsClusterEnrichmentEntry>;
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof K8sassetsClusterEnrichmentResponse
     */
    errors?: Array<MsaAPIError>;
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof K8sassetsClusterEnrichmentResponse
     */
    meta: MsaMetaInfo;
}

/**
 * Check if a given object implements the K8sassetsClusterEnrichmentResponse interface.
 */
export function instanceOfK8sassetsClusterEnrichmentResponse(value: object): value is K8sassetsClusterEnrichmentResponse {
    if (!("enrichmentData" in value) || value["enrichmentData"] === undefined) return false;
    if (!("meta" in value) || value["meta"] === undefined) return false;
    return true;
}

export function K8sassetsClusterEnrichmentResponseFromJSON(json: any): K8sassetsClusterEnrichmentResponse {
    return K8sassetsClusterEnrichmentResponseFromJSONTyped(json, false);
}

export function K8sassetsClusterEnrichmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sassetsClusterEnrichmentResponse {
    if (json == null) {
        return json;
    }
    return {
        enrichmentData: (json["EnrichmentData"] as Array<any>).map(K8sassetsClusterEnrichmentEntryFromJSON),
        errors: json["errors"] == null ? undefined : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: MsaMetaInfoFromJSON(json["meta"]),
    };
}

export function K8sassetsClusterEnrichmentResponseToJSON(value?: K8sassetsClusterEnrichmentResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        EnrichmentData: (value["enrichmentData"] as Array<any>).map(K8sassetsClusterEnrichmentEntryToJSON),
        errors: value["errors"] == null ? undefined : (value["errors"] as Array<any>).map(MsaAPIErrorToJSON),
        meta: MsaMetaInfoToJSON(value["meta"]),
    };
}
