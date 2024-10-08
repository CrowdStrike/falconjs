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
 * @interface ModelsAPIContainerAlert
 */
export interface ModelsAPIContainerAlert {
    /**
     *
     * @type {string}
     * @memberof ModelsAPIContainerAlert
     */
    containersImpactedCount: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsAPIContainerAlert
     */
    containersImpactedIds: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIContainerAlert
     */
    detectionDescription: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIContainerAlert
     */
    detectionEventSimpleName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIContainerAlert
     */
    detectionName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIContainerAlert
     */
    firstSeenTimestamp: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIContainerAlert
     */
    lastSeenTimestamp: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIContainerAlert
     */
    severity: string;
}

/**
 * Check if a given object implements the ModelsAPIContainerAlert interface.
 */
export function instanceOfModelsAPIContainerAlert(value: object): value is ModelsAPIContainerAlert {
    if (!("containersImpactedCount" in value) || value["containersImpactedCount"] === undefined) return false;
    if (!("containersImpactedIds" in value) || value["containersImpactedIds"] === undefined) return false;
    if (!("detectionDescription" in value) || value["detectionDescription"] === undefined) return false;
    if (!("detectionEventSimpleName" in value) || value["detectionEventSimpleName"] === undefined) return false;
    if (!("detectionName" in value) || value["detectionName"] === undefined) return false;
    if (!("firstSeenTimestamp" in value) || value["firstSeenTimestamp"] === undefined) return false;
    if (!("lastSeenTimestamp" in value) || value["lastSeenTimestamp"] === undefined) return false;
    if (!("severity" in value) || value["severity"] === undefined) return false;
    return true;
}

export function ModelsAPIContainerAlertFromJSON(json: any): ModelsAPIContainerAlert {
    return ModelsAPIContainerAlertFromJSONTyped(json, false);
}

export function ModelsAPIContainerAlertFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIContainerAlert {
    if (json == null) {
        return json;
    }
    return {
        containersImpactedCount: json["containers_impacted_count"],
        containersImpactedIds: json["containers_impacted_ids"],
        detectionDescription: json["detection_description"],
        detectionEventSimpleName: json["detection_event_simple_name"],
        detectionName: json["detection_name"],
        firstSeenTimestamp: json["first_seen_timestamp"],
        lastSeenTimestamp: json["last_seen_timestamp"],
        severity: json["severity"],
    };
}

export function ModelsAPIContainerAlertToJSON(value?: ModelsAPIContainerAlert | null): any {
    if (value == null) {
        return value;
    }
    return {
        containers_impacted_count: value["containersImpactedCount"],
        containers_impacted_ids: value["containersImpactedIds"],
        detection_description: value["detectionDescription"],
        detection_event_simple_name: value["detectionEventSimpleName"],
        detection_name: value["detectionName"],
        first_seen_timestamp: value["firstSeenTimestamp"],
        last_seen_timestamp: value["lastSeenTimestamp"],
        severity: value["severity"],
    };
}
