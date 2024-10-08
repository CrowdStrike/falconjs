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

import * as runtime from "../runtime";
import type { IoaExclusionsIoaExclusionCreateReqV1, IoaExclusionsIoaExclusionUpdateReqV1, IoaExclusionsIoaExclusionsRespV1, MsaErrorsOnly, MsaQueryResponse, MsaReplyMetaOnly } from "../models/index";
import {
    IoaExclusionsIoaExclusionCreateReqV1FromJSON,
    IoaExclusionsIoaExclusionCreateReqV1ToJSON,
    IoaExclusionsIoaExclusionUpdateReqV1FromJSON,
    IoaExclusionsIoaExclusionUpdateReqV1ToJSON,
    IoaExclusionsIoaExclusionsRespV1FromJSON,
    IoaExclusionsIoaExclusionsRespV1ToJSON,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface IoaExclusionsApiCreateIOAExclusionsV1Request {
    body: IoaExclusionsIoaExclusionCreateReqV1;
}

export interface IoaExclusionsApiDeleteIOAExclusionsV1Request {
    ids: Array<string>;
    comment?: string;
}

export interface IoaExclusionsApiGetIOAExclusionsV1Request {
    ids: Array<string>;
}

export interface IoaExclusionsApiQueryIOAExclusionsV1Request {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryIOAExclusionsV1SortEnum;
}

export interface IoaExclusionsApiUpdateIOAExclusionsV1Request {
    body: IoaExclusionsIoaExclusionUpdateReqV1;
}

/**
 *
 */
export class IoaExclusionsApi extends runtime.BaseAPI {
    /**
     * Create the IOA exclusions
     */
    async createIOAExclusionsV1Raw(
        requestParameters: IoaExclusionsApiCreateIOAExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<IoaExclusionsIoaExclusionsRespV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling createIOAExclusionsV1().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/policy/entities/ioa-exclusions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: IoaExclusionsIoaExclusionCreateReqV1ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => IoaExclusionsIoaExclusionsRespV1FromJSON(jsonValue));
    }

    /**
     * Create the IOA exclusions
     */
    async createIOAExclusionsV1(body: IoaExclusionsIoaExclusionCreateReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IoaExclusionsIoaExclusionsRespV1> {
        const response = await this.createIOAExclusionsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete the IOA exclusions by id
     */
    async deleteIOAExclusionsV1Raw(
        requestParameters: IoaExclusionsApiDeleteIOAExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling deleteIOAExclusionsV1().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        if (requestParameters["comment"] != null) {
            queryParameters["comment"] = requestParameters["comment"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/policy/entities/ioa-exclusions/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete the IOA exclusions by id
     */
    async deleteIOAExclusionsV1(ids: Array<string>, comment?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.deleteIOAExclusionsV1Raw({ ids: ids, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Get a set of IOA Exclusions by specifying their IDs
     */
    async getIOAExclusionsV1Raw(
        requestParameters: IoaExclusionsApiGetIOAExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<IoaExclusionsIoaExclusionsRespV1>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getIOAExclusionsV1().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/policy/entities/ioa-exclusions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => IoaExclusionsIoaExclusionsRespV1FromJSON(jsonValue));
    }

    /**
     * Get a set of IOA Exclusions by specifying their IDs
     */
    async getIOAExclusionsV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IoaExclusionsIoaExclusionsRespV1> {
        const response = await this.getIOAExclusionsV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for IOA exclusions.
     */
    async queryIOAExclusionsV1Raw(
        requestParameters: IoaExclusionsApiQueryIOAExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/policy/queries/ioa-exclusions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for IOA exclusions.
     */
    async queryIOAExclusionsV1(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryIOAExclusionsV1SortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<MsaQueryResponse> {
        const response = await this.queryIOAExclusionsV1Raw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Update the IOA exclusions
     */
    async updateIOAExclusionsV1Raw(
        requestParameters: IoaExclusionsApiUpdateIOAExclusionsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<IoaExclusionsIoaExclusionsRespV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updateIOAExclusionsV1().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/policy/entities/ioa-exclusions/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: IoaExclusionsIoaExclusionUpdateReqV1ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => IoaExclusionsIoaExclusionsRespV1FromJSON(jsonValue));
    }

    /**
     * Update the IOA exclusions
     */
    async updateIOAExclusionsV1(body: IoaExclusionsIoaExclusionUpdateReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IoaExclusionsIoaExclusionsRespV1> {
        const response = await this.updateIOAExclusionsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const QueryIOAExclusionsV1SortEnum = {
    AppliedGloballyAsc: "applied_globally.asc",
    AppliedGloballyDesc: "applied_globally.desc",
    CreatedByAsc: "created_by.asc",
    CreatedByDesc: "created_by.desc",
    CreatedOnAsc: "created_on.asc",
    CreatedOnDesc: "created_on.desc",
    LastModifiedAsc: "last_modified.asc",
    LastModifiedDesc: "last_modified.desc",
    ModifiedByAsc: "modified_by.asc",
    ModifiedByDesc: "modified_by.desc",
    NameAsc: "name.asc",
    NameDesc: "name.desc",
    PatternIdAsc: "pattern_id.asc",
    PatternIdDesc: "pattern_id.desc",
    PatternNameAsc: "pattern_name.asc",
    PatternNameDesc: "pattern_name.desc",
} as const;
export type QueryIOAExclusionsV1SortEnum = (typeof QueryIOAExclusionsV1SortEnum)[keyof typeof QueryIOAExclusionsV1SortEnum];
