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
/**
 *
 * @export
 * @interface FalconxFileMetadata
 */
export interface FalconxFileMetadata {
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxFileMetadata
     */
    fileAnalysis?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxFileMetadata
     */
    fileCompositions?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxFileMetadata
     */
    importedObjects?: Array<string>;
}

/**
 * Check if a given object implements the FalconxFileMetadata interface.
 */
export function instanceOfFalconxFileMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxFileMetadataFromJSON(json: any): FalconxFileMetadata {
    return FalconxFileMetadataFromJSONTyped(json, false);
}

export function FalconxFileMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxFileMetadata {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        fileAnalysis: !exists(json, "file_analysis") ? undefined : json["file_analysis"],
        fileCompositions: !exists(json, "file_compositions") ? undefined : json["file_compositions"],
        importedObjects: !exists(json, "imported_objects") ? undefined : json["imported_objects"],
    };
}

export function FalconxFileMetadataToJSON(value?: FalconxFileMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        file_analysis: value.fileAnalysis,
        file_compositions: value.fileCompositions,
        imported_objects: value.importedObjects,
    };
}
