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
 * @interface ModelsAPIRuntimeDetection
 */
export interface ModelsAPIRuntimeDetection {
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    actionTaken: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    agentType: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    aid: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    assignedTo: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    cloud: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    cloudAccountId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    cloudId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    cloudInstanceId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    cloudName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    clusterName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    commandLine: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    computerName: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsAPIRuntimeDetection
     */
    containerDevices: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    containerId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    containerInteractiveMode: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    containerName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    containerNetworkIpAddress: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    containerPrivileged: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    containerReadOnlyRootFs: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    containerUserInfo: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    containersImpactedCount: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    detectTimestamp: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    detectionDescription: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    detectionId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsAPIRuntimeDetection
     */
    detectionName: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    executableSha256: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    fileName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    filePath: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    hostContainersCount: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    hostDetectionsCount: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsAPIRuntimeDetection
     */
    hostDetectionsIds: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    hostId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    hostLastSeenTimestamp: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    hostType: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    imageDigest: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    imageFirstSeenTimestamp: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    imageId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    imageLabel: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    imageLastSeenTimestamp: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    imageMaintainer: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    imageName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    imagesContainerCount: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    namespace: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    networkIpAddress: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    osVersion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    podId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    podName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    podNamespace: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    sensorVersion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    severity: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    tacticAndTechnique: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIRuntimeDetection
     */
    vulnerabilitiesCount: string;
}

/**
 * Check if a given object implements the ModelsAPIRuntimeDetection interface.
 */
export function instanceOfModelsAPIRuntimeDetection(value: object): value is ModelsAPIRuntimeDetection {
    if (!("actionTaken" in value) || value["actionTaken"] === undefined) return false;
    if (!("agentType" in value) || value["agentType"] === undefined) return false;
    if (!("aid" in value) || value["aid"] === undefined) return false;
    if (!("assignedTo" in value) || value["assignedTo"] === undefined) return false;
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("cloud" in value) || value["cloud"] === undefined) return false;
    if (!("cloudAccountId" in value) || value["cloudAccountId"] === undefined) return false;
    if (!("cloudId" in value) || value["cloudId"] === undefined) return false;
    if (!("cloudInstanceId" in value) || value["cloudInstanceId"] === undefined) return false;
    if (!("cloudName" in value) || value["cloudName"] === undefined) return false;
    if (!("clusterName" in value) || value["clusterName"] === undefined) return false;
    if (!("commandLine" in value) || value["commandLine"] === undefined) return false;
    if (!("computerName" in value) || value["computerName"] === undefined) return false;
    if (!("containerDevices" in value) || value["containerDevices"] === undefined) return false;
    if (!("containerId" in value) || value["containerId"] === undefined) return false;
    if (!("containerInteractiveMode" in value) || value["containerInteractiveMode"] === undefined) return false;
    if (!("containerName" in value) || value["containerName"] === undefined) return false;
    if (!("containerNetworkIpAddress" in value) || value["containerNetworkIpAddress"] === undefined) return false;
    if (!("containerPrivileged" in value) || value["containerPrivileged"] === undefined) return false;
    if (!("containerReadOnlyRootFs" in value) || value["containerReadOnlyRootFs"] === undefined) return false;
    if (!("containerUserInfo" in value) || value["containerUserInfo"] === undefined) return false;
    if (!("containersImpactedCount" in value) || value["containersImpactedCount"] === undefined) return false;
    if (!("detectTimestamp" in value) || value["detectTimestamp"] === undefined) return false;
    if (!("detectionDescription" in value) || value["detectionDescription"] === undefined) return false;
    if (!("detectionId" in value) || value["detectionId"] === undefined) return false;
    if (!("detectionName" in value) || value["detectionName"] === undefined) return false;
    if (!("executableSha256" in value) || value["executableSha256"] === undefined) return false;
    if (!("fileName" in value) || value["fileName"] === undefined) return false;
    if (!("filePath" in value) || value["filePath"] === undefined) return false;
    if (!("hostContainersCount" in value) || value["hostContainersCount"] === undefined) return false;
    if (!("hostDetectionsCount" in value) || value["hostDetectionsCount"] === undefined) return false;
    if (!("hostDetectionsIds" in value) || value["hostDetectionsIds"] === undefined) return false;
    if (!("hostId" in value) || value["hostId"] === undefined) return false;
    if (!("hostLastSeenTimestamp" in value) || value["hostLastSeenTimestamp"] === undefined) return false;
    if (!("hostType" in value) || value["hostType"] === undefined) return false;
    if (!("imageDigest" in value) || value["imageDigest"] === undefined) return false;
    if (!("imageFirstSeenTimestamp" in value) || value["imageFirstSeenTimestamp"] === undefined) return false;
    if (!("imageId" in value) || value["imageId"] === undefined) return false;
    if (!("imageLabel" in value) || value["imageLabel"] === undefined) return false;
    if (!("imageLastSeenTimestamp" in value) || value["imageLastSeenTimestamp"] === undefined) return false;
    if (!("imageMaintainer" in value) || value["imageMaintainer"] === undefined) return false;
    if (!("imageName" in value) || value["imageName"] === undefined) return false;
    if (!("imagesContainerCount" in value) || value["imagesContainerCount"] === undefined) return false;
    if (!("namespace" in value) || value["namespace"] === undefined) return false;
    if (!("networkIpAddress" in value) || value["networkIpAddress"] === undefined) return false;
    if (!("osVersion" in value) || value["osVersion"] === undefined) return false;
    if (!("podId" in value) || value["podId"] === undefined) return false;
    if (!("podName" in value) || value["podName"] === undefined) return false;
    if (!("podNamespace" in value) || value["podNamespace"] === undefined) return false;
    if (!("sensorVersion" in value) || value["sensorVersion"] === undefined) return false;
    if (!("severity" in value) || value["severity"] === undefined) return false;
    if (!("tacticAndTechnique" in value) || value["tacticAndTechnique"] === undefined) return false;
    if (!("type" in value) || value["type"] === undefined) return false;
    if (!("vulnerabilitiesCount" in value) || value["vulnerabilitiesCount"] === undefined) return false;
    return true;
}

