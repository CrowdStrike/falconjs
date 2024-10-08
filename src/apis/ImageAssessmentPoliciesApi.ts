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
    CoreEntitiesResponse,
    ModelsAPIPrecedenceRequest,
    ModelsCreateImageGroupRequest,
    ModelsCreatePolicyRequest,
    ModelsPatchImageGroupRequest,
    ModelsPatchPolicyRequest,
    ModelsPolicyEntityResponse,
    ModelsPolicyExclusionEntityResponse,
    ModelsPolicyGroupEntityResponse,
    ModelsUpdateExclusionsRequest,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    CoreEntitiesResponseFromJSON,
    CoreEntitiesResponseToJSON,
    ModelsAPIPrecedenceRequestFromJSON,
    ModelsAPIPrecedenceRequestToJSON,
    ModelsCreateImageGroupRequestFromJSON,
    ModelsCreateImageGroupRequestToJSON,
    ModelsCreatePolicyRequestFromJSON,
    ModelsCreatePolicyRequestToJSON,
    ModelsPatchImageGroupRequestFromJSON,
    ModelsPatchImageGroupRequestToJSON,
    ModelsPatchPolicyRequestFromJSON,
    ModelsPatchPolicyRequestToJSON,
    ModelsPolicyEntityResponseFromJSON,
    ModelsPolicyEntityResponseToJSON,
    ModelsPolicyExclusionEntityResponseFromJSON,
    ModelsPolicyExclusionEntityResponseToJSON,
    ModelsPolicyGroupEntityResponseFromJSON,
    ModelsPolicyGroupEntityResponseToJSON,
    ModelsUpdateExclusionsRequestFromJSON,
    ModelsUpdateExclusionsRequestToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface ImageAssessmentPoliciesApiCreatePoliciesRequest {
    body: ModelsCreatePolicyRequest;
}

export interface ImageAssessmentPoliciesApiCreatePolicyGroupsRequest {
    body: ModelsCreateImageGroupRequest;
}

export interface ImageAssessmentPoliciesApiDeletePolicyRequest {
    id: string;
}

export interface ImageAssessmentPoliciesApiDeletePolicyGroupRequest {
    id: string;
}

export interface ImageAssessmentPoliciesApiUpdatePoliciesRequest {
    id: string;
    body: ModelsPatchPolicyRequest;
}

export interface ImageAssessmentPoliciesApiUpdatePolicyExclusionsRequest {
    body: ModelsUpdateExclusionsRequest;
}

export interface ImageAssessmentPoliciesApiUpdatePolicyGroupsRequest {
    id: string;
    body: ModelsPatchImageGroupRequest;
}

export interface ImageAssessmentPoliciesApiUpdatePolicyPrecedenceRequest {
    body: ModelsAPIPrecedenceRequest;
}

/**
 *
 */
