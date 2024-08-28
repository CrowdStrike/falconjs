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

import { mapValues } from "../runtime";
import type { TypesCloudFunctionMetadata } from "./TypesCloudFunctionMetadata";
import { TypesCloudFunctionMetadataFromJSON, TypesCloudFunctionMetadataFromJSONTyped, TypesCloudFunctionMetadataToJSON } from "./TypesCloudFunctionMetadata";
import type { TypesHostMetadata } from "./TypesHostMetadata";
import { TypesHostMetadataFromJSON, TypesHostMetadataFromJSONTyped, TypesHostMetadataToJSON } from "./TypesHostMetadata";
import type { TypesGCPMetadata } from "./TypesGCPMetadata";
import { TypesGCPMetadataFromJSON, TypesGCPMetadataFromJSONTyped, TypesGCPMetadataToJSON } from "./TypesGCPMetadata";
import type { TypesAWSMetadata } from "./TypesAWSMetadata";
import { TypesAWSMetadataFromJSON, TypesAWSMetadataFromJSONTyped, TypesAWSMetadataToJSON } from "./TypesAWSMetadata";
import type { TypesAzureVmMetadata } from "./TypesAzureVmMetadata";
import { TypesAzureVmMetadataFromJSON, TypesAzureVmMetadataFromJSONTyped, TypesAzureVmMetadataToJSON } from "./TypesAzureVmMetadata";
import type { TypesCrowdStrikeCloudSecurityMetadata } from "./TypesCrowdStrikeCloudSecurityMetadata";
import {
    TypesCrowdStrikeCloudSecurityMetadataFromJSON,
    TypesCrowdStrikeCloudSecurityMetadataFromJSONTyped,
    TypesCrowdStrikeCloudSecurityMetadataToJSON,
} from "./TypesCrowdStrikeCloudSecurityMetadata";
import type { TypesECSMetadata } from "./TypesECSMetadata";
import { TypesECSMetadataFromJSON, TypesECSMetadataFromJSONTyped, TypesECSMetadataToJSON } from "./TypesECSMetadata";
import type { TypesSonatypeMetadata } from "./TypesSonatypeMetadata";
import { TypesSonatypeMetadataFromJSON, TypesSonatypeMetadataFromJSONTyped, TypesSonatypeMetadataToJSON } from "./TypesSonatypeMetadata";
import type { TypesSnykMetadata } from "./TypesSnykMetadata";
import { TypesSnykMetadataFromJSON, TypesSnykMetadataFromJSONTyped, TypesSnykMetadataToJSON } from "./TypesSnykMetadata";
import type { TypesEC2Metadata } from "./TypesEC2Metadata";
import { TypesEC2MetadataFromJSON, TypesEC2MetadataFromJSONTyped, TypesEC2MetadataToJSON } from "./TypesEC2Metadata";
import type { TypesLambdaMetadata } from "./TypesLambdaMetadata";
import { TypesLambdaMetadataFromJSON, TypesLambdaMetadataFromJSONTyped, TypesLambdaMetadataToJSON } from "./TypesLambdaMetadata";
import type { TypesRemediation } from "./TypesRemediation";
import { TypesRemediationFromJSON, TypesRemediationFromJSONTyped, TypesRemediationToJSON } from "./TypesRemediation";
import type { TypesK8SMetadata } from "./TypesK8SMetadata";
import { TypesK8SMetadataFromJSON, TypesK8SMetadataFromJSONTyped, TypesK8SMetadataToJSON } from "./TypesK8SMetadata";
import type { TypesAzureSiteMetadata } from "./TypesAzureSiteMetadata";
import { TypesAzureSiteMetadataFromJSON, TypesAzureSiteMetadataFromJSONTyped, TypesAzureSiteMetadataToJSON } from "./TypesAzureSiteMetadata";

/**
 *
 * @export
 * @interface TypesActionRunEventData
 */
