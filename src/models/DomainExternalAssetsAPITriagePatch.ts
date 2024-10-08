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
 * @interface DomainExternalAssetsAPITriagePatch
 */
export interface DomainExternalAssetsAPITriagePatch {
    /**
     * The asset triage action.
     * @type {string}
     * @memberof DomainExternalAssetsAPITriagePatch
     */
    action?: string;
    /**
     * The user assigned to triage the asset.
     * @type {string}
     * @memberof DomainExternalAssetsAPITriagePatch
     */
    assignedTo?: string;
    /**
     * The asset triage description.
     * @type {string}
     * @memberof DomainExternalAssetsAPITriagePatch
     */
    description?: string;
    /**
     * The asset triage status.
     * @type {string}
     * @memberof DomainExternalAssetsAPITriagePatch
     */
    status?: string;
}

/**
 * Check if a given object implements the DomainExternalAssetsAPITriagePatch interface.
 */
export function instanceOfDomainExternalAssetsAPITriagePatch(value: object): value is DomainExternalAssetsAPITriagePatch {
    return true;
}

export function DomainExternalAssetsAPITriagePatchFromJSON(json: any): DomainExternalAssetsAPITriagePatch {
    return DomainExternalAssetsAPITriagePatchFromJSONTyped(json, false);
}

export function DomainExternalAssetsAPITriagePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExternalAssetsAPITriagePatch {
    if (json == null) {
        return json;
    }
    return {
        action: json["action"] == null ? undefined : json["action"],
        assignedTo: json["assigned_to"] == null ? undefined : json["assigned_to"],
        description: json["description"] == null ? undefined : json["description"],
        status: json["status"] == null ? undefined : json["status"],
    };
}

export function DomainExternalAssetsAPITriagePatchToJSON(value?: DomainExternalAssetsAPITriagePatch | null): any {
    if (value == null) {
        return value;
    }
    return {
        action: value["action"],
        assigned_to: value["assignedTo"],
        description: value["description"],
        status: value["status"],
    };
}
