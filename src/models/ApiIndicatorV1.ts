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
import type { ApiMetadataV1 } from './ApiMetadataV1';
import {
    ApiMetadataV1FromJSON,
    ApiMetadataV1FromJSONTyped,
    ApiMetadataV1ToJSON,
} from './ApiMetadataV1';

/**
 * 
 * @export
 * @interface ApiIndicatorV1
 */
export interface ApiIndicatorV1 {
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    action?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApiIndicatorV1
     */
    appliedGlobally?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiIndicatorV1
     */
    createdOn?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof ApiIndicatorV1
     */
    deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiIndicatorV1
     */
    expiration?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof ApiIndicatorV1
     */
    expired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ApiIndicatorV1
     */
    fromParent?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiIndicatorV1
     */
    hostGroups?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    id?: string;
    /**
     * 
     * @type {ApiMetadataV1}
     * @memberof ApiIndicatorV1
     */
    metadata?: ApiMetadataV1;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    mobileAction?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    modifiedBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiIndicatorV1
     */
    modifiedOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    parentCidName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiIndicatorV1
     */
    platforms?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    source?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiIndicatorV1
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiIndicatorV1
     */
    value?: string;
}

/**
 * Check if a given object implements the ApiIndicatorV1 interface.
 */
export function instanceOfApiIndicatorV1(value: object): value is ApiIndicatorV1 {
    return true;
}

export function ApiIndicatorV1FromJSON(json: any): ApiIndicatorV1 {
    return ApiIndicatorV1FromJSONTyped(json, false);
}

export function ApiIndicatorV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiIndicatorV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'] == null ? undefined : json['action'],
        'appliedGlobally': json['applied_globally'] == null ? undefined : json['applied_globally'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
        'createdOn': json['created_on'] == null ? undefined : (new Date(json['created_on'])),
        'deleted': json['deleted'] == null ? undefined : json['deleted'],
        'description': json['description'] == null ? undefined : json['description'],
        'expiration': json['expiration'] == null ? undefined : (new Date(json['expiration'])),
        'expired': json['expired'] == null ? undefined : json['expired'],
        'fromParent': json['from_parent'] == null ? undefined : json['from_parent'],
        'hostGroups': json['host_groups'] == null ? undefined : json['host_groups'],
        'id': json['id'] == null ? undefined : json['id'],
        'metadata': json['metadata'] == null ? undefined : ApiMetadataV1FromJSON(json['metadata']),
        'mobileAction': json['mobile_action'] == null ? undefined : json['mobile_action'],
        'modifiedBy': json['modified_by'] == null ? undefined : json['modified_by'],
        'modifiedOn': json['modified_on'] == null ? undefined : (new Date(json['modified_on'])),
        'parentCidName': json['parent_cid_name'] == null ? undefined : json['parent_cid_name'],
        'platforms': json['platforms'] == null ? undefined : json['platforms'],
        'severity': json['severity'] == null ? undefined : json['severity'],
        'source': json['source'] == null ? undefined : json['source'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'type': json['type'] == null ? undefined : json['type'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function ApiIndicatorV1ToJSON(value?: ApiIndicatorV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
        'applied_globally': value['appliedGlobally'],
        'created_by': value['createdBy'],
        'created_on': value['createdOn'] == null ? undefined : ((value['createdOn']).toISOString()),
        'deleted': value['deleted'],
        'description': value['description'],
        'expiration': value['expiration'] == null ? undefined : ((value['expiration']).toISOString()),
        'expired': value['expired'],
        'from_parent': value['fromParent'],
        'host_groups': value['hostGroups'],
        'id': value['id'],
        'metadata': ApiMetadataV1ToJSON(value['metadata']),
        'mobile_action': value['mobileAction'],
        'modified_by': value['modifiedBy'],
        'modified_on': value['modifiedOn'] == null ? undefined : ((value['modifiedOn']).toISOString()),
        'parent_cid_name': value['parentCidName'],
        'platforms': value['platforms'],
        'severity': value['severity'],
        'source': value['source'],
        'tags': value['tags'],
        'type': value['type'],
        'value': value['value'],
    };
}

