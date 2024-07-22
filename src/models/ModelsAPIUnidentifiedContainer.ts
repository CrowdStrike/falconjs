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
import type { ModelsImageInformation } from './ModelsImageInformation';
import {
    ModelsImageInformationFromJSON,
    ModelsImageInformationFromJSONTyped,
    ModelsImageInformationToJSON,
} from './ModelsImageInformation';
import type { ModelsContainerInformation } from './ModelsContainerInformation';
import {
    ModelsContainerInformationFromJSON,
    ModelsContainerInformationFromJSONTyped,
    ModelsContainerInformationToJSON,
} from './ModelsContainerInformation';

/**
 * 
 * @export
 * @interface ModelsAPIUnidentifiedContainer
 */
export interface ModelsAPIUnidentifiedContainer {
    /**
     * 
     * @type {Array<ModelsImageInformation>}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    assessedImages: Array<ModelsImageInformation>;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    assessedImagesCount: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    cid: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    clusterName: string;
    /**
     * 
     * @type {Array<ModelsContainerInformation>}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    containersImpacted: Array<ModelsContainerInformation>;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    containersImpactedCount: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    detectTimestamp: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    detectionsCount: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    firstSeen: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    hostId: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    imageAssessmentDetectionsCount: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    lastSeen: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    namespace: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    nodeName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    podId: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    podName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    runtimeDetectionsCount: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    severity: string;
    /**
     * 
     * @type {Array<ModelsImageInformation>}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    unassessedImages: Array<ModelsImageInformation>;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    unassessedImagesCount: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsAPIUnidentifiedContainer
     */
    visibleToK8s: string;
}

/**
 * Check if a given object implements the ModelsAPIUnidentifiedContainer interface.
 */
export function instanceOfModelsAPIUnidentifiedContainer(value: object): value is ModelsAPIUnidentifiedContainer {
    if (!('assessedImages' in value) || value['assessedImages'] === undefined) return false;
    if (!('assessedImagesCount' in value) || value['assessedImagesCount'] === undefined) return false;
    if (!('cid' in value) || value['cid'] === undefined) return false;
    if (!('clusterName' in value) || value['clusterName'] === undefined) return false;
    if (!('containersImpacted' in value) || value['containersImpacted'] === undefined) return false;
    if (!('containersImpactedCount' in value) || value['containersImpactedCount'] === undefined) return false;
    if (!('detectTimestamp' in value) || value['detectTimestamp'] === undefined) return false;
    if (!('detectionsCount' in value) || value['detectionsCount'] === undefined) return false;
    if (!('firstSeen' in value) || value['firstSeen'] === undefined) return false;
    if (!('hostId' in value) || value['hostId'] === undefined) return false;
    if (!('imageAssessmentDetectionsCount' in value) || value['imageAssessmentDetectionsCount'] === undefined) return false;
    if (!('lastSeen' in value) || value['lastSeen'] === undefined) return false;
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    if (!('nodeName' in value) || value['nodeName'] === undefined) return false;
    if (!('podId' in value) || value['podId'] === undefined) return false;
    if (!('podName' in value) || value['podName'] === undefined) return false;
    if (!('runtimeDetectionsCount' in value) || value['runtimeDetectionsCount'] === undefined) return false;
    if (!('severity' in value) || value['severity'] === undefined) return false;
    if (!('unassessedImages' in value) || value['unassessedImages'] === undefined) return false;
    if (!('unassessedImagesCount' in value) || value['unassessedImagesCount'] === undefined) return false;
    if (!('visibleToK8s' in value) || value['visibleToK8s'] === undefined) return false;
    return true;
}

export function ModelsAPIUnidentifiedContainerFromJSON(json: any): ModelsAPIUnidentifiedContainer {
    return ModelsAPIUnidentifiedContainerFromJSONTyped(json, false);
}

export function ModelsAPIUnidentifiedContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIUnidentifiedContainer {
    if (json == null) {
        return json;
    }
    return {
        
        'assessedImages': ((json['assessed_images'] as Array<any>).map(ModelsImageInformationFromJSON)),
        'assessedImagesCount': json['assessed_images_count'],
        'cid': json['cid'],
        'clusterName': json['cluster_name'],
        'containersImpacted': ((json['containers_impacted'] as Array<any>).map(ModelsContainerInformationFromJSON)),
        'containersImpactedCount': json['containers_impacted_count'],
        'detectTimestamp': json['detect_timestamp'],
        'detectionsCount': json['detections_count'],
        'firstSeen': json['first_seen'],
        'hostId': json['host_id'],
        'imageAssessmentDetectionsCount': json['image_assessment_detections_count'],
        'lastSeen': json['last_seen'],
        'namespace': json['namespace'],
        'nodeName': json['node_name'],
        'podId': json['pod_id'],
        'podName': json['pod_name'],
        'runtimeDetectionsCount': json['runtime_detections_count'],
        'severity': json['severity'],
        'unassessedImages': ((json['unassessed_images'] as Array<any>).map(ModelsImageInformationFromJSON)),
        'unassessedImagesCount': json['unassessed_images_count'],
        'visibleToK8s': json['visible_to_k8s'],
    };
}

export function ModelsAPIUnidentifiedContainerToJSON(value?: ModelsAPIUnidentifiedContainer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'assessed_images': ((value['assessedImages'] as Array<any>).map(ModelsImageInformationToJSON)),
        'assessed_images_count': value['assessedImagesCount'],
        'cid': value['cid'],
        'cluster_name': value['clusterName'],
        'containers_impacted': ((value['containersImpacted'] as Array<any>).map(ModelsContainerInformationToJSON)),
        'containers_impacted_count': value['containersImpactedCount'],
        'detect_timestamp': value['detectTimestamp'],
        'detections_count': value['detectionsCount'],
        'first_seen': value['firstSeen'],
        'host_id': value['hostId'],
        'image_assessment_detections_count': value['imageAssessmentDetectionsCount'],
        'last_seen': value['lastSeen'],
        'namespace': value['namespace'],
        'node_name': value['nodeName'],
        'pod_id': value['podId'],
        'pod_name': value['podName'],
        'runtime_detections_count': value['runtimeDetectionsCount'],
        'severity': value['severity'],
        'unassessed_images': ((value['unassessedImages'] as Array<any>).map(ModelsImageInformationToJSON)),
        'unassessed_images_count': value['unassessedImagesCount'],
        'visible_to_k8s': value['visibleToK8s'],
    };
}

