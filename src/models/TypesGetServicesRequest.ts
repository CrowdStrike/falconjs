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
import type { TypesPagination } from './TypesPagination';
import {
    TypesPaginationFromJSON,
    TypesPaginationFromJSONTyped,
    TypesPaginationToJSON,
} from './TypesPagination';
import type { TypesGetServicesRelatedEntity } from './TypesGetServicesRelatedEntity';
import {
    TypesGetServicesRelatedEntityFromJSON,
    TypesGetServicesRelatedEntityFromJSONTyped,
    TypesGetServicesRelatedEntityToJSON,
} from './TypesGetServicesRelatedEntity';
import type { TypesDeploymentUnitsTupleFilters } from './TypesDeploymentUnitsTupleFilters';
import {
    TypesDeploymentUnitsTupleFiltersFromJSON,
    TypesDeploymentUnitsTupleFiltersFromJSONTyped,
    TypesDeploymentUnitsTupleFiltersToJSON,
} from './TypesDeploymentUnitsTupleFilters';

/**
 * 
 * @export
 * @interface TypesGetServicesRequest
 */
export interface TypesGetServicesRequest {
    /**
     * 
     * @type {Array<TypesDeploymentUnitsTupleFilters>}
     * @memberof TypesGetServicesRequest
     */
    deploymentTupleFilters?: Array<TypesDeploymentUnitsTupleFilters>;
    /**
     * 
     * @type {number}
     * @memberof TypesGetServicesRequest
     */
    nestingLevel?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TypesGetServicesRequest
     */
    onlyCount?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TypesGetServicesRequest
     */
    optionalTime?: number;
    /**
     * 
     * @type {TypesPagination}
     * @memberof TypesGetServicesRequest
     */
    pagination?: TypesPagination;
    /**
     * 
     * @type {Array<string>}
     * @memberof TypesGetServicesRequest
     */
    persistentSignatures?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TypesGetServicesRequest
     */
    qlFilters?: string;
    /**
     * 
     * @type {Array<TypesGetServicesRelatedEntity>}
     * @memberof TypesGetServicesRequest
     */
    relatedEntities?: Array<TypesGetServicesRelatedEntity>;
    /**
     * 
     * @type {number}
     * @memberof TypesGetServicesRequest
     */
    revisionId?: number;
    /**
     * 
     * @type {string}
     * @memberof TypesGetServicesRequest
     */
    rolesSignature?: string;
}

/**
 * Check if a given object implements the TypesGetServicesRequest interface.
 */
export function instanceOfTypesGetServicesRequest(value: object): value is TypesGetServicesRequest {
    return true;
}

export function TypesGetServicesRequestFromJSON(json: any): TypesGetServicesRequest {
    return TypesGetServicesRequestFromJSONTyped(json, false);
}

export function TypesGetServicesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesGetServicesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'deploymentTupleFilters': json['deploymentTupleFilters'] == null ? undefined : ((json['deploymentTupleFilters'] as Array<any>).map(TypesDeploymentUnitsTupleFiltersFromJSON)),
        'nestingLevel': json['nestingLevel'] == null ? undefined : json['nestingLevel'],
        'onlyCount': json['onlyCount'] == null ? undefined : json['onlyCount'],
        'optionalTime': json['optionalTime'] == null ? undefined : json['optionalTime'],
        'pagination': json['pagination'] == null ? undefined : TypesPaginationFromJSON(json['pagination']),
        'persistentSignatures': json['persistentSignatures'] == null ? undefined : json['persistentSignatures'],
        'qlFilters': json['qlFilters'] == null ? undefined : json['qlFilters'],
        'relatedEntities': json['relatedEntities'] == null ? undefined : ((json['relatedEntities'] as Array<any>).map(TypesGetServicesRelatedEntityFromJSON)),
        'revisionId': json['revisionId'] == null ? undefined : json['revisionId'],
        'rolesSignature': json['rolesSignature'] == null ? undefined : json['rolesSignature'],
    };
}

export function TypesGetServicesRequestToJSON(value?: TypesGetServicesRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'deploymentTupleFilters': value['deploymentTupleFilters'] == null ? undefined : ((value['deploymentTupleFilters'] as Array<any>).map(TypesDeploymentUnitsTupleFiltersToJSON)),
        'nestingLevel': value['nestingLevel'],
        'onlyCount': value['onlyCount'],
        'optionalTime': value['optionalTime'],
        'pagination': TypesPaginationToJSON(value['pagination']),
        'persistentSignatures': value['persistentSignatures'],
        'qlFilters': value['qlFilters'],
        'relatedEntities': value['relatedEntities'] == null ? undefined : ((value['relatedEntities'] as Array<any>).map(TypesGetServicesRelatedEntityToJSON)),
        'revisionId': value['revisionId'],
        'rolesSignature': value['rolesSignature'],
    };
}

