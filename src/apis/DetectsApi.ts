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
    DomainDetectsEntitiesPatchRequest,
    DomainMsaDetectSummariesResponse,
    MsaAggregateQueryRequest,
    MsaAggregatesResponse,
    MsaIdsRequest,
    MsaQueryResponse,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    DomainDetectsEntitiesPatchRequestFromJSON,
    DomainDetectsEntitiesPatchRequestToJSON,
    DomainMsaDetectSummariesResponseFromJSON,
    DomainMsaDetectSummariesResponseToJSON,
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

export interface DetectsApiGetAggregateDetectsRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface DetectsApiGetDetectSummariesRequest {
    body: MsaIdsRequest;
}

export interface DetectsApiQueryDetectsRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
    q?: string;
}

export interface DetectsApiUpdateDetectsByIdsV2Request {
    body: DomainDetectsEntitiesPatchRequest;
}

/**
 *
 */
export class DetectsApi extends runtime.BaseAPI {
    /**
     * Get detect aggregates as specified via json in request body.
     */
    async getAggregateDetectsRaw(
        requestParameters: DetectsApiGetAggregateDetectsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling getAggregateDetects().');
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
                path: `/detects/aggregates/detects/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters["body"]!.map(MsaAggregateQueryRequestToJSON),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Get detect aggregates as specified via json in request body.
     */
    async getAggregateDetects(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.getAggregateDetectsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * View information about detections
     */
    async getDetectSummariesRaw(
        requestParameters: DetectsApiGetDetectSummariesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainMsaDetectSummariesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling getDetectSummaries().');
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
                path: `/detects/entities/summaries/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaDetectSummariesResponseFromJSON(jsonValue));
    }

    /**
     * View information about detections
     */
    async getDetectSummaries(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainMsaDetectSummariesResponse> {
        const response = await this.getDetectSummariesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search for detection IDs that match a given query
     */
    async queryDetectsRaw(requestParameters: DetectsApiQueryDetectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
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
                path: `/detects/queries/detects/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for detection IDs that match a given query
     */
    async queryDetects(offset?: number, limit?: number, sort?: string, filter?: string, q?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryDetectsRaw({ offset: offset, limit: limit, sort: sort, filter: filter, q: q }, initOverrides);
        return await response.value();
    }

    /**
     * Modify the state, assignee, and visibility of detections
     */
    async updateDetectsByIdsV2Raw(
        requestParameters: DetectsApiUpdateDetectsByIdsV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updateDetectsByIdsV2().');
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
                path: `/detects/entities/detects/v2`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DomainDetectsEntitiesPatchRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Modify the state, assignee, and visibility of detections
     */
    async updateDetectsByIdsV2(body: DomainDetectsEntitiesPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.updateDetectsByIdsV2Raw({ body: body }, initOverrides);
        return await response.value();
    }
}
