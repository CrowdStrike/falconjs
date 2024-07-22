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
import type { DomainExternalAssetCertificate } from './DomainExternalAssetCertificate';
import {
    DomainExternalAssetCertificateFromJSON,
    DomainExternalAssetCertificateFromJSONTyped,
    DomainExternalAssetCertificateToJSON,
} from './DomainExternalAssetCertificate';
import type { DomainCipher } from './DomainCipher';
import {
    DomainCipherFromJSON,
    DomainCipherFromJSONTyped,
    DomainCipherToJSON,
} from './DomainCipher';

/**
 * 
 * @export
 * @interface DomainExternalAssetSSLRecord
 */
export interface DomainExternalAssetSSLRecord {
    /**
     * 
     * @type {string}
     * @memberof DomainExternalAssetSSLRecord
     */
    alpn?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainExternalAssetSSLRecord
     */
    alternativeName?: string;
    /**
     * 
     * @type {DomainExternalAssetCertificate}
     * @memberof DomainExternalAssetSSLRecord
     */
    certificate?: DomainExternalAssetCertificate;
    /**
     * 
     * @type {Array<DomainCipher>}
     * @memberof DomainExternalAssetSSLRecord
     */
    cipherSuites?: Array<DomainCipher>;
    /**
     * 
     * @type {string}
     * @memberof DomainExternalAssetSSLRecord
     */
    ja3s?: string;
    /**
     * 
     * @type {string}
     * @memberof DomainExternalAssetSSLRecord
     */
    jarm?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainExternalAssetSSLRecord
     */
    supportedVersions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DomainExternalAssetSSLRecord
     */
    version?: string;
}

/**
 * Check if a given object implements the DomainExternalAssetSSLRecord interface.
 */
export function instanceOfDomainExternalAssetSSLRecord(value: object): value is DomainExternalAssetSSLRecord {
    return true;
}

export function DomainExternalAssetSSLRecordFromJSON(json: any): DomainExternalAssetSSLRecord {
    return DomainExternalAssetSSLRecordFromJSONTyped(json, false);
}

export function DomainExternalAssetSSLRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExternalAssetSSLRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'alpn': json['alpn'] == null ? undefined : json['alpn'],
        'alternativeName': json['alternative_name'] == null ? undefined : json['alternative_name'],
        'certificate': json['certificate'] == null ? undefined : DomainExternalAssetCertificateFromJSON(json['certificate']),
        'cipherSuites': json['cipher_suites'] == null ? undefined : ((json['cipher_suites'] as Array<any>).map(DomainCipherFromJSON)),
        'ja3s': json['ja3s'] == null ? undefined : json['ja3s'],
        'jarm': json['jarm'] == null ? undefined : json['jarm'],
        'supportedVersions': json['supported_versions'] == null ? undefined : json['supported_versions'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function DomainExternalAssetSSLRecordToJSON(value?: DomainExternalAssetSSLRecord | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'alpn': value['alpn'],
        'alternative_name': value['alternativeName'],
        'certificate': DomainExternalAssetCertificateToJSON(value['certificate']),
        'cipher_suites': value['cipherSuites'] == null ? undefined : ((value['cipherSuites'] as Array<any>).map(DomainCipherToJSON)),
        'ja3s': value['ja3s'],
        'jarm': value['jarm'],
        'supported_versions': value['supportedVersions'],
        'version': value['version'],
    };
}

