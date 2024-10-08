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
    DeviceapiDeviceDetailsResponseSwagger,
    DeviceapiDeviceResponse,
    DeviceapiGroupsResponseV1,
    DeviceapiLoginHistoryResponseV1,
    DeviceapiNetworkAddressHistoryResponseV1,
    DeviceapiUpdateDeviceTagsRequestV1,
    DeviceapiUpdateDeviceTagsSwaggerV1,
    MsaEntityActionRequest,
    MsaEntityActionRequestV2,
    MsaIdsRequest,
    MsaQueryResponse,
    MsaReplyAffectedEntities,
    MsaReplyMetaOnly,
    StateOnlineStateRespV1,
} from "../models/index";
import {
    DeviceapiDeviceDetailsResponseSwaggerFromJSON,
    DeviceapiDeviceDetailsResponseSwaggerToJSON,
    DeviceapiDeviceResponseFromJSON,
    DeviceapiDeviceResponseToJSON,
    DeviceapiGroupsResponseV1FromJSON,
    DeviceapiGroupsResponseV1ToJSON,
    DeviceapiLoginHistoryResponseV1FromJSON,
    DeviceapiLoginHistoryResponseV1ToJSON,
    DeviceapiNetworkAddressHistoryResponseV1FromJSON,
    DeviceapiNetworkAddressHistoryResponseV1ToJSON,
    DeviceapiUpdateDeviceTagsRequestV1FromJSON,
    DeviceapiUpdateDeviceTagsRequestV1ToJSON,
    DeviceapiUpdateDeviceTagsSwaggerV1FromJSON,
    DeviceapiUpdateDeviceTagsSwaggerV1ToJSON,
    MsaEntityActionRequestFromJSON,
    MsaEntityActionRequestToJSON,
    MsaEntityActionRequestV2FromJSON,
    MsaEntityActionRequestV2ToJSON,
    MsaIdsRequestFromJSON,
    MsaIdsRequestToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyAffectedEntitiesFromJSON,
    MsaReplyAffectedEntitiesToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    StateOnlineStateRespV1FromJSON,
    StateOnlineStateRespV1ToJSON,
} from "../models/index";

export interface HostsApiEntitiesPerformActionRequest {
    ids: Array<string>;
    actionName: EntitiesPerformActionActionNameEnum;
    body: MsaEntityActionRequest;
    disableHostnameCheck?: boolean;
}

export interface HostsApiGetDeviceDetailsV2Request {
    ids: Array<string>;
}

export interface HostsApiGetOnlineStateV1Request {
    ids: Array<string>;
}

export interface HostsApiPerformActionV2Request {
    actionName: string;
    body: MsaEntityActionRequestV2;
}

export interface HostsApiPostDeviceDetailsV2Request {
    body: MsaIdsRequest;
}

export interface HostsApiQueryDeviceLoginHistoryRequest {
    body: MsaIdsRequest;
}

export interface HostsApiQueryDeviceLoginHistoryV2Request {
    body: MsaIdsRequest;
}

export interface HostsApiQueryDevicesByFilterRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface HostsApiQueryDevicesByFilterScrollRequest {
    offset?: string;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface HostsApiQueryGetNetworkAddressHistoryV1Request {
    body: MsaIdsRequest;
}

export interface HostsApiQueryHiddenDevicesRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface HostsApiUpdateDeviceTagsRequest {
    body: DeviceapiUpdateDeviceTagsRequestV1;
}

/**
 *
 */
export class HostsApi extends runtime.BaseAPI {
    /**
     * Performs the specified action on the provided group IDs.
     */
    async entitiesPerformActionRaw(
        requestParameters: HostsApiEntitiesPerformActionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceapiGroupsResponseV1>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling entitiesPerformAction().');
        }

        if (requestParameters["actionName"] == null) {
            throw new runtime.RequiredError("actionName", 'Required parameter "actionName" was null or undefined when calling entitiesPerformAction().');
        }

        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling entitiesPerformAction().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        if (requestParameters["actionName"] != null) {
            queryParameters["action_name"] = requestParameters["actionName"];
        }

        if (requestParameters["disableHostnameCheck"] != null) {
            queryParameters["disable_hostname_check"] = requestParameters["disableHostnameCheck"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/devices/entities/group-actions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaEntityActionRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceapiGroupsResponseV1FromJSON(jsonValue));
    }

