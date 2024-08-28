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
 * @interface ModelsContainerRuntimePivot
 */
export interface ModelsContainerRuntimePivot {
    /**
     *
     * @type {string}
     * @memberof ModelsContainerRuntimePivot
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ModelsContainerRuntimePivot
     */
    cloudName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsContainerRuntimePivot
     */
    clusterName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsContainerRuntimePivot
     */
    containerRuntimeVersion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsContainerRuntimePivot
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof ModelsContainerRuntimePivot
     */
    firstSeen: string;
    /**
     *
     * @type {string}
     * @memberof ModelsContainerRuntimePivot
     */
    lastSeen: string;
    /**
     *
     * @type {string}
     * @memberof ModelsContainerRuntimePivot
     */
    nodeName: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsContainerRuntimePivot
     */
    podName: Array<string>;
}

/**
 * Check if a given object implements the ModelsContainerRuntimePivot interface.
 */
export function instanceOfModelsContainerRuntimePivot(value: object): value is ModelsContainerRuntimePivot {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("cloudName" in value) || value["cloudName"] === undefined) return false;
    if (!("clusterName" in value) || value["clusterName"] === undefined) return false;
    if (!("containerRuntimeVersion" in value) || value["containerRuntimeVersion"] === undefined) return false;
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("firstSeen" in value) || value["firstSeen"] === undefined) return false;
    if (!("lastSeen" in value) || value["lastSeen"] === undefined) return false;
    if (!("nodeName" in value) || value["nodeName"] === undefined) return false;
    if (!("podName" in value) || value["podName"] === undefined) return false;
    return true;
}

export function ModelsContainerRuntimePivotFromJSON(json: any): ModelsContainerRuntimePivot {
    return ModelsContainerRuntimePivotFromJSONTyped(json, false);
}

export function ModelsContainerRuntimePivotFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsContainerRuntimePivot {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"],
        cloudName: json["cloud_name"],
        clusterName: json["cluster_name"],
        containerRuntimeVersion: json["container_runtime_version"],
        createdAt: json["created_at"],
        firstSeen: json["first_seen"],
        lastSeen: json["last_seen"],
        nodeName: json["node_name"],
        podName: json["pod_name"],
    };
}

export function ModelsContainerRuntimePivotToJSON(value?: ModelsContainerRuntimePivot | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        cloud_name: value["cloudName"],
        cluster_name: value["clusterName"],
        container_runtime_version: value["containerRuntimeVersion"],
        created_at: value["createdAt"],
        first_seen: value["firstSeen"],
        last_seen: value["lastSeen"],
        node_name: value["nodeName"],
        pod_name: value["podName"],
    };
}
