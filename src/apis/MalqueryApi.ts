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
    MalqueryExternalExactSearchParametersV1,
    MalqueryExternalHuntParametersV1,
    MalqueryExternalQueryResponse,
    MalqueryFuzzySearchParametersV1,
    MalqueryFuzzySearchResponse,
    MalqueryMultiDownloadRequestV1,
    MalqueryRateLimitsResponse,
    MalqueryRequestResponse,
    MalquerySampleMetadataResponse,
    MsaErrorsOnly,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    MalqueryExternalExactSearchParametersV1FromJSON,
    MalqueryExternalExactSearchParametersV1ToJSON,
    MalqueryExternalHuntParametersV1FromJSON,
    MalqueryExternalHuntParametersV1ToJSON,
    MalqueryExternalQueryResponseFromJSON,
    MalqueryExternalQueryResponseToJSON,
    MalqueryFuzzySearchParametersV1FromJSON,
    MalqueryFuzzySearchParametersV1ToJSON,
    MalqueryFuzzySearchResponseFromJSON,
    MalqueryFuzzySearchResponseToJSON,
    MalqueryMultiDownloadRequestV1FromJSON,
    MalqueryMultiDownloadRequestV1ToJSON,
    MalqueryRateLimitsResponseFromJSON,
    MalqueryRateLimitsResponseToJSON,
    MalqueryRequestResponseFromJSON,
    MalqueryRequestResponseToJSON,
    MalquerySampleMetadataResponseFromJSON,
    MalquerySampleMetadataResponseToJSON,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface GetMalQueryDownloadV1Request {
    ids: Array<string>;
}

export interface GetMalQueryEntitiesSamplesFetchV1Request {
    ids: string;
}

export interface GetMalQueryMetadataV1Request {
    ids: Array<string>;
}

export interface GetMalQueryRequestV1Request {
    ids: Array<string>;
}

export interface PostMalQueryEntitiesSamplesMultidownloadV1Request {
    body: MalqueryMultiDownloadRequestV1;
}

export interface PostMalQueryExactSearchV1Request {
    body: MalqueryExternalExactSearchParametersV1;
}

export interface PostMalQueryFuzzySearchV1Request {
    body: MalqueryFuzzySearchParametersV1;
}

export interface PostMalQueryHuntV1Request {
    body: MalqueryExternalHuntParametersV1;
}

/**
 *
 */
export class MalqueryApi extends runtime.BaseAPI {
    /**
     * Download a file indexed by MalQuery. Specify the file using its SHA256. Only one file is supported at this time
     */
    async getMalQueryDownloadV1Raw(requestParameters: GetMalQueryDownloadV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getMalQueryDownloadV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/malquery/entities/download-files/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Download a file indexed by MalQuery. Specify the file using its SHA256. Only one file is supported at this time
     */
    async getMalQueryDownloadV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getMalQueryDownloadV1Raw({ ids: ids }, initOverrides);
    }

