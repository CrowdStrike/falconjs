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
import type { DomainAssessmentsResponse, DomainComplianceResponse, MsaReplyMetaOnly } from "../models";
import {
    DomainAssessmentsResponseFromJSON,
    DomainAssessmentsResponseToJSON,
    DomainComplianceResponseFromJSON,
    DomainComplianceResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface GetAssessmentV1Request {
    ids: Array<string>;
}

/**
 *
 */
export class ZeroTrustAssessmentApi extends runtime.BaseAPI {
    /**
     * Get Zero Trust Assessment data for one or more hosts by providing agent IDs (AID) and a customer ID (CID).
     */
    async getAssessmentV1Raw(requestParameters: GetAssessmentV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainAssessmentsResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getAssessmentV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["zero-trust-assessment:read"]);
        }

        const response = await this.request(
            {
                path: `/zero-trust-assessment/entities/assessments/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAssessmentsResponseFromJSON(jsonValue));
    }

    /**
     * Get Zero Trust Assessment data for one or more hosts by providing agent IDs (AID) and a customer ID (CID).
     */
    async getAssessmentV1(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAssessmentsResponse> {
        const response = await this.getAssessmentV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get the Zero Trust Assessment compliance report for one customer ID (CID).
     */
    async getComplianceV1Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainComplianceResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["zero-trust-assessment:read"]);
        }

        const response = await this.request(
            {
                path: `/zero-trust-assessment/entities/audit/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainComplianceResponseFromJSON(jsonValue));
    }

    /**
     * Get the Zero Trust Assessment compliance report for one customer ID (CID).
     */
    async getComplianceV1(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainComplianceResponse> {
        const response = await this.getComplianceV1Raw(initOverrides);
        return await response.value();
    }
}
