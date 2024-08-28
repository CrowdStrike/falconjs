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
 * @interface FalconxSuricataAlert
 */
export interface FalconxSuricataAlert {
    /**
     *
     * @type {string}
     * @memberof FalconxSuricataAlert
     */
    category?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSuricataAlert
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSuricataAlert
     */
    destinationIp?: string;
    /**
     *
     * @type {number}
     * @memberof FalconxSuricataAlert
     */
    destinationPort?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxSuricataAlert
     */
    protocol?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSuricataAlert
     */
    sid?: string;
}

/**
 * Check if a given object implements the FalconxSuricataAlert interface.
 */
export function instanceOfFalconxSuricataAlert(value: object): value is FalconxSuricataAlert {
    return true;
}

export function FalconxSuricataAlertFromJSON(json: any): FalconxSuricataAlert {
    return FalconxSuricataAlertFromJSONTyped(json, false);
}

export function FalconxSuricataAlertFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSuricataAlert {
    if (json == null) {
        return json;
    }
    return {
        category: json["category"] == null ? undefined : json["category"],
        description: json["description"] == null ? undefined : json["description"],
        destinationIp: json["destination_ip"] == null ? undefined : json["destination_ip"],
        destinationPort: json["destination_port"] == null ? undefined : json["destination_port"],
        protocol: json["protocol"] == null ? undefined : json["protocol"],
        sid: json["sid"] == null ? undefined : json["sid"],
    };
}

export function FalconxSuricataAlertToJSON(value?: FalconxSuricataAlert | null): any {
    if (value == null) {
        return value;
    }
    return {
        category: value["category"],
        description: value["description"],
        destination_ip: value["destinationIp"],
        destination_port: value["destinationPort"],
        protocol: value["protocol"],
        sid: value["sid"],
    };
}
