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
 * @interface ModelsAWSAccountRequestV1
 */
export interface ModelsAWSAccountRequestV1 {
    /**
     * The 12 digit AWS account which is hosting the S3 bucket containing cloudtrail logs for this account. If this field is set, it takes precedence of the settings level field.
     * @type {string}
     * @memberof ModelsAWSAccountRequestV1
     */
    cloudtrailBucketOwnerId?: string;
    /**
     * Region where the S3 bucket containing cloudtrail logs resides.
     * @type {string}
     * @memberof ModelsAWSAccountRequestV1
     */
    cloudtrailBucketRegion?: string;
    /**
     * ID assigned for use with cross account IAM role access.
     * @type {string}
     * @memberof ModelsAWSAccountRequestV1
     */
    externalId?: string;
    /**
     * The full arn of the IAM role created in this account to control access.
     * @type {string}
     * @memberof ModelsAWSAccountRequestV1
     */
    iamRoleArn?: string;
    /**
     * 12 digit AWS provided unique identifier for the account.
     * @type {string}
     * @memberof ModelsAWSAccountRequestV1
     */
    id?: string;
    /**
     * Rate limiting setting to control the maximum number of requests that can be made within the rate_limit_time threshold.
     * @type {number}
     * @memberof ModelsAWSAccountRequestV1
     */
    rateLimitReqs?: number;
    /**
     * Rate limiting setting to control the number of seconds for which rate_limit_reqs applies.
     * @type {number}
     * @memberof ModelsAWSAccountRequestV1
     */
    rateLimitTime?: number;
}

/**
 * Check if a given object implements the ModelsAWSAccountRequestV1 interface.
 */
export function instanceOfModelsAWSAccountRequestV1(value: object): value is ModelsAWSAccountRequestV1 {
    return true;
}

export function ModelsAWSAccountRequestV1FromJSON(json: any): ModelsAWSAccountRequestV1 {
    return ModelsAWSAccountRequestV1FromJSONTyped(json, false);
}

export function ModelsAWSAccountRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAWSAccountRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'cloudtrailBucketOwnerId': json['cloudtrail_bucket_owner_id'] == null ? undefined : json['cloudtrail_bucket_owner_id'],
        'cloudtrailBucketRegion': json['cloudtrail_bucket_region'] == null ? undefined : json['cloudtrail_bucket_region'],
        'externalId': json['external_id'] == null ? undefined : json['external_id'],
        'iamRoleArn': json['iam_role_arn'] == null ? undefined : json['iam_role_arn'],
        'id': json['id'] == null ? undefined : json['id'],
        'rateLimitReqs': json['rate_limit_reqs'] == null ? undefined : json['rate_limit_reqs'],
        'rateLimitTime': json['rate_limit_time'] == null ? undefined : json['rate_limit_time'],
    };
}

export function ModelsAWSAccountRequestV1ToJSON(value?: ModelsAWSAccountRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cloudtrail_bucket_owner_id': value['cloudtrailBucketOwnerId'],
        'cloudtrail_bucket_region': value['cloudtrailBucketRegion'],
        'external_id': value['externalId'],
        'iam_role_arn': value['iamRoleArn'],
        'id': value['id'],
        'rate_limit_reqs': value['rateLimitReqs'],
        'rate_limit_time': value['rateLimitTime'],
    };
}

