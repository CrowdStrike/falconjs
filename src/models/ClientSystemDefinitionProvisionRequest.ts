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
import type { ParameterTemplateProvisionParameters } from "./ParameterTemplateProvisionParameters";
import { ParameterTemplateProvisionParametersFromJSON, ParameterTemplateProvisionParametersFromJSONTyped, ParameterTemplateProvisionParametersToJSON } from "./ParameterTemplateProvisionParameters";

/**
 *
 * @export
 * @interface ClientSystemDefinitionProvisionRequest
 */
export interface ClientSystemDefinitionProvisionRequest {
    /**
     * Optional name to be set on the customer scope definition. Must be unique within a given CID.
     * @type {string}
     * @memberof ClientSystemDefinitionProvisionRequest
     */
    name: string;
    /**
     *
     * @type {ParameterTemplateProvisionParameters}
     * @memberof ClientSystemDefinitionProvisionRequest
     */
    parameters: ParameterTemplateProvisionParameters;
    /**
     * ID of the system definition template that was previously created
     * @type {string}
     * @memberof ClientSystemDefinitionProvisionRequest
     */
    templateId: string;
    /**
     * Name of the system definition template to provision
     * @type {string}
     * @memberof ClientSystemDefinitionProvisionRequest
     */
    templateName: string;
    /**
     * Version of system definition template that was previously created, if omitted the latest version will be used.
     * @type {string}
     * @memberof ClientSystemDefinitionProvisionRequest
     */
    templateVersion: string;
}

/**
 * Check if a given object implements the ClientSystemDefinitionProvisionRequest interface.
 */
export function instanceOfClientSystemDefinitionProvisionRequest(value: object): value is ClientSystemDefinitionProvisionRequest {
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("parameters" in value) || value["parameters"] === undefined) return false;
    if (!("templateId" in value) || value["templateId"] === undefined) return false;
    if (!("templateName" in value) || value["templateName"] === undefined) return false;
    if (!("templateVersion" in value) || value["templateVersion"] === undefined) return false;
    return true;
}

export function ClientSystemDefinitionProvisionRequestFromJSON(json: any): ClientSystemDefinitionProvisionRequest {
    return ClientSystemDefinitionProvisionRequestFromJSONTyped(json, false);
}

export function ClientSystemDefinitionProvisionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientSystemDefinitionProvisionRequest {
    if (json == null) {
        return json;
    }
    return {
        name: json["name"],
        parameters: ParameterTemplateProvisionParametersFromJSON(json["parameters"]),
        templateId: json["template_id"],
        templateName: json["template_name"],
        templateVersion: json["template_version"],
    };
}

export function ClientSystemDefinitionProvisionRequestToJSON(value?: ClientSystemDefinitionProvisionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        name: value["name"],
        parameters: ParameterTemplateProvisionParametersToJSON(value["parameters"]),
        template_id: value["templateId"],
        template_name: value["templateName"],
        template_version: value["templateVersion"],
    };
}
