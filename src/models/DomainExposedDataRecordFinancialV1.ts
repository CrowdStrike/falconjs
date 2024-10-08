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
 * @interface DomainExposedDataRecordFinancialV1
 */
export interface DomainExposedDataRecordFinancialV1 {
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordFinancialV1
     */
    bankAccount: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordFinancialV1
     */
    creditCard: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainExposedDataRecordFinancialV1
     */
    cryptoCurrencyAddresses: Array<string>;
}

/**
 * Check if a given object implements the DomainExposedDataRecordFinancialV1 interface.
 */
export function instanceOfDomainExposedDataRecordFinancialV1(value: object): value is DomainExposedDataRecordFinancialV1 {
    if (!("bankAccount" in value) || value["bankAccount"] === undefined) return false;
    if (!("creditCard" in value) || value["creditCard"] === undefined) return false;
    if (!("cryptoCurrencyAddresses" in value) || value["cryptoCurrencyAddresses"] === undefined) return false;
    return true;
}

export function DomainExposedDataRecordFinancialV1FromJSON(json: any): DomainExposedDataRecordFinancialV1 {
    return DomainExposedDataRecordFinancialV1FromJSONTyped(json, false);
}

export function DomainExposedDataRecordFinancialV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExposedDataRecordFinancialV1 {
    if (json == null) {
        return json;
    }
    return {
        bankAccount: json["bank_account"],
        creditCard: json["credit_card"],
        cryptoCurrencyAddresses: json["crypto_currency_addresses"],
    };
}

export function DomainExposedDataRecordFinancialV1ToJSON(value?: DomainExposedDataRecordFinancialV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        bank_account: value["bankAccount"],
        credit_card: value["creditCard"],
        crypto_currency_addresses: value["cryptoCurrencyAddresses"],
    };
}
