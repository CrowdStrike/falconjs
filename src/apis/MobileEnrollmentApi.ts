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
import type { ApiPostEnrollmentDetails, ApiPostEnrollmentDetailsResponse, MsaReplyMetaOnly, MsaspecResponseFields } from "../models/index";
import {
    ApiPostEnrollmentDetailsFromJSON,
    ApiPostEnrollmentDetailsToJSON,
    ApiPostEnrollmentDetailsResponseFromJSON,
    ApiPostEnrollmentDetailsResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from "../models/index";

export interface RequestDeviceEnrollmentV3Request {
    body: ApiPostEnrollmentDetails;
    actionName?: RequestDeviceEnrollmentV3ActionNameEnum;
    filter?: string;
}

/**
 *
 */
export class MobileEnrollmentApi extends runtime.BaseAPI {
    /**
     * Trigger on-boarding process for a mobile device
     */
    async requestDeviceEnrollmentV3Raw(
        requestParameters: RequestDeviceEnrollmentV3Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ApiPostEnrollmentDetailsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling requestDeviceEnrollmentV3.");
        }

        const queryParameters: any = {};

        if (requestParameters.actionName !== undefined) {
            queryParameters["action_name"] = requestParameters.actionName;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/enrollments/entities/details/v3`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ApiPostEnrollmentDetailsToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiPostEnrollmentDetailsResponseFromJSON(jsonValue));
    }

    /**
     * Trigger on-boarding process for a mobile device
     */
    async requestDeviceEnrollmentV3(
        body: ApiPostEnrollmentDetails,
        actionName?: RequestDeviceEnrollmentV3ActionNameEnum,
        filter?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ApiPostEnrollmentDetailsResponse> {
        const response = await this.requestDeviceEnrollmentV3Raw({ body: body, actionName: actionName, filter: filter }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const RequestDeviceEnrollmentV3ActionNameEnum = {
    Enroll: "enroll",
    ReEnroll: "re-enroll",
} as const;
export type RequestDeviceEnrollmentV3ActionNameEnum = (typeof RequestDeviceEnrollmentV3ActionNameEnum)[keyof typeof RequestDeviceEnrollmentV3ActionNameEnum];
