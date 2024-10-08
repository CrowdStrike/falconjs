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
    DomainEntityActionRequest,
    DomainMsaEnvironmentScoreResponse,
    DomainMsaExternalBehaviorResponse,
    DomainMsaExternalIncidentResponse,
    DomainMsaIncidentPerformActionResponse,
    DomainMsaIncidentQueryResponse,
    MsaIdsRequest,
    MsaQueryResponse,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    DomainEntityActionRequestFromJSON,
    DomainEntityActionRequestToJSON,
    DomainMsaEnvironmentScoreResponseFromJSON,
    DomainMsaEnvironmentScoreResponseToJSON,
    DomainMsaExternalBehaviorResponseFromJSON,
    DomainMsaExternalBehaviorResponseToJSON,
    DomainMsaExternalIncidentResponseFromJSON,
    DomainMsaExternalIncidentResponseToJSON,
    DomainMsaIncidentPerformActionResponseFromJSON,
    DomainMsaIncidentPerformActionResponseToJSON,
    DomainMsaIncidentQueryResponseFromJSON,
    DomainMsaIncidentQueryResponseToJSON,
    MsaIdsRequestFromJSON,
    MsaIdsRequestToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface IncidentsApiCrowdScoreRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: CrowdScoreSortEnum;
}

export interface IncidentsApiGetBehaviorsRequest {
    body: MsaIdsRequest;
}

export interface IncidentsApiGetIncidentsRequest {
    body: MsaIdsRequest;
}

export interface IncidentsApiPerformIncidentActionRequest {
    body: DomainEntityActionRequest;
    updateDetects?: boolean;
    overwriteDetects?: boolean;
}

export interface IncidentsApiQueryBehaviorsRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryBehaviorsSortEnum;
}

export interface IncidentsApiQueryIncidentsRequest {
    sort?: QueryIncidentsSortEnum;
    filter?: string;
    offset?: number;
    limit?: number;
}

/**
 *
 */
export class IncidentsApi extends runtime.BaseAPI {
    /**
     * Query environment wide CrowdScore and return the entity data
     */
    async crowdScoreRaw(requestParameters: IncidentsApiCrowdScoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainMsaEnvironmentScoreResponse>> {
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
                path: `/incidents/combined/crowdscores/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaEnvironmentScoreResponseFromJSON(jsonValue));
    }

    /**
     * Query environment wide CrowdScore and return the entity data
     */
    async crowdScore(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: CrowdScoreSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DomainMsaEnvironmentScoreResponse> {
        const response = await this.crowdScoreRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on behaviors by providing behavior IDs
     */
    async getBehaviorsRaw(
        requestParameters: IncidentsApiGetBehaviorsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainMsaExternalBehaviorResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling getBehaviors().');
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
                path: `/incidents/entities/behaviors/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaExternalBehaviorResponseFromJSON(jsonValue));
    }

