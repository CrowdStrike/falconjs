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
import type { DefinitionsPlaybookParameter } from "./DefinitionsPlaybookParameter";
import { DefinitionsPlaybookParameterFromJSON, DefinitionsPlaybookParameterFromJSONTyped, DefinitionsPlaybookParameterToJSON } from "./DefinitionsPlaybookParameter";
import type { GraphValidationError } from "./GraphValidationError";
import { GraphValidationErrorFromJSON, GraphValidationErrorFromJSONTyped, GraphValidationErrorToJSON } from "./GraphValidationError";
import type { GraphDefinitionModel } from "./GraphDefinitionModel";
import { GraphDefinitionModelFromJSON, GraphDefinitionModelFromJSONTyped, GraphDefinitionModelToJSON } from "./GraphDefinitionModel";

/**
 *
 * @export
 * @interface DefinitionsDefinitionImportResponseEntity
 */
export interface DefinitionsDefinitionImportResponseEntity {
    /**
     *
     * @type {string}
     * @memberof DefinitionsDefinitionImportResponseEntity
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof DefinitionsDefinitionImportResponseEntity
     */
    id?: string;
    /**
     *
     * @type {GraphDefinitionModel}
     * @memberof DefinitionsDefinitionImportResponseEntity
     */
    model?: GraphDefinitionModel;
    /**
     *
     * @type {string}
     * @memberof DefinitionsDefinitionImportResponseEntity
     */
    name?: string;
    /**
     *
     * @type {Array<DefinitionsPlaybookParameter>}
     * @memberof DefinitionsDefinitionImportResponseEntity
     */
    parameters: Array<DefinitionsPlaybookParameter>;
    /**
     *
     * @type {Array<GraphValidationError>}
     * @memberof DefinitionsDefinitionImportResponseEntity
     */
    validationErrors?: Array<GraphValidationError>;
}

/**
 * Check if a given object implements the DefinitionsDefinitionImportResponseEntity interface.
 */
export function instanceOfDefinitionsDefinitionImportResponseEntity(value: object): value is DefinitionsDefinitionImportResponseEntity {
    if (!("parameters" in value) || value["parameters"] === undefined) return false;
    return true;
}

export function DefinitionsDefinitionImportResponseEntityFromJSON(json: any): DefinitionsDefinitionImportResponseEntity {
    return DefinitionsDefinitionImportResponseEntityFromJSONTyped(json, false);
}

export function DefinitionsDefinitionImportResponseEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefinitionsDefinitionImportResponseEntity {
    if (json == null) {
        return json;
    }
    return {
        description: json["description"] == null ? undefined : json["description"],
        id: json["id"] == null ? undefined : json["id"],
        model: json["model"] == null ? undefined : GraphDefinitionModelFromJSON(json["model"]),
        name: json["name"] == null ? undefined : json["name"],
        parameters: (json["parameters"] as Array<any>).map(DefinitionsPlaybookParameterFromJSON),
        validationErrors: json["validation_errors"] == null ? undefined : (json["validation_errors"] as Array<any>).map(GraphValidationErrorFromJSON),
    };
}

export function DefinitionsDefinitionImportResponseEntityToJSON(value?: DefinitionsDefinitionImportResponseEntity | null): any {
    if (value == null) {
        return value;
    }
    return {
        description: value["description"],
        id: value["id"],
        model: GraphDefinitionModelToJSON(value["model"]),
        name: value["name"],
        parameters: (value["parameters"] as Array<any>).map(DefinitionsPlaybookParameterToJSON),
        validation_errors: value["validationErrors"] == null ? undefined : (value["validationErrors"] as Array<any>).map(GraphValidationErrorToJSON),
    };
}
