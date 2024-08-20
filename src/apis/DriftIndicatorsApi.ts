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
    DriftindicatorsDriftEntityResponse,
    DriftindicatorsDriftIndicatorsCountValue,
    DriftindicatorsDriftIndicatorsFieldValue,
    MsaReplyMetaOnly,
    MsaspecQueryResponse,
} from "../models/index";
import {
    CoreEntitiesResponseFromJSON,
    CoreEntitiesResponseToJSON,
    DriftindicatorsDriftEntityResponseFromJSON,
    DriftindicatorsDriftEntityResponseToJSON,
    DriftindicatorsDriftIndicatorsCountValueFromJSON,
    DriftindicatorsDriftIndicatorsCountValueToJSON,
    DriftindicatorsDriftIndicatorsFieldValueFromJSON,
    DriftindicatorsDriftIndicatorsFieldValueToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecQueryResponseFromJSON,
    MsaspecQueryResponseToJSON,
} from "../models/index";

export interface DriftIndicatorsApiGetDriftIndicatorsValuesByDateRequest {
    filter?: string;
    limit?: number;
}

export interface DriftIndicatorsApiReadDriftIndicatorEntitiesRequest {
    ids?: Array<string>;
}

export interface DriftIndicatorsApiReadDriftIndicatorsCountRequest {
    filter?: string;
}

export interface DriftIndicatorsApiSearchAndReadDriftIndicatorEntitiesRequest {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface DriftIndicatorsApiSearchDriftIndicatorsRequest {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

/**
 *
 */
export class DriftIndicatorsApi extends runtime.BaseAPI {
    /**
     * Returns the count of Drift Indicators by the date. by default it\'s for 7 days.
     */
    async getDriftIndicatorsValuesByDateRaw(
        requestParameters: DriftIndicatorsApiGetDriftIndicatorsValuesByDateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DriftindicatorsDriftIndicatorsFieldValue>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
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
                path: `/container-security/aggregates/drift-indicators/count-by-date/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DriftindicatorsDriftIndicatorsFieldValueFromJSON(jsonValue));
    }

    /**
     * Returns the count of Drift Indicators by the date. by default it\'s for 7 days.
     */
    async getDriftIndicatorsValuesByDate(filter?: string, limit?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DriftindicatorsDriftIndicatorsFieldValue> {
        const response = await this.getDriftIndicatorsValuesByDateRaw({ filter: filter, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve Drift Indicator entities identified by the provided IDs
     */
    async readDriftIndicatorEntitiesRaw(
        requestParameters: DriftIndicatorsApiReadDriftIndicatorEntitiesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DriftindicatorsDriftEntityResponse>> {
        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"]!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/entities/drift-indicators/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DriftindicatorsDriftEntityResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve Drift Indicator entities identified by the provided IDs
     */
    async readDriftIndicatorEntities(ids?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DriftindicatorsDriftEntityResponse> {
        const response = await this.readDriftIndicatorEntitiesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Returns the total count of Drift indicators over a time period
     */
    async readDriftIndicatorsCountRaw(
        requestParameters: DriftIndicatorsApiReadDriftIndicatorsCountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DriftindicatorsDriftIndicatorsCountValue>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/aggregates/drift-indicators/count/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DriftindicatorsDriftIndicatorsCountValueFromJSON(jsonValue));
    }

    /**
     * Returns the total count of Drift indicators over a time period
     */
    async readDriftIndicatorsCount(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DriftindicatorsDriftIndicatorsCountValue> {
        const response = await this.readDriftIndicatorsCountRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve Drift Indicators by the provided search criteria
     */
    async searchAndReadDriftIndicatorEntitiesRaw(
        requestParameters: DriftIndicatorsApiSearchAndReadDriftIndicatorEntitiesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DriftindicatorsDriftEntityResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
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
                path: `/container-security/combined/drift-indicators/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DriftindicatorsDriftEntityResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve Drift Indicators by the provided search criteria
     */
    async searchAndReadDriftIndicatorEntities(
        filter?: string,
        limit?: number,
        offset?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<DriftindicatorsDriftEntityResponse> {
        const response = await this.searchAndReadDriftIndicatorEntitiesRaw({ filter: filter, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all drift indicators that match the given query
     */
    async searchDriftIndicatorsRaw(
        requestParameters: DriftIndicatorsApiSearchDriftIndicatorsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
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
                path: `/container-security/queries/drift-indicators/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve all drift indicators that match the given query
     */
    async searchDriftIndicators(filter?: string, limit?: number, offset?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.searchDriftIndicatorsRaw({ filter: filter, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }
}