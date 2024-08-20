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
import type { MsaDateRangeSpec } from './MsaDateRangeSpec';
import {
    MsaDateRangeSpecFromJSON,
    MsaDateRangeSpecFromJSONTyped,
    MsaDateRangeSpecToJSON,
} from './MsaDateRangeSpec';
import type { MsaRangeSpec } from './MsaRangeSpec';
import {
    MsaRangeSpecFromJSON,
    MsaRangeSpecFromJSONTyped,
    MsaRangeSpecToJSON,
} from './MsaRangeSpec';

/**
 * 
 * @export
 * @interface DetectsapiAggregateAlertQueryRequest
 */
export interface DetectsapiAggregateAlertQueryRequest {
    /**
     * DateRanges applies to date_range aggregations.
     * @type {Array<MsaDateRangeSpec>}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    dateRanges: Array<MsaDateRangeSpec>;
    /**
     * Exclude Post-filtering on queried fields
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    exclude: string;
    /**
     * Field applies for example to date_histogram and range aggregations.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    field: string;
    /**
     * FQL query specifying the filter parameters.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    filter: string;
    /**
     * used in bucket sort aggregations as an offset
     * @type {number}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    from: number;
    /**
     * Include Post-filtering on queried fields
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    include: string;
    /**
     * Interval applies for example to date_histogram aggregations (uses calendar_interval). Possible values: year, month, week, day, hour, minute.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    interval: string;
    /**
     * only return terms that match less than a configured number of hits.
     * @type {number}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    maxDocCount?: number;
    /**
     * only return terms that match more than a configured number of hits.
     * @type {number}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    minDocCount?: number;
    /**
     * Missing is a value for missing term field. The behavior that query should return if the document does not have the field in the query
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    missing: string;
    /**
     * Name of the aggregate query
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    name: string;
    /**
     * represents full text query
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    q: string;
    /**
     * Ranges applies to range aggregations.
     * @type {Array<MsaRangeSpec>}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    ranges: Array<MsaRangeSpec>;
    /**
     * how many term buckets should be returned.
     * @type {number}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    size: number;
    /**
     * Sort spec, ex: 'pattern_id|desc'.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    sort: string;
    /**
     * sub aggregate alert query.
     * @type {Array<DetectsapiAggregateAlertQueryRequest>}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    subAggregates: Array<DetectsapiAggregateAlertQueryRequest>;
    /**
     * TimeZone timezone to specify when bucketing results.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    timeZone: string;
    /**
     * Datastore supported value types: term, terms, date_histogram, facet, range, cardinality. Exact allowed values specific to endpoint.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    type: string;
}

/**
 * Check if a given object implements the DetectsapiAggregateAlertQueryRequest interface.
 */
export function instanceOfDetectsapiAggregateAlertQueryRequest(value: object): value is DetectsapiAggregateAlertQueryRequest {
    if (!('dateRanges' in value) || value['dateRanges'] === undefined) return false;
    if (!('exclude' in value) || value['exclude'] === undefined) return false;
    if (!('field' in value) || value['field'] === undefined) return false;
    if (!('filter' in value) || value['filter'] === undefined) return false;
    if (!('from' in value) || value['from'] === undefined) return false;
    if (!('include' in value) || value['include'] === undefined) return false;
    if (!('interval' in value) || value['interval'] === undefined) return false;
    if (!('missing' in value) || value['missing'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('q' in value) || value['q'] === undefined) return false;
    if (!('ranges' in value) || value['ranges'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('sort' in value) || value['sort'] === undefined) return false;
    if (!('subAggregates' in value) || value['subAggregates'] === undefined) return false;
    if (!('timeZone' in value) || value['timeZone'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function DetectsapiAggregateAlertQueryRequestFromJSON(json: any): DetectsapiAggregateAlertQueryRequest {
    return DetectsapiAggregateAlertQueryRequestFromJSONTyped(json, false);
}

export function DetectsapiAggregateAlertQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectsapiAggregateAlertQueryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'dateRanges': ((json['date_ranges'] as Array<any>).map(MsaDateRangeSpecFromJSON)),
        'exclude': json['exclude'],
        'field': json['field'],
        'filter': json['filter'],
        'from': json['from'],
        'include': json['include'],
        'interval': json['interval'],
        'maxDocCount': json['max_doc_count'] == null ? undefined : json['max_doc_count'],
        'minDocCount': json['min_doc_count'] == null ? undefined : json['min_doc_count'],
        'missing': json['missing'],
        'name': json['name'],
        'q': json['q'],
        'ranges': ((json['ranges'] as Array<any>).map(MsaRangeSpecFromJSON)),
        'size': json['size'],
        'sort': json['sort'],
        'subAggregates': ((json['sub_aggregates'] as Array<any>).map(DetectsapiAggregateAlertQueryRequestFromJSON)),
        'timeZone': json['time_zone'],
        'type': json['type'],
    };
}

export function DetectsapiAggregateAlertQueryRequestToJSON(value?: DetectsapiAggregateAlertQueryRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date_ranges': ((value['dateRanges'] as Array<any>).map(MsaDateRangeSpecToJSON)),
        'exclude': value['exclude'],
        'field': value['field'],
        'filter': value['filter'],
        'from': value['from'],
        'include': value['include'],
        'interval': value['interval'],
        'max_doc_count': value['maxDocCount'],
        'min_doc_count': value['minDocCount'],
        'missing': value['missing'],
        'name': value['name'],
        'q': value['q'],
        'ranges': ((value['ranges'] as Array<any>).map(MsaRangeSpecToJSON)),
        'size': value['size'],
        'sort': value['sort'],
        'sub_aggregates': ((value['subAggregates'] as Array<any>).map(DetectsapiAggregateAlertQueryRequestToJSON)),
        'time_zone': value['timeZone'],
        'type': value['type'],
    };
}

