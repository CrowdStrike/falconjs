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
  DomainAggregateClusterAssessmentsResponse,
  DomainAggregateFailedAssetCountBySeverityResponse,
  DomainAggregateFailedAssetsByRulesResponse,
  DomainAggregateFailedRulesByClustersResponse,
  DomainAggregateFailedRulesByImagesResponse,
  DomainAggregateFailedRulesCountBySeverityResponse,
  DomainAggregateImageAssessmentsResponse,
  DomainAggregateRulesAssessmentsResponse,
  DomainAggregateRulesByStatusResponse,
  MsaReplyMetaOnly,
} from '../models/index';
import {
    DomainAggregateClusterAssessmentsResponseFromJSON,
    DomainAggregateClusterAssessmentsResponseToJSON,
    DomainAggregateFailedAssetCountBySeverityResponseFromJSON,
    DomainAggregateFailedAssetCountBySeverityResponseToJSON,
    DomainAggregateFailedAssetsByRulesResponseFromJSON,
    DomainAggregateFailedAssetsByRulesResponseToJSON,
    DomainAggregateFailedRulesByClustersResponseFromJSON,
    DomainAggregateFailedRulesByClustersResponseToJSON,
    DomainAggregateFailedRulesByImagesResponseFromJSON,
    DomainAggregateFailedRulesByImagesResponseToJSON,
    DomainAggregateFailedRulesCountBySeverityResponseFromJSON,
    DomainAggregateFailedRulesCountBySeverityResponseToJSON,
    DomainAggregateImageAssessmentsResponseFromJSON,
    DomainAggregateImageAssessmentsResponseToJSON,
    DomainAggregateRulesAssessmentsResponseFromJSON,
    DomainAggregateRulesAssessmentsResponseToJSON,
    DomainAggregateRulesByStatusResponseFromJSON,
    DomainAggregateRulesByStatusResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from '../models/index';

export interface ExtAggregateClusterAssessmentsRequest {
    filter?: string;
}

export interface ExtAggregateFailedContainersByRulesPathRequest {
    filter?: string;
}

export interface ExtAggregateFailedContainersCountBySeverityRequest {
    filter?: string;
}

export interface ExtAggregateFailedImagesByRulesPathRequest {
    filter?: string;
}

export interface ExtAggregateFailedImagesCountBySeverityRequest {
    filter?: string;
}

export interface ExtAggregateFailedRulesByClustersRequest {
    filter?: string;
}

export interface ExtAggregateFailedRulesByImagesRequest {
    filter?: string;
}

export interface ExtAggregateFailedRulesCountBySeverityRequest {
    filter?: string;
}

export interface ExtAggregateImageAssessmentsRequest {
    filter?: string;
    after?: string;
    limit?: string;
}

export interface ExtAggregateRulesAssessmentsRequest {
    filter?: string;
}

export interface ExtAggregateRulesByStatusRequest {
    filter?: string;
}

/**
 * 
 */
export class ComplianceAssessmentsApi extends runtime.BaseAPI {

    /**
     * get the assessments for each cluster
     */
    async extAggregateClusterAssessmentsRaw(requestParameters: ExtAggregateClusterAssessmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateClusterAssessmentsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/compliance-by-clusters/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateClusterAssessmentsResponseFromJSON(jsonValue));
    }

    /**
     * get the assessments for each cluster
     */
    async extAggregateClusterAssessments(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateClusterAssessmentsResponse> {
        const response = await this.extAggregateClusterAssessmentsRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get the containers grouped into rules on which they failed
     */
    async extAggregateFailedContainersByRulesPathRaw(requestParameters: ExtAggregateFailedContainersByRulesPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateFailedAssetsByRulesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/failed-containers-by-rules/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateFailedAssetsByRulesResponseFromJSON(jsonValue));
    }

    /**
     * get the containers grouped into rules on which they failed
     */
    async extAggregateFailedContainersByRulesPath(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateFailedAssetsByRulesResponse> {
        const response = await this.extAggregateFailedContainersByRulesPathRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get the failed containers count grouped into severity levels
     */
    async extAggregateFailedContainersCountBySeverityRaw(requestParameters: ExtAggregateFailedContainersCountBySeverityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateFailedAssetCountBySeverityResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/failed-containers-count-by-severity/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateFailedAssetCountBySeverityResponseFromJSON(jsonValue));
    }

    /**
     * get the failed containers count grouped into severity levels
     */
    async extAggregateFailedContainersCountBySeverity(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateFailedAssetCountBySeverityResponse> {
        const response = await this.extAggregateFailedContainersCountBySeverityRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get the images grouped into rules on which they failed
     */
    async extAggregateFailedImagesByRulesPathRaw(requestParameters: ExtAggregateFailedImagesByRulesPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateFailedAssetsByRulesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/failed-images-by-rules/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateFailedAssetsByRulesResponseFromJSON(jsonValue));
    }

    /**
     * get the images grouped into rules on which they failed
     */
    async extAggregateFailedImagesByRulesPath(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateFailedAssetsByRulesResponse> {
        const response = await this.extAggregateFailedImagesByRulesPathRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get the failed images count grouped into severity levels
     */
    async extAggregateFailedImagesCountBySeverityRaw(requestParameters: ExtAggregateFailedImagesCountBySeverityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateFailedAssetCountBySeverityResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/failed-images-count-by-severity/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateFailedAssetCountBySeverityResponseFromJSON(jsonValue));
    }

    /**
     * get the failed images count grouped into severity levels
     */
    async extAggregateFailedImagesCountBySeverity(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateFailedAssetCountBySeverityResponse> {
        const response = await this.extAggregateFailedImagesCountBySeverityRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get the failed rules for each cluster grouped into severity levels
     */
    async extAggregateFailedRulesByClustersRaw(requestParameters: ExtAggregateFailedRulesByClustersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateFailedRulesByClustersResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/failed-rules-by-clusters/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateFailedRulesByClustersResponseFromJSON(jsonValue));
    }

    /**
     * get the failed rules for each cluster grouped into severity levels
     */
    async extAggregateFailedRulesByClusters(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateFailedRulesByClustersResponse> {
        const response = await this.extAggregateFailedRulesByClustersRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get images with failed rules, rule count grouped by severity for each image
     */
    async extAggregateFailedRulesByImagesRaw(requestParameters: ExtAggregateFailedRulesByImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateFailedRulesByImagesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/failed-rules-by-images/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateFailedRulesByImagesResponseFromJSON(jsonValue));
    }

    /**
     * get images with failed rules, rule count grouped by severity for each image
     */
    async extAggregateFailedRulesByImages(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateFailedRulesByImagesResponse> {
        const response = await this.extAggregateFailedRulesByImagesRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get the failed rules count grouped into severity levels
     */
    async extAggregateFailedRulesCountBySeverityRaw(requestParameters: ExtAggregateFailedRulesCountBySeverityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateFailedRulesCountBySeverityResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/failed-rules-count-by-severity/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateFailedRulesCountBySeverityResponseFromJSON(jsonValue));
    }

    /**
     * get the failed rules count grouped into severity levels
     */
    async extAggregateFailedRulesCountBySeverity(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateFailedRulesCountBySeverityResponse> {
        const response = await this.extAggregateFailedRulesCountBySeverityRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get the assessments for each image
     */
    async extAggregateImageAssessmentsRaw(requestParameters: ExtAggregateImageAssessmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateImageAssessmentsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['after'] != null) {
            queryParameters['after'] = requestParameters['after'];
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
            path: `/container-compliance/aggregates/compliance-by-images/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateImageAssessmentsResponseFromJSON(jsonValue));
    }

    /**
     * get the assessments for each image
     */
    async extAggregateImageAssessments(filter?: string, after?: string, limit?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateImageAssessmentsResponse> {
        const response = await this.extAggregateImageAssessmentsRaw({ filter: filter, after: after, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * get the assessments for each rule
     */
    async extAggregateRulesAssessmentsRaw(requestParameters: ExtAggregateRulesAssessmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateRulesAssessmentsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/compliance-by-rules/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateRulesAssessmentsResponseFromJSON(jsonValue));
    }

    /**
     * get the assessments for each rule
     */
    async extAggregateRulesAssessments(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateRulesAssessmentsResponse> {
        const response = await this.extAggregateRulesAssessmentsRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * get the rules grouped by their statuses
     */
    async extAggregateRulesByStatusRaw(requestParameters: ExtAggregateRulesByStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAggregateRulesByStatusResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-compliance/aggregates/rules-by-status/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAggregateRulesByStatusResponseFromJSON(jsonValue));
    }

    /**
     * get the rules grouped by their statuses
     */
    async extAggregateRulesByStatus(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAggregateRulesByStatusResponse> {
        const response = await this.extAggregateRulesByStatusRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

}
