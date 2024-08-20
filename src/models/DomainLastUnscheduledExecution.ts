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
 * @interface DomainLastUnscheduledExecution
 */
export interface DomainLastUnscheduledExecution {
    /**
     * 
     * @type {string}
     * @memberof DomainLastUnscheduledExecution
     */
    activityStatus: string;
    /**
     * 
     * @type {string}
     * @memberof DomainLastUnscheduledExecution
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof DomainLastUnscheduledExecution
     */
    lastUpdatedTs: Date;
    /**
     * 
     * @type {string}
     * @memberof DomainLastUnscheduledExecution
     */
    statusDisplay: string;
}

/**
 * Check if a given object implements the DomainLastUnscheduledExecution interface.
 */
export function instanceOfDomainLastUnscheduledExecution(value: object): value is DomainLastUnscheduledExecution {
    if (!('activityStatus' in value) || value['activityStatus'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('lastUpdatedTs' in value) || value['lastUpdatedTs'] === undefined) return false;
    if (!('statusDisplay' in value) || value['statusDisplay'] === undefined) return false;
    return true;
}

export function DomainLastUnscheduledExecutionFromJSON(json: any): DomainLastUnscheduledExecution {
    return DomainLastUnscheduledExecutionFromJSONTyped(json, false);
}

export function DomainLastUnscheduledExecutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainLastUnscheduledExecution {
    if (json == null) {
        return json;
    }
    return {
        
        'activityStatus': json['activity_status'],
        'id': json['id'],
        'lastUpdatedTs': (new Date(json['last_updated_ts'])),
        'statusDisplay': json['status_display'],
    };
}

export function DomainLastUnscheduledExecutionToJSON(value?: DomainLastUnscheduledExecution | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'activity_status': value['activityStatus'],
        'id': value['id'],
        'last_updated_ts': ((value['lastUpdatedTs']).toISOString()),
        'status_display': value['statusDisplay'],
    };
}