export function ModelsAPIRuntimeDetectionFromJSON(json: any): ModelsAPIRuntimeDetection {
    return ModelsAPIRuntimeDetectionFromJSONTyped(json, false);
}

export function ModelsAPIRuntimeDetectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIRuntimeDetection {
    if (json == null) {
        return json;
    }
    return {
        actionTaken: json["action_taken"],
        agentType: json["agent_type"],
        aid: json["aid"],
        assignedTo: json["assigned_to"],
        cid: json["cid"],
        cloud: json["cloud"],
        cloudAccountId: json["cloud_account_id"],
        cloudId: json["cloud_id"],
        cloudInstanceId: json["cloud_instance_id"],
        cloudName: json["cloud_name"],
        clusterName: json["cluster_name"],
        commandLine: json["command_line"],
        computerName: json["computer_name"],
        containerDevices: json["container_devices"],
        containerId: json["container_id"],
        containerInteractiveMode: json["container_interactive_mode"],
        containerName: json["container_name"],
        containerNetworkIpAddress: json["container_network_ip_address"],
        containerPrivileged: json["container_privileged"],
        containerReadOnlyRootFs: json["container_read_only_root_fs"],
        containerUserInfo: json["container_user_info"],
        containersImpactedCount: json["containers_impacted_count"],
        detectTimestamp: json["detect_timestamp"],
        detectionDescription: json["detection_description"],
        detectionId: json["detection_id"],
        detectionName: json["detection_name"],
        executableSha256: json["executable_sha_256"],
        fileName: json["file_name"],
        filePath: json["file_path"],
        hostContainersCount: json["host_containers_count"],
        hostDetectionsCount: json["host_detections_count"],
        hostDetectionsIds: json["host_detections_ids"],
        hostId: json["host_id"],
        hostLastSeenTimestamp: json["host_last_seen_timestamp"],
        hostType: json["host_type"],
        imageDigest: json["image_digest"],
        imageFirstSeenTimestamp: json["image_first_seen_timestamp"],
        imageId: json["image_id"],
        imageLabel: json["image_label"],
        imageLastSeenTimestamp: json["image_last_seen_timestamp"],
        imageMaintainer: json["image_maintainer"],
        imageName: json["image_name"],
        imagesContainerCount: json["images_container_count"],
        namespace: json["namespace"],
        networkIpAddress: json["network_ip_address"],
        osVersion: json["os_version"],
        podId: json["pod_id"],
        podName: json["pod_name"],
        podNamespace: json["pod_namespace"],
        sensorVersion: json["sensor_version"],
        severity: json["severity"],
        tacticAndTechnique: json["tactic_and_technique"],
        type: json["type"],
        vulnerabilitiesCount: json["vulnerabilities_count"],
    };
}

export function ModelsAPIRuntimeDetectionToJSON(value?: ModelsAPIRuntimeDetection | null): any {
    if (value == null) {
        return value;
    }
    return {
        action_taken: value["actionTaken"],
        agent_type: value["agentType"],
        aid: value["aid"],
        assigned_to: value["assignedTo"],
        cid: value["cid"],
        cloud: value["cloud"],
        cloud_account_id: value["cloudAccountId"],
        cloud_id: value["cloudId"],
        cloud_instance_id: value["cloudInstanceId"],
        cloud_name: value["cloudName"],
        cluster_name: value["clusterName"],
        command_line: value["commandLine"],
        computer_name: value["computerName"],
        container_devices: value["containerDevices"],
        container_id: value["containerId"],
        container_interactive_mode: value["containerInteractiveMode"],
        container_name: value["containerName"],
        container_network_ip_address: value["containerNetworkIpAddress"],
        container_privileged: value["containerPrivileged"],
        container_read_only_root_fs: value["containerReadOnlyRootFs"],
        container_user_info: value["containerUserInfo"],
        containers_impacted_count: value["containersImpactedCount"],
        detect_timestamp: value["detectTimestamp"],
        detection_description: value["detectionDescription"],
        detection_id: value["detectionId"],
        detection_name: value["detectionName"],
        executable_sha_256: value["executableSha256"],
        file_name: value["fileName"],
        file_path: value["filePath"],
        host_containers_count: value["hostContainersCount"],
        host_detections_count: value["hostDetectionsCount"],
        host_detections_ids: value["hostDetectionsIds"],
        host_id: value["hostId"],
        host_last_seen_timestamp: value["hostLastSeenTimestamp"],
        host_type: value["hostType"],
        image_digest: value["imageDigest"],
        image_first_seen_timestamp: value["imageFirstSeenTimestamp"],
        image_id: value["imageId"],
        image_label: value["imageLabel"],
        image_last_seen_timestamp: value["imageLastSeenTimestamp"],
        image_maintainer: value["imageMaintainer"],
        image_name: value["imageName"],
        images_container_count: value["imagesContainerCount"],
        namespace: value["namespace"],
        network_ip_address: value["networkIpAddress"],
        os_version: value["osVersion"],
        pod_id: value["podId"],
        pod_name: value["podName"],
        pod_namespace: value["podNamespace"],
        sensor_version: value["sensorVersion"],
        severity: value["severity"],
        tactic_and_technique: value["tacticAndTechnique"],
        type: value["type"],
        vulnerabilities_count: value["vulnerabilitiesCount"],
    };
}