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
import type { ApiExposedDataRecordBotOperatingSystemV1 } from './ApiExposedDataRecordBotOperatingSystemV1';
import {
    ApiExposedDataRecordBotOperatingSystemV1FromJSON,
    ApiExposedDataRecordBotOperatingSystemV1FromJSONTyped,
    ApiExposedDataRecordBotOperatingSystemV1ToJSON,
} from './ApiExposedDataRecordBotOperatingSystemV1';
import type { ApiExposedDataRecordBotLocationV1 } from './ApiExposedDataRecordBotLocationV1';
import {
    ApiExposedDataRecordBotLocationV1FromJSON,
    ApiExposedDataRecordBotLocationV1FromJSONTyped,
    ApiExposedDataRecordBotLocationV1ToJSON,
} from './ApiExposedDataRecordBotLocationV1';

/**
 * 
 * @export
 * @interface ApiExposedDataRecordBotV1
 */
export interface ApiExposedDataRecordBotV1 {
    /**
     * 
     * @type {string}
     * @memberof ApiExposedDataRecordBotV1
     */
    botId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiExposedDataRecordBotV1
     */
    domainDetects?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ApiExposedDataRecordBotV1
     */
    infectionBuildId?: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiExposedDataRecordBotV1
     */
    infectionDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiExposedDataRecordBotV1
     */
    infectionPath?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiExposedDataRecordBotV1
     */
    ip?: string;
    /**
     * 
     * @type {ApiExposedDataRecordBotLocationV1}
     * @memberof ApiExposedDataRecordBotV1
     */
    location?: ApiExposedDataRecordBotLocationV1;
    /**
     * 
     * @type {ApiExposedDataRecordBotOperatingSystemV1}
     * @memberof ApiExposedDataRecordBotV1
     */
    operatingSystem?: ApiExposedDataRecordBotOperatingSystemV1;
}

/**
 * Check if a given object implements the ApiExposedDataRecordBotV1 interface.
 */
export function instanceOfApiExposedDataRecordBotV1(value: object): value is ApiExposedDataRecordBotV1 {
    return true;
}

export function ApiExposedDataRecordBotV1FromJSON(json: any): ApiExposedDataRecordBotV1 {
    return ApiExposedDataRecordBotV1FromJSONTyped(json, false);
}

export function ApiExposedDataRecordBotV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiExposedDataRecordBotV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'botId': json['bot_id'] == null ? undefined : json['bot_id'],
        'domainDetects': json['domain_detects'] == null ? undefined : json['domain_detects'],
        'infectionBuildId': json['infection_build_id'] == null ? undefined : json['infection_build_id'],
        'infectionDate': json['infection_date'] == null ? undefined : (new Date(json['infection_date'])),
        'infectionPath': json['infection_path'] == null ? undefined : json['infection_path'],
        'ip': json['ip'] == null ? undefined : json['ip'],
        'location': json['location'] == null ? undefined : ApiExposedDataRecordBotLocationV1FromJSON(json['location']),
        'operatingSystem': json['operating_system'] == null ? undefined : ApiExposedDataRecordBotOperatingSystemV1FromJSON(json['operating_system']),
    };
}

export function ApiExposedDataRecordBotV1ToJSON(value?: ApiExposedDataRecordBotV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bot_id': value['botId'],
        'domain_detects': value['domainDetects'],
        'infection_build_id': value['infectionBuildId'],
        'infection_date': value['infectionDate'] == null ? undefined : ((value['infectionDate']).toISOString()),
        'infection_path': value['infectionPath'],
        'ip': value['ip'],
        'location': ApiExposedDataRecordBotLocationV1ToJSON(value['location']),
        'operating_system': ApiExposedDataRecordBotOperatingSystemV1ToJSON(value['operatingSystem']),
    };
}

