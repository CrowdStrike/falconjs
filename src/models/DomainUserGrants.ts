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
 * @interface DomainUserGrants
 */
export interface DomainUserGrants {
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    cid?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    cidGroupId?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    cidGroupName?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    grantType?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    parentCid?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    roleId: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    roleName?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    userGroupId?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    userGroupName?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainUserGrants
     */
    uuid?: string;
}

/**
 * Check if a given object implements the DomainUserGrants interface.
 */
export function instanceOfDomainUserGrants(value: object): value is DomainUserGrants {
    if (!('roleId' in value) || value['roleId'] === undefined) return false;
    return true;
}

export function DomainUserGrantsFromJSON(json: any): DomainUserGrants {
    return DomainUserGrantsFromJSONTyped(json, false);
}

export function DomainUserGrantsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainUserGrants {
    if (json == null) {
        return json;
    }
    return {
        
        'cid': json['cid'] == null ? undefined : json['cid'],
        'cidGroupId': json['cid_group_id'] == null ? undefined : json['cid_group_id'],
        'cidGroupName': json['cid_group_name'] == null ? undefined : json['cid_group_name'],
        'grantType': json['grant_type'] == null ? undefined : json['grant_type'],
        'parentCid': json['parent_cid'] == null ? undefined : json['parent_cid'],
        'roleId': json['role_id'],
        'roleName': json['role_name'] == null ? undefined : json['role_name'],
        'userGroupId': json['user_group_id'] == null ? undefined : json['user_group_id'],
        'userGroupName': json['user_group_name'] == null ? undefined : json['user_group_name'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
    };
}

export function DomainUserGrantsToJSON(value?: DomainUserGrants | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cid': value['cid'],
        'cid_group_id': value['cidGroupId'],
        'cid_group_name': value['cidGroupName'],
        'grant_type': value['grantType'],
        'parent_cid': value['parentCid'],
        'role_id': value['roleId'],
        'role_name': value['roleName'],
        'user_group_id': value['userGroupId'],
        'user_group_name': value['userGroupName'],
        'uuid': value['uuid'],
    };
}

