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
    BasePolicyMembersRespV1,
    BaseSetPolicyPrecedenceReqV1,
    DeviceControlCreatePoliciesV1,
    DeviceControlReqUpdateDefaultDCPolicyV1,
    DeviceControlRespV1,
    DeviceControlRespV2,
    DeviceControlUpdatePoliciesReqV1,
    MsaEntityActionRequestV2,
    MsaErrorsOnly,
    MsaQueryResponse,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    BasePolicyMembersRespV1FromJSON,
    BasePolicyMembersRespV1ToJSON,
    BaseSetPolicyPrecedenceReqV1FromJSON,
    BaseSetPolicyPrecedenceReqV1ToJSON,
    DeviceControlCreatePoliciesV1FromJSON,
    DeviceControlCreatePoliciesV1ToJSON,
    DeviceControlReqUpdateDefaultDCPolicyV1FromJSON,
    DeviceControlReqUpdateDefaultDCPolicyV1ToJSON,
    DeviceControlRespV1FromJSON,
    DeviceControlRespV1ToJSON,
    DeviceControlRespV2FromJSON,
    DeviceControlRespV2ToJSON,
    DeviceControlUpdatePoliciesReqV1FromJSON,
    DeviceControlUpdatePoliciesReqV1ToJSON,
    MsaEntityActionRequestV2FromJSON,
    MsaEntityActionRequestV2ToJSON,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface DeviceControlPoliciesApiCreateDeviceControlPoliciesRequest {
    body: DeviceControlCreatePoliciesV1;
}

export interface DeviceControlPoliciesApiDeleteDeviceControlPoliciesRequest {
    ids: Array<string>;
}

export interface DeviceControlPoliciesApiGetDeviceControlPoliciesRequest {
    ids: Array<string>;
}

export interface DeviceControlPoliciesApiPerformDeviceControlPoliciesActionRequest {
    actionName: PerformDeviceControlPoliciesActionActionNameEnum;
    body: MsaEntityActionRequestV2;
}

export interface DeviceControlPoliciesApiQueryCombinedDeviceControlPoliciesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryCombinedDeviceControlPoliciesSortEnum;
}

export interface DeviceControlPoliciesApiQueryCombinedDeviceControlPolicyMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface DeviceControlPoliciesApiQueryDeviceControlPoliciesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryDeviceControlPoliciesSortEnum;
}

export interface DeviceControlPoliciesApiQueryDeviceControlPolicyMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface DeviceControlPoliciesApiSetDeviceControlPoliciesPrecedenceRequest {
    body: BaseSetPolicyPrecedenceReqV1;
}

export interface DeviceControlPoliciesApiUpdateDefaultDeviceControlPoliciesRequest {
    body: DeviceControlReqUpdateDefaultDCPolicyV1;
}

export interface DeviceControlPoliciesApiUpdateDeviceControlPoliciesRequest {
    body: DeviceControlUpdatePoliciesReqV1;
}

/**
 *
 */
export class DeviceControlPoliciesApi extends runtime.BaseAPI {
    /**
     * Create Device Control Policies by specifying details about the policy to create
     */
    async createDeviceControlPoliciesRaw(
        requestParameters: DeviceControlPoliciesApiCreateDeviceControlPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceControlRespV2>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling createDeviceControlPolicies().');
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
                path: `/policy/entities/device-control/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: DeviceControlCreatePoliciesV1ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceControlRespV2FromJSON(jsonValue));
    }

    /**
     * Create Device Control Policies by specifying details about the policy to create
     */
    async createDeviceControlPolicies(body: DeviceControlCreatePoliciesV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceControlRespV2> {
        const response = await this.createDeviceControlPoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a set of Device Control Policies by specifying their IDs
     */
    async deleteDeviceControlPoliciesRaw(
        requestParameters: DeviceControlPoliciesApiDeleteDeviceControlPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling deleteDeviceControlPolicies().');
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
                path: `/policy/entities/device-control/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete a set of Device Control Policies by specifying their IDs
     */
    async deleteDeviceControlPolicies(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.deleteDeviceControlPoliciesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the configuration for a Default Device Control Policy
     */
    async getDefaultDeviceControlPoliciesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeviceControlRespV1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/policy/entities/default-device-control/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceControlRespV1FromJSON(jsonValue));
    }

