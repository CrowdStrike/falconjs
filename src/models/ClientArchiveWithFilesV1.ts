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
 * @interface ClientArchiveWithFilesV1
 */
export interface ClientArchiveWithFilesV1 {
    /**
     *
     * @type {string}
     * @memberof ClientArchiveWithFilesV1
     */
    error?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ClientArchiveWithFilesV1
     */
    files?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ClientArchiveWithFilesV1
     */
    mimeType: string;
    /**
     *
     * @type {string}
     * @memberof ClientArchiveWithFilesV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ClientArchiveWithFilesV1
     */
    sha256?: string;
    /**
     *
     * @type {number}
     * @memberof ClientArchiveWithFilesV1
     */
    size: number;
    /**
     *
     * @type {string}
     * @memberof ClientArchiveWithFilesV1
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof ClientArchiveWithFilesV1
     */
    uploadTimestamp: string;
}

/**
 * Check if a given object implements the ClientArchiveWithFilesV1 interface.
 */
export function instanceOfClientArchiveWithFilesV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mimeType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "uploadTimestamp" in value;

    return isInstance;
}

export function ClientArchiveWithFilesV1FromJSON(json: any): ClientArchiveWithFilesV1 {
    return ClientArchiveWithFilesV1FromJSONTyped(json, false);
}

export function ClientArchiveWithFilesV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientArchiveWithFilesV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        error: !exists(json, "error") ? undefined : json["error"],
        files: !exists(json, "files") ? undefined : json["files"],
        mimeType: json["mime_type"],
        name: json["name"],
        sha256: !exists(json, "sha256") ? undefined : json["sha256"],
        size: json["size"],
        status: json["status"],
        uploadTimestamp: json["upload_timestamp"],
    };
}

export function ClientArchiveWithFilesV1ToJSON(value?: ClientArchiveWithFilesV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        error: value.error,
        files: value.files,
        mime_type: value.mimeType,
        name: value.name,
        sha256: value.sha256,
        size: value.size,
        status: value.status,
        upload_timestamp: value.uploadTimestamp,
    };
}
