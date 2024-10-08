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
import type { DomainMetaInfo } from "./DomainMetaInfo";
import { DomainMetaInfoFromJSON, DomainMetaInfoFromJSONTyped, DomainMetaInfoToJSON } from "./DomainMetaInfo";
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { DomainAPIEvaluationLogicV1 } from "./DomainAPIEvaluationLogicV1";
import { DomainAPIEvaluationLogicV1FromJSON, DomainAPIEvaluationLogicV1FromJSONTyped, DomainAPIEvaluationLogicV1ToJSON } from "./DomainAPIEvaluationLogicV1";

/**
 *
 * @export
 * @interface DomainSPAPIEvaluationLogicEntitiesResponseV1
 */
export interface DomainSPAPIEvaluationLogicEntitiesResponseV1 {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof DomainSPAPIEvaluationLogicEntitiesResponseV1
     */
    errors?: Array<MsaAPIError>;
    /**
     *
     * @type {DomainMetaInfo}
     * @memberof DomainSPAPIEvaluationLogicEntitiesResponseV1
     */
    meta: DomainMetaInfo;
    /**
     *
     * @type {Array<DomainAPIEvaluationLogicV1>}
     * @memberof DomainSPAPIEvaluationLogicEntitiesResponseV1
     */
    resources: Array<DomainAPIEvaluationLogicV1>;
}

/**
 * Check if a given object implements the DomainSPAPIEvaluationLogicEntitiesResponseV1 interface.
 */
export function instanceOfDomainSPAPIEvaluationLogicEntitiesResponseV1(value: object): value is DomainSPAPIEvaluationLogicEntitiesResponseV1 {
    if (!("meta" in value) || value["meta"] === undefined) return false;
    if (!("resources" in value) || value["resources"] === undefined) return false;
    return true;
}

export function DomainSPAPIEvaluationLogicEntitiesResponseV1FromJSON(json: any): DomainSPAPIEvaluationLogicEntitiesResponseV1 {
    return DomainSPAPIEvaluationLogicEntitiesResponseV1FromJSONTyped(json, false);
}

export function DomainSPAPIEvaluationLogicEntitiesResponseV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSPAPIEvaluationLogicEntitiesResponseV1 {
    if (json == null) {
        return json;
    }
    return {
        errors: json["errors"] == null ? undefined : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: DomainMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(DomainAPIEvaluationLogicV1FromJSON),
    };
}

export function DomainSPAPIEvaluationLogicEntitiesResponseV1ToJSON(value?: DomainSPAPIEvaluationLogicEntitiesResponseV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        errors: value["errors"] == null ? undefined : (value["errors"] as Array<any>).map(MsaAPIErrorToJSON),
        meta: DomainMetaInfoToJSON(value["meta"]),
        resources: (value["resources"] as Array<any>).map(DomainAPIEvaluationLogicV1ToJSON),
    };
}
