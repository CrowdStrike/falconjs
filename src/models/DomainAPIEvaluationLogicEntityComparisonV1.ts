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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DomainAPIEvaluationLogicEntityComparisonV1
 */
export interface DomainAPIEvaluationLogicEntityComparisonV1 {
    /**
     * 
     * @type {string}
     * @memberof DomainAPIEvaluationLogicEntityComparisonV1
     */
    actualValueField: string;
    /**
     * 
     * @type {object}
     * @memberof DomainAPIEvaluationLogicEntityComparisonV1
     */
    expectedValue: object;
    /**
     * 
     * @type {string}
     * @memberof DomainAPIEvaluationLogicEntityComparisonV1
     */
    operation: string;
    /**
     * 
     * @type {string}
     * @memberof DomainAPIEvaluationLogicEntityComparisonV1
     */
    valueDatatype: string;
}

/**
 * Check if a given object implements the DomainAPIEvaluationLogicEntityComparisonV1 interface.
 */
export function instanceOfDomainAPIEvaluationLogicEntityComparisonV1(value: object): value is DomainAPIEvaluationLogicEntityComparisonV1 {
    if (!('actualValueField' in value) || value['actualValueField'] === undefined) return false;
    if (!('expectedValue' in value) || value['expectedValue'] === undefined) return false;
    if (!('operation' in value) || value['operation'] === undefined) return false;
    if (!('valueDatatype' in value) || value['valueDatatype'] === undefined) return false;
    return true;
}

export function DomainAPIEvaluationLogicEntityComparisonV1FromJSON(json: any): DomainAPIEvaluationLogicEntityComparisonV1 {
    return DomainAPIEvaluationLogicEntityComparisonV1FromJSONTyped(json, false);
}

export function DomainAPIEvaluationLogicEntityComparisonV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIEvaluationLogicEntityComparisonV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'actualValueField': json['actual_value_field'],
        'expectedValue': json['expected_value'],
        'operation': json['operation'],
        'valueDatatype': json['value_datatype'],
    };
}

export function DomainAPIEvaluationLogicEntityComparisonV1ToJSON(value?: DomainAPIEvaluationLogicEntityComparisonV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'actual_value_field': value['actualValueField'],
        'expected_value': value['expectedValue'],
        'operation': value['operation'],
        'value_datatype': value['valueDatatype'],
    };
}

