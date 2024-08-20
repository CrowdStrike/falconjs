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
import type { DeviceManagedApp } from './DeviceManagedApp';
import {
    DeviceManagedAppFromJSON,
    DeviceManagedAppFromJSONTyped,
    DeviceManagedAppToJSON,
} from './DeviceManagedApp';

/**
 * 
 * @export
 * @interface DeviceManagedApps
 */
export interface DeviceManagedApps {
    /**
     * 
     * @type {DeviceManagedApp}
     * @memberof DeviceManagedApps
     */
    airlock?: DeviceManagedApp;
    /**
     * 
     * @type {DeviceManagedApp}
     * @memberof DeviceManagedApps
     */
    automox?: DeviceManagedApp;
    /**
     * 
     * @type {DeviceManagedApp}
     * @memberof DeviceManagedApps
     */
    awsVerifiedAccess?: DeviceManagedApp;
    /**
     * 
     * @type {DeviceManagedApp}
     * @memberof DeviceManagedApps
     */
    identityProtection?: DeviceManagedApp;
    /**
     * 
     * @type {DeviceManagedApp}
     * @memberof DeviceManagedApps
     */
    jumpcloud?: DeviceManagedApp;
    /**
     * 
     * @type {DeviceManagedApp}
     * @memberof DeviceManagedApps
     */
    netskope?: DeviceManagedApp;
}

/**
 * Check if a given object implements the DeviceManagedApps interface.
 */
export function instanceOfDeviceManagedApps(value: object): value is DeviceManagedApps {
    return true;
}

export function DeviceManagedAppsFromJSON(json: any): DeviceManagedApps {
    return DeviceManagedAppsFromJSONTyped(json, false);
}

export function DeviceManagedAppsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceManagedApps {
    if (json == null) {
        return json;
    }
    return {
        
        'airlock': json['airlock'] == null ? undefined : DeviceManagedAppFromJSON(json['airlock']),
        'automox': json['automox'] == null ? undefined : DeviceManagedAppFromJSON(json['automox']),
        'awsVerifiedAccess': json['aws-verified-access'] == null ? undefined : DeviceManagedAppFromJSON(json['aws-verified-access']),
        'identityProtection': json['identity-protection'] == null ? undefined : DeviceManagedAppFromJSON(json['identity-protection']),
        'jumpcloud': json['jumpcloud'] == null ? undefined : DeviceManagedAppFromJSON(json['jumpcloud']),
        'netskope': json['netskope'] == null ? undefined : DeviceManagedAppFromJSON(json['netskope']),
    };
}

export function DeviceManagedAppsToJSON(value?: DeviceManagedApps | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'airlock': DeviceManagedAppToJSON(value['airlock']),
        'automox': DeviceManagedAppToJSON(value['automox']),
        'aws-verified-access': DeviceManagedAppToJSON(value['awsVerifiedAccess']),
        'identity-protection': DeviceManagedAppToJSON(value['identityProtection']),
        'jumpcloud': DeviceManagedAppToJSON(value['jumpcloud']),
        'netskope': DeviceManagedAppToJSON(value['netskope']),
    };
}

