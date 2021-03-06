/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ResponsesDeviceControlPolicyExceptionV1
 */
export interface ResponsesDeviceControlPolicyExceptionV1 {
    /**
     *
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    action: string;
    /**
     * USB Class ID to apply the exception. If empty it applies to all classes
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    _class: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    combinedId: string;
    /**
     * Unique identifier for an exception
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    matchMethod: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    productId: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    productName: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    serialNumber: string;
    /**
     * Hexadecimal VendorID used to apply the exception
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    vendorId: string;
    /**
     * Vendor Name
     * @type {string}
     * @memberof ResponsesDeviceControlPolicyExceptionV1
     */
    vendorName: string;
}

/**
 * Check if a given object implements the ResponsesDeviceControlPolicyExceptionV1 interface.
 */
export function instanceOfResponsesDeviceControlPolicyExceptionV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "_class" in value;
    isInstance = isInstance && "combinedId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "matchMethod" in value;
    isInstance = isInstance && "productId" in value;
    isInstance = isInstance && "productName" in value;
    isInstance = isInstance && "serialNumber" in value;
    isInstance = isInstance && "vendorId" in value;
    isInstance = isInstance && "vendorName" in value;

    return isInstance;
}

export function ResponsesDeviceControlPolicyExceptionV1FromJSON(json: any): ResponsesDeviceControlPolicyExceptionV1 {
    return ResponsesDeviceControlPolicyExceptionV1FromJSONTyped(json, false);
}

export function ResponsesDeviceControlPolicyExceptionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesDeviceControlPolicyExceptionV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        action: json["action"],
        _class: json["class"],
        combinedId: json["combined_id"],
        id: json["id"],
        matchMethod: json["match_method"],
        productId: json["product_id"],
        productName: json["product_name"],
        serialNumber: json["serial_number"],
        vendorId: json["vendor_id"],
        vendorName: json["vendor_name"],
    };
}

export function ResponsesDeviceControlPolicyExceptionV1ToJSON(value?: ResponsesDeviceControlPolicyExceptionV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        action: value.action,
        class: value._class,
        combined_id: value.combinedId,
        id: value.id,
        match_method: value.matchMethod,
        product_id: value.productId,
        product_name: value.productName,
        serial_number: value.serialNumber,
        vendor_id: value.vendorId,
        vendor_name: value.vendorName,
    };
}
