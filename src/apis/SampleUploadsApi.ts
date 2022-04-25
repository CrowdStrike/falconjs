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
import {
    ClientSampleMetadataResponseV2,
    ClientSampleMetadataResponseV2FromJSON,
    ClientSampleMetadataResponseV2ToJSON,
    MsaQueryResponse,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface DeleteSampleV3Request {
    ids: string;
}

export interface GetSampleV3Request {
    ids: string;
    passwordProtected?: boolean;
}

export interface UploadSampleV3Request {
    sample: Blob;
    fileName: string;
    comment?: string;
    isConfidential?: boolean;
}

/**
 *
 */
export class SampleUploadsApi extends runtime.BaseAPI {
    /**
     * Removes a sample, including file, meta and submissions from the collection
     */
    async deleteSampleV3Raw(requestParameters: DeleteSampleV3Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteSampleV3.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["samplestore:write"]);
        }

        const response = await this.request(
            {
                path: `/samples/entities/samples/v3`,
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
    async deleteSampleV3(ids: string, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MsaQueryResponse> {
        const response = await this.deleteSampleV3Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the file associated with the given ID (SHA256)
     */
    async getSampleV3Raw(requestParameters: GetSampleV3Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getSampleV3.");
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["samplestore:read"]);
        }

        const response = await this.request(
            {
                path: `/samples/entities/samples/v3`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Retrieves the file associated with the given ID (SHA256)
     */
    async getSampleV3(ids: string, passwordProtected?: boolean, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<string> {
        const response = await this.getSampleV3Raw({ ids: ids, passwordProtected: passwordProtected }, initOverrides);
        return await response.value();
    }

    /**
     * Upload a file for further cloud analysis. After uploading, call the specific analysis API endpoint.
     */
    async uploadSampleV3Raw(requestParameters: UploadSampleV3Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ClientSampleMetadataResponseV2>> {
        if (requestParameters.sample === null || requestParameters.sample === undefined) {
            throw new runtime.RequiredError("sample", "Required parameter requestParameters.sample was null or undefined when calling uploadSampleV3.");
        }

        if (requestParameters.fileName === null || requestParameters.fileName === undefined) {
            throw new runtime.RequiredError("fileName", "Required parameter requestParameters.fileName was null or undefined when calling uploadSampleV3.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["samplestore:write"]);
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
                path: `/samples/entities/samples/v3`,
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
     * Upload a file for further cloud analysis. After uploading, call the specific analysis API endpoint.
     */
    async uploadSampleV3(
        sample: Blob,
        fileName: string,
        comment?: string,
        isConfidential?: boolean,
        initOverrides?: RequestInit | runtime.InitOverideFunction
    ): Promise<ClientSampleMetadataResponseV2> {
        const response = await this.uploadSampleV3Raw({ sample: sample, fileName: fileName, comment: comment, isConfidential: isConfidential }, initOverrides);
        return await response.value();
    }
}
