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
import type { DomainExternalAssetsAPITriagePatch } from "./DomainExternalAssetsAPITriagePatch";
import { DomainExternalAssetsAPITriagePatchFromJSON, DomainExternalAssetsAPITriagePatchFromJSONTyped, DomainExternalAssetsAPITriagePatchToJSON } from "./DomainExternalAssetsAPITriagePatch";

/**
 * Represents information about a managed, an unmanaged or an unsupported asset.
 * @export
 * @interface DomainExternalAssetsAPIPatch
 */
export interface DomainExternalAssetsAPIPatch {
    /**
     * The asset's customer ID.
     * @type {string}
     * @memberof DomainExternalAssetsAPIPatch
     */
    cid?: string;
    /**
     * The criticality level manually assigned to this asset.
     * @type {string}
     * @memberof DomainExternalAssetsAPIPatch
     */
    criticality?: string;
    /**
     * The criticality description manually assigned to this asset.
     * @type {string}
     * @memberof DomainExternalAssetsAPIPatch
     */
    criticalityDescription?: string;
    /**
     * The unique ID of the asset.
     * @type {string}
     * @memberof DomainExternalAssetsAPIPatch
     */
    id: string;
    /**
     *
     * @type {DomainExternalAssetsAPITriagePatch}
     * @memberof DomainExternalAssetsAPIPatch
     */
    triage?: DomainExternalAssetsAPITriagePatch;
}

/**
 * Check if a given object implements the DomainExternalAssetsAPIPatch interface.
 */
export function instanceOfDomainExternalAssetsAPIPatch(value: object): value is DomainExternalAssetsAPIPatch {
    if (!("id" in value) || value["id"] === undefined) return false;
    return true;
}

export function DomainExternalAssetsAPIPatchFromJSON(json: any): DomainExternalAssetsAPIPatch {
    return DomainExternalAssetsAPIPatchFromJSONTyped(json, false);
}

export function DomainExternalAssetsAPIPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExternalAssetsAPIPatch {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"] == null ? undefined : json["cid"],
        criticality: json["criticality"] == null ? undefined : json["criticality"],
        criticalityDescription: json["criticality_description"] == null ? undefined : json["criticality_description"],
        id: json["id"],
        triage: json["triage"] == null ? undefined : DomainExternalAssetsAPITriagePatchFromJSON(json["triage"]),
    };
}

export function DomainExternalAssetsAPIPatchToJSON(value?: DomainExternalAssetsAPIPatch | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        criticality: value["criticality"],
        criticality_description: value["criticalityDescription"],
        id: value["id"],
        triage: DomainExternalAssetsAPITriagePatchToJSON(value["triage"]),
    };
}