    /**
     * Get details on behaviors by providing behavior IDs
     */
    async getBehaviors(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainMsaExternalBehaviorResponse> {
        const response = await this.getBehaviorsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on incidents by providing incident IDs
     */
    async getIncidentsRaw(
        requestParameters: IncidentsApiGetIncidentsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainMsaExternalIncidentResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling getIncidents().');
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
                path: `/incidents/entities/incidents/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaIdsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaExternalIncidentResponseFromJSON(jsonValue));
    }

    /**
     * Get details on incidents by providing incident IDs
     */
    async getIncidents(body: MsaIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainMsaExternalIncidentResponse> {
        const response = await this.getIncidentsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Perform a set of actions on one or more incidents, such as adding tags or comments or updating the incident name or description
     */
    async performIncidentActionRaw(
        requestParameters: IncidentsApiPerformIncidentActionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainMsaIncidentPerformActionResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling performIncidentAction().');
        }

        const queryParameters: any = {};

        if (requestParameters["updateDetects"] != null) {
            queryParameters["update_detects"] = requestParameters["updateDetects"];
        }

        if (requestParameters["overwriteDetects"] != null) {
            queryParameters["overwrite_detects"] = requestParameters["overwriteDetects"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/incidents/entities/incident-actions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: DomainEntityActionRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaIncidentPerformActionResponseFromJSON(jsonValue));
    }

    /**
     * Perform a set of actions on one or more incidents, such as adding tags or comments or updating the incident name or description
     */
    async performIncidentAction(
        body: DomainEntityActionRequest,
        updateDetects?: boolean,
        overwriteDetects?: boolean,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DomainMsaIncidentPerformActionResponse> {
        const response = await this.performIncidentActionRaw({ body: body, updateDetects: updateDetects, overwriteDetects: overwriteDetects }, initOverrides);
        return await response.value();
    }

    /**
     * Search for behaviors by providing an FQL filter, sorting, and paging details
     */
    async queryBehaviorsRaw(requestParameters: IncidentsApiQueryBehaviorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
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
                path: `/incidents/queries/behaviors/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for behaviors by providing an FQL filter, sorting, and paging details
     */
    async queryBehaviors(filter?: string, offset?: number, limit?: number, sort?: QueryBehaviorsSortEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryBehaviorsRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for incidents by providing an FQL filter, sorting, and paging details
     */
    async queryIncidentsRaw(
        requestParameters: IncidentsApiQueryIncidentsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainMsaIncidentQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/incidents/queries/incidents/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainMsaIncidentQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for incidents by providing an FQL filter, sorting, and paging details
     */
    async queryIncidents(
        sort?: QueryIncidentsSortEnum,
        filter?: string,
        offset?: number,
        limit?: number,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DomainMsaIncidentQueryResponse> {
        const response = await this.queryIncidentsRaw({ sort: sort, filter: filter, offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const CrowdScoreSortEnum = {
    AdjustedScoreAsc: "adjusted_score.asc",
    AdjustedScoreDesc: "adjusted_score.desc",
    ScoreAsc: "score.asc",
    ScoreDesc: "score.desc",
    TimestampAsc: "timestamp.asc",
    TimestampDesc: "timestamp.desc",
} as const;
export type CrowdScoreSortEnum = (typeof CrowdScoreSortEnum)[keyof typeof CrowdScoreSortEnum];
/**
 * @export
 */
export const QueryBehaviorsSortEnum = {
    AlertIdsAsc: "alert_ids.asc",
    AlertIdsDesc: "alert_ids.desc",
    CmdlineAsc: "cmdline.asc",
    CmdlineDesc: "cmdline.desc",
    DetectionIdsAsc: "detection_ids.asc",
    DetectionIdsDesc: "detection_ids.desc",
    DisplayNameAsc: "display_name.asc",
    DisplayNameDesc: "display_name.desc",
    DomainAsc: "domain.asc",
    DomainDesc: "domain.desc",
    FilepathAsc: "filepath.asc",
    FilepathDesc: "filepath.desc",
    TimestampAsc: "timestamp.asc",
    TimestampDesc: "timestamp.desc",
} as const;
export type QueryBehaviorsSortEnum = (typeof QueryBehaviorsSortEnum)[keyof typeof QueryBehaviorsSortEnum];
/**
 * @export
 */
export const QueryIncidentsSortEnum = {
    AssignedToAsc: "assigned_to.asc",
    AssignedToDesc: "assigned_to.desc",
    AssignedToNameAsc: "assigned_to_name.asc",
    AssignedToNameDesc: "assigned_to_name.desc",
    EndAsc: "end.asc",
    EndDesc: "end.desc",
    ModifiedTimestampAsc: "modified_timestamp.asc",
    ModifiedTimestampDesc: "modified_timestamp.desc",
    NameAsc: "name.asc",
    NameDesc: "name.desc",
    SortScoreAsc: "sort_score.asc",
    SortScoreDesc: "sort_score.desc",
    StartAsc: "start.asc",
    StartDesc: "start.desc",
    StateAsc: "state.asc",
    StateDesc: "state.desc",
    StatusAsc: "status.asc",
    StatusDesc: "status.desc",
} as const;
export type QueryIncidentsSortEnum = (typeof QueryIncidentsSortEnum)[keyof typeof QueryIncidentsSortEnum];