    /**
     * Retrieve the configuration for a Default Device Control Policy
     */
    async getDefaultDeviceControlPolicies(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceControlRespV1> {
        const response = await this.getDefaultDeviceControlPoliciesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a set of Device Control Policies by specifying their IDs
     */
    async getDeviceControlPoliciesRaw(
        requestParameters: DeviceControlPoliciesApiGetDeviceControlPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceControlRespV1>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getDeviceControlPolicies().');
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
                path: `/policy/entities/device-control/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceControlRespV1FromJSON(jsonValue));
    }

    /**
     * Retrieve a set of Device Control Policies by specifying their IDs
     */
    async getDeviceControlPolicies(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceControlRespV1> {
        const response = await this.getDeviceControlPoliciesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Perform the specified action on the Device Control Policies specified in the request
     */
    async performDeviceControlPoliciesActionRaw(
        requestParameters: DeviceControlPoliciesApiPerformDeviceControlPoliciesActionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceControlRespV1>> {
        if (requestParameters["actionName"] == null) {
            throw new runtime.RequiredError("actionName", 'Required parameter "actionName" was null or undefined when calling performDeviceControlPoliciesAction().');
        }

        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling performDeviceControlPoliciesAction().');
        }

        const queryParameters: any = {};

        if (requestParameters["actionName"] != null) {
            queryParameters["action_name"] = requestParameters["actionName"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/policy/entities/device-control-actions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaEntityActionRequestV2ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceControlRespV1FromJSON(jsonValue));
    }

    /**
     * Perform the specified action on the Device Control Policies specified in the request
     */
    async performDeviceControlPoliciesAction(
        actionName: PerformDeviceControlPoliciesActionActionNameEnum,
        body: MsaEntityActionRequestV2,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DeviceControlRespV1> {
        const response = await this.performDeviceControlPoliciesActionRaw({ actionName: actionName, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policies which match the filter criteria
     */
    async queryCombinedDeviceControlPoliciesRaw(
        requestParameters: DeviceControlPoliciesApiQueryCombinedDeviceControlPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceControlRespV1>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
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
                path: `/policy/combined/device-control/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceControlRespV1FromJSON(jsonValue));
    }

    /**
     * Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policies which match the filter criteria
     */
    async queryCombinedDeviceControlPolicies(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryCombinedDeviceControlPoliciesSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DeviceControlRespV1> {
        const response = await this.queryCombinedDeviceControlPoliciesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedDeviceControlPolicyMembersRaw(
        requestParameters: DeviceControlPoliciesApiQueryCombinedDeviceControlPolicyMembersRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<BasePolicyMembersRespV1>> {
        const queryParameters: any = {};

        if (requestParameters["id"] != null) {
            queryParameters["id"] = requestParameters["id"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
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
                path: `/policy/combined/device-control-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BasePolicyMembersRespV1FromJSON(jsonValue));
    }

    /**
     * Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedDeviceControlPolicyMembers(
        id?: string,
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<BasePolicyMembersRespV1> {
        const response = await this.queryCombinedDeviceControlPolicyMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policy IDs which match the filter criteria
     */
    async queryDeviceControlPoliciesRaw(
        requestParameters: DeviceControlPoliciesApiQueryDeviceControlPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
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
                path: `/policy/queries/device-control/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policy IDs which match the filter criteria
     */
    async queryDeviceControlPolicies(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryDeviceControlPoliciesSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<MsaQueryResponse> {
        const response = await this.queryDeviceControlPoliciesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryDeviceControlPolicyMembersRaw(
        requestParameters: DeviceControlPoliciesApiQueryDeviceControlPolicyMembersRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["id"] != null) {
            queryParameters["id"] = requestParameters["id"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
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
                path: `/policy/queries/device-control-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryDeviceControlPolicyMembers(
        id?: string,
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<MsaQueryResponse> {
        const response = await this.queryDeviceControlPolicyMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Sets the precedence of Device Control Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence
     */
    async setDeviceControlPoliciesPrecedenceRaw(
        requestParameters: DeviceControlPoliciesApiSetDeviceControlPoliciesPrecedenceRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling setDeviceControlPoliciesPrecedence().');
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
                path: `/policy/entities/device-control-precedence/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: BaseSetPolicyPrecedenceReqV1ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Sets the precedence of Device Control Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence
     */
    async setDeviceControlPoliciesPrecedence(body: BaseSetPolicyPrecedenceReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.setDeviceControlPoliciesPrecedenceRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update the configuration for a Default Device Control Policy
     */
    async updateDefaultDeviceControlPoliciesRaw(
        requestParameters: DeviceControlPoliciesApiUpdateDefaultDeviceControlPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceControlRespV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updateDefaultDeviceControlPolicies().');
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
                path: `/policy/entities/default-device-control/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DeviceControlReqUpdateDefaultDCPolicyV1ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceControlRespV1FromJSON(jsonValue));
    }

    /**
     * Update the configuration for a Default Device Control Policy
     */
    async updateDefaultDeviceControlPolicies(body: DeviceControlReqUpdateDefaultDCPolicyV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceControlRespV1> {
        const response = await this.updateDefaultDeviceControlPoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update Device Control Policies by specifying the ID of the policy and details to update
     */
    async updateDeviceControlPoliciesRaw(
        requestParameters: DeviceControlPoliciesApiUpdateDeviceControlPoliciesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceControlRespV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updateDeviceControlPolicies().');
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
                path: `/policy/entities/device-control/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DeviceControlUpdatePoliciesReqV1ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceControlRespV1FromJSON(jsonValue));
    }

    /**
     * Update Device Control Policies by specifying the ID of the policy and details to update
     */
    async updateDeviceControlPolicies(body: DeviceControlUpdatePoliciesReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceControlRespV1> {
        const response = await this.updateDeviceControlPoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const PerformDeviceControlPoliciesActionActionNameEnum = {
    AddHostGroup: "add-host-group",
    AddRuleGroup: "add-rule-group",
    Disable: "disable",
    Enable: "enable",
    RemoveHostGroup: "remove-host-group",
    RemoveRuleGroup: "remove-rule-group",
} as const;
export type PerformDeviceControlPoliciesActionActionNameEnum = (typeof PerformDeviceControlPoliciesActionActionNameEnum)[keyof typeof PerformDeviceControlPoliciesActionActionNameEnum];
/**
 * @export
 */
export const QueryCombinedDeviceControlPoliciesSortEnum = {
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
export type QueryCombinedDeviceControlPoliciesSortEnum = (typeof QueryCombinedDeviceControlPoliciesSortEnum)[keyof typeof QueryCombinedDeviceControlPoliciesSortEnum];
/**
 * @export
 */
export const QueryDeviceControlPoliciesSortEnum = {
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
export type QueryDeviceControlPoliciesSortEnum = (typeof QueryDeviceControlPoliciesSortEnum)[keyof typeof QueryDeviceControlPoliciesSortEnum];
