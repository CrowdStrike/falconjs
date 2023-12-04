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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ModelsAPIPackagesByVulnCount
 */
export interface ModelsAPIPackagesByVulnCount {
    /**
     *
     * @type {number}
     * @memberof ModelsAPIPackagesByVulnCount
     */
    images: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPackagesByVulnCount
     */
    _package: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPackagesByVulnCount
     */
    packagesType: string;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIPackagesByVulnCount
     */
    runningImages: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPackagesByVulnCount
     */
    version: string;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIPackagesByVulnCount
     */
    vulnerabilities: number;
}

/**
 * Check if a given object implements the ModelsAPIPackagesByVulnCount interface.
 */
export function instanceOfModelsAPIPackagesByVulnCount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "images" in value;
    isInstance = isInstance && "_package" in value;
    isInstance = isInstance && "packagesType" in value;
    isInstance = isInstance && "runningImages" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "vulnerabilities" in value;

    return isInstance;
}

export function ModelsAPIPackagesByVulnCountFromJSON(json: any): ModelsAPIPackagesByVulnCount {
    return ModelsAPIPackagesByVulnCountFromJSONTyped(json, false);
}

export function ModelsAPIPackagesByVulnCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIPackagesByVulnCount {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        images: json["images"],
        _package: json["package"],
        packagesType: json["packages_type"],
        runningImages: json["running_images"],
        version: json["version"],
        vulnerabilities: json["vulnerabilities"],
    };
}

export function ModelsAPIPackagesByVulnCountToJSON(value?: ModelsAPIPackagesByVulnCount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        images: value.images,
        package: value._package,
        packages_type: value.packagesType,
        running_images: value.runningImages,
        version: value.version,
        vulnerabilities: value.vulnerabilities,
    };
}