export class ImageAssessmentPoliciesApi extends runtime.BaseAPI {
    /**
     * Create Image Assessment policies
     */
    async createPoliciesRaw(
        requestParameters: ImageAssessmentPoliciesApiCreatePoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ModelsPolicyEntityResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling createPolicies().');
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
                path: `/container-security/entities/image-assessment-policies/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsCreatePolicyRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyEntityResponseFromJSON(jsonValue));
    }

    /**
     * Create Image Assessment policies
     */
    async createPolicies(body: ModelsCreatePolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyEntityResponse> {
        const response = await this.createPoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Create Image Assessment Policy Group entities
     */
    async createPolicyGroupsRaw(
        requestParameters: ImageAssessmentPoliciesApiCreatePolicyGroupsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ModelsPolicyGroupEntityResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling createPolicyGroups().');
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
                path: `/container-security/entities/image-assessment-policy-groups/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsCreateImageGroupRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyGroupEntityResponseFromJSON(jsonValue));
    }

    /**
     * Create Image Assessment Policy Group entities
     */
    async createPolicyGroups(body: ModelsCreateImageGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyGroupEntityResponse> {
        const response = await this.createPolicyGroupsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete Image Assessment Policy by policy UUID
     */
    async deletePolicyRaw(
        requestParameters: ImageAssessmentPoliciesApiDeletePolicyRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<CoreEntitiesResponse>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError("id", 'Required parameter "id" was null or undefined when calling deletePolicy().');
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
                path: `/container-security/entities/image-assessment-policies/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CoreEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Delete Image Assessment Policy by policy UUID
     */
    async deletePolicy(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoreEntitiesResponse> {
        const response = await this.deletePolicyRaw({ id: id }, initOverrides);
        return await response.value();
    }

    /**
     * Delete Image Assessment Policy Group entities
     */
    async deletePolicyGroupRaw(
        requestParameters: ImageAssessmentPoliciesApiDeletePolicyGroupRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<CoreEntitiesResponse>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError("id", 'Required parameter "id" was null or undefined when calling deletePolicyGroup().');
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
                path: `/container-security/entities/image-assessment-policy-groups/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CoreEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Delete Image Assessment Policy Group entities
     */
    async deletePolicyGroup(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoreEntitiesResponse> {
        const response = await this.deletePolicyGroupRaw({ id: id }, initOverrides);
        return await response.value();
    }

    /**
     * Get all Image Assessment policies
     */
    async readPoliciesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsPolicyEntityResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/entities/image-assessment-policies/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyEntityResponseFromJSON(jsonValue));
    }

    /**
     * Get all Image Assessment policies
     */
    async readPolicies(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyEntityResponse> {
        const response = await this.readPoliciesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve Image Assessment Policy Exclusion entities
     */
    async readPolicyExclusionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsPolicyExclusionEntityResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/entities/image-assessment-policy-exclusions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyExclusionEntityResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve Image Assessment Policy Exclusion entities
     */
    async readPolicyExclusions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyExclusionEntityResponse> {
        const response = await this.readPolicyExclusionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve Image Assessment Policy Group entities
     */
    async readPolicyGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsPolicyGroupEntityResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/entities/image-assessment-policy-groups/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyGroupEntityResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve Image Assessment Policy Group entities
     */
    async readPolicyGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyGroupEntityResponse> {
        const response = await this.readPolicyGroupsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update Image Assessment Policy entities
     */
    async updatePoliciesRaw(
        requestParameters: ImageAssessmentPoliciesApiUpdatePoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ModelsPolicyEntityResponse>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError("id", 'Required parameter "id" was null or undefined when calling updatePolicies().');
        }

        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updatePolicies().');
        }

        const queryParameters: any = {};

        if (requestParameters["id"] != null) {
            queryParameters["id"] = requestParameters["id"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/entities/image-assessment-policies/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsPatchPolicyRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyEntityResponseFromJSON(jsonValue));
    }

    /**
     * Update Image Assessment Policy entities
     */
    async updatePolicies(id: string, body: ModelsPatchPolicyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyEntityResponse> {
        const response = await this.updatePoliciesRaw({ id: id, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update Image Assessment Policy Exclusion entities
     */
    async updatePolicyExclusionsRaw(
        requestParameters: ImageAssessmentPoliciesApiUpdatePolicyExclusionsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ModelsPolicyExclusionEntityResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updatePolicyExclusions().');
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
                path: `/container-security/entities/image-assessment-policy-exclusions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsUpdateExclusionsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyExclusionEntityResponseFromJSON(jsonValue));
    }

    /**
     * Update Image Assessment Policy Exclusion entities
     */
    async updatePolicyExclusions(body: ModelsUpdateExclusionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyExclusionEntityResponse> {
        const response = await this.updatePolicyExclusionsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update Image Assessment Policy Group entities
     */
    async updatePolicyGroupsRaw(
        requestParameters: ImageAssessmentPoliciesApiUpdatePolicyGroupsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ModelsPolicyGroupEntityResponse>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError("id", 'Required parameter "id" was null or undefined when calling updatePolicyGroups().');
        }

        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updatePolicyGroups().');
        }

        const queryParameters: any = {};

        if (requestParameters["id"] != null) {
            queryParameters["id"] = requestParameters["id"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/entities/image-assessment-policy-groups/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsPatchImageGroupRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyGroupEntityResponseFromJSON(jsonValue));
    }

    /**
     * Update Image Assessment Policy Group entities
     */
    async updatePolicyGroups(id: string, body: ModelsPatchImageGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyGroupEntityResponse> {
        const response = await this.updatePolicyGroupsRaw({ id: id, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update Image Assessment Policy precedence
     */
    async updatePolicyPrecedenceRaw(
        requestParameters: ImageAssessmentPoliciesApiUpdatePolicyPrecedenceRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ModelsPolicyEntityResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updatePolicyPrecedence().');
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
                path: `/container-security/entities/image-assessment-policy-precedence/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsAPIPrecedenceRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsPolicyEntityResponseFromJSON(jsonValue));
    }

    /**
     * Update Image Assessment Policy precedence
     */
    async updatePolicyPrecedence(body: ModelsAPIPrecedenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsPolicyEntityResponse> {
        const response = await this.updatePolicyPrecedenceRaw({ body: body }, initOverrides);
        return await response.value();
    }
}