    /**
     * Performs the specified action on the provided group IDs.
     */
    async entitiesPerformAction(
        ids: Array<string>,
        actionName: EntitiesPerformActionActionNameEnum,
        body: MsaEntityActionRequest,
        disableHostnameCheck?: boolean,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DeviceapiGroupsResponseV1> {
        const response = await this.entitiesPerformActionRaw({ ids: ids, actionName: actionName, body: body, disableHostnameCheck: disableHostnameCheck }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on one or more hosts by providing host IDs as a query parameter.  Supports up to a maximum 100 IDs.
     */
    async getDeviceDetailsV2Raw(
        requestParameters: HostsApiGetDeviceDetailsV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceapiDeviceDetailsResponseSwagger>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getDeviceDetailsV2().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/entities/devices/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceapiDeviceDetailsResponseSwaggerFromJSON(jsonValue));
    }

    /**
     * Get details on one or more hosts by providing host IDs as a query parameter.  Supports up to a maximum 100 IDs.
     */
    async getDeviceDetailsV2(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceapiDeviceDetailsResponseSwagger> {
        const response = await this.getDeviceDetailsV2Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get the online status for one or more hosts by specifying each host’s unique ID. Successful requests return an HTTP 200 response and the status for each host identified by a `state` of `online`, `offline`, or `unknown` for each host, identified by host `id`.  Make a `GET` request to `/devices/queries/devices/v1` to get a list of host IDs.
     */
    async getOnlineStateV1Raw(requestParameters: HostsApiGetOnlineStateV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StateOnlineStateRespV1>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getOnlineStateV1().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/entities/online-state/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => StateOnlineStateRespV1FromJSON(jsonValue));
    }

    /**
     * Get the online status for one or more hosts by specifying each host’s unique ID. Successful requests return an HTTP 200 response and the status for each host identified by a `state` of `online`, `offline`, or `unknown` for each host, identified by host `id`.  Make a `GET` request to `/devices/queries/devices/v1` to get a list of host IDs.
     */
    async getOnlineStateV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StateOnlineStateRespV1> {
        const response = await this.getOnlineStateV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Take various actions on the hosts in your environment. Contain or lift containment on a host. Delete or restore a host.
     */
    async performActionV2Raw(requestParameters: HostsApiPerformActionV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyAffectedEntities>> {
        if (requestParameters["actionName"] == null) {
            throw new runtime.RequiredError("actionName", 'Required parameter "actionName" was null or undefined when calling performActionV2().');
        }

        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling performActionV2().');
        }

        const queryParameters: any = {};

        if (requestParameters["actionName"] != null) {
            queryParameters["action_name"] = requestParameters["actionName"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:write"]);
        }

        const response = await this.request(
            {
                path: `/devices/entities/devices-actions/v2`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaEntityActionRequestV2ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyAffectedEntitiesFromJSON(jsonValue));
    }

    /**
     * Take various actions on the hosts in your environment. Contain or lift containment on a host. Delete or restore a host.
     */
    async performActionV2(actionName: string, body: MsaEntityActionRequestV2, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyAffectedEntities> {
        const response = await this.performActionV2Raw({ actionName: actionName, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on one or more hosts by providing host IDs in a POST body.  Supports up to a maximum 5000 IDs.
     */
    async postDeviceDetailsV2Raw(
        requestParameters: HostsApiPostDeviceDetailsV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceapiDeviceDetailsResponseSwagger>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling postDeviceDetailsV2().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/entities/devices/v2`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceapiDeviceDetailsResponseSwaggerFromJSON(jsonValue));
    }

    /**
     * Get details on one or more hosts by providing host IDs in a POST body.  Supports up to a maximum 5000 IDs.
     */
    async postDeviceDetailsV2(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceapiDeviceDetailsResponseSwagger> {
        const response = await this.postDeviceDetailsV2Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve details about recent login sessions for a set of devices.
     */
    async queryDeviceLoginHistoryRaw(
        requestParameters: HostsApiQueryDeviceLoginHistoryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceapiLoginHistoryResponseV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling queryDeviceLoginHistory().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/combined/devices/login-history/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceapiLoginHistoryResponseV1FromJSON(jsonValue));
    }

    /**
     * Retrieve details about recent login sessions for a set of devices.
     */
    async queryDeviceLoginHistory(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceapiLoginHistoryResponseV1> {
        const response = await this.queryDeviceLoginHistoryRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve details about recent interactive login sessions for a set of devices powered by the Host Timeline. A max of 10 device ids can be specified
     */
    async queryDeviceLoginHistoryV2Raw(
        requestParameters: HostsApiQueryDeviceLoginHistoryV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceapiLoginHistoryResponseV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling queryDeviceLoginHistoryV2().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/combined/devices/login-history/v2`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceapiLoginHistoryResponseV1FromJSON(jsonValue));
    }

    /**
     * Retrieve details about recent interactive login sessions for a set of devices powered by the Host Timeline. A max of 10 device ids can be specified
     */
    async queryDeviceLoginHistoryV2(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceapiLoginHistoryResponseV1> {
        const response = await this.queryDeviceLoginHistoryV2Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search for hosts in your environment by platform, hostname, IP, and other criteria.
     */
    async queryDevicesByFilterRaw(requestParameters: HostsApiQueryDevicesByFilterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/queries/devices/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for hosts in your environment by platform, hostname, IP, and other criteria.
     */
    async queryDevicesByFilter(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryDevicesByFilterRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Search for hosts in your environment by platform, hostname, IP, and other criteria with continuous pagination capability (based on offset pointer which expires after 2 minutes with no maximum limit)
     */
    async queryDevicesByFilterScrollRaw(
        requestParameters: HostsApiQueryDevicesByFilterScrollRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceapiDeviceResponse>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/queries/devices-scroll/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceapiDeviceResponseFromJSON(jsonValue));
    }

    /**
     * Search for hosts in your environment by platform, hostname, IP, and other criteria with continuous pagination capability (based on offset pointer which expires after 2 minutes with no maximum limit)
     */
    async queryDevicesByFilterScroll(offset?: string, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceapiDeviceResponse> {
        const response = await this.queryDevicesByFilterScrollRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve history of IP and MAC addresses of devices.
     */
    async queryGetNetworkAddressHistoryV1Raw(
        requestParameters: HostsApiQueryGetNetworkAddressHistoryV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceapiNetworkAddressHistoryResponseV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling queryGetNetworkAddressHistoryV1().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/combined/devices/network-address-history/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceapiNetworkAddressHistoryResponseV1FromJSON(jsonValue));
    }

    /**
     * Retrieve history of IP and MAC addresses of devices.
     */
    async queryGetNetworkAddressHistoryV1(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceapiNetworkAddressHistoryResponseV1> {
        const response = await this.queryGetNetworkAddressHistoryV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve hidden hosts that match the provided filter criteria.
     */
    async queryHiddenDevicesRaw(requestParameters: HostsApiQueryHiddenDevicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:read"]);
        }

        const response = await this.request(
            {
                path: `/devices/queries/devices-hidden/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve hidden hosts that match the provided filter criteria.
     */
    async queryHiddenDevices(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryHiddenDevicesRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Append or remove one or more Falcon Grouping Tags on one or more hosts.  Tags must be of the form FalconGroupingTags/
     */
    async updateDeviceTagsRaw(
        requestParameters: HostsApiUpdateDeviceTagsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeviceapiUpdateDeviceTagsSwaggerV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling updateDeviceTags().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["devices:write"]);
        }

        const response = await this.request(
            {
                path: `/devices/entities/devices/tags/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DeviceapiUpdateDeviceTagsRequestV1ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceapiUpdateDeviceTagsSwaggerV1FromJSON(jsonValue));
    }

    /**
     * Append or remove one or more Falcon Grouping Tags on one or more hosts.  Tags must be of the form FalconGroupingTags/
     */
    async updateDeviceTags(body: DeviceapiUpdateDeviceTagsRequestV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceapiUpdateDeviceTagsSwaggerV1> {
        const response = await this.updateDeviceTagsRaw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const EntitiesPerformActionActionNameEnum = {
    AddGroupMember: "add_group_member",
    RemoveAll: "remove_all",
    RemoveGroupMember: "remove_group_member",
} as const;
export type EntitiesPerformActionActionNameEnum = (typeof EntitiesPerformActionActionNameEnum)[keyof typeof EntitiesPerformActionActionNameEnum];
