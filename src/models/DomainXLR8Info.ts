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
 * @interface DomainXLR8Info
 */
export interface DomainXLR8Info {
    /**
     *
     * @type {string}
     * @memberof DomainXLR8Info
     */
    assetCriticality: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainXLR8Info
     */
    internetExposed: boolean;
    /**
     *
     * @type {number}
     * @memberof DomainXLR8Info
     */
    riskScore: number;
    /**
     *
     * @type {string}
     * @memberof DomainXLR8Info
     */
    riskScoreString: string;
}

/**
 * Check if a given object implements the DomainXLR8Info interface.
 */
export function instanceOfDomainXLR8Info(value: object): value is DomainXLR8Info {
    if (!("assetCriticality" in value) || value["assetCriticality"] === undefined) return false;
    if (!("internetExposed" in value) || value["internetExposed"] === undefined) return false;
    if (!("riskScore" in value) || value["riskScore"] === undefined) return false;
    if (!("riskScoreString" in value) || value["riskScoreString"] === undefined) return false;
    return true;
}

export function DomainXLR8InfoFromJSON(json: any): DomainXLR8Info {
    return DomainXLR8InfoFromJSONTyped(json, false);
}

export function DomainXLR8InfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainXLR8Info {
    if (json == null) {
        return json;
    }
    return {
        assetCriticality: json["asset_criticality"],
        internetExposed: json["internet_exposed"],
        riskScore: json["risk_score"],
        riskScoreString: json["risk_score_string"],
    };
}

export function DomainXLR8InfoToJSON(value?: DomainXLR8Info | null): any {
    if (value == null) {
        return value;
    }
    return {
        asset_criticality: value["assetCriticality"],
        internet_exposed: value["internetExposed"],
        risk_score: value["riskScore"],
        risk_score_string: value["riskScoreString"],
    };
}
