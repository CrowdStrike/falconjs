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
 * @interface TypesFramework
 */
export interface TypesFramework {
    /**
     *
     * @type {Array<string>}
     * @memberof TypesFramework
     */
    accessingElements?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof TypesFramework
     */
    domain?: string;
    /**
     *
     * @type {number}
     * @memberof TypesFramework
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof TypesFramework
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof TypesFramework
     */
    version?: string;
}

/**
 * Check if a given object implements the TypesFramework interface.
 */
export function instanceOfTypesFramework(value: object): value is TypesFramework {
    return true;
}

export function TypesFrameworkFromJSON(json: any): TypesFramework {
    return TypesFrameworkFromJSONTyped(json, false);
}

export function TypesFrameworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesFramework {
    if (json == null) {
        return json;
    }
    return {
        accessingElements: json["accessingElements"] == null ? undefined : json["accessingElements"],
        domain: json["domain"] == null ? undefined : json["domain"],
        id: json["id"] == null ? undefined : json["id"],
        name: json["name"] == null ? undefined : json["name"],
        version: json["version"] == null ? undefined : json["version"],
    };
}

export function TypesFrameworkToJSON(value?: TypesFramework | null): any {
    if (value == null) {
        return value;
    }
    return {
        accessingElements: value["accessingElements"],
        domain: value["domain"],
        id: value["id"],
        name: value["name"],
        version: value["version"],
    };
}
