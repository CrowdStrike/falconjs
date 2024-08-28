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
import type { ClientExtractionFileParametersV1 } from "./ClientExtractionFileParametersV1";
import { ClientExtractionFileParametersV1FromJSON, ClientExtractionFileParametersV1FromJSONTyped, ClientExtractionFileParametersV1ToJSON } from "./ClientExtractionFileParametersV1";

/**
 *
 * @export
 * @interface ClientExtractionCreateRequestV1
 */
export interface ClientExtractionCreateRequestV1 {
    /**
     *
     * @type {boolean}
     * @memberof ClientExtractionCreateRequestV1
     */
    extractAll?: boolean;
    /**
     *
     * @type {Array<ClientExtractionFileParametersV1>}
     * @memberof ClientExtractionCreateRequestV1
     */
    files?: Array<ClientExtractionFileParametersV1>;
    /**
     *
     * @type {string}
     * @memberof ClientExtractionCreateRequestV1
     */
    sha256?: string;
}

/**
 * Check if a given object implements the ClientExtractionCreateRequestV1 interface.
 */
export function instanceOfClientExtractionCreateRequestV1(value: object): value is ClientExtractionCreateRequestV1 {
    return true;
}

export function ClientExtractionCreateRequestV1FromJSON(json: any): ClientExtractionCreateRequestV1 {
    return ClientExtractionCreateRequestV1FromJSONTyped(json, false);
}

export function ClientExtractionCreateRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientExtractionCreateRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        extractAll: json["extract_all"] == null ? undefined : json["extract_all"],
        files: json["files"] == null ? undefined : (json["files"] as Array<any>).map(ClientExtractionFileParametersV1FromJSON),
        sha256: json["sha256"] == null ? undefined : json["sha256"],
    };
}

export function ClientExtractionCreateRequestV1ToJSON(value?: ClientExtractionCreateRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        extract_all: value["extractAll"],
        files: value["files"] == null ? undefined : (value["files"] as Array<any>).map(ClientExtractionFileParametersV1ToJSON),
        sha256: value["sha256"],
    };
}
