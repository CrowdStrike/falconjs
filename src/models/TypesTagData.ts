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
import type { TypesTag } from "./TypesTag";
import { TypesTagFromJSON, TypesTagFromJSONTyped, TypesTagToJSON } from "./TypesTag";

/**
 *
 * @export
 * @interface TypesTagData
 */
export interface TypesTagData {
    /**
     *
     * @type {Array<string>}
     * @memberof TypesTagData
     */
    automations?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof TypesTagData
     */
    classifiers?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof TypesTagData
     */
    isDefault?: boolean;
    /**
     *
     * @type {number}
     * @memberof TypesTagData
     */
    serviceCount?: number;
    /**
     *
     * @type {TypesTag}
     * @memberof TypesTagData
     */
    tag?: TypesTag;
}

/**
 * Check if a given object implements the TypesTagData interface.
 */
export function instanceOfTypesTagData(value: object): value is TypesTagData {
    return true;
}

export function TypesTagDataFromJSON(json: any): TypesTagData {
    return TypesTagDataFromJSONTyped(json, false);
}

export function TypesTagDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesTagData {
    if (json == null) {
        return json;
    }
    return {
        automations: json["automations"] == null ? undefined : json["automations"],
        classifiers: json["classifiers"] == null ? undefined : json["classifiers"],
        isDefault: json["isDefault"] == null ? undefined : json["isDefault"],
        serviceCount: json["serviceCount"] == null ? undefined : json["serviceCount"],
        tag: json["tag"] == null ? undefined : TypesTagFromJSON(json["tag"]),
    };
}

export function TypesTagDataToJSON(value?: TypesTagData | null): any {
    if (value == null) {
        return value;
    }
    return {
        automations: value["automations"],
        classifiers: value["classifiers"],
        isDefault: value["isDefault"],
        serviceCount: value["serviceCount"],
        tag: TypesTagToJSON(value["tag"]),
    };
}
