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
 * @interface DomainExecuteCommandResultV1
 */
export interface DomainExecuteCommandResultV1 {
    /**
     * The response headers from the partner operation
     * @type {{ [key: string]: Array<string>; }}
     * @memberof DomainExecuteCommandResultV1
     */
    headers?: { [key: string]: Array<string> };
    /**
     * ID of the plugin that was executed in the format 'definition_id.operation_id'. Multi-instance plugins require a config_id as part of the id as well in the format 'definition_id.operation_id.config_id'.
     * @type {string}
     * @memberof DomainExecuteCommandResultV1
     */
    id: string;
    /**
     * The response headers from the partner operation
     * @type {object}
     * @memberof DomainExecuteCommandResultV1
     */
    parsedHeaders?: object;
    /**
     *
     * @type {object}
     * @memberof DomainExecuteCommandResultV1
     */
    responseBody?: object;
    /**
     * The response status code from the partner operation.
     * @type {number}
     * @memberof DomainExecuteCommandResultV1
     */
    statusCode: number;
}

/**
 * Check if a given object implements the DomainExecuteCommandResultV1 interface.
 */
export function instanceOfDomainExecuteCommandResultV1(value: object): value is DomainExecuteCommandResultV1 {
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("statusCode" in value) || value["statusCode"] === undefined) return false;
    return true;
}

export function DomainExecuteCommandResultV1FromJSON(json: any): DomainExecuteCommandResultV1 {
    return DomainExecuteCommandResultV1FromJSONTyped(json, false);
}

export function DomainExecuteCommandResultV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExecuteCommandResultV1 {
    if (json == null) {
        return json;
    }
    return {
        headers: json["headers"] == null ? undefined : json["headers"],
        id: json["id"],
        parsedHeaders: json["parsed_headers"] == null ? undefined : json["parsed_headers"],
        responseBody: json["response_body"] == null ? undefined : json["response_body"],
        statusCode: json["status_code"],
    };
}

export function DomainExecuteCommandResultV1ToJSON(value?: DomainExecuteCommandResultV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        headers: value["headers"],
        id: value["id"],
        parsed_headers: value["parsedHeaders"],
        response_body: value["responseBody"],
        status_code: value["statusCode"],
    };
}
