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
 * @interface DomainBotnetInject
 */
export interface DomainBotnetInject {
    /**
     * The injected data. Populated for inject botnets
     * @type {string}
     * @memberof DomainBotnetInject
     */
    inject: string;
    /**
     * The targeted pattern of data. Populated for inject botnets
     * @type {string}
     * @memberof DomainBotnetInject
     */
    pattern: string;
}

/**
 * Check if a given object implements the DomainBotnetInject interface.
 */
export function instanceOfDomainBotnetInject(value: object): value is DomainBotnetInject {
    if (!("inject" in value) || value["inject"] === undefined) return false;
    if (!("pattern" in value) || value["pattern"] === undefined) return false;
    return true;
}

export function DomainBotnetInjectFromJSON(json: any): DomainBotnetInject {
    return DomainBotnetInjectFromJSONTyped(json, false);
}

export function DomainBotnetInjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBotnetInject {
    if (json == null) {
        return json;
    }
    return {
        inject: json["inject"],
        pattern: json["pattern"],
    };
}

export function DomainBotnetInjectToJSON(value?: DomainBotnetInject | null): any {
    if (value == null) {
        return value;
    }
    return {
        inject: value["inject"],
        pattern: value["pattern"],
    };
}
