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
 * @interface DomainDiscoverAPIBiosHashesData
 */
export interface DomainDiscoverAPIBiosHashesData {
    /**
     * The measurement type of the associated sha256 hash
     * @type {number}
     * @memberof DomainDiscoverAPIBiosHashesData
     */
    measurementType?: number;
    /**
     * The sha256 hash from the firmware image
     * @type {string}
     * @memberof DomainDiscoverAPIBiosHashesData
     */
    sha256Hash?: string;
}

/**
 * Check if a given object implements the DomainDiscoverAPIBiosHashesData interface.
 */
export function instanceOfDomainDiscoverAPIBiosHashesData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DomainDiscoverAPIBiosHashesDataFromJSON(json: any): DomainDiscoverAPIBiosHashesData {
    return DomainDiscoverAPIBiosHashesDataFromJSONTyped(json, false);
}

export function DomainDiscoverAPIBiosHashesDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPIBiosHashesData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        measurementType: !exists(json, "measurement_type") ? undefined : json["measurement_type"],
        sha256Hash: !exists(json, "sha256_hash") ? undefined : json["sha256_hash"],
    };
}

export function DomainDiscoverAPIBiosHashesDataToJSON(value?: DomainDiscoverAPIBiosHashesData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        measurement_type: value.measurementType,
        sha256_hash: value.sha256Hash,
    };
}
