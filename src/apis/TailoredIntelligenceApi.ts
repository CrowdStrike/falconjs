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
import type { DomainEventEntitiesResponse, DomainQueryResponse, DomainRuleEntitiesResponse, MsaIdsRequest, MsaReplyMetaOnly } from "../models/index";
import {
    DomainEventEntitiesResponseFromJSON,
    DomainEventEntitiesResponseToJSON,
    DomainQueryResponseFromJSON,
    DomainQueryResponseToJSON,
    DomainRuleEntitiesResponseFromJSON,
    DomainRuleEntitiesResponseToJSON,
    MsaIdsRequestFromJSON,
    MsaIdsRequestToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface TailoredIntelligenceApiGetEventsBodyRequest {
    id: string;
}

export interface TailoredIntelligenceApiGetEventsEntitiesRequest {
    body: MsaIdsRequest;
}

export interface TailoredIntelligenceApiGetRulesEntitiesRequest {
    body: MsaIdsRequest;
}

export interface TailoredIntelligenceApiQueryEventsRequest {
    offset?: string;
    limit?: number;
    sort?: string;
    filter?: string;
    q?: string;
}

export interface TailoredIntelligenceApiQueryRulesRequest {
    offset?: string;
    limit?: number;
    sort?: string;
    filter?: string;
    q?: string;
}

/**
 *
 */
export class TailoredIntelligenceApi extends runtime.BaseAPI {
    /**
     * Get event body for the provided event ID
     */
    async getEventsBodyRaw(requestParameters: TailoredIntelligenceApiGetEventsBodyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<number>>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError("id", 'Required parameter "id" was null or undefined when calling getEventsBody().');
        }

        const queryParameters: any = {};

        if (requestParameters["id"] != null) {
            queryParameters["id"] = requestParameters["id"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/ti/events/entities/events-full-body/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get event body for the provided event ID
     */
    async getEventsBody(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<number>> {
        const response = await this.getEventsBodyRaw({ id: id }, initOverrides);
        return await response.value();
    }

    /**
     * Get events entities for specified ids.
     */
    async getEventsEntitiesRaw(
        requestParameters: TailoredIntelligenceApiGetEventsEntitiesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainEventEntitiesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling getEventsEntities().');
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
                path: `/ti/events/entities/events/GET/v2`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainEventEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Get events entities for specified ids.
     */
    async getEventsEntities(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainEventEntitiesResponse> {
        const response = await this.getEventsEntitiesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get rules entities for specified ids.
     */
    async getRulesEntitiesRaw(
        requestParameters: TailoredIntelligenceApiGetRulesEntitiesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainRuleEntitiesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling getRulesEntities().');
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
                path: `/ti/rules/entities/rules/GET/v2`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainRuleEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Get rules entities for specified ids.
     */
    async getRulesEntities(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainRuleEntitiesResponse> {
        const response = await this.getRulesEntitiesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get events ids that match the provided filter criteria.
     */
    async queryEventsRaw(requestParameters: TailoredIntelligenceApiQueryEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainQueryResponse>> {
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
                path: `/ti/events/queries/events/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get events ids that match the provided filter criteria.
     */
    async queryEvents(offset?: string, limit?: number, sort?: string, filter?: string, q?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainQueryResponse> {
        const response = await this.queryEventsRaw({ offset: offset, limit: limit, sort: sort, filter: filter, q: q }, initOverrides);
        return await response.value();
    }

    /**
     * Get rules ids that match the provided filter criteria.
     */
    async queryRulesRaw(requestParameters: TailoredIntelligenceApiQueryRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainQueryResponse>> {
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
                path: `/ti/rules/queries/rules/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get rules ids that match the provided filter criteria.
     */
    async queryRules(offset?: string, limit?: number, sort?: string, filter?: string, q?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainQueryResponse> {
        const response = await this.queryRulesRaw({ offset: offset, limit: limit, sort: sort, filter: filter, q: q }, initOverrides);
        return await response.value();
    }
}
