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
import type { ChangesHostGroup } from "./ChangesHostGroup";
import { ChangesHostGroupFromJSON, ChangesHostGroupFromJSONTyped, ChangesHostGroupToJSON } from "./ChangesHostGroup";

/**
 *
 * @export
 * @interface ChangesHost
 */
export interface ChangesHost {
    /**
     *
     * @type {string}
     * @memberof ChangesHost
     */
    agentVersion?: string;
    /**
     *
     * @type {string}
     * @memberof ChangesHost
     */
    containmentStatus?: string;
    /**
     *
     * @type {string}
     * @memberof ChangesHost
     */
    externalIp?: string;
    /**
     *
     * @type {Array<ChangesHostGroup>}
     * @memberof ChangesHost
     */
    groups?: Array<ChangesHostGroup>;
    /**
     *
     * @type {string}
     * @memberof ChangesHost
     */
    localIp?: string;
    /**
     *
     * @type {string}
     * @memberof ChangesHost
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ChangesHost
     */
    osVersion?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ChangesHost
     */
    tags?: Array<string>;
}

/**
 * Check if a given object implements the ChangesHost interface.
 */
export function instanceOfChangesHost(value: object): value is ChangesHost {
    return true;
}

export function ChangesHostFromJSON(json: any): ChangesHost {
    return ChangesHostFromJSONTyped(json, false);
}

export function ChangesHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesHost {
    if (json == null) {
        return json;
    }
    return {
        agentVersion: json["agent_version"] == null ? undefined : json["agent_version"],
        containmentStatus: json["containment_status"] == null ? undefined : json["containment_status"],
        externalIp: json["external_ip"] == null ? undefined : json["external_ip"],
        groups: json["groups"] == null ? undefined : (json["groups"] as Array<any>).map(ChangesHostGroupFromJSON),
        localIp: json["local_ip"] == null ? undefined : json["local_ip"],
        name: json["name"] == null ? undefined : json["name"],
        osVersion: json["os_version"] == null ? undefined : json["os_version"],
        tags: json["tags"] == null ? undefined : json["tags"],
    };
}

export function ChangesHostToJSON(value?: ChangesHost | null): any {
    if (value == null) {
        return value;
    }
    return {
        agent_version: value["agentVersion"],
        containment_status: value["containmentStatus"],
        external_ip: value["externalIp"],
        groups: value["groups"] == null ? undefined : (value["groups"] as Array<any>).map(ChangesHostGroupToJSON),
        local_ip: value["localIp"],
        name: value["name"],
        os_version: value["osVersion"],
        tags: value["tags"],
    };
}
