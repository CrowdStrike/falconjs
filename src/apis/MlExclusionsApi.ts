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
  ExclusionsCreateReqV1,
  ExclusionsRespV1,
  MsaErrorsOnly,
  MsaQueryResponse,
  MsaReplyMetaOnly,
  SvExclusionsUpdateReqV1,
} from '../models/index';
import {
    ExclusionsCreateReqV1FromJSON,
    ExclusionsCreateReqV1ToJSON,
    ExclusionsRespV1FromJSON,
    ExclusionsRespV1ToJSON,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    SvExclusionsUpdateReqV1FromJSON,
    SvExclusionsUpdateReqV1ToJSON,
} from '../models/index';

export interface CreateMLExclusionsV1Request {
    body: ExclusionsCreateReqV1;
}

export interface DeleteMLExclusionsV1Request {
    ids: Array<string>;
    comment?: string;
}

export interface GetMLExclusionsV1Request {
    ids: Array<string>;
}

export interface QueryMLExclusionsV1Request {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryMLExclusionsV1SortEnum;
}

export interface UpdateMLExclusionsV1Request {
    body: SvExclusionsUpdateReqV1;
}

/**
 * 
 */
export class MlExclusionsApi extends runtime.BaseAPI {

    /**
     * Create the ML exclusions
     */
    async createMLExclusionsV1Raw(requestParameters: CreateMLExclusionsV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExclusionsRespV1>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createMLExclusionsV1().'
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
            path: `/policy/entities/ml-exclusions/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExclusionsCreateReqV1ToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExclusionsRespV1FromJSON(jsonValue));
    }

    /**
     * Create the ML exclusions
     */
    async createMLExclusionsV1(body: ExclusionsCreateReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExclusionsRespV1> {
        const response = await this.createMLExclusionsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete the ML exclusions by id
     */
    async deleteMLExclusionsV1Raw(requestParameters: DeleteMLExclusionsV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExclusionsRespV1>> {
        if (requestParameters['ids'] == null) {
            throw new runtime.RequiredError(
                'ids',
                'Required parameter "ids" was null or undefined when calling deleteMLExclusionsV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        if (requestParameters['comment'] != null) {
            queryParameters['comment'] = requestParameters['comment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/policy/entities/ml-exclusions/v1`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExclusionsRespV1FromJSON(jsonValue));
    }

    /**
     * Delete the ML exclusions by id
     */
    async deleteMLExclusionsV1(ids: Array<string>, comment?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExclusionsRespV1> {
        const response = await this.deleteMLExclusionsV1Raw({ ids: ids, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Get a set of ML Exclusions by specifying their IDs
     */
    async getMLExclusionsV1Raw(requestParameters: GetMLExclusionsV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExclusionsRespV1>> {
        if (requestParameters['ids'] == null) {
            throw new runtime.RequiredError(
                'ids',
                'Required parameter "ids" was null or undefined when calling getMLExclusionsV1().'
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
            path: `/policy/entities/ml-exclusions/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExclusionsRespV1FromJSON(jsonValue));
    }

    /**
     * Get a set of ML Exclusions by specifying their IDs
     */
    async getMLExclusionsV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExclusionsRespV1> {
        const response = await this.getMLExclusionsV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for ML exclusions.
     */
    async queryMLExclusionsV1Raw(requestParameters: QueryMLExclusionsV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/policy/queries/ml-exclusions/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for ML exclusions.
     */
    async queryMLExclusionsV1(filter?: string, offset?: number, limit?: number, sort?: QueryMLExclusionsV1SortEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryMLExclusionsV1Raw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Update the ML exclusions
     */
    async updateMLExclusionsV1Raw(requestParameters: UpdateMLExclusionsV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExclusionsRespV1>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateMLExclusionsV1().'
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
            path: `/policy/entities/ml-exclusions/v1`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SvExclusionsUpdateReqV1ToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExclusionsRespV1FromJSON(jsonValue));
    }

    /**
     * Update the ML exclusions
     */
    async updateMLExclusionsV1(body: SvExclusionsUpdateReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExclusionsRespV1> {
        const response = await this.updateMLExclusionsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const QueryMLExclusionsV1SortEnum = {
    AppliedGloballyAsc: 'applied_globally.asc',
    AppliedGloballyDesc: 'applied_globally.desc',
    CreatedByAsc: 'created_by.asc',
    CreatedByDesc: 'created_by.desc',
    CreatedOnAsc: 'created_on.asc',
    CreatedOnDesc: 'created_on.desc',
    LastModifiedAsc: 'last_modified.asc',
    LastModifiedDesc: 'last_modified.desc',
    ModifiedByAsc: 'modified_by.asc',
    ModifiedByDesc: 'modified_by.desc',
    ValueAsc: 'value.asc',
    ValueDesc: 'value.desc'
} as const;
export type QueryMLExclusionsV1SortEnum = typeof QueryMLExclusionsV1SortEnum[keyof typeof QueryMLExclusionsV1SortEnum];
