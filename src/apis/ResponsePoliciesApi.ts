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
import type {
    MsaEntityActionRequestV2,
    MsaErrorsOnly,
    MsaQueryResponse,
    MsaReplyMetaOnly,
    RequestsCreateRTResponsePoliciesV1,
    RequestsSetPolicyPrecedenceReqV1,
    RequestsUpdateRTResponsePoliciesV1,
    ResponsesPolicyMembersRespV1,
    ResponsesRTResponsePoliciesV1,
} from "../models";
import {
    MsaEntityActionRequestV2FromJSON,
    MsaEntityActionRequestV2ToJSON,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    RequestsCreateRTResponsePoliciesV1FromJSON,
    RequestsCreateRTResponsePoliciesV1ToJSON,
    RequestsSetPolicyPrecedenceReqV1FromJSON,
    RequestsSetPolicyPrecedenceReqV1ToJSON,
    RequestsUpdateRTResponsePoliciesV1FromJSON,
    RequestsUpdateRTResponsePoliciesV1ToJSON,
    ResponsesPolicyMembersRespV1FromJSON,
    ResponsesPolicyMembersRespV1ToJSON,
    ResponsesRTResponsePoliciesV1FromJSON,
    ResponsesRTResponsePoliciesV1ToJSON,
} from "../models";

export interface CreateRTResponsePoliciesRequest {
    body: RequestsCreateRTResponsePoliciesV1;
}

export interface DeleteRTResponsePoliciesRequest {
    ids: Array<string>;
}

export interface GetRTResponsePoliciesRequest {
    ids: Array<string>;
}

export interface PerformRTResponsePoliciesActionRequest {
    actionName: PerformRTResponsePoliciesActionActionNameEnum;
    body: MsaEntityActionRequestV2;
}

export interface QueryCombinedRTResponsePoliciesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryCombinedRTResponsePoliciesSortEnum;
}

export interface QueryCombinedRTResponsePolicyMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface QueryRTResponsePoliciesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryRTResponsePoliciesSortEnum;
}

export interface QueryRTResponsePolicyMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface SetRTResponsePoliciesPrecedenceRequest {
    body: RequestsSetPolicyPrecedenceReqV1;
}

export interface UpdateRTResponsePoliciesRequest {
    body: RequestsUpdateRTResponsePoliciesV1;
}

/**
 *
 */
