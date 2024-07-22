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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FalconxExtractedFile
 */
export interface FalconxExtractedFile {
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedFile
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FalconxExtractedFile
     */
    fileAvailableToDownload?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedFile
     */
    filePath?: string;
    /**
     * 
     * @type {number}
     * @memberof FalconxExtractedFile
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedFile
     */
    md5?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedFile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedFile
     */
    runtimeProcess?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedFile
     */
    sha1?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedFile
     */
    sha256?: string;
    /**
     * 
     * @type {number}
     * @memberof FalconxExtractedFile
     */
    threatLevel?: number;
    /**
     * 
     * @type {string}
     * @memberof FalconxExtractedFile
     */
    threatLevelReadable?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FalconxExtractedFile
     */
    typeTags?: Array<string>;
}

/**
 * Check if a given object implements the FalconxExtractedFile interface.
 */
export function instanceOfFalconxExtractedFile(value: object): value is FalconxExtractedFile {
    return true;
}

export function FalconxExtractedFileFromJSON(json: any): FalconxExtractedFile {
    return FalconxExtractedFileFromJSONTyped(json, false);
}

export function FalconxExtractedFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxExtractedFile {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'fileAvailableToDownload': json['file_available_to_download'] == null ? undefined : json['file_available_to_download'],
        'filePath': json['file_path'] == null ? undefined : json['file_path'],
        'fileSize': json['file_size'] == null ? undefined : json['file_size'],
        'md5': json['md5'] == null ? undefined : json['md5'],
        'name': json['name'] == null ? undefined : json['name'],
        'runtimeProcess': json['runtime_process'] == null ? undefined : json['runtime_process'],
        'sha1': json['sha1'] == null ? undefined : json['sha1'],
        'sha256': json['sha256'] == null ? undefined : json['sha256'],
        'threatLevel': json['threat_level'] == null ? undefined : json['threat_level'],
        'threatLevelReadable': json['threat_level_readable'] == null ? undefined : json['threat_level_readable'],
        'typeTags': json['type_tags'] == null ? undefined : json['type_tags'],
    };
}

export function FalconxExtractedFileToJSON(value?: FalconxExtractedFile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'file_available_to_download': value['fileAvailableToDownload'],
        'file_path': value['filePath'],
        'file_size': value['fileSize'],
        'md5': value['md5'],
        'name': value['name'],
        'runtime_process': value['runtimeProcess'],
        'sha1': value['sha1'],
        'sha256': value['sha256'],
        'threat_level': value['threatLevel'],
        'threat_level_readable': value['threatLevelReadable'],
        'type_tags': value['typeTags'],
    };
}

