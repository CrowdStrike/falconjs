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


import * as runtime from '../runtime';
import type {
  DomainReportExecutionLaunchRequestV1,
  DomainReportExecutionsResponseV1,
  DomainScheduledReportsResultV1,
  MsaQueryResponse,
  MsaReplyMetaOnly,
} from '../models/index';
import {
    DomainReportExecutionLaunchRequestV1FromJSON,
    DomainReportExecutionLaunchRequestV1ToJSON,
    DomainReportExecutionsResponseV1FromJSON,
    DomainReportExecutionsResponseV1ToJSON,
    DomainScheduledReportsResultV1FromJSON,
    DomainScheduledReportsResultV1ToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from '../models/index';

export interface ExecuteRequest {
    body: Array<DomainReportExecutionLaunchRequestV1>;
}

export interface QueryRequest {
    sort?: string;
    filter?: string;
    q?: string;
    offset?: string;
    limit?: number;
}

export interface QueryByIdRequest {
    ids: Array<string>;
}

/**
 * 
 */
export class ScheduledReportsApi extends runtime.BaseAPI {

    /**
     * Launch scheduled reports executions for the provided report IDs.
     */
    async executeRaw(requestParameters: ExecuteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainReportExecutionsResponseV1>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling execute().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/reports/entities/scheduled-reports/execution/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body']!.map(DomainReportExecutionLaunchRequestV1ToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainReportExecutionsResponseV1FromJSON(jsonValue));
    }

    /**
     * Launch scheduled reports executions for the provided report IDs.
     */
    async execute(body: Array<DomainReportExecutionLaunchRequestV1>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainReportExecutionsResponseV1> {
        const response = await this.executeRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Find all report IDs matching the query with filter
     */
    async queryRaw(requestParameters: QueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/reports/queries/scheduled-reports/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Find all report IDs matching the query with filter
     */
    async query(sort?: string, filter?: string, q?: string, offset?: string, limit?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryRaw({ sort: sort, filter: filter, q: q, offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve scheduled reports for the provided report IDs.
     */
    async queryByIdRaw(requestParameters: QueryByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainScheduledReportsResultV1>> {
        if (requestParameters['ids'] == null) {
            throw new runtime.RequiredError(
                'ids',
                'Required parameter "ids" was null or undefined when calling queryById().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/reports/entities/scheduled-reports/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainScheduledReportsResultV1FromJSON(jsonValue));
    }

    /**
     * Retrieve scheduled reports for the provided report IDs.
     */
    async queryById(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainScheduledReportsResultV1> {
        const response = await this.queryByIdRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

}
