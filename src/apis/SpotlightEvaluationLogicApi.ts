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
import type { DomainSPAPIEvaluationLogicCombinedResponseV1, DomainSPAPIEvaluationLogicEntitiesResponseV1, DomainSPAPIQueryResponse, MsaReplyMetaOnly } from "../models/index";
import {
    DomainSPAPIEvaluationLogicCombinedResponseV1FromJSON,
    DomainSPAPIEvaluationLogicCombinedResponseV1ToJSON,
    DomainSPAPIEvaluationLogicEntitiesResponseV1FromJSON,
    DomainSPAPIEvaluationLogicEntitiesResponseV1ToJSON,
    DomainSPAPIQueryResponseFromJSON,
    DomainSPAPIQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface SpotlightEvaluationLogicApiCombinedQueryEvaluationLogicRequest {
    filter: string;
    after?: string;
    limit?: number;
    sort?: string;
}

export interface SpotlightEvaluationLogicApiGetEvaluationLogicRequest {
    ids: Array<string>;
}

export interface SpotlightEvaluationLogicApiQueryEvaluationLogicRequest {
    filter: string;
    after?: string;
    limit?: number;
    sort?: string;
}

/**
 *
 */
export class SpotlightEvaluationLogicApi extends runtime.BaseAPI {
    /**
     * Search for evaluation logic in your environment by providing a FQL filter and paging details. Returns a set of evaluation logic entities which match the filter criteria.
     */
    async combinedQueryEvaluationLogicRaw(
        requestParameters: SpotlightEvaluationLogicApiCombinedQueryEvaluationLogicRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainSPAPIEvaluationLogicCombinedResponseV1>> {
        if (requestParameters["filter"] == null) {
            throw new runtime.RequiredError("filter", 'Required parameter "filter" was null or undefined when calling combinedQueryEvaluationLogic().');
        }

        const queryParameters: any = {};

        if (requestParameters["after"] != null) {
            queryParameters["after"] = requestParameters["after"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
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
                path: `/spotlight/combined/evaluation-logic/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSPAPIEvaluationLogicCombinedResponseV1FromJSON(jsonValue));
    }

    /**
     * Search for evaluation logic in your environment by providing a FQL filter and paging details. Returns a set of evaluation logic entities which match the filter criteria.
     */
    async combinedQueryEvaluationLogic(
        filter: string,
        after?: string,
        limit?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DomainSPAPIEvaluationLogicCombinedResponseV1> {
        const response = await this.combinedQueryEvaluationLogicRaw({ filter: filter, after: after, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on evaluation logic items by providing one or more IDs.
     */
    async getEvaluationLogicRaw(
        requestParameters: SpotlightEvaluationLogicApiGetEvaluationLogicRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainSPAPIEvaluationLogicEntitiesResponseV1>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getEvaluationLogic().');
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
                path: `/spotlight/entities/evaluation-logic/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSPAPIEvaluationLogicEntitiesResponseV1FromJSON(jsonValue));
    }

    /**
     * Get details on evaluation logic items by providing one or more IDs.
     */
    async getEvaluationLogic(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainSPAPIEvaluationLogicEntitiesResponseV1> {
        const response = await this.getEvaluationLogicRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for evaluation logic in your environment by providing a FQL filter and paging details. Returns a set of evaluation logic IDs which match the filter criteria.
     */
    async queryEvaluationLogicRaw(
        requestParameters: SpotlightEvaluationLogicApiQueryEvaluationLogicRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainSPAPIQueryResponse>> {
        if (requestParameters["filter"] == null) {
            throw new runtime.RequiredError("filter", 'Required parameter "filter" was null or undefined when calling queryEvaluationLogic().');
        }

        const queryParameters: any = {};

        if (requestParameters["after"] != null) {
            queryParameters["after"] = requestParameters["after"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
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
                path: `/spotlight/queries/evaluation-logic/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSPAPIQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for evaluation logic in your environment by providing a FQL filter and paging details. Returns a set of evaluation logic IDs which match the filter criteria.
     */
    async queryEvaluationLogic(filter: string, after?: string, limit?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainSPAPIQueryResponse> {
        const response = await this.queryEvaluationLogicRaw({ filter: filter, after: after, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }
}
