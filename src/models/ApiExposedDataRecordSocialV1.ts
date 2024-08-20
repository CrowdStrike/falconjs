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
 * @interface ApiExposedDataRecordSocialV1
 */
export interface ApiExposedDataRecordSocialV1 {
    /**
     * AIM ID of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    aimId?: string;
    /**
     * Facebook ID of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    facebookId?: string;
    /**
     * ICQ ID of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    icqId?: string;
    /**
     * Instagram ID of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    instagramId?: string;
    /**
     * MSN ID of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    msnId?: string;
    /**
     * Skype ID of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    skypeId?: string;
    /**
     * Twitter ID of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    twitterId?: string;
    /**
     * VK ID of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    vkId?: string;
    /**
     * VK Access Token of the affected user
     * @type {string}
     * @memberof ApiExposedDataRecordSocialV1
     */
    vkToken?: string;
}

/**
 * Check if a given object implements the ApiExposedDataRecordSocialV1 interface.
 */
export function instanceOfApiExposedDataRecordSocialV1(value: object): value is ApiExposedDataRecordSocialV1 {
    return true;
}

export function ApiExposedDataRecordSocialV1FromJSON(json: any): ApiExposedDataRecordSocialV1 {
    return ApiExposedDataRecordSocialV1FromJSONTyped(json, false);
}

export function ApiExposedDataRecordSocialV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiExposedDataRecordSocialV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'aimId': json['aim_id'] == null ? undefined : json['aim_id'],
        'facebookId': json['facebook_id'] == null ? undefined : json['facebook_id'],
        'icqId': json['icq_id'] == null ? undefined : json['icq_id'],
        'instagramId': json['instagram_id'] == null ? undefined : json['instagram_id'],
        'msnId': json['msn_id'] == null ? undefined : json['msn_id'],
        'skypeId': json['skype_id'] == null ? undefined : json['skype_id'],
        'twitterId': json['twitter_id'] == null ? undefined : json['twitter_id'],
        'vkId': json['vk_id'] == null ? undefined : json['vk_id'],
        'vkToken': json['vk_token'] == null ? undefined : json['vk_token'],
    };
}

export function ApiExposedDataRecordSocialV1ToJSON(value?: ApiExposedDataRecordSocialV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'aim_id': value['aimId'],
        'facebook_id': value['facebookId'],
        'icq_id': value['icqId'],
        'instagram_id': value['instagramId'],
        'msn_id': value['msnId'],
        'skype_id': value['skypeId'],
        'twitter_id': value['twitterId'],
        'vk_id': value['vkId'],
        'vk_token': value['vkToken'],
    };
}

