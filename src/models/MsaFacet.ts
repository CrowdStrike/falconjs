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
 * @interface MsaFacet
 */
export interface MsaFacet {
    /**
     * 
     * @type {Array<MsaFacet>}
     * @memberof MsaFacet
     */
    by?: Array<MsaFacet>;
    /**
     * 
     * @type {number}
     * @memberof MsaFacet
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof MsaFacet
     */
    facet?: string;
    /**
     * 
     * @type {string}
     * @memberof MsaFacet
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof MsaFacet
     */
    term: string;
}

/**
 * Check if a given object implements the MsaFacet interface.
 */
export function instanceOfMsaFacet(value: object): value is MsaFacet {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('term' in value) || value['term'] === undefined) return false;
    return true;
}

export function MsaFacetFromJSON(json: any): MsaFacet {
    return MsaFacetFromJSONTyped(json, false);
}

export function MsaFacetFromJSONTyped(json: any, ignoreDiscriminator: boolean): MsaFacet {
    if (json == null) {
        return json;
    }
    return {
        
        'by': json['by'] == null ? undefined : ((json['by'] as Array<any>).map(MsaFacetFromJSON)),
        'count': json['count'],
        'facet': json['facet'] == null ? undefined : json['facet'],
        'label': json['label'] == null ? undefined : json['label'],
        'term': json['term'],
    };
}

export function MsaFacetToJSON(value?: MsaFacet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'by': value['by'] == null ? undefined : ((value['by'] as Array<any>).map(MsaFacetToJSON)),
        'count': value['count'],
        'facet': value['facet'],
        'label': value['label'],
        'term': value['term'],
    };
}

