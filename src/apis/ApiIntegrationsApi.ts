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
  DomainConfigsV1,
  DomainExecuteCommandRequestV1,
  DomainExecuteCommandResultsV1,
  MsaReplyMetaOnly,
  MsaspecResponseFields,
} from '../models/index';
import {
    DomainConfigsV1FromJSON,
    DomainConfigsV1ToJSON,
    DomainExecuteCommandRequestV1FromJSON,
    DomainExecuteCommandRequestV1ToJSON,
    DomainExecuteCommandResultsV1FromJSON,
    DomainExecuteCommandResultsV1ToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from '../models/index';

export interface ExecuteCommandRequest {
    body: DomainExecuteCommandRequestV1;
}

export interface GetCombinedPluginConfigsRequest {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

/**
 * 
 */
export class ApiIntegrationsApi extends runtime.BaseAPI {

    /**
     * Execute a command.
     */
    async executeCommandRaw(requestParameters: ExecuteCommandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainExecuteCommandResultsV1>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling executeCommand().'
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
            path: `/plugins/entities/execute/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DomainExecuteCommandRequestV1ToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExecuteCommandResultsV1FromJSON(jsonValue));
    }

    /**
     * Execute a command.
     */
    async executeCommand(body: DomainExecuteCommandRequestV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExecuteCommandResultsV1> {
        const response = await this.executeCommandRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Queries for config resources and returns details
     */
    async getCombinedPluginConfigsRaw(requestParameters: GetCombinedPluginConfigsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainConfigsV1>> {
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

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/plugins/combined/configs/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainConfigsV1FromJSON(jsonValue));
    }

    /**
     * Queries for config resources and returns details
     */
    async getCombinedPluginConfigs(filter?: string, limit?: number, offset?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainConfigsV1> {
        const response = await this.getCombinedPluginConfigsRaw({ filter: filter, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

}
