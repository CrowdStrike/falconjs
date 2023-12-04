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

import { exists, mapValues } from "../runtime";
import type { ApiMetaInfo } from "./ApiMetaInfo";
import { ApiMetaInfoFromJSON, ApiMetaInfoFromJSONTyped, ApiMetaInfoToJSON } from "./ApiMetaInfo";
import type { ApiObjectMetadata } from "./ApiObjectMetadata";
import { ApiObjectMetadataFromJSON, ApiObjectMetadataFromJSONTyped, ApiObjectMetadataToJSON } from "./ApiObjectMetadata";
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";

/**
 *
 * @export
 * @interface CustomType3191042536
 */
export interface CustomType3191042536 {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof CustomType3191042536
     */
    errors: Array<MsaAPIError> | null;
    /**
     *
     * @type {ApiMetaInfo}
     * @memberof CustomType3191042536
     */
    meta: ApiMetaInfo;
    /**
     *
     * @type {Array<ApiObjectMetadata>}
     * @memberof CustomType3191042536
     */
    resources: Array<ApiObjectMetadata>;
}

/**
 * Check if a given object implements the CustomType3191042536 interface.
 */
export function instanceOfCustomType3191042536(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function CustomType3191042536FromJSON(json: any): CustomType3191042536 {
    return CustomType3191042536FromJSONTyped(json, false);
}

export function CustomType3191042536FromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomType3191042536 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: json["errors"] === null ? null : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: ApiMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(ApiObjectMetadataFromJSON),
    };
}

export function CustomType3191042536ToJSON(value?: CustomType3191042536 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: value.errors === null ? null : (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: ApiMetaInfoToJSON(value.meta),
        resources: (value.resources as Array<any>).map(ApiObjectMetadataToJSON),
    };
}
