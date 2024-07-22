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
import type { DomainCloudAccounts } from './DomainCloudAccounts';
import {
    DomainCloudAccountsFromJSON,
    DomainCloudAccountsFromJSONTyped,
    DomainCloudAccountsToJSON,
} from './DomainCloudAccounts';

/**
 * 
 * @export
 * @interface DomainCloudScope
 */
export interface DomainCloudScope {
    /**
     * 
     * @type {Array<DomainCloudAccounts>}
     * @memberof DomainCloudScope
     */
    accounts?: Array<DomainCloudAccounts>;
    /**
     * 
     * @type {string}
     * @memberof DomainCloudScope
     */
    businessImpact?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainCloudScope
     */
    businessUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainCloudScope
     */
    cid?: string;
    /**
     * 
     * @type {Date}
     * @memberof DomainCloudScope
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof DomainCloudScope
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof DomainCloudScope
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DomainCloudScope
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainCloudScope
     */
    owners?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof DomainCloudScope
     */
    totalAccounts?: number;
    /**
     * 
     * @type {Date}
     * @memberof DomainCloudScope
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the DomainCloudScope interface.
 */
export function instanceOfDomainCloudScope(value: object): value is DomainCloudScope {
    return true;
}

export function DomainCloudScopeFromJSON(json: any): DomainCloudScope {
    return DomainCloudScopeFromJSONTyped(json, false);
}

export function DomainCloudScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainCloudScope {
    if (json == null) {
        return json;
    }
    return {
        
        'accounts': json['accounts'] == null ? undefined : ((json['accounts'] as Array<any>).map(DomainCloudAccountsFromJSON)),
        'businessImpact': json['business_impact'] == null ? undefined : json['business_impact'],
        'businessUnit': json['business_unit'] == null ? undefined : json['business_unit'],
        'cid': json['cid'] == null ? undefined : json['cid'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'owners': json['owners'] == null ? undefined : json['owners'],
        'totalAccounts': json['total_accounts'] == null ? undefined : json['total_accounts'],
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function DomainCloudScopeToJSON(value?: DomainCloudScope | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accounts': value['accounts'] == null ? undefined : ((value['accounts'] as Array<any>).map(DomainCloudAccountsToJSON)),
        'business_impact': value['businessImpact'],
        'business_unit': value['businessUnit'],
        'cid': value['cid'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'description': value['description'],
        'id': value['id'],
        'name': value['name'],
        'owners': value['owners'],
        'total_accounts': value['totalAccounts'],
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}

