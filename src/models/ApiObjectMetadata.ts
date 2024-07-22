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
 * @interface ApiObjectMetadata
 */
export interface ApiObjectMetadata {
    /**
     * 
     * @type {string}
     * @memberof ApiObjectMetadata
     */
    collectionName: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiObjectMetadata
     */
    lastModifiedTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiObjectMetadata
     */
    namespace: string;
    /**
     * 
     * @type {string}
     * @memberof ApiObjectMetadata
     */
    objectKey: string;
    /**
     * 
     * @type {string}
     * @memberof ApiObjectMetadata
     */
    schemaVersion: string;
}

/**
 * Check if a given object implements the ApiObjectMetadata interface.
 */
export function instanceOfApiObjectMetadata(value: object): value is ApiObjectMetadata {
    if (!('collectionName' in value) || value['collectionName'] === undefined) return false;
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    if (!('objectKey' in value) || value['objectKey'] === undefined) return false;
    if (!('schemaVersion' in value) || value['schemaVersion'] === undefined) return false;
    return true;
}

export function ApiObjectMetadataFromJSON(json: any): ApiObjectMetadata {
    return ApiObjectMetadataFromJSONTyped(json, false);
}

export function ApiObjectMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiObjectMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'collectionName': json['collection_name'],
        'lastModifiedTime': json['last_modified_time'] == null ? undefined : (new Date(json['last_modified_time'])),
        'namespace': json['namespace'],
        'objectKey': json['object_key'],
        'schemaVersion': json['schema_version'],
    };
}

export function ApiObjectMetadataToJSON(value?: ApiObjectMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'collection_name': value['collectionName'],
        'last_modified_time': value['lastModifiedTime'] == null ? undefined : ((value['lastModifiedTime']).toISOString()),
        'namespace': value['namespace'],
        'object_key': value['objectKey'],
        'schema_version': value['schemaVersion'],
    };
}

