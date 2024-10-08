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
 * @interface ApiExposedDataRecordLocationV1
 */
export interface ApiExposedDataRecordLocationV1 {
    /**
     * City name
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    city?: string;
    /**
     * The country code
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    countryCode?: string;
    /**
     * Federal Administrative Region
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    federalAdminRegion?: string;
    /**
     * Federal District
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    federalDistrict?: string;
    /**
     * The postal code
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    postalCode?: string;
    /**
     * State name
     * @type {string}
     * @memberof ApiExposedDataRecordLocationV1
     */
    state?: string;
}

/**
 * Check if a given object implements the ApiExposedDataRecordLocationV1 interface.
 */
export function instanceOfApiExposedDataRecordLocationV1(value: object): value is ApiExposedDataRecordLocationV1 {
    return true;
}

export function ApiExposedDataRecordLocationV1FromJSON(json: any): ApiExposedDataRecordLocationV1 {
    return ApiExposedDataRecordLocationV1FromJSONTyped(json, false);
}

export function ApiExposedDataRecordLocationV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiExposedDataRecordLocationV1 {
    if (json == null) {
        return json;
    }
    return {
        city: json["city"] == null ? undefined : json["city"],
        countryCode: json["country_code"] == null ? undefined : json["country_code"],
        federalAdminRegion: json["federal_admin_region"] == null ? undefined : json["federal_admin_region"],
        federalDistrict: json["federal_district"] == null ? undefined : json["federal_district"],
        postalCode: json["postal_code"] == null ? undefined : json["postal_code"],
        state: json["state"] == null ? undefined : json["state"],
    };
}

export function ApiExposedDataRecordLocationV1ToJSON(value?: ApiExposedDataRecordLocationV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        city: value["city"],
        country_code: value["countryCode"],
        federal_admin_region: value["federalAdminRegion"],
        federal_district: value["federalDistrict"],
        postal_code: value["postalCode"],
        state: value["state"],
    };
}
