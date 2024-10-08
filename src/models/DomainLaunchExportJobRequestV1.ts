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
 * @interface DomainLaunchExportJobRequestV1
 */
export interface DomainLaunchExportJobRequestV1 {
    /**
     * The entity type. This can be one of: [`notification-exposed-data-record`, `historical-search-exposed-data-record`]
     * @type {string}
     * @memberof DomainLaunchExportJobRequestV1
     */
    entity: string;
    /**
     * The file type of the export. This can be one of: [`json`, `csv`]
     * @type {string}
     * @memberof DomainLaunchExportJobRequestV1
     */
    exportType: string;
    /**
     * FQL query to filter entities by. Possible filter properties depend on the entity type.
     * @type {string}
     * @memberof DomainLaunchExportJobRequestV1
     */
    filter: string;
    /**
     * If set to true (default), the field names in the exported file will resemble the table header in the UI (e.g. "Hash type"), otherwise the API level field names will be used (e.g. "hash_type")
     * @type {boolean}
     * @memberof DomainLaunchExportJobRequestV1
     */
    humanReadable: boolean;
    /**
     * Possible order by fields: created_timestamp, last_updated_timestamp. Ex: 'last_updated_timestamp|desc'
     * @type {string}
     * @memberof DomainLaunchExportJobRequestV1
     */
    sort?: string;
}

/**
 * Check if a given object implements the DomainLaunchExportJobRequestV1 interface.
 */
export function instanceOfDomainLaunchExportJobRequestV1(value: object): value is DomainLaunchExportJobRequestV1 {
    if (!("entity" in value) || value["entity"] === undefined) return false;
    if (!("exportType" in value) || value["exportType"] === undefined) return false;
    if (!("filter" in value) || value["filter"] === undefined) return false;
    if (!("humanReadable" in value) || value["humanReadable"] === undefined) return false;
    return true;
}

export function DomainLaunchExportJobRequestV1FromJSON(json: any): DomainLaunchExportJobRequestV1 {
    return DomainLaunchExportJobRequestV1FromJSONTyped(json, false);
}

export function DomainLaunchExportJobRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainLaunchExportJobRequestV1 {
    if (json == null) {
        return json;
    }
    return {
        entity: json["entity"],
        exportType: json["export_type"],
        filter: json["filter"],
        humanReadable: json["human_readable"],
        sort: json["sort"] == null ? undefined : json["sort"],
    };
}

export function DomainLaunchExportJobRequestV1ToJSON(value?: DomainLaunchExportJobRequestV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        entity: value["entity"],
        export_type: value["exportType"],
        filter: value["filter"],
        human_readable: value["humanReadable"],
        sort: value["sort"],
    };
}
