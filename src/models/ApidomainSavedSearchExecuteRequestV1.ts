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
import type { ClientExtraIn } from "./ClientExtraIn";
import { ClientExtraInFromJSON, ClientExtraInFromJSONTyped, ClientExtraInToJSON } from "./ClientExtraIn";
import type { ClientExtraSort } from "./ClientExtraSort";
import { ClientExtraSortFromJSON, ClientExtraSortFromJSONTyped, ClientExtraSortToJSON } from "./ClientExtraSort";
import type { ClientExtraLimit } from "./ClientExtraLimit";
import { ClientExtraLimitFromJSON, ClientExtraLimitFromJSONTyped, ClientExtraLimitToJSON } from "./ClientExtraLimit";
import type { ClientFQLStatement } from "./ClientFQLStatement";
import { ClientFQLStatementFromJSON, ClientFQLStatementFromJSONTyped, ClientFQLStatementToJSON } from "./ClientFQLStatement";
import type { ClientExtraRename } from "./ClientExtraRename";
import { ClientExtraRenameFromJSON, ClientExtraRenameFromJSONTyped, ClientExtraRenameToJSON } from "./ClientExtraRename";

/**
 *
 * @export
 * @interface ApidomainSavedSearchExecuteRequestV1
 */
export interface ApidomainSavedSearchExecuteRequestV1 {
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    extraRename: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    extraSearch: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    extraSort: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    extraWhere: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    parameters: { [key: string]: string };
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    end?: string;
    /**
     *
     * @type {{ [key: string]: ClientFQLStatement; }}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    fqlStatements: { [key: string]: ClientFQLStatement };
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    mode?: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    start?: string;
    /**
     *
     * @type {string}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    version?: string;
    /**
     *
     * @type {ClientExtraIn}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    withIn?: ClientExtraIn;
    /**
     *
     * @type {ClientExtraLimit}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    withLimit?: ClientExtraLimit;
    /**
     *
     * @type {Array<ClientExtraRename>}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    withRenames?: Array<ClientExtraRename>;
    /**
     *
     * @type {ClientExtraSort}
     * @memberof ApidomainSavedSearchExecuteRequestV1
     */
    withSort?: ClientExtraSort;
}

/**
 * Check if a given object implements the ApidomainSavedSearchExecuteRequestV1 interface.
 */
export function instanceOfApidomainSavedSearchExecuteRequestV1(value: object): value is ApidomainSavedSearchExecuteRequestV1 {
    if (!("extraRename" in value) || value["extraRename"] === undefined) return false;
    if (!("extraSearch" in value) || value["extraSearch"] === undefined) return false;
    if (!("extraSort" in value) || value["extraSort"] === undefined) return false;
    if (!("extraWhere" in value) || value["extraWhere"] === undefined) return false;
    if (!("parameters" in value) || value["parameters"] === undefined) return false;
    if (!("fqlStatements" in value) || value["fqlStatements"] === undefined) return false;
    return true;
}

export function ApidomainSavedSearchExecuteRequestV1FromJSON(json: any): ApidomainSavedSearchExecuteRequestV1 {
    return ApidomainSavedSearchExecuteRequestV1FromJSONTyped(json, false);
}

export function ApidomainSavedSearchExecuteRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApidomainSavedSearchExecuteRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        extraRename: json["ExtraRename"],
        extraSearch: json["ExtraSearch"],
        extraSort: json["ExtraSort"],
        extraWhere: json["ExtraWhere"],
        parameters: json["Parameters"],
        end: json["end"] == null ? undefined : json["end"],
        fqlStatements: mapValues(json["fql_statements"], ClientFQLStatementFromJSON),
        id: json["id"] == null ? undefined : json["id"],
        mode: json["mode"] == null ? undefined : json["mode"],
        name: json["name"] == null ? undefined : json["name"],
        start: json["start"] == null ? undefined : json["start"],
        version: json["version"] == null ? undefined : json["version"],
        withIn: json["with_in"] == null ? undefined : ClientExtraInFromJSON(json["with_in"]),
        withLimit: json["with_limit"] == null ? undefined : ClientExtraLimitFromJSON(json["with_limit"]),
        withRenames: json["with_renames"] == null ? undefined : (json["with_renames"] as Array<any>).map(ClientExtraRenameFromJSON),
        withSort: json["with_sort"] == null ? undefined : ClientExtraSortFromJSON(json["with_sort"]),
    };
}

export function ApidomainSavedSearchExecuteRequestV1ToJSON(value?: ApidomainSavedSearchExecuteRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        ExtraRename: value["extraRename"],
        ExtraSearch: value["extraSearch"],
        ExtraSort: value["extraSort"],
        ExtraWhere: value["extraWhere"],
        Parameters: value["parameters"],
        end: value["end"],
        fql_statements: mapValues(value["fqlStatements"], ClientFQLStatementToJSON),
        id: value["id"],
        mode: value["mode"],
        name: value["name"],
        start: value["start"],
        version: value["version"],
        with_in: ClientExtraInToJSON(value["withIn"]),
        with_limit: ClientExtraLimitToJSON(value["withLimit"]),
        with_renames: value["withRenames"] == null ? undefined : (value["withRenames"] as Array<any>).map(ClientExtraRenameToJSON),
        with_sort: ClientExtraSortToJSON(value["withSort"]),
    };
}
