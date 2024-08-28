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
import type { IocapiResponseMeta } from "./IocapiResponseMeta";
import { IocapiResponseMetaFromJSON, IocapiResponseMetaFromJSONTyped, IocapiResponseMetaToJSON } from "./IocapiResponseMeta";
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";

/**
 *
 * @export
 * @interface IocapiMsaReplyDevicesRanOn
 */
export interface IocapiMsaReplyDevicesRanOn {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof IocapiMsaReplyDevicesRanOn
     */
    errors: Array<MsaAPIError>;
    /**
     *
     * @type {IocapiResponseMeta}
     * @memberof IocapiMsaReplyDevicesRanOn
     */
    meta: IocapiResponseMeta;
    /**
     *
     * @type {Array<string>}
     * @memberof IocapiMsaReplyDevicesRanOn
     */
    resources: Array<string>;
}

/**
 * Check if a given object implements the IocapiMsaReplyDevicesRanOn interface.
 */
export function instanceOfIocapiMsaReplyDevicesRanOn(value: object): value is IocapiMsaReplyDevicesRanOn {
    if (!("errors" in value) || value["errors"] === undefined) return false;
    if (!("meta" in value) || value["meta"] === undefined) return false;
    if (!("resources" in value) || value["resources"] === undefined) return false;
    return true;
}

export function IocapiMsaReplyDevicesRanOnFromJSON(json: any): IocapiMsaReplyDevicesRanOn {
    return IocapiMsaReplyDevicesRanOnFromJSONTyped(json, false);
}

export function IocapiMsaReplyDevicesRanOnFromJSONTyped(json: any, ignoreDiscriminator: boolean): IocapiMsaReplyDevicesRanOn {
    if (json == null) {
        return json;
    }
    return {
        errors: (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: IocapiResponseMetaFromJSON(json["meta"]),
        resources: json["resources"],
    };
}

export function IocapiMsaReplyDevicesRanOnToJSON(value?: IocapiMsaReplyDevicesRanOn | null): any {
    if (value == null) {
        return value;
    }
    return {
        errors: (value["errors"] as Array<any>).map(MsaAPIErrorToJSON),
        meta: IocapiResponseMetaToJSON(value["meta"]),
        resources: value["resources"],
    };
}
