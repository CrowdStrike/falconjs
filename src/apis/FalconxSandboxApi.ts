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
    ClientQuerySamplesRequest,
    ClientSampleMetadataResponseV2,
    FalconxErrorsOnly,
    FalconxQueryResponse,
    FalconxReportV1Response,
    FalconxSubmissionParametersV1,
    FalconxSubmissionV1Response,
    FalconxSummaryReportV1Response,
    MsaQueryResponse,
    MsaReplyMetaOnly,
    MsaspecQueryResponse,
    MsaspecResponseFields,
} from "../models/index";
import {
    ClientQuerySamplesRequestFromJSON,
    ClientQuerySamplesRequestToJSON,
    ClientSampleMetadataResponseV2FromJSON,
    ClientSampleMetadataResponseV2ToJSON,
    FalconxErrorsOnlyFromJSON,
    FalconxErrorsOnlyToJSON,
    FalconxQueryResponseFromJSON,
    FalconxQueryResponseToJSON,
    FalconxReportV1ResponseFromJSON,
    FalconxReportV1ResponseToJSON,
    FalconxSubmissionParametersV1FromJSON,
    FalconxSubmissionParametersV1ToJSON,
    FalconxSubmissionV1ResponseFromJSON,
    FalconxSubmissionV1ResponseToJSON,
    FalconxSummaryReportV1ResponseFromJSON,
    FalconxSummaryReportV1ResponseToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecQueryResponseFromJSON,
    MsaspecQueryResponseToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from "../models/index";

export interface DeleteReportRequest {
    ids: string;
}

export interface DeleteSampleV2Request {
    ids: string;
}

export interface GetArtifactsRequest {
    id: string;
    name?: string;
    acceptEncoding?: string;
}

export interface GetMemoryDumpRequest {
    id: string;
    name?: string;
    acceptEncoding?: string;
}

export interface GetMemoryDumpExtractedStringsRequest {
    id: string;
    name?: string;
    acceptEncoding?: string;
}

export interface GetMemoryDumpHexDumpRequest {
    id: string;
    name?: string;
    acceptEncoding?: string;
}

export interface GetReportsRequest {
    ids: Array<string>;
}

export interface GetSampleV2Request {
    ids: string;
    passwordProtected?: boolean;
}

export interface GetSubmissionsRequest {
    ids: Array<string>;
}

export interface GetSummaryReportsRequest {
    ids: Array<string>;
}

export interface QueryReportsRequest {
    filter?: string;
    offset?: string;
    limit?: number;
    sort?: string;
}

export interface QuerySampleV1Request {
    body: ClientQuerySamplesRequest;
}

export interface QuerySubmissionsRequest {
    filter?: string;
    offset?: string;
    limit?: number;
    sort?: string;
}

export interface SubmitRequest {
    body: FalconxSubmissionParametersV1;
}

export interface UploadSampleV2Request {
    sample: Blob;
    fileName: string;
    comment?: string;
    isConfidential?: boolean;
}

/**
 *
 */
export class FalconxSandboxApi extends runtime.BaseAPI {
    /**
     * Delete report based on the report ID. Operation can be checked for success by polling for the report ID on the report-summaries endpoint.
     */
    async deleteReportRaw(requestParameters: DeleteReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FalconxQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteReport.");
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
                path: `/falconx/entities/reports/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => FalconxQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete report based on the report ID. Operation can be checked for success by polling for the report ID on the report-summaries endpoint.
     */
    async deleteReport(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FalconxQueryResponse> {
        const response = await this.deleteReportRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Removes a sample, including file, meta and submissions from the collection
     */
    async deleteSampleV2Raw(requestParameters: DeleteSampleV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteSampleV2.");
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
                path: `/samples/entities/samples/v2`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Removes a sample, including file, meta and submissions from the collection
     */
    async deleteSampleV2(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.deleteSampleV2Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Download IOC packs, PCAP files, memory dumps, and other analysis artifacts.
     */
    async getArtifactsRaw(requestParameters: GetArtifactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getArtifacts.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.name !== undefined) {
            queryParameters["name"] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptEncoding !== undefined && requestParameters.acceptEncoding !== null) {
            headerParameters["Accept-Encoding"] = String(requestParameters.acceptEncoding);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/falconx/entities/artifacts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Download IOC packs, PCAP files, memory dumps, and other analysis artifacts.
     */
    async getArtifacts(id: string, name?: string, acceptEncoding?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.getArtifactsRaw({ id: id, name: name, acceptEncoding: acceptEncoding }, initOverrides);
        return await response.value();
    }

    /**
     * Get memory dump content, as binary
     */
    async getMemoryDumpRaw(requestParameters: GetMemoryDumpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getMemoryDump.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.name !== undefined) {
            queryParameters["name"] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptEncoding !== undefined && requestParameters.acceptEncoding !== null) {
            headerParameters["Accept-Encoding"] = String(requestParameters.acceptEncoding);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/falconx/entities/memory-dump/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get memory dump content, as binary
     */
    async getMemoryDump(id: string, name?: string, acceptEncoding?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.getMemoryDumpRaw({ id: id, name: name, acceptEncoding: acceptEncoding }, initOverrides);
        return await response.value();
    }

    /**
     * Get extracted strings from a memory dump
     */
    async getMemoryDumpExtractedStringsRaw(
        requestParameters: GetMemoryDumpExtractedStringsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getMemoryDumpExtractedStrings.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.name !== undefined) {
            queryParameters["name"] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptEncoding !== undefined && requestParameters.acceptEncoding !== null) {
            headerParameters["Accept-Encoding"] = String(requestParameters.acceptEncoding);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/falconx/entities/memory-dump/extracted-strings/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get extracted strings from a memory dump
     */
    async getMemoryDumpExtractedStrings(id: string, name?: string, acceptEncoding?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.getMemoryDumpExtractedStringsRaw({ id: id, name: name, acceptEncoding: acceptEncoding }, initOverrides);
        return await response.value();
    }

    /**
     * Get hex view of a memory dump
     */
    async getMemoryDumpHexDumpRaw(requestParameters: GetMemoryDumpHexDumpRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getMemoryDumpHexDump.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.name !== undefined) {
            queryParameters["name"] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptEncoding !== undefined && requestParameters.acceptEncoding !== null) {
            headerParameters["Accept-Encoding"] = String(requestParameters.acceptEncoding);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/falconx/entities/memory-dump/hex-dump/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get hex view of a memory dump
     */
    async getMemoryDumpHexDump(id: string, name?: string, acceptEncoding?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.getMemoryDumpHexDumpRaw({ id: id, name: name, acceptEncoding: acceptEncoding }, initOverrides);
        return await response.value();
    }

    /**
     * Get a full sandbox report.
     */
    async getReportsRaw(requestParameters: GetReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FalconxReportV1Response>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getReports.");
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
                path: `/falconx/entities/reports/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => FalconxReportV1ResponseFromJSON(jsonValue));
    }

    /**
     * Get a full sandbox report.
     */
    async getReports(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FalconxReportV1Response> {
        const response = await this.getReportsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the file associated with the given ID (SHA256)
     */
    async getSampleV2Raw(requestParameters: GetSampleV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getSampleV2.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters["ids"] = requestParameters.ids;
        }

        if (requestParameters.passwordProtected !== undefined) {
            queryParameters["password_protected"] = requestParameters.passwordProtected;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/samples/entities/samples/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        if (this.isJsonMime(response.headers.get("content-type"))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Retrieves the file associated with the given ID (SHA256)
     */
    async getSampleV2(ids: string, passwordProtected?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getSampleV2Raw({ ids: ids, passwordProtected: passwordProtected }, initOverrides);
        return await response.value();
    }

    /**
     * Check the status of a sandbox analysis. Time required for analysis varies but is usually less than 15 minutes.
     */
    async getSubmissionsRaw(requestParameters: GetSubmissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FalconxSubmissionV1Response>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getSubmissions.");
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
                path: `/falconx/entities/submissions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => FalconxSubmissionV1ResponseFromJSON(jsonValue));
    }

    /**
     * Check the status of a sandbox analysis. Time required for analysis varies but is usually less than 15 minutes.
     */
    async getSubmissions(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FalconxSubmissionV1Response> {
        const response = await this.getSubmissionsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get a short summary version of a sandbox report.
     */
    async getSummaryReportsRaw(requestParameters: GetSummaryReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FalconxSummaryReportV1Response>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getSummaryReports.");
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
                path: `/falconx/entities/report-summaries/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => FalconxSummaryReportV1ResponseFromJSON(jsonValue));
    }

    /**
     * Get a short summary version of a sandbox report.
     */
    async getSummaryReports(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FalconxSummaryReportV1Response> {
        const response = await this.getSummaryReportsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Find sandbox reports by providing an FQL filter and paging details. Returns a set of report IDs that match your criteria.
     */
    async queryReportsRaw(requestParameters: QueryReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/falconx/queries/reports/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Find sandbox reports by providing an FQL filter and paging details. Returns a set of report IDs that match your criteria.
     */
    async queryReports(filter?: string, offset?: string, limit?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.queryReportsRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list with sha256 of samples that exist and customer has rights to access them, maximum number of accepted items is 200
     */
    async querySampleV1Raw(requestParameters: QuerySampleV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling querySampleV1.");
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
                path: `/samples/queries/samples/GET/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ClientQuerySamplesRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a list with sha256 of samples that exist and customer has rights to access them, maximum number of accepted items is 200
     */
    async querySampleV1(body: ClientQuerySamplesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.querySampleV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Find submission IDs for uploaded files by providing an FQL filter and paging details. Returns a set of submission IDs that match your criteria.
     */
    async querySubmissionsRaw(requestParameters: QuerySubmissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/falconx/queries/submissions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Find submission IDs for uploaded files by providing an FQL filter and paging details. Returns a set of submission IDs that match your criteria.
     */
    async querySubmissions(filter?: string, offset?: string, limit?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.querySubmissionsRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Submit an uploaded file or a URL for sandbox analysis. Time required for analysis varies but is usually less than 15 minutes.
     */
    async submitRaw(requestParameters: SubmitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FalconxSubmissionV1Response>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling submit.");
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
                path: `/falconx/entities/submissions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: FalconxSubmissionParametersV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => FalconxSubmissionV1ResponseFromJSON(jsonValue));
    }

    /**
     * Submit an uploaded file or a URL for sandbox analysis. Time required for analysis varies but is usually less than 15 minutes.
     */
    async submit(body: FalconxSubmissionParametersV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FalconxSubmissionV1Response> {
        const response = await this.submitRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Upload a file for sandbox analysis. After uploading, use `/falconx/entities/submissions/v1` to start analyzing the file.
     */
    async uploadSampleV2Raw(requestParameters: UploadSampleV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClientSampleMetadataResponseV2>> {
        if (requestParameters.sample === null || requestParameters.sample === undefined) {
            throw new runtime.RequiredError("sample", "Required parameter requestParameters.sample was null or undefined when calling uploadSampleV2.");
        }

        if (requestParameters.fileName === null || requestParameters.fileName === undefined) {
            throw new runtime.RequiredError("fileName", "Required parameter requestParameters.fileName was null or undefined when calling uploadSampleV2.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const consumes: runtime.Consume[] = [{ contentType: "multipart/form-data" }, { contentType: "application/octet-stream" }];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.sample !== undefined) {
            formParams.append("sample", requestParameters.sample as any);
        }

        if (requestParameters.fileName !== undefined) {
            formParams.append("file_name", requestParameters.fileName as any);
        }

        if (requestParameters.comment !== undefined) {
            formParams.append("comment", requestParameters.comment as any);
        }

        if (requestParameters.isConfidential !== undefined) {
            formParams.append("is_confidential", requestParameters.isConfidential as any);
        }

        const response = await this.request(
            {
                path: `/samples/entities/samples/v2`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientSampleMetadataResponseV2FromJSON(jsonValue));
    }

    /**
     * Upload a file for sandbox analysis. After uploading, use `/falconx/entities/submissions/v1` to start analyzing the file.
     */
    async uploadSampleV2(
        sample: Blob,
        fileName: string,
        comment?: string,
        isConfidential?: boolean,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ClientSampleMetadataResponseV2> {
        const response = await this.uploadSampleV2Raw({ sample: sample, fileName: fileName, comment: comment, isConfidential: isConfidential }, initOverrides);
        return await response.value();
    }
}
