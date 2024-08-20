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
  ApiCertBasedExclusionRespV1,
  ApiCertBasedExclusionsCreateReqV1,
  ApiCertBasedExclusionsUpdateReqV1,
  ApiRespCertificatesV1,
  MsaReplyMetaOnly,
  MsaspecQueryResponse,
  MsaspecResponseFields,
} from '../models/index';
import {
    ApiCertBasedExclusionRespV1FromJSON,
    ApiCertBasedExclusionRespV1ToJSON,
    ApiCertBasedExclusionsCreateReqV1FromJSON,
    ApiCertBasedExclusionsCreateReqV1ToJSON,
    ApiCertBasedExclusionsUpdateReqV1FromJSON,
    ApiCertBasedExclusionsUpdateReqV1ToJSON,
    ApiRespCertificatesV1FromJSON,
    ApiRespCertificatesV1ToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecQueryResponseFromJSON,
    MsaspecQueryResponseToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from '../models/index';

export interface CbExclusionsCreateV1Request {
    body: ApiCertBasedExclusionsCreateReqV1;
}

export interface CbExclusionsDeleteV1Request {
    ids: Array<string>;
    comment?: string;
}

export interface CbExclusionsGetV1Request {
    ids: Array<string>;
}

export interface CbExclusionsQueryV1Request {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: CbExclusionsQueryV1SortEnum;
}

export interface CbExclusionsUpdateV1Request {
    body: ApiCertBasedExclusionsUpdateReqV1;
}

export interface CertificatesGetV1Request {
    ids: string;
}

/**
 * 
 */
export class CertificateBasedExclusionsApi extends runtime.BaseAPI {

    /**
     * Create new Certificate Based Exclusions.
     */
    async cbExclusionsCreateV1Raw(requestParameters: CbExclusionsCreateV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiCertBasedExclusionRespV1>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling cbExclusionsCreateV1().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/exclusions/entities/cert-based-exclusions/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiCertBasedExclusionsCreateReqV1ToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiCertBasedExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Create new Certificate Based Exclusions.
     */
    async cbExclusionsCreateV1(body: ApiCertBasedExclusionsCreateReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiCertBasedExclusionRespV1> {
        const response = await this.cbExclusionsCreateV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete the exclusions by id
     */
    async cbExclusionsDeleteV1Raw(requestParameters: CbExclusionsDeleteV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiCertBasedExclusionRespV1>> {
        if (requestParameters['ids'] == null) {
            throw new runtime.RequiredError(
                'ids',
                'Required parameter "ids" was null or undefined when calling cbExclusionsDeleteV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        if (requestParameters['comment'] != null) {
            queryParameters['comment'] = requestParameters['comment'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/exclusions/entities/cert-based-exclusions/v1`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiCertBasedExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Delete the exclusions by id
     */
    async cbExclusionsDeleteV1(ids: Array<string>, comment?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiCertBasedExclusionRespV1> {
        const response = await this.cbExclusionsDeleteV1Raw({ ids: ids, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Find all exclusion IDs matching the query with filter
     */
    async cbExclusionsGetV1Raw(requestParameters: CbExclusionsGetV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiCertBasedExclusionRespV1>> {
        if (requestParameters['ids'] == null) {
            throw new runtime.RequiredError(
                'ids',
                'Required parameter "ids" was null or undefined when calling cbExclusionsGetV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/exclusions/entities/cert-based-exclusions/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiCertBasedExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Find all exclusion IDs matching the query with filter
     */
    async cbExclusionsGetV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiCertBasedExclusionRespV1> {
        const response = await this.cbExclusionsGetV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for cert-based exclusions.
     */
    async cbExclusionsQueryV1Raw(requestParameters: CbExclusionsQueryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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
            path: `/exclusions/queries/cert-based-exclusions/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for cert-based exclusions.
     */
    async cbExclusionsQueryV1(filter?: string, offset?: number, limit?: number, sort?: CbExclusionsQueryV1SortEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.cbExclusionsQueryV1Raw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Updates existing Certificate Based Exclusions
     */
    async cbExclusionsUpdateV1Raw(requestParameters: CbExclusionsUpdateV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiCertBasedExclusionRespV1>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling cbExclusionsUpdateV1().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/exclusions/entities/cert-based-exclusions/v1`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ApiCertBasedExclusionsUpdateReqV1ToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiCertBasedExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Updates existing Certificate Based Exclusions
     */
    async cbExclusionsUpdateV1(body: ApiCertBasedExclusionsUpdateReqV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiCertBasedExclusionRespV1> {
        const response = await this.cbExclusionsUpdateV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves certificate signing information for a file
     */
    async certificatesGetV1Raw(requestParameters: CertificatesGetV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiRespCertificatesV1>> {
        if (requestParameters['ids'] == null) {
            throw new runtime.RequiredError(
                'ids',
                'Required parameter "ids" was null or undefined when calling certificatesGetV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/exclusions/entities/certificates/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRespCertificatesV1FromJSON(jsonValue));
    }

    /**
     * Retrieves certificate signing information for a file
     */
    async certificatesGetV1(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiRespCertificatesV1> {
        const response = await this.certificatesGetV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CbExclusionsQueryV1SortEnum = {
    CreatedBy: 'created_by',
    CreatedOn: 'created_on',
    ModifiedBy: 'modified_by',
    ModifiedOn: 'modified_on',
    Name: 'name'
} as const;
export type CbExclusionsQueryV1SortEnum = typeof CbExclusionsQueryV1SortEnum[keyof typeof CbExclusionsQueryV1SortEnum];
