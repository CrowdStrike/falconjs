/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import {
    DomainDiscoverAPINetworkInterface,
    DomainDiscoverAPINetworkInterfaceFromJSON,
    DomainDiscoverAPINetworkInterfaceFromJSONTyped,
    DomainDiscoverAPINetworkInterfaceToJSON,
} from "./DomainDiscoverAPINetworkInterface";

/**
 * Represents information about a managed, an unmanaged or an unsupported asset.
 * @export
 * @interface DomainDiscoverAPIHost
 */
export interface DomainDiscoverAPIHost {
    /**
     * The version of the Falcon sensor that's installed on the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    agentVersion?: string;
    /**
     * The agent ID of the Falcon sensor installed on the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    aid?: string;
    /**
     * The name of the asset's BIOS manufacturer.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    biosManufacturer?: string;
    /**
     * The asset's BIOS version.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    biosVersion?: string;
    /**
     * The asset's customer ID.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    cid: string;
    /**
     * The name of the city where the asset is located.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    city?: string;
    /**
     * The level of confidence that the asset is a corporate asset (25 = low confidence, 50 = medium confidence, 75 = high confidence).
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    confidence?: number;
    /**
     * The name of the country where the asset is located.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    country?: string;
    /**
     * The last seen local IPv4 address of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    currentLocalIp?: string;
    /**
     * The agent IDs of the Falcon sensors installed on the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    discovererAids?: Array<string>;
    /**
     * The number of sources that discovered the asset.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    discovererCount?: number;
    /**
     * The platform names of the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    discovererPlatformNames?: Array<string>;
    /**
     * The product type descriptions of the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    discovererProductTypeDescs?: Array<string>;
    /**
     * The tags of the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    discovererTags?: Array<string>;
    /**
     * The type of asset (managed, unmanaged, unsupported).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    entityType?: string;
    /**
     * The external IPv4 address of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    externalIp?: string;
    /**
     * The agent ID of the Falcon sensor on the source that first discovered the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    firstDiscovererAid?: string;
    /**
     * The first time the asset was seen in your environment.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    firstSeenTimestamp?: string;
    /**
     * The host management groups the asset is part of.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    groups?: Array<string>;
    /**
     * The asset's hostname .
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    hostname?: string;
    /**
     * The unique ID of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    id: string;
    /**
     * Whether the asset is exposed to the internet (Yes or Unknown)
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    internetExposure?: string;
    /**
     * For Linux and Mac hosts: the major version, minor version, and patch version of the kernel for the asset. For Windows hosts: the build number of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    kernelVersion?: string;
    /**
     * The agent ID of the Falcon sensor installed on the source that most recently discovered the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    lastDiscovererAid?: string;
    /**
     * The most recent time the asset was seen in your environment.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    lastSeenTimestamp?: string;
    /**
     * The number of historical local IPv4 addresses the asset has had.
     * @type {number}
     * @memberof DomainDiscoverAPIHost
     */
    localIpsCount?: number;
    /**
     * The domain name the asset is currently joined to (applies only to Windows hosts).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    machineDomain?: string;
    /**
     * The asset's network interfaces.
     * @type {Array<DomainDiscoverAPINetworkInterface>}
     * @memberof DomainDiscoverAPIHost
     */
    networkInterfaces?: Array<DomainDiscoverAPINetworkInterface>;
    /**
     * The OS version of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    osVersion?: string;
    /**
     * The organizational unit of the asset (applies only to Windows hosts).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    ou?: string;
    /**
     * The platform name of the asset (Windows, Mac, Linux).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    platformName?: string;
    /**
     * The product type of the asset represented as a number (1 = Workstation, 2 = Domain Controller, 3 = Server).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    productType?: string;
    /**
     * The product type of the asset (Workstation, Domain Controller, Server).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    productTypeDesc?: string;
    /**
     * The site name of the domain the asset is joined to (applies only to Windows hosts).
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    siteName?: string;
    /**
     * The asset's system manufacturer.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    systemManufacturer?: string;
    /**
     * The asset's system product name.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    systemProductName?: string;
    /**
     * The asset's system serial number.
     * @type {string}
     * @memberof DomainDiscoverAPIHost
     */
    systemSerialNumber?: string;
    /**
     * The sensor and cloud tags of the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIHost
     */
    tags?: Array<string>;
}

export function DomainDiscoverAPIHostFromJSON(json: any): DomainDiscoverAPIHost {
    return DomainDiscoverAPIHostFromJSONTyped(json, false);
}

