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
import type { ModelsDefinitionCreateRequestV2 } from "./ModelsDefinitionCreateRequestV2";
import { ModelsDefinitionCreateRequestV2FromJSON, ModelsDefinitionCreateRequestV2FromJSONTyped, ModelsDefinitionCreateRequestV2ToJSON } from "./ModelsDefinitionCreateRequestV2";

/**
 *
 * @export
 * @interface ModelsMockExecutionCreateRequestV1
 */
export interface ModelsMockExecutionCreateRequestV1 {
    /**
     *
     * @type {ModelsDefinitionCreateRequestV2}
     * @memberof ModelsMockExecutionCreateRequestV1
     */
    definition?: ModelsDefinitionCreateRequestV2;
    /**
     * Mock activity data and trigger data for non-on-demand executions, keyed by node ID, may include trigger and/or activity nodes
     * @type {string}
     * @memberof ModelsMockExecutionCreateRequestV1
     */
    mocks: string;
    /**
     * Trigger data for on-demand executions
     * @type {string}
     * @memberof ModelsMockExecutionCreateRequestV1
     */
    onDemandTrigger?: string;
}

/**
 * Check if a given object implements the ModelsMockExecutionCreateRequestV1 interface.
 */
export function instanceOfModelsMockExecutionCreateRequestV1(value: object): value is ModelsMockExecutionCreateRequestV1 {
    if (!("mocks" in value) || value["mocks"] === undefined) return false;
    return true;
}

export function ModelsMockExecutionCreateRequestV1FromJSON(json: any): ModelsMockExecutionCreateRequestV1 {
    return ModelsMockExecutionCreateRequestV1FromJSONTyped(json, false);
}

export function ModelsMockExecutionCreateRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsMockExecutionCreateRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        definition: json["definition"] == null ? undefined : ModelsDefinitionCreateRequestV2FromJSON(json["definition"]),
        mocks: json["mocks"],
        onDemandTrigger: json["on_demand_trigger"] == null ? undefined : json["on_demand_trigger"],
    };
}

export function ModelsMockExecutionCreateRequestV1ToJSON(value?: ModelsMockExecutionCreateRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        definition: ModelsDefinitionCreateRequestV2ToJSON(value["definition"]),
        mocks: value["mocks"],
        on_demand_trigger: value["onDemandTrigger"],
    };
}
