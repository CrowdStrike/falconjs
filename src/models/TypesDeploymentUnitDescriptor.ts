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
import type { TypesStruct } from "./TypesStruct";
import { TypesStructFromJSON, TypesStructFromJSONTyped, TypesStructToJSON } from "./TypesStruct";
import type { TypesDeploymentUnitService } from "./TypesDeploymentUnitService";
import { TypesDeploymentUnitServiceFromJSON, TypesDeploymentUnitServiceFromJSONTyped, TypesDeploymentUnitServiceToJSON } from "./TypesDeploymentUnitService";

/**
 *
 * @export
 * @interface TypesDeploymentUnitDescriptor
 */
export interface TypesDeploymentUnitDescriptor {
    /**
     *
     * @type {TypesStruct}
     * @memberof TypesDeploymentUnitDescriptor
     */
    data?: TypesStruct;
    /**
     *
     * @type {Array<TypesDeploymentUnitService>}
     * @memberof TypesDeploymentUnitDescriptor
     */
    relatedServices?: Array<TypesDeploymentUnitService>;
    /**
     *
     * @type {number}
     * @memberof TypesDeploymentUnitDescriptor
     */
    type?: number;
    /**
     *
     * @type {string}
     * @memberof TypesDeploymentUnitDescriptor
     */
    uniqueId?: string;
}

/**
 * Check if a given object implements the TypesDeploymentUnitDescriptor interface.
 */
export function instanceOfTypesDeploymentUnitDescriptor(value: object): value is TypesDeploymentUnitDescriptor {
    return true;
}

export function TypesDeploymentUnitDescriptorFromJSON(json: any): TypesDeploymentUnitDescriptor {
    return TypesDeploymentUnitDescriptorFromJSONTyped(json, false);
}

export function TypesDeploymentUnitDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesDeploymentUnitDescriptor {
    if (json == null) {
        return json;
    }
    return {
        data: json["data"] == null ? undefined : TypesStructFromJSON(json["data"]),
        relatedServices: json["relatedServices"] == null ? undefined : (json["relatedServices"] as Array<any>).map(TypesDeploymentUnitServiceFromJSON),
        type: json["type"] == null ? undefined : json["type"],
        uniqueId: json["unique_id"] == null ? undefined : json["unique_id"],
    };
}

export function TypesDeploymentUnitDescriptorToJSON(value?: TypesDeploymentUnitDescriptor | null): any {
    if (value == null) {
        return value;
    }
    return {
        data: TypesStructToJSON(value["data"]),
        relatedServices: value["relatedServices"] == null ? undefined : (value["relatedServices"] as Array<any>).map(TypesDeploymentUnitServiceToJSON),
        type: value["type"],
        unique_id: value["uniqueId"],
    };
}
