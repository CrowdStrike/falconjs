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

import { mapValues } from '../runtime';
import type { MsaspecActionParameter } from './MsaspecActionParameter';
import {
    MsaspecActionParameterFromJSON,
    MsaspecActionParameterFromJSONTyped,
    MsaspecActionParameterToJSON,
} from './MsaspecActionParameter';

/**
 * 
 * @export
 * @interface MsaEntityActionRequestV2
 */
export interface MsaEntityActionRequestV2 {
    /**
     * 
     * @type {Array<MsaspecActionParameter>}
     * @memberof MsaEntityActionRequestV2
     */
    actionParameters?: Array<MsaspecActionParameter>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MsaEntityActionRequestV2
     */
    ids: Array<string>;
}

/**
 * Check if a given object implements the MsaEntityActionRequestV2 interface.
 */
export function instanceOfMsaEntityActionRequestV2(value: object): value is MsaEntityActionRequestV2 {
    if (!('ids' in value) || value['ids'] === undefined) return false;
    return true;
}

export function MsaEntityActionRequestV2FromJSON(json: any): MsaEntityActionRequestV2 {
    return MsaEntityActionRequestV2FromJSONTyped(json, false);
}

export function MsaEntityActionRequestV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): MsaEntityActionRequestV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'actionParameters': json['action_parameters'] == null ? undefined : ((json['action_parameters'] as Array<any>).map(MsaspecActionParameterFromJSON)),
        'ids': json['ids'],
    };
}

export function MsaEntityActionRequestV2ToJSON(value?: MsaEntityActionRequestV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action_parameters': value['actionParameters'] == null ? undefined : ((value['actionParameters'] as Array<any>).map(MsaspecActionParameterToJSON)),
        'ids': value['ids'],
    };
}

