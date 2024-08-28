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
import type { DomainAPIEntityMatchedV1 } from "./DomainAPIEntityMatchedV1";
import { DomainAPIEntityMatchedV1FromJSON, DomainAPIEntityMatchedV1FromJSONTyped, DomainAPIEntityMatchedV1ToJSON } from "./DomainAPIEntityMatchedV1";

/**
 *
 * @export
 * @interface DomainAPIEvaluationLogicHostInfoV1
 */
export interface DomainAPIEvaluationLogicHostInfoV1 {
    /**
     * Refers to all the entities that were matched together during entity resolution process
     * @type {Array<DomainAPIEntityMatchedV1>}
     * @memberof DomainAPIEvaluationLogicHostInfoV1
     */
    entitiesMatched: Array<DomainAPIEntityMatchedV1>;
}

/**
 * Check if a given object implements the DomainAPIEvaluationLogicHostInfoV1 interface.
 */
export function instanceOfDomainAPIEvaluationLogicHostInfoV1(value: object): value is DomainAPIEvaluationLogicHostInfoV1 {
    if (!("entitiesMatched" in value) || value["entitiesMatched"] === undefined) return false;
    return true;
}

export function DomainAPIEvaluationLogicHostInfoV1FromJSON(json: any): DomainAPIEvaluationLogicHostInfoV1 {
    return DomainAPIEvaluationLogicHostInfoV1FromJSONTyped(json, false);
}

export function DomainAPIEvaluationLogicHostInfoV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIEvaluationLogicHostInfoV1 {
    if (json == null) {
        return json;
    }
    return {
        entitiesMatched: (json["entities_matched"] as Array<any>).map(DomainAPIEntityMatchedV1FromJSON),
    };
}

export function DomainAPIEvaluationLogicHostInfoV1ToJSON(value?: DomainAPIEvaluationLogicHostInfoV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        entities_matched: (value["entitiesMatched"] as Array<any>).map(DomainAPIEntityMatchedV1ToJSON),
    };
}
