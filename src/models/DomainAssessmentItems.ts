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
import type { DomainSignalProperty } from "./DomainSignalProperty";
import { DomainSignalPropertyFromJSON, DomainSignalPropertyFromJSONTyped, DomainSignalPropertyToJSON } from "./DomainSignalProperty";

/**
 *
 * @export
 * @interface DomainAssessmentItems
 */
export interface DomainAssessmentItems {
    /**
     *
     * @type {Array<DomainSignalProperty>}
     * @memberof DomainAssessmentItems
     */
    osSignals: Array<DomainSignalProperty>;
    /**
     *
     * @type {Array<DomainSignalProperty>}
     * @memberof DomainAssessmentItems
     */
    sensorSignals: Array<DomainSignalProperty>;
}

/**
 * Check if a given object implements the DomainAssessmentItems interface.
 */
export function instanceOfDomainAssessmentItems(value: object): value is DomainAssessmentItems {
    if (!("osSignals" in value) || value["osSignals"] === undefined) return false;
    if (!("sensorSignals" in value) || value["sensorSignals"] === undefined) return false;
    return true;
}

export function DomainAssessmentItemsFromJSON(json: any): DomainAssessmentItems {
    return DomainAssessmentItemsFromJSONTyped(json, false);
}

export function DomainAssessmentItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAssessmentItems {
    if (json == null) {
        return json;
    }
    return {
        osSignals: (json["os_signals"] as Array<any>).map(DomainSignalPropertyFromJSON),
        sensorSignals: (json["sensor_signals"] as Array<any>).map(DomainSignalPropertyFromJSON),
    };
}

export function DomainAssessmentItemsToJSON(value?: DomainAssessmentItems | null): any {
    if (value == null) {
        return value;
    }
    return {
        os_signals: (value["osSignals"] as Array<any>).map(DomainSignalPropertyToJSON),
        sensor_signals: (value["sensorSignals"] as Array<any>).map(DomainSignalPropertyToJSON),
    };
}
