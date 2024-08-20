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
 * @interface ModelsAWSCustomerSettingsRequestV1
 */
export interface ModelsAWSCustomerSettingsRequestV1 {
    /**
     * The 12 digit AWS account which is hosting the centralized S3 bucket of containing cloudtrail logs from multiple accounts.
     * @type {string}
     * @memberof ModelsAWSCustomerSettingsRequestV1
     */
    cloudtrailBucketOwnerId?: string;
    /**
     * By setting this value, all subsequent accounts that are provisioned will default to using this value as their external ID.
     * @type {string}
     * @memberof ModelsAWSCustomerSettingsRequestV1
     */
    staticExternalId?: string;
}

/**
 * Check if a given object implements the ModelsAWSCustomerSettingsRequestV1 interface.
 */
export function instanceOfModelsAWSCustomerSettingsRequestV1(value: object): value is ModelsAWSCustomerSettingsRequestV1 {
    return true;
}

export function ModelsAWSCustomerSettingsRequestV1FromJSON(json: any): ModelsAWSCustomerSettingsRequestV1 {
    return ModelsAWSCustomerSettingsRequestV1FromJSONTyped(json, false);
}

export function ModelsAWSCustomerSettingsRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAWSCustomerSettingsRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'cloudtrailBucketOwnerId': json['cloudtrail_bucket_owner_id'] == null ? undefined : json['cloudtrail_bucket_owner_id'],
        'staticExternalId': json['static_external_id'] == null ? undefined : json['static_external_id'],
    };
}

export function ModelsAWSCustomerSettingsRequestV1ToJSON(value?: ModelsAWSCustomerSettingsRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cloudtrail_bucket_owner_id': value['cloudtrailBucketOwnerId'],
        'static_external_id': value['staticExternalId'],
    };
}

