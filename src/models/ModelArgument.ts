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
 * @interface ModelArgument
 */
export interface ModelArgument {
    /**
     * 
     * @type {string}
     * @memberof ModelArgument
     */
    argName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelArgument
     */
    argType: string;
    /**
     * 
     * @type {string}
     * @memberof ModelArgument
     */
    commandLevel: string;
    /**
     * 
     * @type {Date}
     * @memberof ModelArgument
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ModelArgument
     */
    dataType: string;
    /**
     * 
     * @type {string}
     * @memberof ModelArgument
     */
    defaultValue: string;
    /**
     * 
     * @type {string}
     * @memberof ModelArgument
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ModelArgument
     */
    encoding: string;
    /**
     * 
     * @type {number}
     * @memberof ModelArgument
     */
    id: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelArgument
     */
    options: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ModelArgument
     */
    required: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ModelArgument
     */
    requiresValue: boolean;
    /**
     * 
     * @type {number}
     * @memberof ModelArgument
     */
    scriptId: number;
    /**
     * 
     * @type {number}
     * @memberof ModelArgument
     */
    sequence: number;
    /**
     * 
     * @type {Date}
     * @memberof ModelArgument
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the ModelArgument interface.
 */
export function instanceOfModelArgument(value: object): value is ModelArgument {
    if (!('argName' in value) || value['argName'] === undefined) return false;
    if (!('argType' in value) || value['argType'] === undefined) return false;
    if (!('commandLevel' in value) || value['commandLevel'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('dataType' in value) || value['dataType'] === undefined) return false;
    if (!('defaultValue' in value) || value['defaultValue'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('encoding' in value) || value['encoding'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('options' in value) || value['options'] === undefined) return false;
    if (!('required' in value) || value['required'] === undefined) return false;
    if (!('requiresValue' in value) || value['requiresValue'] === undefined) return false;
    if (!('scriptId' in value) || value['scriptId'] === undefined) return false;
    if (!('sequence' in value) || value['sequence'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ModelArgumentFromJSON(json: any): ModelArgument {
    return ModelArgumentFromJSONTyped(json, false);
}

export function ModelArgumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelArgument {
    if (json == null) {
        return json;
    }
    return {
        
        'argName': json['arg_name'],
        'argType': json['arg_type'],
        'commandLevel': json['command_level'],
        'createdAt': (new Date(json['created_at'])),
        'dataType': json['data_type'],
        'defaultValue': json['default_value'],
        'description': json['description'],
        'encoding': json['encoding'],
        'id': json['id'],
        'options': json['options'],
        'required': json['required'],
        'requiresValue': json['requires_value'],
        'scriptId': json['script_id'],
        'sequence': json['sequence'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function ModelArgumentToJSON(value?: ModelArgument | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'arg_name': value['argName'],
        'arg_type': value['argType'],
        'command_level': value['commandLevel'],
        'created_at': ((value['createdAt']).toISOString()),
        'data_type': value['dataType'],
        'default_value': value['defaultValue'],
        'description': value['description'],
        'encoding': value['encoding'],
        'id': value['id'],
        'options': value['options'],
        'required': value['required'],
        'requires_value': value['requiresValue'],
        'script_id': value['scriptId'],
        'sequence': value['sequence'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}

