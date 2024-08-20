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

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface DomainExternalAssetCertificateEntityIdentifiers
 */
export interface DomainExternalAssetCertificateEntityIdentifiers {
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    commonName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    countryName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    dnQualifier?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    domainComponent?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    generationQualifier?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    givenName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    localityName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    organizationName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    organizationalUnit?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    pseudonym?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    serialNumber?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    stateOrProvinceName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    streetAddress?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    surname?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificateEntityIdentifiers
     */
    userId?: string;
}

/**
 * Check if a given object implements the DomainExternalAssetCertificateEntityIdentifiers interface.
 */
export function instanceOfDomainExternalAssetCertificateEntityIdentifiers(value: object): value is DomainExternalAssetCertificateEntityIdentifiers {
    return true;
}

export function DomainExternalAssetCertificateEntityIdentifiersFromJSON(json: any): DomainExternalAssetCertificateEntityIdentifiers {
    return DomainExternalAssetCertificateEntityIdentifiersFromJSONTyped(json, false);
}

export function DomainExternalAssetCertificateEntityIdentifiersFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExternalAssetCertificateEntityIdentifiers {
    if (json == null) {
        return json;
    }
    return {
        commonName: json["common_name"] == null ? undefined : json["common_name"],
        countryName: json["country_name"] == null ? undefined : json["country_name"],
        dnQualifier: json["dn_qualifier"] == null ? undefined : json["dn_qualifier"],
        domainComponent: json["domain_component"] == null ? undefined : json["domain_component"],
        emailAddress: json["email_address"] == null ? undefined : json["email_address"],
        generationQualifier: json["generation_qualifier"] == null ? undefined : json["generation_qualifier"],
        givenName: json["given_name"] == null ? undefined : json["given_name"],
        localityName: json["locality_name"] == null ? undefined : json["locality_name"],
        organizationName: json["organization_name"] == null ? undefined : json["organization_name"],
        organizationalUnit: json["organizational_unit"] == null ? undefined : json["organizational_unit"],
        pseudonym: json["pseudonym"] == null ? undefined : json["pseudonym"],
        serialNumber: json["serial_number"] == null ? undefined : json["serial_number"],
        stateOrProvinceName: json["state_or_province_name"] == null ? undefined : json["state_or_province_name"],
        streetAddress: json["street_address"] == null ? undefined : json["street_address"],
        surname: json["surname"] == null ? undefined : json["surname"],
        userId: json["user_id"] == null ? undefined : json["user_id"],
    };
}

export function DomainExternalAssetCertificateEntityIdentifiersToJSON(value?: DomainExternalAssetCertificateEntityIdentifiers | null): any {
    if (value == null) {
        return value;
    }
    return {
        common_name: value["commonName"],
        country_name: value["countryName"],
        dn_qualifier: value["dnQualifier"],
        domain_component: value["domainComponent"],
        email_address: value["emailAddress"],
        generation_qualifier: value["generationQualifier"],
        given_name: value["givenName"],
        locality_name: value["localityName"],
        organization_name: value["organizationName"],
        organizational_unit: value["organizationalUnit"],
        pseudonym: value["pseudonym"],
        serial_number: value["serialNumber"],
        state_or_province_name: value["stateOrProvinceName"],
        street_address: value["streetAddress"],
        surname: value["surname"],
        user_id: value["userId"],
    };
}