export interface TypesActionRunEventData {
    /**
     *
     * @type {string}
     * @memberof TypesActionRunEventData
     */
    additionalInfo?: string;
    /**
     *
     * @type {TypesAWSMetadata}
     * @memberof TypesActionRunEventData
     */
    aws?: TypesAWSMetadata;
    /**
     *
     * @type {TypesAzureSiteMetadata}
     * @memberof TypesActionRunEventData
     */
    azureSite?: TypesAzureSiteMetadata;
    /**
     *
     * @type {TypesAzureVmMetadata}
     * @memberof TypesActionRunEventData
     */
    azureVm?: TypesAzureVmMetadata;
    /**
     *
     * @type {TypesCloudFunctionMetadata}
     * @memberof TypesActionRunEventData
     */
    cloudFunction?: TypesCloudFunctionMetadata;
    /**
     *
     * @type {TypesCrowdStrikeCloudSecurityMetadata}
     * @memberof TypesActionRunEventData
     */
    crowdstrikeCloudSecurity?: TypesCrowdStrikeCloudSecurityMetadata;
    /**
     *
     * @type {TypesEC2Metadata}
     * @memberof TypesActionRunEventData
     */
    ec2?: TypesEC2Metadata;
    /**
     *
     * @type {TypesECSMetadata}
     * @memberof TypesActionRunEventData
     */
    ecs?: TypesECSMetadata;
    /**
     *
     * @type {TypesGCPMetadata}
     * @memberof TypesActionRunEventData
     */
    gcp?: TypesGCPMetadata;
    /**
     *
     * @type {TypesHostMetadata}
     * @memberof TypesActionRunEventData
     */
    host?: TypesHostMetadata;
    /**
     *
     * @type {TypesK8SMetadata}
     * @memberof TypesActionRunEventData
     */
    k8s?: TypesK8SMetadata;
    /**
     *
     * @type {TypesLambdaMetadata}
     * @memberof TypesActionRunEventData
     */
    lambda?: TypesLambdaMetadata;
    /**
     *
     * @type {TypesRemediation}
     * @memberof TypesActionRunEventData
     */
    remedy?: TypesRemediation;
    /**
     *
     * @type {TypesSnykMetadata}
     * @memberof TypesActionRunEventData
     */
    snyk?: TypesSnykMetadata;
    /**
     *
     * @type {TypesSonatypeMetadata}
     * @memberof TypesActionRunEventData
     */
    sonatype?: TypesSonatypeMetadata;
}

/**
 * Check if a given object implements the TypesActionRunEventData interface.
 */
export function instanceOfTypesActionRunEventData(value: object): value is TypesActionRunEventData {
    return true;
}

export function TypesActionRunEventDataFromJSON(json: any): TypesActionRunEventData {
    return TypesActionRunEventDataFromJSONTyped(json, false);
}

export function TypesActionRunEventDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesActionRunEventData {
    if (json == null) {
        return json;
    }
    return {
        additionalInfo: json["additional_info"] == null ? undefined : json["additional_info"],
        aws: json["aws"] == null ? undefined : TypesAWSMetadataFromJSON(json["aws"]),
        azureSite: json["azureSite"] == null ? undefined : TypesAzureSiteMetadataFromJSON(json["azureSite"]),
        azureVm: json["azureVm"] == null ? undefined : TypesAzureVmMetadataFromJSON(json["azureVm"]),
        cloudFunction: json["cloud_function"] == null ? undefined : TypesCloudFunctionMetadataFromJSON(json["cloud_function"]),
        crowdstrikeCloudSecurity: json["crowdstrike_cloud_security"] == null ? undefined : TypesCrowdStrikeCloudSecurityMetadataFromJSON(json["crowdstrike_cloud_security"]),
        ec2: json["ec2"] == null ? undefined : TypesEC2MetadataFromJSON(json["ec2"]),
        ecs: json["ecs"] == null ? undefined : TypesECSMetadataFromJSON(json["ecs"]),
        gcp: json["gcp"] == null ? undefined : TypesGCPMetadataFromJSON(json["gcp"]),
        host: json["host"] == null ? undefined : TypesHostMetadataFromJSON(json["host"]),
        k8s: json["k8s"] == null ? undefined : TypesK8SMetadataFromJSON(json["k8s"]),
        lambda: json["lambda"] == null ? undefined : TypesLambdaMetadataFromJSON(json["lambda"]),
        remedy: json["remedy"] == null ? undefined : TypesRemediationFromJSON(json["remedy"]),
        snyk: json["snyk"] == null ? undefined : TypesSnykMetadataFromJSON(json["snyk"]),
        sonatype: json["sonatype"] == null ? undefined : TypesSonatypeMetadataFromJSON(json["sonatype"]),
    };
}

export function TypesActionRunEventDataToJSON(value?: TypesActionRunEventData | null): any {
    if (value == null) {
        return value;
    }
    return {
        additional_info: value["additionalInfo"],
        aws: TypesAWSMetadataToJSON(value["aws"]),
        azureSite: TypesAzureSiteMetadataToJSON(value["azureSite"]),
        azureVm: TypesAzureVmMetadataToJSON(value["azureVm"]),
        cloud_function: TypesCloudFunctionMetadataToJSON(value["cloudFunction"]),
        crowdstrike_cloud_security: TypesCrowdStrikeCloudSecurityMetadataToJSON(value["crowdstrikeCloudSecurity"]),
        ec2: TypesEC2MetadataToJSON(value["ec2"]),
        ecs: TypesECSMetadataToJSON(value["ecs"]),
        gcp: TypesGCPMetadataToJSON(value["gcp"]),
        host: TypesHostMetadataToJSON(value["host"]),
        k8s: TypesK8SMetadataToJSON(value["k8s"]),
        lambda: TypesLambdaMetadataToJSON(value["lambda"]),
        remedy: TypesRemediationToJSON(value["remedy"]),
        snyk: TypesSnykMetadataToJSON(value["snyk"]),
        sonatype: TypesSonatypeMetadataToJSON(value["sonatype"]),
    };
}
