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
import type { DomainValueItem } from './DomainValueItem';
import {
    DomainValueItemFromJSON,
    DomainValueItemFromJSONTyped,
    DomainValueItemToJSON,
} from './DomainValueItem';

/**
 * 
 * @export
 * @interface DomainField
 */
export interface DomainField {
    /**
     * 
     * @type {string}
     * @memberof DomainField
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof DomainField
     */
    name: string;
    /**
     * 
     * @type {Array<DomainValueItem>}
     * @memberof DomainField
     */
    options: Array<DomainValueItem>;
    /**
     * 
     * @type {string}
     * @memberof DomainField
     */
    type: string;
}

/**
 * Check if a given object implements the DomainField interface.
 */
export function instanceOfDomainField(value: object): value is DomainField {
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('options' in value) || value['options'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function DomainFieldFromJSON(json: any): DomainField {
    return DomainFieldFromJSONTyped(json, false);
}

export function DomainFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainField {
    if (json == null) {
        return json;
    }
    return {
        
        'label': json['label'],
        'name': json['name'],
        'options': ((json['options'] as Array<any>).map(DomainValueItemFromJSON)),
        'type': json['type'],
    };
}

export function DomainFieldToJSON(value?: DomainField | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'label': value['label'],
        'name': value['name'],
        'options': ((value['options'] as Array<any>).map(DomainValueItemToJSON)),
        'type': value['type'],
    };
}

