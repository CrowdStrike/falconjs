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
 * @interface RegistrationAzureKeyV1
 */
export interface RegistrationAzureKeyV1 {
    /**
     * 
     * @type {string}
     * @memberof RegistrationAzureKeyV1
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAzureKeyV1
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAzureKeyV1
     */
    publicCertificate?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAzureKeyV1
     */
    publicCertificateRaw?: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationAzureKeyV1
     */
    tenantId: string;
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationAzureKeyV1
     */
    valid?: boolean;
}

/**
 * Check if a given object implements the RegistrationAzureKeyV1 interface.
 */
export function instanceOfRegistrationAzureKeyV1(value: object): value is RegistrationAzureKeyV1 {
    if (!('clientId' in value) || value['clientId'] === undefined) return false;
    if (!('tenantId' in value) || value['tenantId'] === undefined) return false;
    return true;
}

export function RegistrationAzureKeyV1FromJSON(json: any): RegistrationAzureKeyV1 {
    return RegistrationAzureKeyV1FromJSONTyped(json, false);
}

export function RegistrationAzureKeyV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationAzureKeyV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'clientId': json['client_id'],
        'endDate': json['end_date'] == null ? undefined : json['end_date'],
        'publicCertificate': json['public_certificate'] == null ? undefined : json['public_certificate'],
        'publicCertificateRaw': json['public_certificate_raw'] == null ? undefined : json['public_certificate_raw'],
        'tenantId': json['tenant_id'],
        'valid': json['valid'] == null ? undefined : json['valid'],
    };
}

export function RegistrationAzureKeyV1ToJSON(value?: RegistrationAzureKeyV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['clientId'],
        'end_date': value['endDate'],
        'public_certificate': value['publicCertificate'],
        'public_certificate_raw': value['publicCertificateRaw'],
        'tenant_id': value['tenantId'],
        'valid': value['valid'],
    };
}

