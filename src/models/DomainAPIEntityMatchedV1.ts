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
 * @interface DomainAPIEntityMatchedV1
 */
export interface DomainAPIEntityMatchedV1 {
    /**
     * 
     * @type {string}
     * @memberof DomainAPIEntityMatchedV1
     */
    assetId?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainAPIEntityMatchedV1
     */
    dataProvider?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainAPIEntityMatchedV1
     */
    providerAssetId?: string;
}

/**
 * Check if a given object implements the DomainAPIEntityMatchedV1 interface.
 */
export function instanceOfDomainAPIEntityMatchedV1(value: object): value is DomainAPIEntityMatchedV1 {
    return true;
}

export function DomainAPIEntityMatchedV1FromJSON(json: any): DomainAPIEntityMatchedV1 {
    return DomainAPIEntityMatchedV1FromJSONTyped(json, false);
}

export function DomainAPIEntityMatchedV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIEntityMatchedV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'assetId': json['asset_id'] == null ? undefined : json['asset_id'],
        'dataProvider': json['data_provider'] == null ? undefined : json['data_provider'],
        'providerAssetId': json['provider_asset_id'] == null ? undefined : json['provider_asset_id'],
    };
}

export function DomainAPIEntityMatchedV1ToJSON(value?: DomainAPIEntityMatchedV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'asset_id': value['assetId'],
        'data_provider': value['dataProvider'],
        'provider_asset_id': value['providerAssetId'],
    };
}

