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
import { DomainAccessTokenResponseV1, DomainAccessTokenResponseV1FromJSON, DomainAccessTokenResponseV1ToJSON, MsaReplyMetaOnly, MsaReplyMetaOnlyFromJSON, MsaReplyMetaOnlyToJSON } from "../models";

export interface Oauth2AccessTokenRequest {
    clientId: string;
    clientSecret: string;
    memberCid?: string;
}

export interface Oauth2RevokeTokenRequest {
    token: string;
}

/**
 *
 */
export class Oauth2Api extends runtime.BaseAPI {
    /**
     * Generate an OAuth2 access token
     */
    async oauth2AccessTokenRaw(requestParameters: Oauth2AccessTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainAccessTokenResponseV1>> {
        if (requestParameters.clientId === null || requestParameters.clientId === undefined) {
            throw new runtime.RequiredError("clientId", "Required parameter requestParameters.clientId was null or undefined when calling oauth2AccessToken.");
        }

        if (requestParameters.clientSecret === null || requestParameters.clientSecret === undefined) {
            throw new runtime.RequiredError("clientSecret", "Required parameter requestParameters.clientSecret was null or undefined when calling oauth2AccessToken.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        if (requestParameters.clientId !== undefined) {
            formParams.append("client_id", requestParameters.clientId as any);
        }

        if (requestParameters.clientSecret !== undefined) {
            formParams.append("client_secret", requestParameters.clientSecret as any);
        }

        if (requestParameters.memberCid !== undefined) {
            formParams.append("member_cid", requestParameters.memberCid as any);
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
    async oauth2AccessToken(clientId: string, clientSecret: string, memberCid?: string, initOverrides?: RequestInit): Promise<DomainAccessTokenResponseV1> {
        const response = await this.oauth2AccessTokenRaw({ clientId: clientId, clientSecret: clientSecret, memberCid: memberCid }, initOverrides);
        return await response.value();
    }

    /**
     * Revoke a previously issued OAuth2 access token before the end of its standard 30-minute lifespan.
     */
    async oauth2RevokeTokenRaw(requestParameters: Oauth2RevokeTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError("token", "Required parameter requestParameters.token was null or undefined when calling oauth2RevokeToken.");
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

        if (requestParameters.token !== undefined) {
            formParams.append("token", requestParameters.token as any);
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

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Revoke a previously issued OAuth2 access token before the end of its standard 30-minute lifespan.
     */
    async oauth2RevokeToken(token: string, initOverrides?: RequestInit): Promise<MsaReplyMetaOnly> {
        const response = await this.oauth2RevokeTokenRaw({ token: token }, initOverrides);
        return await response.value();
    }
}