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
 * @interface V2Activity
 */
export interface V2Activity {
    /**
     *
     * @type {string}
     * @memberof V2Activity
     */
    _class?: string;
    /**
     *
     * @type {string}
     * @memberof V2Activity
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V2Activity
     */
    next?: Array<string>;
    /**
     *
     * @type {object}
     * @memberof V2Activity
     */
    properties: object;
}

/**
 * Check if a given object implements the V2Activity interface.
 */
export function instanceOfV2Activity(value: object): value is V2Activity {
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("properties" in value) || value["properties"] === undefined) return false;
    return true;
}

export function V2ActivityFromJSON(json: any): V2Activity {
    return V2ActivityFromJSONTyped(json, false);
}

export function V2ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Activity {
    if (json == null) {
        return json;
    }
    return {
        _class: json["class"] == null ? undefined : json["class"],
        id: json["id"],
        next: json["next"] == null ? undefined : json["next"],
        properties: json["properties"],
    };
}

export function V2ActivityToJSON(value?: V2Activity | null): any {
    if (value == null) {
        return value;
    }
    return {
        class: value["_class"],
        id: value["id"],
        next: value["next"],
        properties: value["properties"],
    };
}
