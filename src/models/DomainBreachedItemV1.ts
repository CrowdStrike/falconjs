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
 * @interface DomainBreachedItemV1
 */
export interface DomainBreachedItemV1 {
    /**
     * The domain associated with the breached account.
     * @type {string}
     * @memberof DomainBreachedItemV1
     */
    domain: string;
    /**
     * The email of the breached account.
     * @type {string}
     * @memberof DomainBreachedItemV1
     */
    email: string;
    /**
     * The original hashing algorithm applied to the breached password. Possible values: 'plain', 'unknown', 'base64', 'md5', 'sha1', 'bcrypt', etc. The value 'plain' means that the password was originally found as plaintext.
     * @type {string}
     * @memberof DomainBreachedItemV1
     */
    hashType: string;
    /**
     * The username of the breached account.
     * @type {string}
     * @memberof DomainBreachedItemV1
     */
    loginId: string;
    /**
     * The name of the person associated with the breached account.
     * @type {string}
     * @memberof DomainBreachedItemV1
     */
    name: string;
    /**
     * The breached password. Passwords are returned as salted hashes, generated using the SHA256 algorithm and the CID as the salt.
     * @type {string}
     * @memberof DomainBreachedItemV1
     */
    password: string;
    /**
     * The phone number of the person associated with the breached account.
     * @type {string}
     * @memberof DomainBreachedItemV1
     */
    phone: string;
}

/**
 * Check if a given object implements the DomainBreachedItemV1 interface.
 */
export function instanceOfDomainBreachedItemV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "hashType" in value;
    isInstance = isInstance && "loginId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "phone" in value;

    return isInstance;
}

export function DomainBreachedItemV1FromJSON(json: any): DomainBreachedItemV1 {
    return DomainBreachedItemV1FromJSONTyped(json, false);
}

export function DomainBreachedItemV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBreachedItemV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        domain: json["domain"],
        email: json["email"],
        hashType: json["hash_type"],
        loginId: json["login_id"],
        name: json["name"],
        password: json["password"],
        phone: json["phone"],
    };
}

export function DomainBreachedItemV1ToJSON(value?: DomainBreachedItemV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        domain: value.domain,
        email: value.email,
        hash_type: value.hashType,
        login_id: value.loginId,
        name: value.name,
        password: value.password,
        phone: value.phone,
    };
}
