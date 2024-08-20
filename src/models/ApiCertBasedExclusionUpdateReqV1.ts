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
import type { ApiCertificateReqV1 } from './ApiCertificateReqV1';
import {
    ApiCertificateReqV1FromJSON,
    ApiCertificateReqV1FromJSONTyped,
    ApiCertificateReqV1ToJSON,
} from './ApiCertificateReqV1';

/**
 * 
 * @export
 * @interface ApiCertBasedExclusionUpdateReqV1
 */
export interface ApiCertBasedExclusionUpdateReqV1 {
    /**
     * 
     * @type {boolean}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    appliedGlobally?: boolean;
    /**
     * 
     * @type {ApiCertificateReqV1}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    certificate?: ApiCertificateReqV1;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    childrenCids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    createdOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    hostGroups?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    modifiedBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    modifiedOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiCertBasedExclusionUpdateReqV1
     */
    status?: string;
}

/**
 * Check if a given object implements the ApiCertBasedExclusionUpdateReqV1 interface.
 */
export function instanceOfApiCertBasedExclusionUpdateReqV1(value: object): value is ApiCertBasedExclusionUpdateReqV1 {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ApiCertBasedExclusionUpdateReqV1FromJSON(json: any): ApiCertBasedExclusionUpdateReqV1 {
    return ApiCertBasedExclusionUpdateReqV1FromJSONTyped(json, false);
}

export function ApiCertBasedExclusionUpdateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCertBasedExclusionUpdateReqV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'appliedGlobally': json['applied_globally'] == null ? undefined : json['applied_globally'],
        'certificate': json['certificate'] == null ? undefined : ApiCertificateReqV1FromJSON(json['certificate']),
        'childrenCids': json['children_cids'] == null ? undefined : json['children_cids'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
        'createdOn': json['created_on'] == null ? undefined : (new Date(json['created_on'])),
        'description': json['description'] == null ? undefined : json['description'],
        'hostGroups': json['host_groups'] == null ? undefined : json['host_groups'],
        'id': json['id'],
        'modifiedBy': json['modified_by'] == null ? undefined : json['modified_by'],
        'modifiedOn': json['modified_on'] == null ? undefined : (new Date(json['modified_on'])),
        'name': json['name'] == null ? undefined : json['name'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function ApiCertBasedExclusionUpdateReqV1ToJSON(value?: ApiCertBasedExclusionUpdateReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'applied_globally': value['appliedGlobally'],
        'certificate': ApiCertificateReqV1ToJSON(value['certificate']),
        'children_cids': value['childrenCids'],
        'comment': value['comment'],
        'created_by': value['createdBy'],
        'created_on': value['createdOn'] == null ? undefined : ((value['createdOn']).toISOString()),
        'description': value['description'],
        'host_groups': value['hostGroups'],
        'id': value['id'],
        'modified_by': value['modifiedBy'],
        'modified_on': value['modifiedOn'] == null ? undefined : ((value['modifiedOn']).toISOString()),
        'name': value['name'],
        'status': value['status'],
    };
}

