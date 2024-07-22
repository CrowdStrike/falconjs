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
import type { V2Parameters } from './V2Parameters';
import {
    V2ParametersFromJSON,
    V2ParametersFromJSONTyped,
    V2ParametersToJSON,
} from './V2Parameters';
import type { V2Loop } from './V2Loop';
import {
    V2LoopFromJSON,
    V2LoopFromJSONTyped,
    V2LoopToJSON,
} from './V2Loop';
import type { V2Model } from './V2Model';
import {
    V2ModelFromJSON,
    V2ModelFromJSONTyped,
    V2ModelToJSON,
} from './V2Model';
import type { V2Condition } from './V2Condition';
import {
    V2ConditionFromJSON,
    V2ConditionFromJSONTyped,
    V2ConditionToJSON,
} from './V2Condition';
import type { V2Activity } from './V2Activity';
import {
    V2ActivityFromJSON,
    V2ActivityFromJSONTyped,
    V2ActivityToJSON,
} from './V2Activity';
import type { V2Trigger } from './V2Trigger';
import {
    V2TriggerFromJSON,
    V2TriggerFromJSONTyped,
    V2TriggerToJSON,
} from './V2Trigger';

/**
 * 
 * @export
 * @interface V2Definition
 */
export interface V2Definition {
    /**
     * 
     * @type {{ [key: string]: V2Activity; }}
     * @memberof V2Definition
     */
    actions?: { [key: string]: V2Activity; };
    /**
     * 
     * @type {{ [key: string]: V2Condition; }}
     * @memberof V2Definition
     */
    conditions?: { [key: string]: V2Condition; };
    /**
     * 
     * @type {string}
     * @memberof V2Definition
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V2Definition
     */
    labels?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: V2Loop; }}
     * @memberof V2Definition
     */
    loops?: { [key: string]: V2Loop; };
    /**
     * 
     * @type {boolean}
     * @memberof V2Definition
     */
    multiInstance?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V2Definition
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V2Definition
     */
    nodeRegistry: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof V2Definition
     */
    outputFields?: Array<string>;
    /**
     * 
     * @type {V2Parameters}
     * @memberof V2Definition
     */
    parameters?: V2Parameters;
    /**
     * 
     * @type {V2Model}
     * @memberof V2Definition
     */
    parent: V2Model;
    /**
     * 
     * @type {boolean}
     * @memberof V2Definition
     */
    provisionOnInstall?: boolean;
    /**
     * 
     * @type {V2Trigger}
     * @memberof V2Definition
     */
    trigger: V2Trigger;
    /**
     * 
     * @type {string}
     * @memberof V2Definition
     */
    type?: string;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof V2Definition
     */
    uniqNodeSeen: { [key: string]: boolean; };
}

/**
 * Check if a given object implements the V2Definition interface.
 */
export function instanceOfV2Definition(value: object): value is V2Definition {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('nodeRegistry' in value) || value['nodeRegistry'] === undefined) return false;
    if (!('parent' in value) || value['parent'] === undefined) return false;
    if (!('trigger' in value) || value['trigger'] === undefined) return false;
    if (!('uniqNodeSeen' in value) || value['uniqNodeSeen'] === undefined) return false;
    return true;
}

export function V2DefinitionFromJSON(json: any): V2Definition {
    return V2DefinitionFromJSONTyped(json, false);
}

export function V2DefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Definition {
    if (json == null) {
        return json;
    }
    return {
        
        'actions': json['actions'] == null ? undefined : (mapValues(json['actions'], V2ActivityFromJSON)),
        'conditions': json['conditions'] == null ? undefined : (mapValues(json['conditions'], V2ConditionFromJSON)),
        'description': json['description'] == null ? undefined : json['description'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'loops': json['loops'] == null ? undefined : (mapValues(json['loops'], V2LoopFromJSON)),
        'multiInstance': json['multi_instance'] == null ? undefined : json['multi_instance'],
        'name': json['name'],
        'nodeRegistry': json['nodeRegistry'],
        'outputFields': json['output_fields'] == null ? undefined : json['output_fields'],
        'parameters': json['parameters'] == null ? undefined : V2ParametersFromJSON(json['parameters']),
        'parent': V2ModelFromJSON(json['parent']),
        'provisionOnInstall': json['provision_on_install'] == null ? undefined : json['provision_on_install'],
        'trigger': V2TriggerFromJSON(json['trigger']),
        'type': json['type'] == null ? undefined : json['type'],
        'uniqNodeSeen': json['uniqNodeSeen'],
    };
}

export function V2DefinitionToJSON(value?: V2Definition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'actions': value['actions'] == null ? undefined : (mapValues(value['actions'], V2ActivityToJSON)),
        'conditions': value['conditions'] == null ? undefined : (mapValues(value['conditions'], V2ConditionToJSON)),
        'description': value['description'],
        'labels': value['labels'],
        'loops': value['loops'] == null ? undefined : (mapValues(value['loops'], V2LoopToJSON)),
        'multi_instance': value['multiInstance'],
        'name': value['name'],
        'nodeRegistry': value['nodeRegistry'],
        'output_fields': value['outputFields'],
        'parameters': V2ParametersToJSON(value['parameters']),
        'parent': V2ModelToJSON(value['parent']),
        'provision_on_install': value['provisionOnInstall'],
        'trigger': V2TriggerToJSON(value['trigger']),
        'type': value['type'],
        'uniqNodeSeen': value['uniqNodeSeen'],
    };
}

