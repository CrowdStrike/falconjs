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
import type { TypesResultsFilter } from "./TypesResultsFilter";
import { TypesResultsFilterFromJSON, TypesResultsFilterFromJSONTyped, TypesResultsFilterToJSON } from "./TypesResultsFilter";

/**
 *
 * @export
 * @interface TypesGenericUserFacingRequest
 */
export interface TypesGenericUserFacingRequest {
    /**
     *
     * @type {TypesResultsFilter}
     * @memberof TypesGenericUserFacingRequest
     */
    filter?: TypesResultsFilter;
    /**
     *
     * @type {number}
     * @memberof TypesGenericUserFacingRequest
     */
    optionalTime?: number;
    /**
     *
     * @type {number}
     * @memberof TypesGenericUserFacingRequest
     */
    revisionId?: number;
}

/**
 * Check if a given object implements the TypesGenericUserFacingRequest interface.
 */
export function instanceOfTypesGenericUserFacingRequest(value: object): value is TypesGenericUserFacingRequest {
    return true;
}

export function TypesGenericUserFacingRequestFromJSON(json: any): TypesGenericUserFacingRequest {
    return TypesGenericUserFacingRequestFromJSONTyped(json, false);
}

export function TypesGenericUserFacingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesGenericUserFacingRequest {
    if (json == null) {
        return json;
    }
    return {
        filter: json["filter"] == null ? undefined : TypesResultsFilterFromJSON(json["filter"]),
        optionalTime: json["optionalTime"] == null ? undefined : json["optionalTime"],
        revisionId: json["revisionId"] == null ? undefined : json["revisionId"],
    };
}

export function TypesGenericUserFacingRequestToJSON(value?: TypesGenericUserFacingRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        filter: TypesResultsFilterToJSON(value["filter"]),
        optionalTime: value["optionalTime"],
        revisionId: value["revisionId"],
    };
}