export class ResponsePoliciesApi extends runtime.BaseAPI {
    /**
     * Create Response Policies by specifying details about the policy to create
     */
    async createRTResponsePoliciesRaw(
        requestParameters: CreateRTResponsePoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesRTResponsePoliciesV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createRTResponsePolicies.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/response/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsCreateRTResponsePoliciesV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesRTResponsePoliciesV1FromJSON(jsonValue));
    }

    /**
     * Create Response Policies by specifying details about the policy to create
     */
    async createRTResponsePolicies(body: RequestsCreateRTResponsePoliciesV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesRTResponsePoliciesV1> {
        const response = await this.createRTResponsePoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a set of Response Policies by specifying their IDs
     */
    async deleteRTResponsePoliciesRaw(requestParameters: DeleteRTResponsePoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteRTResponsePolicies.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/response/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete a set of Response Policies by specifying their IDs
     */
    async deleteRTResponsePolicies(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.deleteRTResponsePoliciesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a set of Response Policies by specifying their IDs
     */
    async getRTResponsePoliciesRaw(
        requestParameters: GetRTResponsePoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesRTResponsePoliciesV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getRTResponsePolicies.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/response/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesRTResponsePoliciesV1FromJSON(jsonValue));
    }

    /**
     * Retrieve a set of Response Policies by specifying their IDs
     */
    async getRTResponsePolicies(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesRTResponsePoliciesV1> {
        const response = await this.getRTResponsePoliciesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Perform the specified action on the Response Policies specified in the request
     */
    async performRTResponsePoliciesActionRaw(
        requestParameters: PerformRTResponsePoliciesActionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesRTResponsePoliciesV1>> {
        if (requestParameters.actionName === null || requestParameters.actionName === undefined) {
            throw new runtime.RequiredError("actionName", "Required parameter requestParameters.actionName was null or undefined when calling performRTResponsePoliciesAction.");
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling performRTResponsePoliciesAction.");
        }

        const queryParameters: any = {};

        if (requestParameters.actionName !== undefined) {
            queryParameters["action_name"] = requestParameters.actionName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/response-actions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaEntityActionRequestV2ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesRTResponsePoliciesV1FromJSON(jsonValue));
    }

    /**
     * Perform the specified action on the Response Policies specified in the request
     */
    async performRTResponsePoliciesAction(
        actionName: PerformRTResponsePoliciesActionActionNameEnum,
        body: MsaEntityActionRequestV2,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ResponsesRTResponsePoliciesV1> {
        const response = await this.performRTResponsePoliciesActionRaw({ actionName: actionName, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Response Policies in your environment by providing an FQL filter and paging details. Returns a set of Response Policies which match the filter criteria
     */
    async queryCombinedRTResponsePoliciesRaw(
        requestParameters: QueryCombinedRTResponsePoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesRTResponsePoliciesV1>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/combined/response/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesRTResponsePoliciesV1FromJSON(jsonValue));
    }

    /**
     * Search for Response Policies in your environment by providing an FQL filter and paging details. Returns a set of Response Policies which match the filter criteria
     */
    async queryCombinedRTResponsePolicies(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryCombinedRTResponsePoliciesSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ResponsesRTResponsePoliciesV1> {
        const response = await this.queryCombinedRTResponsePoliciesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Response policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedRTResponsePolicyMembersRaw(
        requestParameters: QueryCombinedRTResponsePolicyMembersRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesPolicyMembersRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/combined/response-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesPolicyMembersRespV1FromJSON(jsonValue));
    }

    /**
     * Search for members of a Response policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedRTResponsePolicyMembers(
        id?: string,
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ResponsesPolicyMembersRespV1> {
        const response = await this.queryCombinedRTResponsePolicyMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Response Policies in your environment by providing an FQL filter with sort and/or paging details. This returns a set of Response Policy IDs that match the given criteria.
     */
    async queryRTResponsePoliciesRaw(requestParameters: QueryRTResponsePoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/queries/response/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for Response Policies in your environment by providing an FQL filter with sort and/or paging details. This returns a set of Response Policy IDs that match the given criteria.
     */
    async queryRTResponsePolicies(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryRTResponsePoliciesSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<MsaQueryResponse> {
        const response = await this.queryRTResponsePoliciesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Response policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryRTResponsePolicyMembersRaw(
        requestParameters: QueryRTResponsePolicyMembersRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/queries/response-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for members of a Response policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryRTResponsePolicyMembers(
        id?: string,
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<MsaQueryResponse> {
        const response = await this.queryRTResponsePolicyMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Sets the precedence of Response Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence
     */
    async setRTResponsePoliciesPrecedenceRaw(
        requestParameters: SetRTResponsePoliciesPrecedenceRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling setRTResponsePoliciesPrecedence.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/response-precedence/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsSetPolicyPrecedenceReqV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Sets the precedence of Response Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence
     */
    async setRTResponsePoliciesPrecedence(body: RequestsSetPolicyPrecedenceReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.setRTResponsePoliciesPrecedenceRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update Response Policies by specifying the ID of the policy and details to update
     */
    async updateRTResponsePoliciesRaw(
        requestParameters: UpdateRTResponsePoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ResponsesRTResponsePoliciesV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling updateRTResponsePolicies.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["response-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/response/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsUpdateRTResponsePoliciesV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesRTResponsePoliciesV1FromJSON(jsonValue));
    }

    /**
     * Update Response Policies by specifying the ID of the policy and details to update
     */
    async updateRTResponsePolicies(body: RequestsUpdateRTResponsePoliciesV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponsesRTResponsePoliciesV1> {
        const response = await this.updateRTResponsePoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const PerformRTResponsePoliciesActionActionNameEnum = {
    AddHostGroup: "add-host-group",
    AddRuleGroup: "add-rule-group",
    Disable: "disable",
    Enable: "enable",
    RemoveHostGroup: "remove-host-group",
    RemoveRuleGroup: "remove-rule-group",
} as const;
export type PerformRTResponsePoliciesActionActionNameEnum = (typeof PerformRTResponsePoliciesActionActionNameEnum)[keyof typeof PerformRTResponsePoliciesActionActionNameEnum];
/**
 * @export
 */
export const QueryCombinedRTResponsePoliciesSortEnum = {
    CreatedByAsc: "created_by.asc",
    CreatedByDesc: "created_by.desc",
    CreatedTimestampAsc: "created_timestamp.asc",
    CreatedTimestampDesc: "created_timestamp.desc",
    EnabledAsc: "enabled.asc",
    EnabledDesc: "enabled.desc",
    ModifiedByAsc: "modified_by.asc",
    ModifiedByDesc: "modified_by.desc",
    ModifiedTimestampAsc: "modified_timestamp.asc",
    ModifiedTimestampDesc: "modified_timestamp.desc",
    NameAsc: "name.asc",
    NameDesc: "name.desc",
    PlatformNameAsc: "platform_name.asc",
    PlatformNameDesc: "platform_name.desc",
    PrecedenceAsc: "precedence.asc",
    PrecedenceDesc: "precedence.desc",
} as const;
export type QueryCombinedRTResponsePoliciesSortEnum = (typeof QueryCombinedRTResponsePoliciesSortEnum)[keyof typeof QueryCombinedRTResponsePoliciesSortEnum];
/**
 * @export
 */
export const QueryRTResponsePoliciesSortEnum = {
    CreatedByAsc: "created_by.asc",
    CreatedByDesc: "created_by.desc",
    CreatedTimestampAsc: "created_timestamp.asc",
    CreatedTimestampDesc: "created_timestamp.desc",
    EnabledAsc: "enabled.asc",
    EnabledDesc: "enabled.desc",
    ModifiedByAsc: "modified_by.asc",
    ModifiedByDesc: "modified_by.desc",
    ModifiedTimestampAsc: "modified_timestamp.asc",
    ModifiedTimestampDesc: "modified_timestamp.desc",
    NameAsc: "name.asc",
    NameDesc: "name.desc",
    PlatformNameAsc: "platform_name.asc",
    PlatformNameDesc: "platform_name.desc",
    PrecedenceAsc: "precedence.asc",
    PrecedenceDesc: "precedence.desc",
} as const;
export type QueryRTResponsePoliciesSortEnum = (typeof QueryRTResponsePoliciesSortEnum)[keyof typeof QueryRTResponsePoliciesSortEnum];
