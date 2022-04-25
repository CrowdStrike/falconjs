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

import * as runtime from "../runtime";
import {
    MsaAggregateQueryRequest,
    MsaAggregateQueryRequestFromJSON,
    MsaAggregateQueryRequestToJSON,
    MsaAggregatesResponse,
    MsaAggregatesResponseFromJSON,
    MsaAggregatesResponseToJSON,
    MsaFacetsResponse,
    MsaFacetsResponseFromJSON,
    MsaFacetsResponseToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface AggregatesDetectionsGlobalCountsRequest {
    filter: string;
}

export interface AggregatesEventsRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface AggregatesEventsCollectionsRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface AggregatesIncidentsGlobalCountsRequest {
    filter: string;
}

export interface AggregatesOWEventsGlobalCountsRequest {
    filter: string;
}

/**
 *
 */
export class OverwatchDashboardApi extends runtime.BaseAPI {
    /**
     * Get the total number of detections pushed across all customers
     */
    async aggregatesDetectionsGlobalCountsRaw(
        requestParameters: AggregatesDetectionsGlobalCountsRequest,
        initOverrides?: RequestInit | runtime.InitOverideFunction
    ): Promise<runtime.ApiResponse<MsaFacetsResponse>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError("filter", "Required parameter requestParameters.filter was null or undefined when calling aggregatesDetectionsGlobalCounts.");
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["overwatch-dashboard:read"]);
        }

        const response = await this.request(
            {
                path: `/overwatch-dashboards/aggregates/detections-global-counts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaFacetsResponseFromJSON(jsonValue));
    }

    /**
     * Get the total number of detections pushed across all customers
     */
    async aggregatesDetectionsGlobalCounts(filter: string, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MsaFacetsResponse> {
        const response = await this.aggregatesDetectionsGlobalCountsRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Get aggregate OverWatch detection event info by providing an aggregate query
     */
    async aggregatesEventsRaw(requestParameters: AggregatesEventsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling aggregatesEvents.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["overwatch-dashboard:read"]);
        }

        const response = await this.request(
            {
                path: `/overwatch-dashboards/aggregates/events/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Get aggregate OverWatch detection event info by providing an aggregate query
     */
    async aggregatesEvents(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.aggregatesEventsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get OverWatch detection event collection info by providing an aggregate query
     */
    async aggregatesEventsCollectionsRaw(
        requestParameters: AggregatesEventsCollectionsRequest,
        initOverrides?: RequestInit | runtime.InitOverideFunction
    ): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling aggregatesEventsCollections.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["overwatch-dashboard:read"]);
        }

        const response = await this.request(
            {
                path: `/overwatch-dashboards/aggregates/events-collections/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Get OverWatch detection event collection info by providing an aggregate query
     */
    async aggregatesEventsCollections(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.aggregatesEventsCollectionsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get the total number of incidents pushed across all customers
     */
    async aggregatesIncidentsGlobalCountsRaw(
        requestParameters: AggregatesIncidentsGlobalCountsRequest,
        initOverrides?: RequestInit | runtime.InitOverideFunction
    ): Promise<runtime.ApiResponse<MsaFacetsResponse>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError("filter", "Required parameter requestParameters.filter was null or undefined when calling aggregatesIncidentsGlobalCounts.");
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["overwatch-dashboard:read"]);
        }

        const response = await this.request(
            {
                path: `/overwatch-dashboards/aggregates/incidents-global-counts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaFacetsResponseFromJSON(jsonValue));
    }

    /**
     * Get the total number of incidents pushed across all customers
     */
    async aggregatesIncidentsGlobalCounts(filter: string, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MsaFacetsResponse> {
        const response = await this.aggregatesIncidentsGlobalCountsRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Get the total number of OverWatch events across all customers
     */
    async aggregatesOWEventsGlobalCountsRaw(
        requestParameters: AggregatesOWEventsGlobalCountsRequest,
        initOverrides?: RequestInit | runtime.InitOverideFunction
    ): Promise<runtime.ApiResponse<MsaFacetsResponse>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError("filter", "Required parameter requestParameters.filter was null or undefined when calling aggregatesOWEventsGlobalCounts.");
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["overwatch-dashboard:read"]);
        }

        const response = await this.request(
            {
                path: `/overwatch-dashboards/aggregates/ow-events-global-counts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaFacetsResponseFromJSON(jsonValue));
    }

    /**
     * Get the total number of OverWatch events across all customers
     */
    async aggregatesOWEventsGlobalCounts(filter: string, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MsaFacetsResponse> {
        const response = await this.aggregatesOWEventsGlobalCountsRaw({ filter: filter }, initOverrides);
        return await response.value();
    }
}
