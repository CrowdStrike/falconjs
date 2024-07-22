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
import type { QuarantineQuarantinedFilePath } from './QuarantineQuarantinedFilePath';
import {
    QuarantineQuarantinedFilePathFromJSON,
    QuarantineQuarantinedFilePathFromJSONTyped,
    QuarantineQuarantinedFilePathToJSON,
} from './QuarantineQuarantinedFilePath';

/**
 * 
 * @export
 * @interface QuarantineQuarantinedFile
 */
export interface QuarantineQuarantinedFile {
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    aid?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof QuarantineQuarantinedFile
     */
    alertIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    cid?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    dateCreated?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    dateUpdated?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof QuarantineQuarantinedFile
     */
    detectIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof QuarantineQuarantinedFile
     */
    extracted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    hostname?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof QuarantineQuarantinedFile
     */
    isOnRemovableDisk?: boolean;
    /**
     * 
     * @type {Array<QuarantineQuarantinedFilePath>}
     * @memberof QuarantineQuarantinedFile
     */
    paths?: Array<QuarantineQuarantinedFilePath>;
    /**
     * 
     * @type {boolean}
     * @memberof QuarantineQuarantinedFile
     */
    primaryModule?: boolean;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    releasePathForRemovableMedia?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    sandboxReportId?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    sandboxReportState?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    sha256?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineQuarantinedFile
     */
    username?: string;
}

/**
 * Check if a given object implements the QuarantineQuarantinedFile interface.
 */
export function instanceOfQuarantineQuarantinedFile(value: object): value is QuarantineQuarantinedFile {
    return true;
}

export function QuarantineQuarantinedFileFromJSON(json: any): QuarantineQuarantinedFile {
    return QuarantineQuarantinedFileFromJSONTyped(json, false);
}

export function QuarantineQuarantinedFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuarantineQuarantinedFile {
    if (json == null) {
        return json;
    }
    return {
        
        'aid': json['aid'] == null ? undefined : json['aid'],
        'alertIds': json['alert_ids'] == null ? undefined : json['alert_ids'],
        'cid': json['cid'] == null ? undefined : json['cid'],
        'dateCreated': json['date_created'] == null ? undefined : json['date_created'],
        'dateUpdated': json['date_updated'] == null ? undefined : json['date_updated'],
        'detectIds': json['detect_ids'] == null ? undefined : json['detect_ids'],
        'extracted': json['extracted'] == null ? undefined : json['extracted'],
        'hostname': json['hostname'] == null ? undefined : json['hostname'],
        'id': json['id'] == null ? undefined : json['id'],
        'isOnRemovableDisk': json['is_on_removable_disk'] == null ? undefined : json['is_on_removable_disk'],
        'paths': json['paths'] == null ? undefined : ((json['paths'] as Array<any>).map(QuarantineQuarantinedFilePathFromJSON)),
        'primaryModule': json['primary_module'] == null ? undefined : json['primary_module'],
        'releasePathForRemovableMedia': json['release_path_for_removable_media'] == null ? undefined : json['release_path_for_removable_media'],
        'sandboxReportId': json['sandbox_report_id'] == null ? undefined : json['sandbox_report_id'],
        'sandboxReportState': json['sandbox_report_state'] == null ? undefined : json['sandbox_report_state'],
        'sha256': json['sha256'] == null ? undefined : json['sha256'],
        'state': json['state'] == null ? undefined : json['state'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function QuarantineQuarantinedFileToJSON(value?: QuarantineQuarantinedFile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'aid': value['aid'],
        'alert_ids': value['alertIds'],
        'cid': value['cid'],
        'date_created': value['dateCreated'],
        'date_updated': value['dateUpdated'],
        'detect_ids': value['detectIds'],
        'extracted': value['extracted'],
        'hostname': value['hostname'],
        'id': value['id'],
        'is_on_removable_disk': value['isOnRemovableDisk'],
        'paths': value['paths'] == null ? undefined : ((value['paths'] as Array<any>).map(QuarantineQuarantinedFilePathToJSON)),
        'primary_module': value['primaryModule'],
        'release_path_for_removable_media': value['releasePathForRemovableMedia'],
        'sandbox_report_id': value['sandboxReportId'],
        'sandbox_report_state': value['sandboxReportState'],
        'sha256': value['sha256'],
        'state': value['state'],
        'username': value['username'],
    };
}

