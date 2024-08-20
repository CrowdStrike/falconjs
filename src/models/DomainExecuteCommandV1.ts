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
import type { DomainRequest } from "./DomainRequest";
import { DomainRequestFromJSON, DomainRequestFromJSONTyped, DomainRequestToJSON } from "./DomainRequest";

/**
 *
 * @export
 * @interface DomainExecuteCommandV1
 */
export interface DomainExecuteCommandV1 {
    /**
     * Config auth type for plugin to execute. Only applicable for oneOf security scheme plugins. If not provided, it will use the default auth type on the config
     * @type {string}
     * @memberof DomainExecuteCommandV1
     */
    configAuthType: string;
    /**
     * ConfigID for plugin to execute. If omitted, the oldest config will be used as part of the execution.
     * @type {string}
     * @memberof DomainExecuteCommandV1
     */
    configId: string;
    /**
     * ID of the definition containing the operation to execute.'
     * @type {string}
     * @memberof DomainExecuteCommandV1
     */
    definitionId: string;
    /**
     * ID of the specific plugin to execute, in the format 'definition_name.operation_name'
     * @type {string}
     * @memberof DomainExecuteCommandV1
     */
    id: string;
    /**
     * The specific operation to execute.
     * @type {string}
     * @memberof DomainExecuteCommandV1
     */
    operationId: string;
    /**
     *
     * @type {DomainRequest}
     * @memberof DomainExecuteCommandV1
     */
    request: DomainRequest;
    /**
     * The version of the definition to execute.
     * @type {number}
     * @memberof DomainExecuteCommandV1
     */
    version: number;
}

/**
 * Check if a given object implements the DomainExecuteCommandV1 interface.
 */
export function instanceOfDomainExecuteCommandV1(value: object): value is DomainExecuteCommandV1 {
    if (!("configAuthType" in value) || value["configAuthType"] === undefined) return false;
    if (!("configId" in value) || value["configId"] === undefined) return false;
    if (!("definitionId" in value) || value["definitionId"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("operationId" in value) || value["operationId"] === undefined) return false;
    if (!("request" in value) || value["request"] === undefined) return false;
    if (!("version" in value) || value["version"] === undefined) return false;
    return true;
}

export function DomainExecuteCommandV1FromJSON(json: any): DomainExecuteCommandV1 {
    return DomainExecuteCommandV1FromJSONTyped(json, false);
}

export function DomainExecuteCommandV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExecuteCommandV1 {
    if (json == null) {
        return json;
    }
    return {
        configAuthType: json["config_auth_type"],
        configId: json["config_id"],
        definitionId: json["definition_id"],
        id: json["id"],
        operationId: json["operation_id"],
        request: DomainRequestFromJSON(json["request"]),
        version: json["version"],
    };
}

export function DomainExecuteCommandV1ToJSON(value?: DomainExecuteCommandV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        config_auth_type: value["configAuthType"],
        config_id: value["configId"],
        definition_id: value["definitionId"],
        id: value["id"],
        operation_id: value["operationId"],
        request: DomainRequestToJSON(value["request"]),
        version: value["version"],
    };
}