    /**
     * Fetch a zip archive with password \'infected\' containing the samples. Call this once the /entities/samples-multidownload request has finished processing
     */
    async getMalQueryEntitiesSamplesFetchV1Raw(
        requestParameters: GetMalQueryEntitiesSamplesFetchV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getMalQueryEntitiesSamplesFetchV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/malquery/entities/samples-fetch/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Fetch a zip archive with password \'infected\' containing the samples. Call this once the /entities/samples-multidownload request has finished processing
     */
    async getMalQueryEntitiesSamplesFetchV1(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getMalQueryEntitiesSamplesFetchV1Raw({ ids: ids }, initOverrides);
    }

    /**
     * Retrieve indexed files metadata by their hash
     */
    async getMalQueryMetadataV1Raw(
        requestParameters: GetMalQueryMetadataV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MalquerySampleMetadataResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getMalQueryMetadataV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/malquery/entities/metadata/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MalquerySampleMetadataResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve indexed files metadata by their hash
     */
    async getMalQueryMetadataV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MalquerySampleMetadataResponse> {
        const response = await this.getMalQueryMetadataV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get information about search and download quotas in your environment
     */
    async getMalQueryQuotasV1Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MalqueryRateLimitsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/malquery/aggregates/quotas/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MalqueryRateLimitsResponseFromJSON(jsonValue));
    }

    /**
     * Get information about search and download quotas in your environment
     */
    async getMalQueryQuotasV1(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MalqueryRateLimitsResponse> {
        const response = await this.getMalQueryQuotasV1Raw(initOverrides);
        return await response.value();
    }

    /**
     * Check the status and results of an asynchronous request, such as hunt or exact-search. Supports a single request id at this time.
     */
    async getMalQueryRequestV1Raw(requestParameters: GetMalQueryRequestV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MalqueryRequestResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getMalQueryRequestV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/malquery/entities/requests/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MalqueryRequestResponseFromJSON(jsonValue));
    }

    /**
     * Check the status and results of an asynchronous request, such as hunt or exact-search. Supports a single request id at this time.
     */
    async getMalQueryRequestV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MalqueryRequestResponse> {
        const response = await this.getMalQueryRequestV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Schedule samples for download. Use the result id with the /request endpoint to check if the download is ready after which you can call the /entities/samples-fetch to get the zip
     */
    async postMalQueryEntitiesSamplesMultidownloadV1Raw(
        requestParameters: PostMalQueryEntitiesSamplesMultidownloadV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MalqueryExternalQueryResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling postMalQueryEntitiesSamplesMultidownloadV1.");
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
                path: `/malquery/entities/samples-multidownload/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MalqueryMultiDownloadRequestV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MalqueryExternalQueryResponseFromJSON(jsonValue));
    }

    /**
     * Schedule samples for download. Use the result id with the /request endpoint to check if the download is ready after which you can call the /entities/samples-fetch to get the zip
     */
    async postMalQueryEntitiesSamplesMultidownloadV1(body: MalqueryMultiDownloadRequestV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MalqueryExternalQueryResponse> {
        const response = await this.postMalQueryEntitiesSamplesMultidownloadV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search Falcon MalQuery for a combination of hex patterns and strings in order to identify samples based upon file content at byte level granularity. You can filter results on criteria such as file type, file size and first seen date. Returns a request id which can be used with the /request endpoint
     */
    async postMalQueryExactSearchV1Raw(
        requestParameters: PostMalQueryExactSearchV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MalqueryExternalQueryResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling postMalQueryExactSearchV1.");
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
                path: `/malquery/queries/exact-search/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MalqueryExternalExactSearchParametersV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MalqueryExternalQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search Falcon MalQuery for a combination of hex patterns and strings in order to identify samples based upon file content at byte level granularity. You can filter results on criteria such as file type, file size and first seen date. Returns a request id which can be used with the /request endpoint
     */
    async postMalQueryExactSearchV1(body: MalqueryExternalExactSearchParametersV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MalqueryExternalQueryResponse> {
        const response = await this.postMalQueryExactSearchV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search Falcon MalQuery quickly, but with more potential for false positives. Search for a combination of hex patterns and strings in order to identify samples based upon file content at byte level granularity.
     */
    async postMalQueryFuzzySearchV1Raw(
        requestParameters: PostMalQueryFuzzySearchV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MalqueryFuzzySearchResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling postMalQueryFuzzySearchV1.");
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
                path: `/malquery/combined/fuzzy-search/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MalqueryFuzzySearchParametersV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MalqueryFuzzySearchResponseFromJSON(jsonValue));
    }

    /**
     * Search Falcon MalQuery quickly, but with more potential for false positives. Search for a combination of hex patterns and strings in order to identify samples based upon file content at byte level granularity.
     */
    async postMalQueryFuzzySearchV1(body: MalqueryFuzzySearchParametersV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MalqueryFuzzySearchResponse> {
        const response = await this.postMalQueryFuzzySearchV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Schedule a YARA-based search for execution. Returns a request id which can be used with the /request endpoint
     */
    async postMalQueryHuntV1Raw(requestParameters: PostMalQueryHuntV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MalqueryExternalQueryResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling postMalQueryHuntV1.");
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
                path: `/malquery/queries/hunt/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MalqueryExternalHuntParametersV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MalqueryExternalQueryResponseFromJSON(jsonValue));
    }

    /**
     * Schedule a YARA-based search for execution. Returns a request id which can be used with the /request endpoint
     */
    async postMalQueryHuntV1(body: MalqueryExternalHuntParametersV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MalqueryExternalQueryResponse> {
        const response = await this.postMalQueryHuntV1Raw({ body: body }, initOverrides);
        return await response.value();
    }
}
