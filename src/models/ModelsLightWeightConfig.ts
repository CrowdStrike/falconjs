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
 * @interface ModelsLightWeightConfig
 */
export interface ModelsLightWeightConfig {
    /**
     *
     * @type {string}
     * @memberof ModelsLightWeightConfig
     */
    architecture: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsLightWeightConfig
     */
    cmd: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsLightWeightConfig
     */
    entryPoint: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsLightWeightConfig
     */
    env: Array<string>;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof ModelsLightWeightConfig
     */
    exposedPorts: { [key: string]: object };
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ModelsLightWeightConfig
     */
    labels: { [key: string]: string };
    /**
     *
     * @type {string}
     * @memberof ModelsLightWeightConfig
     */
    user: string;
    /**
     *
     * @type {string}
     * @memberof ModelsLightWeightConfig
     */
    workingDir: string;
}

/**
 * Check if a given object implements the ModelsLightWeightConfig interface.
 */
export function instanceOfModelsLightWeightConfig(value: object): value is ModelsLightWeightConfig {
    if (!("architecture" in value) || value["architecture"] === undefined) return false;
    if (!("cmd" in value) || value["cmd"] === undefined) return false;
    if (!("entryPoint" in value) || value["entryPoint"] === undefined) return false;
    if (!("env" in value) || value["env"] === undefined) return false;
    if (!("exposedPorts" in value) || value["exposedPorts"] === undefined) return false;
    if (!("labels" in value) || value["labels"] === undefined) return false;
    if (!("user" in value) || value["user"] === undefined) return false;
    if (!("workingDir" in value) || value["workingDir"] === undefined) return false;
    return true;
}

export function ModelsLightWeightConfigFromJSON(json: any): ModelsLightWeightConfig {
    return ModelsLightWeightConfigFromJSONTyped(json, false);
}

export function ModelsLightWeightConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsLightWeightConfig {
    if (json == null) {
        return json;
    }
    return {
        architecture: json["architecture"],
        cmd: json["cmd"],
        entryPoint: json["entry_point"],
        env: json["env"],
        exposedPorts: json["exposed_ports"],
        labels: json["labels"],
        user: json["user"],
        workingDir: json["working_dir"],
    };
}

export function ModelsLightWeightConfigToJSON(value?: ModelsLightWeightConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        architecture: value["architecture"],
        cmd: value["cmd"],
        entry_point: value["entryPoint"],
        env: value["env"],
        exposed_ports: value["exposedPorts"],
        labels: value["labels"],
        user: value["user"],
        working_dir: value["workingDir"],
    };
}
