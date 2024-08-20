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
 * @interface ApiCertificateReqV1
 */
export interface ApiCertificateReqV1 {
    /**
     * 
     * @type {string}
     * @memberof ApiCertificateReqV1
     */
    issuer: string;
    /**
     * 
     * @type {string}
     * @memberof ApiCertificateReqV1
     */
    serial: string;
    /**
     * 
     * @type {string}
     * @memberof ApiCertificateReqV1
     */
    subject: string;
    /**
     * 
     * @type {string}
     * @memberof ApiCertificateReqV1
     */
    thumbprint: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiCertificateReqV1
     */
    validFrom: Date;
    /**
     * 
     * @type {Date}
     * @memberof ApiCertificateReqV1
     */
    validTo: Date;
}

/**
 * Check if a given object implements the ApiCertificateReqV1 interface.
 */
export function instanceOfApiCertificateReqV1(value: object): value is ApiCertificateReqV1 {
    if (!('issuer' in value) || value['issuer'] === undefined) return false;
    if (!('serial' in value) || value['serial'] === undefined) return false;
    if (!('subject' in value) || value['subject'] === undefined) return false;
    if (!('thumbprint' in value) || value['thumbprint'] === undefined) return false;
    if (!('validFrom' in value) || value['validFrom'] === undefined) return false;
    if (!('validTo' in value) || value['validTo'] === undefined) return false;
    return true;
}

export function ApiCertificateReqV1FromJSON(json: any): ApiCertificateReqV1 {
    return ApiCertificateReqV1FromJSONTyped(json, false);
}

export function ApiCertificateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCertificateReqV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'issuer': json['issuer'],
        'serial': json['serial'],
        'subject': json['subject'],
        'thumbprint': json['thumbprint'],
        'validFrom': (new Date(json['valid_from'])),
        'validTo': (new Date(json['valid_to'])),
    };
}

export function ApiCertificateReqV1ToJSON(value?: ApiCertificateReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'issuer': value['issuer'],
        'serial': value['serial'],
        'subject': value['subject'],
        'thumbprint': value['thumbprint'],
        'valid_from': ((value['validFrom']).toISOString()),
        'valid_to': ((value['validTo']).toISOString()),
    };
}

