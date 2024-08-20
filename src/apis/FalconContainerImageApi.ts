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
  DomainExternalQueryResponse,
  DomainExternalRegistryListResponse,
  DomainExternalRegistryResponse,
  MsaReplyMetaOnly,
  RegistryassessmentExternalRegistryPatchPayload,
  RegistryassessmentExternalRegistryPayload,
} from '../models/index';
import {
    DomainExternalQueryResponseFromJSON,
    DomainExternalQueryResponseToJSON,
    DomainExternalRegistryListResponseFromJSON,
    DomainExternalRegistryListResponseToJSON,
    DomainExternalRegistryResponseFromJSON,
    DomainExternalRegistryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    RegistryassessmentExternalRegistryPatchPayloadFromJSON,
    RegistryassessmentExternalRegistryPatchPayloadToJSON,
    RegistryassessmentExternalRegistryPayloadFromJSON,
    RegistryassessmentExternalRegistryPayloadToJSON,
} from '../models/index';

export interface CreateRegistryEntitiesRequest {
    body: RegistryassessmentExternalRegistryPayload;
}

export interface DeleteRegistryEntitiesRequest {
    ids: string;
}

export interface ReadRegistryEntitiesRequest {
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface ReadRegistryEntitiesByUUIDRequest {
    ids: string;
}

export interface UpdateRegistryEntitiesRequest {
    id: string;
    body: RegistryassessmentExternalRegistryPatchPayload;
}

/**
 * 
 */
export class FalconContainerImageApi extends runtime.BaseAPI {

    /**
     * Create a registry entity using the provided details
     */
    async createRegistryEntitiesRaw(requestParameters: CreateRegistryEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainExternalRegistryResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling createRegistryEntities().'
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
            path: `/container-security/entities/registries/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegistryassessmentExternalRegistryPayloadToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExternalRegistryResponseFromJSON(jsonValue));
    }

    /**
     * Create a registry entity using the provided details
     */
    async createRegistryEntities(body: RegistryassessmentExternalRegistryPayload, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExternalRegistryResponse> {
        const response = await this.createRegistryEntitiesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete the registry entity identified by the entity UUID
     */
    async deleteRegistryEntitiesRaw(requestParameters: DeleteRegistryEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainExternalRegistryListResponse>> {
        if (requestParameters['ids'] == null) {
            throw new runtime.RequiredError(
                'ids',
                'Required parameter "ids" was null or undefined when calling deleteRegistryEntities().'
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
            path: `/container-security/entities/registries/v1`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExternalRegistryListResponseFromJSON(jsonValue));
    }

    /**
     * Delete the registry entity identified by the entity UUID
     */
    async deleteRegistryEntities(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExternalRegistryListResponse> {
        const response = await this.deleteRegistryEntitiesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve registry entities identified by the customer id
     */
    async readRegistryEntitiesRaw(requestParameters: ReadRegistryEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainExternalQueryResponse>> {
        const queryParameters: any = {};

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
            path: `/container-security/queries/registries/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExternalQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve registry entities identified by the customer id
     */
    async readRegistryEntities(limit?: number, offset?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExternalQueryResponse> {
        const response = await this.readRegistryEntitiesRaw({ limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the registry entity identified by the entity UUID
     */
    async readRegistryEntitiesByUUIDRaw(requestParameters: ReadRegistryEntitiesByUUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainExternalRegistryListResponse>> {
        if (requestParameters['ids'] == null) {
            throw new runtime.RequiredError(
                'ids',
                'Required parameter "ids" was null or undefined when calling readRegistryEntitiesByUUID().'
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
            path: `/container-security/entities/registries/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExternalRegistryListResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve the registry entity identified by the entity UUID
     */
    async readRegistryEntitiesByUUID(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExternalRegistryListResponse> {
        const response = await this.readRegistryEntitiesByUUIDRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Update the registry entity, as identified by the entity UUID, using the provided details
     */
    async updateRegistryEntitiesRaw(requestParameters: UpdateRegistryEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainExternalRegistryResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateRegistryEntities().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateRegistryEntities().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/container-security/entities/registries/v1`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: RegistryassessmentExternalRegistryPatchPayloadToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExternalRegistryResponseFromJSON(jsonValue));
    }

    /**
     * Update the registry entity, as identified by the entity UUID, using the provided details
     */
    async updateRegistryEntities(id: string, body: RegistryassessmentExternalRegistryPatchPayload, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExternalRegistryResponse> {
        const response = await this.updateRegistryEntitiesRaw({ id: id, body: body }, initOverrides);
        return await response.value();
    }

}
