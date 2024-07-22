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
  ApiImageLookupRequest,
  CoreEntitiesResponse,
  MsaReplyMetaOnly,
} from '../models/index';
import {
    ApiImageLookupRequestFromJSON,
    ApiImageLookupRequestToJSON,
    CoreEntitiesResponseFromJSON,
    CoreEntitiesResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from '../models/index';

export interface ReadImageVulnerabilitiesRequest {
    body: ApiImageLookupRequest;
}

/**
 * 
 */
export class FalconContainerCliApi extends runtime.BaseAPI {

    /**
     * Retrieve known vulnerabilities for the provided image
     */
    async readImageVulnerabilitiesRaw(requestParameters: ReadImageVulnerabilitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoreEntitiesResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling readImageVulnerabilities().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falcon-container-cli:write"]);
        }

        const response = await this.request({
            path: `/image-assessment/combined/vulnerability-lookups/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiImageLookupRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoreEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve known vulnerabilities for the provided image
     */
    async readImageVulnerabilities(body: ApiImageLookupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoreEntitiesResponse> {
        const response = await this.readImageVulnerabilitiesRaw({ body: body }, initOverrides);
        return await response.value();
    }

}
