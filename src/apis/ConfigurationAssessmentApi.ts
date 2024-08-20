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
import type { DomainAPICombinedFindingsResponseV1, DomainAPIRuleDetailsResponseV1, MsaReplyMetaOnly } from "../models/index";
import {
    DomainAPICombinedFindingsResponseV1FromJSON,
    DomainAPICombinedFindingsResponseV1ToJSON,
    DomainAPIRuleDetailsResponseV1FromJSON,
    DomainAPIRuleDetailsResponseV1ToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface ConfigurationAssessmentApiGetCombinedAssessmentsQueryRequest {
    filter: string;
    after?: string;
    limit?: number;
    sort?: string;
    facet?: Array<string>;
}

export interface ConfigurationAssessmentApiGetRuleDetailsRequest {
    ids: Array<string>;
}

/**
 *
 */
export class ConfigurationAssessmentApi extends runtime.BaseAPI {
    /**
     * Search for assessments in your environment by providing an FQL filter and paging details. Returns a set of HostFinding entities which match the filter criteria
     */
    async getCombinedAssessmentsQueryRaw(
        requestParameters: ConfigurationAssessmentApiGetCombinedAssessmentsQueryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DomainAPICombinedFindingsResponseV1>> {
        if (requestParameters["filter"] == null) {
            throw new runtime.RequiredError("filter", 'Required parameter "filter" was null or undefined when calling getCombinedAssessmentsQuery().');
        }

        const queryParameters: any = {};

        if (requestParameters["after"] != null) {
            queryParameters["after"] = requestParameters["after"];
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

        if (requestParameters["facet"] != null) {
            queryParameters["facet"] = requestParameters["facet"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/configuration-assessment/combined/assessments/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAPICombinedFindingsResponseV1FromJSON(jsonValue));
    }

    /**
     * Search for assessments in your environment by providing an FQL filter and paging details. Returns a set of HostFinding entities which match the filter criteria
     */
    async getCombinedAssessmentsQuery(
        filter: string,
        after?: string,
        limit?: number,
        sort?: string,
        facet?: Array<string>,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<DomainAPICombinedFindingsResponseV1> {
        const response = await this.getCombinedAssessmentsQueryRaw({ filter: filter, after: after, limit: limit, sort: sort, facet: facet }, initOverrides);
        return await response.value();
    }

    /**
     * Get rules details for provided one or more rule IDs
     */
    async getRuleDetailsRaw(
        requestParameters: ConfigurationAssessmentApiGetRuleDetailsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DomainAPIRuleDetailsResponseV1>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getRuleDetails().');
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
                path: `/configuration-assessment/entities/rule-details/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAPIRuleDetailsResponseV1FromJSON(jsonValue));
    }

    /**
     * Get rules details for provided one or more rule IDs
     */
    async getRuleDetails(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAPIRuleDetailsResponseV1> {
        const response = await this.getRuleDetailsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }
}