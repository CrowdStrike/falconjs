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
import type { TypesAwsLoadBalancerReasonTag } from "./TypesAwsLoadBalancerReasonTag";
import { TypesAwsLoadBalancerReasonTagFromJSON, TypesAwsLoadBalancerReasonTagFromJSONTyped, TypesAwsLoadBalancerReasonTagToJSON } from "./TypesAwsLoadBalancerReasonTag";
import type { TypesDataTypeMqReasonTag } from "./TypesDataTypeMqReasonTag";
import { TypesDataTypeMqReasonTagFromJSON, TypesDataTypeMqReasonTagFromJSONTyped, TypesDataTypeMqReasonTagToJSON } from "./TypesDataTypeMqReasonTag";
import type { TypesK8SLoadBalancerReasonTag } from "./TypesK8SLoadBalancerReasonTag";
import { TypesK8SLoadBalancerReasonTagFromJSON, TypesK8SLoadBalancerReasonTagFromJSONTyped, TypesK8SLoadBalancerReasonTagToJSON } from "./TypesK8SLoadBalancerReasonTag";
import type { TypesDataTypeDbReasonTag } from "./TypesDataTypeDbReasonTag";
import { TypesDataTypeDbReasonTagFromJSON, TypesDataTypeDbReasonTagFromJSONTyped, TypesDataTypeDbReasonTagToJSON } from "./TypesDataTypeDbReasonTag";
import type { TypesAwsElasticIpReasonTag } from "./TypesAwsElasticIpReasonTag";
import { TypesAwsElasticIpReasonTagFromJSON, TypesAwsElasticIpReasonTagFromJSONTyped, TypesAwsElasticIpReasonTagToJSON } from "./TypesAwsElasticIpReasonTag";
import type { TypesAzureLoadBalancerReasonTag } from "./TypesAzureLoadBalancerReasonTag";
import { TypesAzureLoadBalancerReasonTagFromJSON, TypesAzureLoadBalancerReasonTagFromJSONTyped, TypesAzureLoadBalancerReasonTagToJSON } from "./TypesAzureLoadBalancerReasonTag";
import type { TypesAwsApiGatewayReasonTag } from "./TypesAwsApiGatewayReasonTag";
import { TypesAwsApiGatewayReasonTagFromJSON, TypesAwsApiGatewayReasonTagFromJSONTyped, TypesAwsApiGatewayReasonTagToJSON } from "./TypesAwsApiGatewayReasonTag";
import type { TypesAwsLambdaApiGatewayReasonTag } from "./TypesAwsLambdaApiGatewayReasonTag";
import { TypesAwsLambdaApiGatewayReasonTagFromJSON, TypesAwsLambdaApiGatewayReasonTagFromJSONTyped, TypesAwsLambdaApiGatewayReasonTagToJSON } from "./TypesAwsLambdaApiGatewayReasonTag";
import type { TypesAzureApplicationGatewayReasonTag } from "./TypesAzureApplicationGatewayReasonTag";
import {
    TypesAzureApplicationGatewayReasonTagFromJSON,
    TypesAzureApplicationGatewayReasonTagFromJSONTyped,
    TypesAzureApplicationGatewayReasonTagToJSON,
} from "./TypesAzureApplicationGatewayReasonTag";

/**
 *
 * @export
 * @interface TypesReasonTag
 */
export interface TypesReasonTag {
    /**
     *
     * @type {TypesAwsApiGatewayReasonTag}
     * @memberof TypesReasonTag
     */
    awsApiGatewayType?: TypesAwsApiGatewayReasonTag;
    /**
     *
     * @type {TypesAwsElasticIpReasonTag}
     * @memberof TypesReasonTag
     */
    awsElasticIpType?: TypesAwsElasticIpReasonTag;
    /**
     *
     * @type {TypesAwsLambdaApiGatewayReasonTag}
     * @memberof TypesReasonTag
     */
    awsLambdaApiGatewayType?: TypesAwsLambdaApiGatewayReasonTag;
    /**
     *
     * @type {TypesAwsLoadBalancerReasonTag}
     * @memberof TypesReasonTag
     */
    awsLoadBalancerType?: TypesAwsLoadBalancerReasonTag;
    /**
     *
     * @type {TypesAzureApplicationGatewayReasonTag}
     * @memberof TypesReasonTag
     */
    azureApplicationGatewayType?: TypesAzureApplicationGatewayReasonTag;
    /**
     *
     * @type {TypesAzureLoadBalancerReasonTag}
     * @memberof TypesReasonTag
     */
    azureLoadBalancerType?: TypesAzureLoadBalancerReasonTag;
    /**
     *
     * @type {TypesDataTypeDbReasonTag}
     * @memberof TypesReasonTag
     */
    dbReasonTag?: TypesDataTypeDbReasonTag;
    /**
     *
     * @type {TypesK8SLoadBalancerReasonTag}
     * @memberof TypesReasonTag
     */
    k8sLoadBalancerType?: TypesK8SLoadBalancerReasonTag;
    /**
     *
     * @type {TypesDataTypeMqReasonTag}
     * @memberof TypesReasonTag
     */
    mqReasonTag?: TypesDataTypeMqReasonTag;
    /**
     *
     * @type {number}
     * @memberof TypesReasonTag
     */
    type?: number;
}

