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
import type { FalconxQuota } from "./FalconxQuota";
import { FalconxQuotaFromJSON, FalconxQuotaFromJSONTyped, FalconxQuotaToJSON } from "./FalconxQuota";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";

/**
 *
 * @export
 * @interface FalconxMetaInfo
 */
export interface FalconxMetaInfo {
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof FalconxMetaInfo
     */
    metaInfo: MsaMetaInfo;
    /**
     *
     * @type {FalconxQuota}
     * @memberof FalconxMetaInfo
     */
    quota?: FalconxQuota;
}

/**
 * Check if a given object implements the FalconxMetaInfo interface.
 */
export function instanceOfFalconxMetaInfo(value: object): value is FalconxMetaInfo {
    if (!("metaInfo" in value) || value["metaInfo"] === undefined) return false;
    return true;
}

export function FalconxMetaInfoFromJSON(json: any): FalconxMetaInfo {
    return FalconxMetaInfoFromJSONTyped(json, false);
}

export function FalconxMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxMetaInfo {
    if (json == null) {
        return json;
    }
    return {
        metaInfo: MsaMetaInfoFromJSON(json["MetaInfo"]),
        quota: json["quota"] == null ? undefined : FalconxQuotaFromJSON(json["quota"]),
    };
}

export function FalconxMetaInfoToJSON(value?: FalconxMetaInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        MetaInfo: MsaMetaInfoToJSON(value["metaInfo"]),
        quota: FalconxQuotaToJSON(value["quota"]),
    };
}
