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
 * @interface ModelsAPIImageCombinedExport
 */
export interface ModelsAPIImageCombinedExport {
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    baseOs: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    cid: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    cveId: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    cvssScore: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    detectionName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    detectionSeverity: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    detectionType: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    firstSeen: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    imageDigest: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    imageId: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    lastSeen: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsAPIImageCombinedExport
     */
    packagesImpacted: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    registry: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    repository: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsAPIImageCombinedExport
     */
    startedContainers: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsAPIImageCombinedExport
     */
    stoppedContainers: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    tag: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    vulnerabilityCpsRating: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    vulnerabilityDescription: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIImageCombinedExport
     */
    vulnerabilitySeverity: string;
}

/**
 * Check if a given object implements the ModelsAPIImageCombinedExport interface.
 */
export function instanceOfModelsAPIImageCombinedExport(value: object): value is ModelsAPIImageCombinedExport {
    if (!('baseOs' in value) || value['baseOs'] === undefined) return false;
    if (!('cid' in value) || value['cid'] === undefined) return false;
    if (!('cveId' in value) || value['cveId'] === undefined) return false;
    if (!('cvssScore' in value) || value['cvssScore'] === undefined) return false;
    if (!('detectionName' in value) || value['detectionName'] === undefined) return false;
    if (!('detectionSeverity' in value) || value['detectionSeverity'] === undefined) return false;
    if (!('detectionType' in value) || value['detectionType'] === undefined) return false;
    if (!('firstSeen' in value) || value['firstSeen'] === undefined) return false;
    if (!('imageDigest' in value) || value['imageDigest'] === undefined) return false;
    if (!('imageId' in value) || value['imageId'] === undefined) return false;
    if (!('lastSeen' in value) || value['lastSeen'] === undefined) return false;
    if (!('packagesImpacted' in value) || value['packagesImpacted'] === undefined) return false;
    if (!('registry' in value) || value['registry'] === undefined) return false;
    if (!('repository' in value) || value['repository'] === undefined) return false;
    if (!('startedContainers' in value) || value['startedContainers'] === undefined) return false;
    if (!('stoppedContainers' in value) || value['stoppedContainers'] === undefined) return false;
    if (!('tag' in value) || value['tag'] === undefined) return false;
    if (!('vulnerabilityCpsRating' in value) || value['vulnerabilityCpsRating'] === undefined) return false;
    if (!('vulnerabilityDescription' in value) || value['vulnerabilityDescription'] === undefined) return false;
    if (!('vulnerabilitySeverity' in value) || value['vulnerabilitySeverity'] === undefined) return false;
    return true;
}

export function ModelsAPIImageCombinedExportFromJSON(json: any): ModelsAPIImageCombinedExport {
    return ModelsAPIImageCombinedExportFromJSONTyped(json, false);
}

export function ModelsAPIImageCombinedExportFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIImageCombinedExport {
    if (json == null) {
        return json;
    }
    return {
        
        'baseOs': json['base_os'],
        'cid': json['cid'],
        'cveId': json['cve_id'],
        'cvssScore': json['cvss_score'],
        'detectionName': json['detection_name'],
        'detectionSeverity': json['detection_severity'],
        'detectionType': json['detection_type'],
        'firstSeen': json['first_seen'],
        'imageDigest': json['image_digest'],
        'imageId': json['image_id'],
        'lastSeen': json['last_seen'],
        'packagesImpacted': json['packages_impacted'],
        'registry': json['registry'],
        'repository': json['repository'],
        'startedContainers': json['started_containers'],
        'stoppedContainers': json['stopped_containers'],
        'tag': json['tag'],
        'vulnerabilityCpsRating': json['vulnerability_cps_rating'],
        'vulnerabilityDescription': json['vulnerability_description'],
        'vulnerabilitySeverity': json['vulnerability_severity'],
    };
}

export function ModelsAPIImageCombinedExportToJSON(value?: ModelsAPIImageCombinedExport | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'base_os': value['baseOs'],
        'cid': value['cid'],
        'cve_id': value['cveId'],
        'cvss_score': value['cvssScore'],
        'detection_name': value['detectionName'],
        'detection_severity': value['detectionSeverity'],
        'detection_type': value['detectionType'],
        'first_seen': value['firstSeen'],
        'image_digest': value['imageDigest'],
        'image_id': value['imageId'],
        'last_seen': value['lastSeen'],
        'packages_impacted': value['packagesImpacted'],
        'registry': value['registry'],
        'repository': value['repository'],
        'started_containers': value['startedContainers'],
        'stopped_containers': value['stoppedContainers'],
        'tag': value['tag'],
        'vulnerability_cps_rating': value['vulnerabilityCpsRating'],
        'vulnerability_description': value['vulnerabilityDescription'],
        'vulnerability_severity': value['vulnerabilitySeverity'],
    };
}

