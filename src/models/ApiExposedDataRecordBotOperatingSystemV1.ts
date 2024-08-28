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
 * @interface ApiExposedDataRecordBotOperatingSystemV1
 */
export interface ApiExposedDataRecordBotOperatingSystemV1 {
    /**
     *
     * @type {Array<string>}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    antivirus?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    computerName?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    domain?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    hardwareId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    installedSoftware?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    language?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    layouts?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    osArchitecture?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    osVersion?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    timezone?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    uac?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    username?: string;
}

/**
 * Check if a given object implements the ApiExposedDataRecordBotOperatingSystemV1 interface.
 */
export function instanceOfApiExposedDataRecordBotOperatingSystemV1(value: object): value is ApiExposedDataRecordBotOperatingSystemV1 {
    return true;
}

export function ApiExposedDataRecordBotOperatingSystemV1FromJSON(json: any): ApiExposedDataRecordBotOperatingSystemV1 {
    return ApiExposedDataRecordBotOperatingSystemV1FromJSONTyped(json, false);
}

export function ApiExposedDataRecordBotOperatingSystemV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiExposedDataRecordBotOperatingSystemV1 {
    if (json == null) {
        return json;
    }
    return {
        antivirus: json["antivirus"] == null ? undefined : json["antivirus"],
        computerName: json["computer_name"] == null ? undefined : json["computer_name"],
        domain: json["domain"] == null ? undefined : json["domain"],
        hardwareId: json["hardware_id"] == null ? undefined : json["hardware_id"],
        installedSoftware: json["installed_software"] == null ? undefined : json["installed_software"],
        language: json["language"] == null ? undefined : json["language"],
        layouts: json["layouts"] == null ? undefined : json["layouts"],
        osArchitecture: json["os_architecture"] == null ? undefined : json["os_architecture"],
        osVersion: json["os_version"] == null ? undefined : json["os_version"],
        timezone: json["timezone"] == null ? undefined : json["timezone"],
        uac: json["uac"] == null ? undefined : json["uac"],
        username: json["username"] == null ? undefined : json["username"],
    };
}

export function ApiExposedDataRecordBotOperatingSystemV1ToJSON(value?: ApiExposedDataRecordBotOperatingSystemV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        antivirus: value["antivirus"],
        computer_name: value["computerName"],
        domain: value["domain"],
        hardware_id: value["hardwareId"],
        installed_software: value["installedSoftware"],
        language: value["language"],
        layouts: value["layouts"],
        os_architecture: value["osArchitecture"],
        os_version: value["osVersion"],
        timezone: value["timezone"],
        uac: value["uac"],
        username: value["username"],
    };
}
