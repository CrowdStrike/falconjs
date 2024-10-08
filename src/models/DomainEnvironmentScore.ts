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
 * @interface DomainEnvironmentScore
 */
export interface DomainEnvironmentScore {
    /**
     *
     * @type {number}
     * @memberof DomainEnvironmentScore
     */
    adjustedScore: number;
    /**
     *
     * @type {string}
     * @memberof DomainEnvironmentScore
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof DomainEnvironmentScore
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof DomainEnvironmentScore
     */
    score: number;
    /**
     *
     * @type {Date}
     * @memberof DomainEnvironmentScore
     */
    timestamp: Date;
}

/**
 * Check if a given object implements the DomainEnvironmentScore interface.
 */
export function instanceOfDomainEnvironmentScore(value: object): value is DomainEnvironmentScore {
    if (!("adjustedScore" in value) || value["adjustedScore"] === undefined) return false;
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("score" in value) || value["score"] === undefined) return false;
    if (!("timestamp" in value) || value["timestamp"] === undefined) return false;
    return true;
}

export function DomainEnvironmentScoreFromJSON(json: any): DomainEnvironmentScore {
    return DomainEnvironmentScoreFromJSONTyped(json, false);
}

export function DomainEnvironmentScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainEnvironmentScore {
    if (json == null) {
        return json;
    }
    return {
        adjustedScore: json["adjusted_score"],
        cid: json["cid"],
        id: json["id"] == null ? undefined : json["id"],
        score: json["score"],
        timestamp: new Date(json["timestamp"]),
    };
}

export function DomainEnvironmentScoreToJSON(value?: DomainEnvironmentScore | null): any {
    if (value == null) {
        return value;
    }
    return {
        adjusted_score: value["adjustedScore"],
        cid: value["cid"],
        id: value["id"],
        score: value["score"],
        timestamp: value["timestamp"].toISOString(),
    };
}
