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
  CommonCountResponse,
  CoreEntitiesResponse,
  MsaReplyMetaOnly,
  PackagesApiCombinedPackage,
  PackagesApiCombinedPackageExport,
  PackagesApiPackagesByVulnCount,
} from '../models/index';
import {
    CommonCountResponseFromJSON,
    CommonCountResponseToJSON,
    CoreEntitiesResponseFromJSON,
    CoreEntitiesResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    PackagesApiCombinedPackageFromJSON,
    PackagesApiCombinedPackageToJSON,
    PackagesApiCombinedPackageExportFromJSON,
    PackagesApiCombinedPackageExportToJSON,
    PackagesApiPackagesByVulnCountFromJSON,
    PackagesApiPackagesByVulnCountToJSON,
} from '../models/index';

export interface ReadPackagesByFixableVulnCountRequest {
    filter?: string;
    limit?: number;
    offset?: number;
}

export interface ReadPackagesByVulnCountRequest {
    filter?: string;
    limit?: number;
    offset?: number;
}

export interface ReadPackagesCombinedRequest {
    filter?: string;
    onlyZeroDayAffected?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface ReadPackagesCombinedExportRequest {
    filter?: string;
    onlyZeroDayAffected?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface ReadPackagesCountByZeroDayRequest {
    filter?: string;
}

/**
 * 
 */
export class ContainerPackagesApi extends runtime.BaseAPI {

    /**
     * Retrieve top x app packages with the most fixable vulnerabilities
     */
    async readPackagesByFixableVulnCountRaw(requestParameters: ReadPackagesByFixableVulnCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackagesApiPackagesByVulnCount>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-security/combined/packages/app-by-fixable-vulnerability-count/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackagesApiPackagesByVulnCountFromJSON(jsonValue));
    }

    /**
     * Retrieve top x app packages with the most fixable vulnerabilities
     */
    async readPackagesByFixableVulnCount(filter?: string, limit?: number, offset?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackagesApiPackagesByVulnCount> {
        const response = await this.readPackagesByFixableVulnCountRaw({ filter: filter, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve top x packages with the most vulnerabilities
     */
    async readPackagesByVulnCountRaw(requestParameters: ReadPackagesByVulnCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackagesApiPackagesByVulnCount>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-security/combined/packages/by-vulnerability-count/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackagesApiPackagesByVulnCountFromJSON(jsonValue));
    }

    /**
     * Retrieve top x packages with the most vulnerabilities
     */
    async readPackagesByVulnCount(filter?: string, limit?: number, offset?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackagesApiPackagesByVulnCount> {
        const response = await this.readPackagesByVulnCountRaw({ filter: filter, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve packages identified by the provided filter criteria
     */
    async readPackagesCombinedRaw(requestParameters: ReadPackagesCombinedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackagesApiCombinedPackage>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['onlyZeroDayAffected'] != null) {
            queryParameters['only_zero_day_affected'] = requestParameters['onlyZeroDayAffected'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
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
            path: `/container-security/combined/packages/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackagesApiCombinedPackageFromJSON(jsonValue));
    }

    /**
     * Retrieve packages identified by the provided filter criteria
     */
    async readPackagesCombined(filter?: string, onlyZeroDayAffected?: boolean, limit?: number, offset?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackagesApiCombinedPackage> {
        const response = await this.readPackagesCombinedRaw({ filter: filter, onlyZeroDayAffected: onlyZeroDayAffected, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve packages identified by the provided filter criteria for the purpose of export
     */
    async readPackagesCombinedExportRaw(requestParameters: ReadPackagesCombinedExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackagesApiCombinedPackageExport>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['onlyZeroDayAffected'] != null) {
            queryParameters['only_zero_day_affected'] = requestParameters['onlyZeroDayAffected'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
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
            path: `/container-security/combined/packages/export/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PackagesApiCombinedPackageExportFromJSON(jsonValue));
    }

    /**
     * Retrieve packages identified by the provided filter criteria for the purpose of export
     */
    async readPackagesCombinedExport(filter?: string, onlyZeroDayAffected?: boolean, limit?: number, offset?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackagesApiCombinedPackageExport> {
        const response = await this.readPackagesCombinedExportRaw({ filter: filter, onlyZeroDayAffected: onlyZeroDayAffected, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve packages count affected by zero day vulnerabilities
     */
    async readPackagesCountByZeroDayRaw(requestParameters: ReadPackagesCountByZeroDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommonCountResponse>> {
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
            path: `/container-security/aggregates/packages/count-by-zero-day/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonCountResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve packages count affected by zero day vulnerabilities
     */
    async readPackagesCountByZeroDay(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommonCountResponse> {
        const response = await this.readPackagesCountByZeroDayRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

}
