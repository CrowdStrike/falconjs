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
 * @interface ModelsRuleWithNonCompliantAssets
 */
export interface ModelsRuleWithNonCompliantAssets {
    /**
     *
     * @type {number}
     * @memberof ModelsRuleWithNonCompliantAssets
     */
    assetCount: number;
    /**
     *
     * @type {string}
     * @memberof ModelsRuleWithNonCompliantAssets
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ModelsRuleWithNonCompliantAssets
     */
    recommendationId: string;
    /**
     *
     * @type {number}
     * @memberof ModelsRuleWithNonCompliantAssets
     */
    severity: number;
}

/**
 * Check if a given object implements the ModelsRuleWithNonCompliantAssets interface.
 */
export function instanceOfModelsRuleWithNonCompliantAssets(value: object): value is ModelsRuleWithNonCompliantAssets {
    if (!("assetCount" in value) || value["assetCount"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("recommendationId" in value) || value["recommendationId"] === undefined) return false;
    if (!("severity" in value) || value["severity"] === undefined) return false;
    return true;
}

export function ModelsRuleWithNonCompliantAssetsFromJSON(json: any): ModelsRuleWithNonCompliantAssets {
    return ModelsRuleWithNonCompliantAssetsFromJSONTyped(json, false);
}

export function ModelsRuleWithNonCompliantAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsRuleWithNonCompliantAssets {
    if (json == null) {
        return json;
    }
    return {
        assetCount: json["asset_count"],
        name: json["name"],
        recommendationId: json["recommendation_id"],
        severity: json["severity"],
    };
}

export function ModelsRuleWithNonCompliantAssetsToJSON(value?: ModelsRuleWithNonCompliantAssets | null): any {
    if (value == null) {
        return value;
    }
    return {
        asset_count: value["assetCount"],
        name: value["name"],
        recommendation_id: value["recommendationId"],
        severity: value["severity"],
    };
}
