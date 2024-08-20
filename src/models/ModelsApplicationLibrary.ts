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
 * @interface ModelsApplicationLibrary
 */
export interface ModelsApplicationLibrary {
    /**
     *
     * @type {string}
     * @memberof ModelsApplicationLibrary
     */
    hash?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsApplicationLibrary
     */
    layerHash?: string;
    /**
     *
     * @type {number}
     * @memberof ModelsApplicationLibrary
     */
    layerIndex?: number;
    /**
     *
     * @type {string}
     * @memberof ModelsApplicationLibrary
     */
    license?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsApplicationLibrary
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsApplicationLibrary
     */
    path?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsApplicationLibrary
     */
    version?: string;
}

/**
 * Check if a given object implements the ModelsApplicationLibrary interface.
 */
export function instanceOfModelsApplicationLibrary(value: object): value is ModelsApplicationLibrary {
    return true;
}

export function ModelsApplicationLibraryFromJSON(json: any): ModelsApplicationLibrary {
    return ModelsApplicationLibraryFromJSONTyped(json, false);
}

export function ModelsApplicationLibraryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsApplicationLibrary {
    if (json == null) {
        return json;
    }
    return {
        hash: json["Hash"] == null ? undefined : json["Hash"],
        layerHash: json["LayerHash"] == null ? undefined : json["LayerHash"],
        layerIndex: json["LayerIndex"] == null ? undefined : json["LayerIndex"],
        license: json["License"] == null ? undefined : json["License"],
        name: json["Name"] == null ? undefined : json["Name"],
        path: json["Path"] == null ? undefined : json["Path"],
        version: json["Version"] == null ? undefined : json["Version"],
    };
}

export function ModelsApplicationLibraryToJSON(value?: ModelsApplicationLibrary | null): any {
    if (value == null) {
        return value;
    }
    return {
        Hash: value["hash"],
        LayerHash: value["layerHash"],
        LayerIndex: value["layerIndex"],
        License: value["license"],
        Name: value["name"],
        Path: value["path"],
        Version: value["version"],
    };
}