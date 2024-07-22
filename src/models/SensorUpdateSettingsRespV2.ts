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
import type { SensorUpdateBuildRespV1 } from './SensorUpdateBuildRespV1';
import {
    SensorUpdateBuildRespV1FromJSON,
    SensorUpdateBuildRespV1FromJSONTyped,
    SensorUpdateBuildRespV1ToJSON,
} from './SensorUpdateBuildRespV1';
import type { PolicySensorUpdateScheduler } from './PolicySensorUpdateScheduler';
import {
    PolicySensorUpdateSchedulerFromJSON,
    PolicySensorUpdateSchedulerFromJSONTyped,
    PolicySensorUpdateSchedulerToJSON,
} from './PolicySensorUpdateScheduler';

/**
 * 
 * @export
 * @interface SensorUpdateSettingsRespV2
 */
export interface SensorUpdateSettingsRespV2 {
    /**
     * The target build applied to devices in the policy
     * @type {string}
     * @memberof SensorUpdateSettingsRespV2
     */
    build: string;
    /**
     * 
     * @type {PolicySensorUpdateScheduler}
     * @memberof SensorUpdateSettingsRespV2
     */
    scheduler: PolicySensorUpdateScheduler;
    /**
     * 
     * @type {string}
     * @memberof SensorUpdateSettingsRespV2
     */
    sensorVersion: string;
    /**
     * If true, early adopter builds will be visible on the sensor update policy page
     * @type {boolean}
     * @memberof SensorUpdateSettingsRespV2
     */
    showEarlyAdopterBuilds: boolean;
    /**
     * The release stage this build is in
     * @type {string}
     * @memberof SensorUpdateSettingsRespV2
     */
    stage: SensorUpdateSettingsRespV2StageEnum;
    /**
     * The uninstall protection setting to apply to devices in the policy
     * @type {string}
     * @memberof SensorUpdateSettingsRespV2
     */
    uninstallProtection: SensorUpdateSettingsRespV2UninstallProtectionEnum;
    /**
     * 
     * @type {Array<SensorUpdateBuildRespV1>}
     * @memberof SensorUpdateSettingsRespV2
     */
    variants: Array<SensorUpdateBuildRespV1>;
}


/**
 * @export
 */
export const SensorUpdateSettingsRespV2StageEnum = {
    Prod: 'prod',
    EarlyAdopter: 'early_adopter'
} as const;
export type SensorUpdateSettingsRespV2StageEnum = typeof SensorUpdateSettingsRespV2StageEnum[keyof typeof SensorUpdateSettingsRespV2StageEnum];

/**
 * @export
 */
export const SensorUpdateSettingsRespV2UninstallProtectionEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED',
    MaintenanceMode: 'MAINTENANCE_MODE',
    Ignore: 'IGNORE',
    Unknown: 'UNKNOWN'
} as const;
export type SensorUpdateSettingsRespV2UninstallProtectionEnum = typeof SensorUpdateSettingsRespV2UninstallProtectionEnum[keyof typeof SensorUpdateSettingsRespV2UninstallProtectionEnum];


/**
 * Check if a given object implements the SensorUpdateSettingsRespV2 interface.
 */
export function instanceOfSensorUpdateSettingsRespV2(value: object): value is SensorUpdateSettingsRespV2 {
    if (!('build' in value) || value['build'] === undefined) return false;
    if (!('scheduler' in value) || value['scheduler'] === undefined) return false;
    if (!('sensorVersion' in value) || value['sensorVersion'] === undefined) return false;
    if (!('showEarlyAdopterBuilds' in value) || value['showEarlyAdopterBuilds'] === undefined) return false;
    if (!('stage' in value) || value['stage'] === undefined) return false;
    if (!('uninstallProtection' in value) || value['uninstallProtection'] === undefined) return false;
    if (!('variants' in value) || value['variants'] === undefined) return false;
    return true;
}

export function SensorUpdateSettingsRespV2FromJSON(json: any): SensorUpdateSettingsRespV2 {
    return SensorUpdateSettingsRespV2FromJSONTyped(json, false);
}

export function SensorUpdateSettingsRespV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorUpdateSettingsRespV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'build': json['build'],
        'scheduler': PolicySensorUpdateSchedulerFromJSON(json['scheduler']),
        'sensorVersion': json['sensor_version'],
        'showEarlyAdopterBuilds': json['show_early_adopter_builds'],
        'stage': json['stage'],
        'uninstallProtection': json['uninstall_protection'],
        'variants': ((json['variants'] as Array<any>).map(SensorUpdateBuildRespV1FromJSON)),
    };
}

export function SensorUpdateSettingsRespV2ToJSON(value?: SensorUpdateSettingsRespV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'build': value['build'],
        'scheduler': PolicySensorUpdateSchedulerToJSON(value['scheduler']),
        'sensor_version': value['sensorVersion'],
        'show_early_adopter_builds': value['showEarlyAdopterBuilds'],
        'stage': value['stage'],
        'uninstall_protection': value['uninstallProtection'],
        'variants': ((value['variants'] as Array<any>).map(SensorUpdateBuildRespV1ToJSON)),
    };
}

