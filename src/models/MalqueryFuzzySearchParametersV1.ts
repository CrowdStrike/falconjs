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
import type { MalqueryFuzzyOptions } from "./MalqueryFuzzyOptions";
import { MalqueryFuzzyOptionsFromJSON, MalqueryFuzzyOptionsFromJSONTyped, MalqueryFuzzyOptionsToJSON } from "./MalqueryFuzzyOptions";
import type { MalquerySearchParameter } from "./MalquerySearchParameter";
import { MalquerySearchParameterFromJSON, MalquerySearchParameterFromJSONTyped, MalquerySearchParameterToJSON } from "./MalquerySearchParameter";

/**
 *
 * @export
 * @interface MalqueryFuzzySearchParametersV1
 */
export interface MalqueryFuzzySearchParametersV1 {
    /**
     *
     * @type {MalqueryFuzzyOptions}
     * @memberof MalqueryFuzzySearchParametersV1
     */
    options?: MalqueryFuzzyOptions;
    /**
     *
     * @type {Array<MalquerySearchParameter>}
     * @memberof MalqueryFuzzySearchParametersV1
     */
    patterns: Array<MalquerySearchParameter>;
}

/**
 * Check if a given object implements the MalqueryFuzzySearchParametersV1 interface.
 */
export function instanceOfMalqueryFuzzySearchParametersV1(value: object): value is MalqueryFuzzySearchParametersV1 {
    if (!("patterns" in value) || value["patterns"] === undefined) return false;
    return true;
}

export function MalqueryFuzzySearchParametersV1FromJSON(json: any): MalqueryFuzzySearchParametersV1 {
    return MalqueryFuzzySearchParametersV1FromJSONTyped(json, false);
}

export function MalqueryFuzzySearchParametersV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): MalqueryFuzzySearchParametersV1 {
    if (json == null) {
        return json;
    }
    return {
        options: json["options"] == null ? undefined : MalqueryFuzzyOptionsFromJSON(json["options"]),
        patterns: (json["patterns"] as Array<any>).map(MalquerySearchParameterFromJSON),
    };
}

export function MalqueryFuzzySearchParametersV1ToJSON(value?: MalqueryFuzzySearchParametersV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        options: MalqueryFuzzyOptionsToJSON(value["options"]),
        patterns: (value["patterns"] as Array<any>).map(MalquerySearchParameterToJSON),
    };
}