export function DomainDiscoverAPIHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPIHost {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        agentVersion: !exists(json, "agent_version") ? undefined : json["agent_version"],
        aid: !exists(json, "aid") ? undefined : json["aid"],
        biosManufacturer: !exists(json, "bios_manufacturer") ? undefined : json["bios_manufacturer"],
        biosVersion: !exists(json, "bios_version") ? undefined : json["bios_version"],
        cid: json["cid"],
        city: !exists(json, "city") ? undefined : json["city"],
        confidence: !exists(json, "confidence") ? undefined : json["confidence"],
        country: !exists(json, "country") ? undefined : json["country"],
        currentLocalIp: !exists(json, "current_local_ip") ? undefined : json["current_local_ip"],
        discovererAids: !exists(json, "discoverer_aids") ? undefined : json["discoverer_aids"],
        discovererCount: !exists(json, "discoverer_count") ? undefined : json["discoverer_count"],
        discovererPlatformNames: !exists(json, "discoverer_platform_names") ? undefined : json["discoverer_platform_names"],
        discovererProductTypeDescs: !exists(json, "discoverer_product_type_descs") ? undefined : json["discoverer_product_type_descs"],
        discovererTags: !exists(json, "discoverer_tags") ? undefined : json["discoverer_tags"],
        entityType: !exists(json, "entity_type") ? undefined : json["entity_type"],
        externalIp: !exists(json, "external_ip") ? undefined : json["external_ip"],
        firstDiscovererAid: !exists(json, "first_discoverer_aid") ? undefined : json["first_discoverer_aid"],
        firstSeenTimestamp: !exists(json, "first_seen_timestamp") ? undefined : json["first_seen_timestamp"],
        groups: !exists(json, "groups") ? undefined : json["groups"],
        hostname: !exists(json, "hostname") ? undefined : json["hostname"],
        id: json["id"],
        internetExposure: !exists(json, "internet_exposure") ? undefined : json["internet_exposure"],
        kernelVersion: !exists(json, "kernel_version") ? undefined : json["kernel_version"],
        lastDiscovererAid: !exists(json, "last_discoverer_aid") ? undefined : json["last_discoverer_aid"],
        lastSeenTimestamp: !exists(json, "last_seen_timestamp") ? undefined : json["last_seen_timestamp"],
        localIpsCount: !exists(json, "local_ips_count") ? undefined : json["local_ips_count"],
        machineDomain: !exists(json, "machine_domain") ? undefined : json["machine_domain"],
        networkInterfaces: !exists(json, "network_interfaces") ? undefined : (json["network_interfaces"] as Array<any>).map(DomainDiscoverAPINetworkInterfaceFromJSON),
        osVersion: !exists(json, "os_version") ? undefined : json["os_version"],
        ou: !exists(json, "ou") ? undefined : json["ou"],
        platformName: !exists(json, "platform_name") ? undefined : json["platform_name"],
        productType: !exists(json, "product_type") ? undefined : json["product_type"],
        productTypeDesc: !exists(json, "product_type_desc") ? undefined : json["product_type_desc"],
        siteName: !exists(json, "site_name") ? undefined : json["site_name"],
        systemManufacturer: !exists(json, "system_manufacturer") ? undefined : json["system_manufacturer"],
        systemProductName: !exists(json, "system_product_name") ? undefined : json["system_product_name"],
        systemSerialNumber: !exists(json, "system_serial_number") ? undefined : json["system_serial_number"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
    };
}

export function DomainDiscoverAPIHostToJSON(value?: DomainDiscoverAPIHost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        agent_version: value.agentVersion,
        aid: value.aid,
        bios_manufacturer: value.biosManufacturer,
        bios_version: value.biosVersion,
        cid: value.cid,
        city: value.city,
        confidence: value.confidence,
        country: value.country,
        current_local_ip: value.currentLocalIp,
        discoverer_aids: value.discovererAids,
        discoverer_count: value.discovererCount,
        discoverer_platform_names: value.discovererPlatformNames,
        discoverer_product_type_descs: value.discovererProductTypeDescs,
        discoverer_tags: value.discovererTags,
        entity_type: value.entityType,
        external_ip: value.externalIp,
        first_discoverer_aid: value.firstDiscovererAid,
        first_seen_timestamp: value.firstSeenTimestamp,
        groups: value.groups,
        hostname: value.hostname,
        id: value.id,
        internet_exposure: value.internetExposure,
        kernel_version: value.kernelVersion,
        last_discoverer_aid: value.lastDiscovererAid,
        last_seen_timestamp: value.lastSeenTimestamp,
        local_ips_count: value.localIpsCount,
        machine_domain: value.machineDomain,
        network_interfaces: value.networkInterfaces === undefined ? undefined : (value.networkInterfaces as Array<any>).map(DomainDiscoverAPINetworkInterfaceToJSON),
        os_version: value.osVersion,
        ou: value.ou,
        platform_name: value.platformName,
        product_type: value.productType,
        product_type_desc: value.productTypeDesc,
        site_name: value.siteName,
        system_manufacturer: value.systemManufacturer,
        system_product_name: value.systemProductName,
        system_serial_number: value.systemSerialNumber,
        tags: value.tags,
    };
}
