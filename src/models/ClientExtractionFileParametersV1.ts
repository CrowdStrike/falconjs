/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ClientExtractionFileParametersV1
 */
export interface ClientExtractionFileParametersV1 {
    /**
     *
     * @type {string}
     * @memberof ClientExtractionFileParametersV1
     */
    comment?: string;
    /**
     *
     * @type {boolean}
     * @memberof ClientExtractionFileParametersV1
     */
    isConfidential?: boolean;
    /**
     *
     * @type {string}
     * @memberof ClientExtractionFileParametersV1
     */
    name?: string;
}

/**
 * Check if a given object implements the ClientExtractionFileParametersV1 interface.
 */
export function instanceOfClientExtractionFileParametersV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClientExtractionFileParametersV1FromJSON(json: any): ClientExtractionFileParametersV1 {
    return ClientExtractionFileParametersV1FromJSONTyped(json, false);
}

export function ClientExtractionFileParametersV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientExtractionFileParametersV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        comment: !exists(json, "comment") ? undefined : json["comment"],
        isConfidential: !exists(json, "is_confidential") ? undefined : json["is_confidential"],
        name: !exists(json, "name") ? undefined : json["name"],
    };
}

export function ClientExtractionFileParametersV1ToJSON(value?: ClientExtractionFileParametersV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        comment: value.comment,
        is_confidential: value.isConfidential,
        name: value.name,
    };
}
