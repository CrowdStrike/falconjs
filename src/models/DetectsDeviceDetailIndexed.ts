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
 * @interface DetectsDeviceDetailIndexed
 */
export interface DetectsDeviceDetailIndexed {
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    agentLoadFlags?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    agentLocalTime?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    agentVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    biosManufacturer?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    biosVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    configIdBase?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    configIdBuild?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    configIdPlatform?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    deviceId: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    externalIp?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    firstLoginTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    firstLoginUser?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    firstSeen?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    groups?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    hostname?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    instanceId?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    lastLoginTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    lastLoginUser?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    lastSeen?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    localIp?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    macAddress?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    machineDomain?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    majorVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    minorVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    modifiedTimestamp?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    notes?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    osVersion?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    ou?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    platformId?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    platformName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    podId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    podLabels?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    podName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    podNamespace?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    podServiceAccountName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    productType?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    productTypeDesc?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    releaseGroup?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    serviceProvider?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    serviceProviderAccountId?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    siteName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    systemManufacturer?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    systemProductName?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    tags?: Array<string>;
}

/**
 * Check if a given object implements the DetectsDeviceDetailIndexed interface.
 */
export function instanceOfDetectsDeviceDetailIndexed(value: object): value is DetectsDeviceDetailIndexed {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("deviceId" in value) || value["deviceId"] === undefined) return false;
    return true;
}

export function DetectsDeviceDetailIndexedFromJSON(json: any): DetectsDeviceDetailIndexed {
    return DetectsDeviceDetailIndexedFromJSONTyped(json, false);
}

export function DetectsDeviceDetailIndexedFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectsDeviceDetailIndexed {
    if (json == null) {
        return json;
    }
    return {
        agentLoadFlags: json["agent_load_flags"] == null ? undefined : json["agent_load_flags"],
        agentLocalTime: json["agent_local_time"] == null ? undefined : json["agent_local_time"],
        agentVersion: json["agent_version"] == null ? undefined : json["agent_version"],
        biosManufacturer: json["bios_manufacturer"] == null ? undefined : json["bios_manufacturer"],
        biosVersion: json["bios_version"] == null ? undefined : json["bios_version"],
        cid: json["cid"],
        configIdBase: json["config_id_base"] == null ? undefined : json["config_id_base"],
        configIdBuild: json["config_id_build"] == null ? undefined : json["config_id_build"],
        configIdPlatform: json["config_id_platform"] == null ? undefined : json["config_id_platform"],
        deviceId: json["device_id"],
        externalIp: json["external_ip"] == null ? undefined : json["external_ip"],
        firstLoginTimestamp: json["first_login_timestamp"] == null ? undefined : json["first_login_timestamp"],
        firstLoginUser: json["first_login_user"] == null ? undefined : json["first_login_user"],
        firstSeen: json["first_seen"] == null ? undefined : json["first_seen"],
        groups: json["groups"] == null ? undefined : json["groups"],
        hostname: json["hostname"] == null ? undefined : json["hostname"],
        instanceId: json["instance_id"] == null ? undefined : json["instance_id"],
        lastLoginTimestamp: json["last_login_timestamp"] == null ? undefined : json["last_login_timestamp"],
        lastLoginUser: json["last_login_user"] == null ? undefined : json["last_login_user"],
        lastSeen: json["last_seen"] == null ? undefined : json["last_seen"],
        localIp: json["local_ip"] == null ? undefined : json["local_ip"],
        macAddress: json["mac_address"] == null ? undefined : json["mac_address"],
        machineDomain: json["machine_domain"] == null ? undefined : json["machine_domain"],
        majorVersion: json["major_version"] == null ? undefined : json["major_version"],
        minorVersion: json["minor_version"] == null ? undefined : json["minor_version"],
        modifiedTimestamp: json["modified_timestamp"] == null ? undefined : json["modified_timestamp"],
        notes: json["notes"] == null ? undefined : json["notes"],
        osVersion: json["os_version"] == null ? undefined : json["os_version"],
        ou: json["ou"] == null ? undefined : json["ou"],
        platformId: json["platform_id"] == null ? undefined : json["platform_id"],
        platformName: json["platform_name"] == null ? undefined : json["platform_name"],
        podId: json["pod_id"] == null ? undefined : json["pod_id"],
        podLabels: json["pod_labels"] == null ? undefined : json["pod_labels"],
        podName: json["pod_name"] == null ? undefined : json["pod_name"],
        podNamespace: json["pod_namespace"] == null ? undefined : json["pod_namespace"],
        podServiceAccountName: json["pod_service_account_name"] == null ? undefined : json["pod_service_account_name"],
        productType: json["product_type"] == null ? undefined : json["product_type"],
        productTypeDesc: json["product_type_desc"] == null ? undefined : json["product_type_desc"],
        releaseGroup: json["release_group"] == null ? undefined : json["release_group"],
        serviceProvider: json["service_provider"] == null ? undefined : json["service_provider"],
        serviceProviderAccountId: json["service_provider_account_id"] == null ? undefined : json["service_provider_account_id"],
        siteName: json["site_name"] == null ? undefined : json["site_name"],
        status: json["status"] == null ? undefined : json["status"],
        systemManufacturer: json["system_manufacturer"] == null ? undefined : json["system_manufacturer"],
        systemProductName: json["system_product_name"] == null ? undefined : json["system_product_name"],
        tags: json["tags"] == null ? undefined : json["tags"],
    };
}

export function DetectsDeviceDetailIndexedToJSON(value?: DetectsDeviceDetailIndexed | null): any {
    if (value == null) {
        return value;
    }
    return {
        agent_load_flags: value["agentLoadFlags"],
        agent_local_time: value["agentLocalTime"],
        agent_version: value["agentVersion"],
        bios_manufacturer: value["biosManufacturer"],
        bios_version: value["biosVersion"],
        cid: value["cid"],
        config_id_base: value["configIdBase"],
        config_id_build: value["configIdBuild"],
        config_id_platform: value["configIdPlatform"],
        device_id: value["deviceId"],
        external_ip: value["externalIp"],
        first_login_timestamp: value["firstLoginTimestamp"],
        first_login_user: value["firstLoginUser"],
        first_seen: value["firstSeen"],
        groups: value["groups"],
        hostname: value["hostname"],
        instance_id: value["instanceId"],
        last_login_timestamp: value["lastLoginTimestamp"],
        last_login_user: value["lastLoginUser"],
        last_seen: value["lastSeen"],
        local_ip: value["localIp"],
        mac_address: value["macAddress"],
        machine_domain: value["machineDomain"],
        major_version: value["majorVersion"],
        minor_version: value["minorVersion"],
        modified_timestamp: value["modifiedTimestamp"],
        notes: value["notes"],
        os_version: value["osVersion"],
        ou: value["ou"],
        platform_id: value["platformId"],
        platform_name: value["platformName"],
        pod_id: value["podId"],
        pod_labels: value["podLabels"],
        pod_name: value["podName"],
        pod_namespace: value["podNamespace"],
        pod_service_account_name: value["podServiceAccountName"],
        product_type: value["productType"],
        product_type_desc: value["productTypeDesc"],
        release_group: value["releaseGroup"],
        service_provider: value["serviceProvider"],
        service_provider_account_id: value["serviceProviderAccountId"],
        site_name: value["siteName"],
        status: value["status"],
        system_manufacturer: value["systemManufacturer"],
        system_product_name: value["systemProductName"],
        tags: value["tags"],
    };
}
