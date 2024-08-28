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
 * @interface FalconxSandboxParametersV1
 */
export interface FalconxSandboxParametersV1 {
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    actionScript?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    browser?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    commandLine?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    documentPassword?: string;
    /**
     *
     * @type {boolean}
     * @memberof FalconxSandboxParametersV1
     */
    enableTor?: boolean;
    /**
     *
     * @type {number}
     * @memberof FalconxSandboxParametersV1
     */
    environmentId?: number;
    /**
     *
     * @type {boolean}
     * @memberof FalconxSandboxParametersV1
     */
    interactivity?: boolean;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    networkSettings?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    sha256?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    submitName?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    systemDate?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    systemTime?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    url?: string;
}

/**
 * Check if a given object implements the FalconxSandboxParametersV1 interface.
 */
export function instanceOfFalconxSandboxParametersV1(value: object): value is FalconxSandboxParametersV1 {
    return true;
}

export function FalconxSandboxParametersV1FromJSON(json: any): FalconxSandboxParametersV1 {
    return FalconxSandboxParametersV1FromJSONTyped(json, false);
}

export function FalconxSandboxParametersV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSandboxParametersV1 {
    if (json == null) {
        return json;
    }
    return {
        actionScript: json["action_script"] == null ? undefined : json["action_script"],
        browser: json["browser"] == null ? undefined : json["browser"],
        commandLine: json["command_line"] == null ? undefined : json["command_line"],
        documentPassword: json["document_password"] == null ? undefined : json["document_password"],
        enableTor: json["enable_tor"] == null ? undefined : json["enable_tor"],
        environmentId: json["environment_id"] == null ? undefined : json["environment_id"],
        interactivity: json["interactivity"] == null ? undefined : json["interactivity"],
        networkSettings: json["network_settings"] == null ? undefined : json["network_settings"],
        sha256: json["sha256"] == null ? undefined : json["sha256"],
        submitName: json["submit_name"] == null ? undefined : json["submit_name"],
        systemDate: json["system_date"] == null ? undefined : json["system_date"],
        systemTime: json["system_time"] == null ? undefined : json["system_time"],
        url: json["url"] == null ? undefined : json["url"],
    };
}

export function FalconxSandboxParametersV1ToJSON(value?: FalconxSandboxParametersV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        action_script: value["actionScript"],
        browser: value["browser"],
        command_line: value["commandLine"],
        document_password: value["documentPassword"],
        enable_tor: value["enableTor"],
        environment_id: value["environmentId"],
        interactivity: value["interactivity"],
        network_settings: value["networkSettings"],
        sha256: value["sha256"],
        submit_name: value["submitName"],
        system_date: value["systemDate"],
        system_time: value["systemTime"],
        url: value["url"],
    };
}
