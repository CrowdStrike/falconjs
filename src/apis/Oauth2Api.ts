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
import type { DomainAccessTokenResponseV1, MsaReplyMetaOnly, MsaspecResponseFields } from "../models/index";
import {
    DomainAccessTokenResponseV1FromJSON,
    DomainAccessTokenResponseV1ToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from "../models/index";

export interface Oauth2ApiOauth2AccessTokenRequest {
    clientId: string;
    clientSecret: string;
    memberCid?: string;
}

export interface Oauth2ApiOauth2RevokeTokenRequest {
    token: string;
    clientId?: string;
}

/**
 *
 */
export class Oauth2Api extends runtime.BaseAPI {
    /**
     * Generate an OAuth2 access token
     */
    async oauth2AccessTokenRaw(
        requestParameters: Oauth2ApiOauth2AccessTokenRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DomainAccessTokenResponseV1>> {
        if (requestParameters["clientId"] == null) {
            throw new runtime.RequiredError("clientId", 'Required parameter "clientId" was null or undefined when calling oauth2AccessToken().');
        }

        if (requestParameters["clientSecret"] == null) {
            throw new runtime.RequiredError("clientSecret", 'Required parameter "clientSecret" was null or undefined when calling oauth2AccessToken().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const consumes: runtime.Consume[] = [{ contentType: "application/x-www-form-urlencoded" }, { contentType: "text/html" }];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters["clientId"] != null) {
            formParams.append("client_id", requestParameters["clientId"] as any);
        }

        if (requestParameters["clientSecret"] != null) {
            formParams.append("client_secret", requestParameters["clientSecret"] as any);
        }

        if (requestParameters["memberCid"] != null) {
            formParams.append("member_cid", requestParameters["memberCid"] as any);
        }

        const response = await this.request(
            {
                path: `/oauth2/token`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAccessTokenResponseV1FromJSON(jsonValue));
    }

    /**
     * Generate an OAuth2 access token
     */
    async oauth2AccessToken(clientId: string, clientSecret: string, memberCid?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAccessTokenResponseV1> {
        const response = await this.oauth2AccessTokenRaw({ clientId: clientId, clientSecret: clientSecret, memberCid: memberCid }, initOverrides);
        return await response.value();
    }

    /**
     * Revoke a previously issued OAuth2 access token before the end of its standard 30-minute lifespan.
     */
    async oauth2RevokeTokenRaw(requestParameters: Oauth2ApiOauth2RevokeTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecResponseFields>> {
        if (requestParameters["token"] == null) {
            throw new runtime.RequiredError("token", 'Required parameter "token" was null or undefined when calling oauth2RevokeToken().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const consumes: runtime.Consume[] = [{ contentType: "application/x-www-form-urlencoded" }];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters["clientId"] != null) {
            formParams.append("client_id", requestParameters["clientId"] as any);
        }

        if (requestParameters["token"] != null) {
            formParams.append("token", requestParameters["token"] as any);
        }

        const response = await this.request(
            {
                path: `/oauth2/revoke`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecResponseFieldsFromJSON(jsonValue));
    }

    /**
     * Revoke a previously issued OAuth2 access token before the end of its standard 30-minute lifespan.
     */
    async oauth2RevokeToken(token: string, clientId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecResponseFields> {
        const response = await this.oauth2RevokeTokenRaw({ token: token, clientId: clientId }, initOverrides);
        return await response.value();
    }
}
