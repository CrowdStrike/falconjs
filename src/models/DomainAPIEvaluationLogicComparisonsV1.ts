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
import type { DomainAPIEvaluationLogicStateComparisonV1 } from "./DomainAPIEvaluationLogicStateComparisonV1";
import {
    DomainAPIEvaluationLogicStateComparisonV1FromJSON,
    DomainAPIEvaluationLogicStateComparisonV1FromJSONTyped,
    DomainAPIEvaluationLogicStateComparisonV1ToJSON,
} from "./DomainAPIEvaluationLogicStateComparisonV1";

/**
 *
 * @export
 * @interface DomainAPIEvaluationLogicComparisonsV1
 */
export interface DomainAPIEvaluationLogicComparisonsV1 {
    /**
     *
     * @type {Array<DomainAPIEvaluationLogicStateComparisonV1>}
     * @memberof DomainAPIEvaluationLogicComparisonsV1
     */
    stateComparisons: Array<DomainAPIEvaluationLogicStateComparisonV1>;
    /**
     *
     * @type {string}
     * @memberof DomainAPIEvaluationLogicComparisonsV1
     */
    stateOperator: string;
}

/**
 * Check if a given object implements the DomainAPIEvaluationLogicComparisonsV1 interface.
 */
export function instanceOfDomainAPIEvaluationLogicComparisonsV1(value: object): value is DomainAPIEvaluationLogicComparisonsV1 {
    if (!("stateComparisons" in value) || value["stateComparisons"] === undefined) return false;
    if (!("stateOperator" in value) || value["stateOperator"] === undefined) return false;
    return true;
}

export function DomainAPIEvaluationLogicComparisonsV1FromJSON(json: any): DomainAPIEvaluationLogicComparisonsV1 {
    return DomainAPIEvaluationLogicComparisonsV1FromJSONTyped(json, false);
}

export function DomainAPIEvaluationLogicComparisonsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIEvaluationLogicComparisonsV1 {
    if (json == null) {
        return json;
    }
    return {
        stateComparisons: (json["state_comparisons"] as Array<any>).map(DomainAPIEvaluationLogicStateComparisonV1FromJSON),
        stateOperator: json["state_operator"],
    };
}

export function DomainAPIEvaluationLogicComparisonsV1ToJSON(value?: DomainAPIEvaluationLogicComparisonsV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        state_comparisons: (value["stateComparisons"] as Array<any>).map(DomainAPIEvaluationLogicStateComparisonV1ToJSON),
        state_operator: value["stateOperator"],
    };
}
