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
import type { ParameterActivityProvisionParameters } from "./ParameterActivityProvisionParameters";
import { ParameterActivityProvisionParametersFromJSON, ParameterActivityProvisionParametersFromJSONTyped, ParameterActivityProvisionParametersToJSON } from "./ParameterActivityProvisionParameters";
import type { ParameterConditionProvisionParameter } from "./ParameterConditionProvisionParameter";
import { ParameterConditionProvisionParameterFromJSON, ParameterConditionProvisionParameterFromJSONTyped, ParameterConditionProvisionParameterToJSON } from "./ParameterConditionProvisionParameter";
import type { ParameterTriggerProvisionParameter } from "./ParameterTriggerProvisionParameter";
import { ParameterTriggerProvisionParameterFromJSON, ParameterTriggerProvisionParameterFromJSONTyped, ParameterTriggerProvisionParameterToJSON } from "./ParameterTriggerProvisionParameter";

/**
 *
 * @export
 * @interface ParameterTemplateProvisionParameters
 */
export interface ParameterTemplateProvisionParameters {
    /**
     *
     * @type {ParameterActivityProvisionParameters}
     * @memberof ParameterTemplateProvisionParameters
     */
    activities?: ParameterActivityProvisionParameters;
    /**
     * set of parameters for provisioning of conditions within the associated template.
     * @type {Array<ParameterConditionProvisionParameter>}
     * @memberof ParameterTemplateProvisionParameters
     */
    conditions?: Array<ParameterConditionProvisionParameter>;
    /**
     *
     * @type {ParameterTriggerProvisionParameter}
     * @memberof ParameterTemplateProvisionParameters
     */
    trigger?: ParameterTriggerProvisionParameter;
}

/**
 * Check if a given object implements the ParameterTemplateProvisionParameters interface.
 */
export function instanceOfParameterTemplateProvisionParameters(value: object): value is ParameterTemplateProvisionParameters {
    return true;
}

export function ParameterTemplateProvisionParametersFromJSON(json: any): ParameterTemplateProvisionParameters {
    return ParameterTemplateProvisionParametersFromJSONTyped(json, false);
}

export function ParameterTemplateProvisionParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterTemplateProvisionParameters {
    if (json == null) {
        return json;
    }
    return {
        activities: json["activities"] == null ? undefined : ParameterActivityProvisionParametersFromJSON(json["activities"]),
        conditions: json["conditions"] == null ? undefined : (json["conditions"] as Array<any>).map(ParameterConditionProvisionParameterFromJSON),
        trigger: json["trigger"] == null ? undefined : ParameterTriggerProvisionParameterFromJSON(json["trigger"]),
    };
}

export function ParameterTemplateProvisionParametersToJSON(value?: ParameterTemplateProvisionParameters | null): any {
    if (value == null) {
        return value;
    }
    return {
        activities: ParameterActivityProvisionParametersToJSON(value["activities"]),
        conditions: value["conditions"] == null ? undefined : (value["conditions"] as Array<any>).map(ParameterConditionProvisionParameterToJSON),
        trigger: ParameterTriggerProvisionParameterToJSON(value["trigger"]),
    };
}