/**
 * Check if a given object implements the TypesReasonTag interface.
 */
export function instanceOfTypesReasonTag(value: object): value is TypesReasonTag {
    return true;
}

export function TypesReasonTagFromJSON(json: any): TypesReasonTag {
    return TypesReasonTagFromJSONTyped(json, false);
}

export function TypesReasonTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesReasonTag {
    if (json == null) {
        return json;
    }
    return {
        awsApiGatewayType: json["awsApiGatewayType"] == null ? undefined : TypesAwsApiGatewayReasonTagFromJSON(json["awsApiGatewayType"]),
        awsElasticIpType: json["awsElasticIpType"] == null ? undefined : TypesAwsElasticIpReasonTagFromJSON(json["awsElasticIpType"]),
        awsLambdaApiGatewayType: json["awsLambdaApiGatewayType"] == null ? undefined : TypesAwsLambdaApiGatewayReasonTagFromJSON(json["awsLambdaApiGatewayType"]),
        awsLoadBalancerType: json["awsLoadBalancerType"] == null ? undefined : TypesAwsLoadBalancerReasonTagFromJSON(json["awsLoadBalancerType"]),
        azureApplicationGatewayType: json["azureApplicationGatewayType"] == null ? undefined : TypesAzureApplicationGatewayReasonTagFromJSON(json["azureApplicationGatewayType"]),
        azureLoadBalancerType: json["azureLoadBalancerType"] == null ? undefined : TypesAzureLoadBalancerReasonTagFromJSON(json["azureLoadBalancerType"]),
        dbReasonTag: json["dbReasonTag"] == null ? undefined : TypesDataTypeDbReasonTagFromJSON(json["dbReasonTag"]),
        k8sLoadBalancerType: json["k8sLoadBalancerType"] == null ? undefined : TypesK8SLoadBalancerReasonTagFromJSON(json["k8sLoadBalancerType"]),
        mqReasonTag: json["mqReasonTag"] == null ? undefined : TypesDataTypeMqReasonTagFromJSON(json["mqReasonTag"]),
        type: json["type"] == null ? undefined : json["type"],
    };
}

export function TypesReasonTagToJSON(value?: TypesReasonTag | null): any {
    if (value == null) {
        return value;
    }
    return {
        awsApiGatewayType: TypesAwsApiGatewayReasonTagToJSON(value["awsApiGatewayType"]),
        awsElasticIpType: TypesAwsElasticIpReasonTagToJSON(value["awsElasticIpType"]),
        awsLambdaApiGatewayType: TypesAwsLambdaApiGatewayReasonTagToJSON(value["awsLambdaApiGatewayType"]),
        awsLoadBalancerType: TypesAwsLoadBalancerReasonTagToJSON(value["awsLoadBalancerType"]),
        azureApplicationGatewayType: TypesAzureApplicationGatewayReasonTagToJSON(value["azureApplicationGatewayType"]),
        azureLoadBalancerType: TypesAzureLoadBalancerReasonTagToJSON(value["azureLoadBalancerType"]),
        dbReasonTag: TypesDataTypeDbReasonTagToJSON(value["dbReasonTag"]),
        k8sLoadBalancerType: TypesK8SLoadBalancerReasonTagToJSON(value["k8sLoadBalancerType"]),
        mqReasonTag: TypesDataTypeMqReasonTagToJSON(value["mqReasonTag"]),
        type: value["type"],
    };
}
