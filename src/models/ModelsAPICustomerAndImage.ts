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
import type { ModelsLightWeightConfig } from "./ModelsLightWeightConfig";
import { ModelsLightWeightConfigFromJSON, ModelsLightWeightConfigFromJSONTyped, ModelsLightWeightConfigToJSON } from "./ModelsLightWeightConfig";

/**
 *
 * @export
 * @interface ModelsAPICustomerAndImage
 */
export interface ModelsAPICustomerAndImage {
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    baseOs: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    baseOsVersion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    cid: string;
    /**
     *
     * @type {ModelsLightWeightConfig}
     * @memberof ModelsAPICustomerAndImage
     */
    config?: ModelsLightWeightConfig;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    crowdstrikeUser: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    digest: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    eolDate: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    firstScanned: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    imageId: string;
    /**
     *
     * @type {boolean}
     * @memberof ModelsAPICustomerAndImage
     */
    imageScanningActive: boolean;
    /**
     *
     * @type {number}
     * @memberof ModelsAPICustomerAndImage
     */
    imageSize: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    registry: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    repository: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    tag: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    updatedAt: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPICustomerAndImage
     */
    uuid: string;
    /**
     *
     * @type {number}
     * @memberof ModelsAPICustomerAndImage
     */
    warning: number;
}

/**
 * Check if a given object implements the ModelsAPICustomerAndImage interface.
 */
export function instanceOfModelsAPICustomerAndImage(value: object): value is ModelsAPICustomerAndImage {
    if (!("baseOs" in value) || value["baseOs"] === undefined) return false;
    if (!("baseOsVersion" in value) || value["baseOsVersion"] === undefined) return false;
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("crowdstrikeUser" in value) || value["crowdstrikeUser"] === undefined) return false;
    if (!("digest" in value) || value["digest"] === undefined) return false;
    if (!("eolDate" in value) || value["eolDate"] === undefined) return false;
    if (!("firstScanned" in value) || value["firstScanned"] === undefined) return false;
    if (!("imageId" in value) || value["imageId"] === undefined) return false;
    if (!("imageScanningActive" in value) || value["imageScanningActive"] === undefined) return false;
    if (!("imageSize" in value) || value["imageSize"] === undefined) return false;
    if (!("registry" in value) || value["registry"] === undefined) return false;
    if (!("repository" in value) || value["repository"] === undefined) return false;
    if (!("tag" in value) || value["tag"] === undefined) return false;
    if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
    if (!("uuid" in value) || value["uuid"] === undefined) return false;
    if (!("warning" in value) || value["warning"] === undefined) return false;
    return true;
}

export function ModelsAPICustomerAndImageFromJSON(json: any): ModelsAPICustomerAndImage {
    return ModelsAPICustomerAndImageFromJSONTyped(json, false);
}

export function ModelsAPICustomerAndImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPICustomerAndImage {
    if (json == null) {
        return json;
    }
    return {
        baseOs: json["base_os"],
        baseOsVersion: json["base_os_version"],
        cid: json["cid"],
        config: json["config"] == null ? undefined : ModelsLightWeightConfigFromJSON(json["config"]),
        createdAt: json["created_at"],
        crowdstrikeUser: json["crowdstrike_user"],
        digest: json["digest"],
        eolDate: json["eol_date"],
        firstScanned: json["first_scanned"],
        imageId: json["image_id"],
        imageScanningActive: json["image_scanning_active"],
        imageSize: json["image_size"],
        registry: json["registry"],
        repository: json["repository"],
        tag: json["tag"],
        updatedAt: json["updated_at"],
        uuid: json["uuid"],
        warning: json["warning"],
    };
}

export function ModelsAPICustomerAndImageToJSON(value?: ModelsAPICustomerAndImage | null): any {
    if (value == null) {
        return value;
    }
    return {
        base_os: value["baseOs"],
        base_os_version: value["baseOsVersion"],
        cid: value["cid"],
        config: ModelsLightWeightConfigToJSON(value["config"]),
        created_at: value["createdAt"],
        crowdstrike_user: value["crowdstrikeUser"],
        digest: value["digest"],
        eol_date: value["eolDate"],
        first_scanned: value["firstScanned"],
        image_id: value["imageId"],
        image_scanning_active: value["imageScanningActive"],
        image_size: value["imageSize"],
        registry: value["registry"],
        repository: value["repository"],
        tag: value["tag"],
        updated_at: value["updatedAt"],
        uuid: value["uuid"],
        warning: value["warning"],
    };
}