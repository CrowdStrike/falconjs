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
import { MainDiscoveryResponseV2, MainDiscoveryResponseV2FromJSON, MainDiscoveryResponseV2ToJSON, MsaReplyMetaOnly, MsaReplyMetaOnlyFromJSON, MsaReplyMetaOnlyToJSON } from "../models";

export interface ListAvailableStreamsOAuth2Request {
    appId: string;
    format?: string;
}

export interface RefreshActiveStreamSessionRequest {
    actionName: string;
    appId: string;
    partition: number;
}

/**
 *
 */
export class EventStreamsApi extends runtime.BaseAPI {
    /**
     * Discover all event streams in your environment
     */
    async listAvailableStreamsOAuth2Raw(
        requestParameters: ListAvailableStreamsOAuth2Request,
        initOverrides?: RequestInit | runtime.InitOverideFunction
    ): Promise<runtime.ApiResponse<MainDiscoveryResponseV2>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError("appId", "Required parameter requestParameters.appId was null or undefined when calling listAvailableStreamsOAuth2.");
        }

        const queryParameters: any = {};

        if (requestParameters.appId !== undefined) {
            queryParameters["appId"] = requestParameters.appId;
        }

        if (requestParameters.format !== undefined) {
            queryParameters["format"] = requestParameters.format;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["streaming:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/entities/datafeed/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MainDiscoveryResponseV2FromJSON(jsonValue));
    }

    /**
     * Discover all event streams in your environment
     */
    async listAvailableStreamsOAuth2(appId: string, format?: string, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MainDiscoveryResponseV2> {
        const response = await this.listAvailableStreamsOAuth2Raw({ appId: appId, format: format }, initOverrides);
        return await response.value();
    }

    /**
     * Refresh an active event stream. Use the URL shown in a GET /sensors/entities/datafeed/v2 response.
     */
    async refreshActiveStreamSessionRaw(
        requestParameters: RefreshActiveStreamSessionRequest,
        initOverrides?: RequestInit | runtime.InitOverideFunction
    ): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.actionName === null || requestParameters.actionName === undefined) {
            throw new runtime.RequiredError("actionName", "Required parameter requestParameters.actionName was null or undefined when calling refreshActiveStreamSession.");
        }

        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError("appId", "Required parameter requestParameters.appId was null or undefined when calling refreshActiveStreamSession.");
        }

        if (requestParameters.partition === null || requestParameters.partition === undefined) {
            throw new runtime.RequiredError("partition", "Required parameter requestParameters.partition was null or undefined when calling refreshActiveStreamSession.");
        }

        const queryParameters: any = {};

        if (requestParameters.actionName !== undefined) {
            queryParameters["action_name"] = requestParameters.actionName;
        }

        if (requestParameters.appId !== undefined) {
            queryParameters["appId"] = requestParameters.appId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["streaming:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/entities/datafeed-actions/v1/{partition}`.replace(`{${"partition"}}`, encodeURIComponent(String(requestParameters.partition))),
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Refresh an active event stream. Use the URL shown in a GET /sensors/entities/datafeed/v2 response.
     */
    async refreshActiveStreamSession(actionName: string, appId: string, partition: number, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.refreshActiveStreamSessionRaw({ actionName: actionName, appId: appId, partition: partition }, initOverrides);
        return await response.value();
    }
}
