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
import type {
    DomainEntitiesPatchRequest,
    DomainMsaQfResponse,
    DomainQueriesPatchRequest,
    MsaAggregateQueryRequest,
    MsaAggregatesResponse,
    MsaIdsRequest,
    MsaQueryResponse,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    DomainEntitiesPatchRequestFromJSON,
    DomainEntitiesPatchRequestToJSON,
    DomainMsaQfResponseFromJSON,
    DomainMsaQfResponseToJSON,
    DomainQueriesPatchRequestFromJSON,
    DomainQueriesPatchRequestToJSON,
    MsaAggregateQueryRequestFromJSON,
    MsaAggregateQueryRequestToJSON,
    MsaAggregatesResponseFromJSON,
    MsaAggregatesResponseToJSON,
    MsaIdsRequestFromJSON,
    MsaIdsRequestToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface QuarantineApiActionUpdateCountRequest {
    filter: string;
}

export interface QuarantineApiGetAggregateFilesRequest {
    body: MsaAggregateQueryRequest;
}

export interface QuarantineApiGetQuarantineFilesRequest {
    body: MsaIdsRequest;
}

export interface QuarantineApiQueryQuarantineFilesRequest {
    offset?: string;
    limit?: number;
    sort?: string;
    filter?: string;
    q?: string;
}

export interface QuarantineApiUpdateQfByQueryRequest {
    body: DomainQueriesPatchRequest;
}

export interface QuarantineApiUpdateQuarantinedDetectsByIdsRequest {
    body: DomainEntitiesPatchRequest;
}

/**
 *
 */
export class QuarantineApi extends runtime.BaseAPI {
    /**
     * Returns count of potentially affected quarantined files for each action.
     */
    async actionUpdateCountRaw(
        requestParameters: QuarantineApiActionUpdateCountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters["filter"] == null) {
            throw new runtime.RequiredError("filter", 'Required parameter "filter" was null or undefined when calling actionUpdateCount().');
        }

        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/quarantine/aggregates/action-update-count/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Returns count of potentially affected quarantined files for each action.
     */
    async actionUpdateCount(filter: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.actionUpdateCountRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Get quarantine file aggregates as specified via json in request body.
     */
    async getAggregateFilesRaw(
        requestParameters: QuarantineApiGetAggregateFilesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling getAggregateFiles().');
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
                path: `/quarantine/aggregates/quarantined-files/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaAggregateQueryRequestToJSON(requestParameters["body"]),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Get quarantine file aggregates as specified via json in request body.
     */
    async getAggregateFiles(body: MsaAggregateQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.getAggregateFilesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get quarantine file metadata for specified ids.
     */
    async getQuarantineFilesRaw(
        requestParameters: QuarantineApiGetQuarantineFilesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DomainMsaQfResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling getQuarantineFiles().');
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
                path: `/quarantine/entities/quarantined-files/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaQfResponseFromJSON(jsonValue));
    }

    /**
     * Get quarantine file metadata for specified ids.
     */
    async getQuarantineFiles(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainMsaQfResponse> {
        const response = await this.getQuarantineFilesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get quarantine file ids that match the provided filter criteria.
     */
    async queryQuarantineFilesRaw(
        requestParameters: QuarantineApiQueryQuarantineFilesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["q"] != null) {
            queryParameters["q"] = requestParameters["q"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/quarantine/queries/quarantined-files/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get quarantine file ids that match the provided filter criteria.
     */
    async queryQuarantineFiles(offset?: string, limit?: number, sort?: string, filter?: string, q?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryQuarantineFilesRaw({ offset: offset, limit: limit, sort: sort, filter: filter, q: q }, initOverrides);
        return await response.value();
    }

    /**
     * Apply quarantine file actions by query.
     */
    async updateQfByQueryRaw(requestParameters: QuarantineApiUpdateQfByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updateQfByQuery().');
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
                path: `/quarantine/queries/quarantined-files/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DomainQueriesPatchRequestToJSON(requestParameters["body"]),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Apply quarantine file actions by query.
     */
    async updateQfByQuery(body: DomainQueriesPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.updateQfByQueryRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Apply action by quarantine file ids
     */
    async updateQuarantinedDetectsByIdsRaw(
        requestParameters: QuarantineApiUpdateQuarantinedDetectsByIdsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updateQuarantinedDetectsByIds().');
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
                path: `/quarantine/entities/quarantined-files/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DomainEntitiesPatchRequestToJSON(requestParameters["body"]),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Apply action by quarantine file ids
     */
    async updateQuarantinedDetectsByIds(body: DomainEntitiesPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.updateQuarantinedDetectsByIdsRaw({ body: body }, initOverrides);
        return await response.value();
    }
}
