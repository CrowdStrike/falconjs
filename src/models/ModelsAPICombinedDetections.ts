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
/**
 *
 * @export
 * @interface ModelsAPICombinedDetections
 */
export interface ModelsAPICombinedDetections {
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    cid: string;
    /**
     *
     * @type {number}
     * @memberof ModelsAPICombinedDetections
     */
    containersImpacted: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    description: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsAPICombinedDetections
     */
    details: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    detectionId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    detectionName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    detectionSeverity: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    detectionType: string;
    /**
     *
     * @type {number}
     * @memberof ModelsAPICombinedDetections
     */
    imagesImpacted: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    lastDetected: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    remediation: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICombinedDetections
     */
    title: string;
}

/**
 * Check if a given object implements the ModelsAPICombinedDetections interface.
 */
export function instanceOfModelsAPICombinedDetections(value: object): value is ModelsAPICombinedDetections {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("containersImpacted" in value) || value["containersImpacted"] === undefined) return false;
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("details" in value) || value["details"] === undefined) return false;
    if (!("detectionId" in value) || value["detectionId"] === undefined) return false;
    if (!("detectionName" in value) || value["detectionName"] === undefined) return false;
    if (!("detectionSeverity" in value) || value["detectionSeverity"] === undefined) return false;
    if (!("detectionType" in value) || value["detectionType"] === undefined) return false;
    if (!("imagesImpacted" in value) || value["imagesImpacted"] === undefined) return false;
    if (!("lastDetected" in value) || value["lastDetected"] === undefined) return false;
    if (!("remediation" in value) || value["remediation"] === undefined) return false;
    if (!("title" in value) || value["title"] === undefined) return false;
    return true;
}

export function ModelsAPICombinedDetectionsFromJSON(json: any): ModelsAPICombinedDetections {
    return ModelsAPICombinedDetectionsFromJSONTyped(json, false);
}

export function ModelsAPICombinedDetectionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPICombinedDetections {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"],
        containersImpacted: json["containers_impacted"],
        description: json["description"],
        details: json["details"],
        detectionId: json["detection_id"],
        detectionName: json["detection_name"],
        detectionSeverity: json["detection_severity"],
        detectionType: json["detection_type"],
        imagesImpacted: json["images_impacted"],
        lastDetected: json["last_detected"],
        remediation: json["remediation"],
        title: json["title"],
    };
}

export function ModelsAPICombinedDetectionsToJSON(value?: ModelsAPICombinedDetections | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        containers_impacted: value["containersImpacted"],
        description: value["description"],
        details: value["details"],
        detection_id: value["detectionId"],
        detection_name: value["detectionName"],
        detection_severity: value["detectionSeverity"],
        detection_type: value["detectionType"],
        images_impacted: value["imagesImpacted"],
        last_detected: value["lastDetected"],
        remediation: value["remediation"],
        title: value["title"],
    };
}
