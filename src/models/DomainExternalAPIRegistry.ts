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
import type { DomainExternalCredentialResponse } from "./DomainExternalCredentialResponse";
import { DomainExternalCredentialResponseFromJSON, DomainExternalCredentialResponseFromJSONTyped, DomainExternalCredentialResponseToJSON } from "./DomainExternalCredentialResponse";

/**
 *
 * @export
 * @interface DomainExternalAPIRegistry
 */
export interface DomainExternalAPIRegistry {
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    createdAt: string;
    /**
     *
     * @type {DomainExternalCredentialResponse}
     * @memberof DomainExternalAPIRegistry
     */
    credential?: DomainExternalCredentialResponse;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    lastRefreshedAt: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    nextRefreshAt: string;
    /**
     *
     * @type {number}
     * @memberof DomainExternalAPIRegistry
     */
    refreshInterval: number;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    state: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    stateChangedAt: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    updatedAt: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    urlUniquenessAlias: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAPIRegistry
     */
    userDefinedAlias: string;
}

/**
 * Check if a given object implements the DomainExternalAPIRegistry interface.
 */
export function instanceOfDomainExternalAPIRegistry(value: object): value is DomainExternalAPIRegistry {
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("lastRefreshedAt" in value) || value["lastRefreshedAt"] === undefined) return false;
    if (!("nextRefreshAt" in value) || value["nextRefreshAt"] === undefined) return false;
    if (!("refreshInterval" in value) || value["refreshInterval"] === undefined) return false;
    if (!("state" in value) || value["state"] === undefined) return false;
    if (!("stateChangedAt" in value) || value["stateChangedAt"] === undefined) return false;
    if (!("type" in value) || value["type"] === undefined) return false;
    if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
    if (!("url" in value) || value["url"] === undefined) return false;
    if (!("urlUniquenessAlias" in value) || value["urlUniquenessAlias"] === undefined) return false;
    if (!("userDefinedAlias" in value) || value["userDefinedAlias"] === undefined) return false;
    return true;
}

export function DomainExternalAPIRegistryFromJSON(json: any): DomainExternalAPIRegistry {
    return DomainExternalAPIRegistryFromJSONTyped(json, false);
}

export function DomainExternalAPIRegistryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExternalAPIRegistry {
    if (json == null) {
        return json;
    }
    return {
        createdAt: json["created_at"],
        credential: json["credential"] == null ? undefined : DomainExternalCredentialResponseFromJSON(json["credential"]),
        id: json["id"],
        lastRefreshedAt: json["last_refreshed_at"],
        nextRefreshAt: json["next_refresh_at"],
        refreshInterval: json["refresh_interval"],
        state: json["state"],
        stateChangedAt: json["state_changed_at"],
        type: json["type"],
        updatedAt: json["updated_at"],
        url: json["url"],
        urlUniquenessAlias: json["url_uniqueness_alias"],
        userDefinedAlias: json["user_defined_alias"],
    };
}

export function DomainExternalAPIRegistryToJSON(value?: DomainExternalAPIRegistry | null): any {
    if (value == null) {
        return value;
    }
    return {
        created_at: value["createdAt"],
        credential: DomainExternalCredentialResponseToJSON(value["credential"]),
        id: value["id"],
        last_refreshed_at: value["lastRefreshedAt"],
        next_refresh_at: value["nextRefreshAt"],
        refresh_interval: value["refreshInterval"],
        state: value["state"],
        state_changed_at: value["stateChangedAt"],
        type: value["type"],
        updated_at: value["updatedAt"],
        url: value["url"],
        url_uniqueness_alias: value["urlUniquenessAlias"],
        user_defined_alias: value["userDefinedAlias"],
    };
}
