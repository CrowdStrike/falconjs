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
 * @interface ApiPaging
 */
export interface ApiPaging {
    /**
     * number of records returned
     * @type {number}
     * @memberof ApiPaging
     */
    count?: number;
    /**
     * maximum number of records to return in a page
     * @type {number}
     * @memberof ApiPaging
     */
    limit?: number;
    /**
     * start key to list results of next page, used in list APIs
     * @type {string}
     * @memberof ApiPaging
     */
    next?: string;
    /**
     * index of the first record of the next page in search results
     * @type {number}
     * @memberof ApiPaging
     */
    offset?: number;
    /**
     * total number of records matching the filter criteria
     * @type {number}
     * @memberof ApiPaging
     */
    total?: number;
}

/**
 * Check if a given object implements the ApiPaging interface.
 */
export function instanceOfApiPaging(value: object): value is ApiPaging {
    return true;
}

export function ApiPagingFromJSON(json: any): ApiPaging {
    return ApiPagingFromJSONTyped(json, false);
}

export function ApiPagingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiPaging {
    if (json == null) {
        return json;
    }
    return {
        count: json["count"] == null ? undefined : json["count"],
        limit: json["limit"] == null ? undefined : json["limit"],
        next: json["next"] == null ? undefined : json["next"],
        offset: json["offset"] == null ? undefined : json["offset"],
        total: json["total"] == null ? undefined : json["total"],
    };
}

export function ApiPagingToJSON(value?: ApiPaging | null): any {
    if (value == null) {
        return value;
    }
    return {
        count: value["count"],
        limit: value["limit"],
        next: value["next"],
        offset: value["offset"],
        total: value["total"],
    };
}