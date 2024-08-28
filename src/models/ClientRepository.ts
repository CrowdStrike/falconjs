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
 * @interface ClientRepository
 */
export interface ClientRepository {
    /**
     *
     * @type {string}
     * @memberof ClientRepository
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ClientRepository
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ClientRepository
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof ClientRepository
     */
    spaceUsed: number;
}

/**
 * Check if a given object implements the ClientRepository interface.
 */
export function instanceOfClientRepository(value: object): value is ClientRepository {
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("spaceUsed" in value) || value["spaceUsed"] === undefined) return false;
    return true;
}

export function ClientRepositoryFromJSON(json: any): ClientRepository {
    return ClientRepositoryFromJSONTyped(json, false);
}

export function ClientRepositoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientRepository {
    if (json == null) {
        return json;
    }
    return {
        description: json["description"],
        id: json["id"],
        name: json["name"],
        spaceUsed: json["space_used"],
    };
}

export function ClientRepositoryToJSON(value?: ClientRepository | null): any {
    if (value == null) {
        return value;
    }
    return {
        description: value["description"],
        id: value["id"],
        name: value["name"],
        space_used: value["spaceUsed"],
    };
}
