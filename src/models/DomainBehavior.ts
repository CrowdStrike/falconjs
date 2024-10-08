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
import type { PatterndispositionPatternDisposition } from "./PatterndispositionPatternDisposition";
import { PatterndispositionPatternDispositionFromJSON, PatterndispositionPatternDispositionFromJSONTyped, PatterndispositionPatternDispositionToJSON } from "./PatterndispositionPatternDisposition";

/**
 *
 * @export
 * @interface DomainBehavior
 */
export interface DomainBehavior {
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    aid?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainBehavior
     */
    alertIds?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    behaviorId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    cmdline?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    compoundTto?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainBehavior
     */
    detectionIds?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    displayName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    domain?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    exclusionType?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    filepath?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainBehavior
     */
    groupingIds?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    incidentId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainBehavior
     */
    incidentIds?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    iocSource?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    iocType?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    iocValue?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    objective?: string;
    /**
     *
     * @type {number}
     * @memberof DomainBehavior
     */
    patternDisposition?: number;
    /**
     *
     * @type {PatterndispositionPatternDisposition}
     * @memberof DomainBehavior
     */
    patternDispositionDetails?: PatterndispositionPatternDisposition;
    /**
     *
     * @type {number}
     * @memberof DomainBehavior
     */
    patternId: number;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    sha256?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    tactic?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    tacticId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    technique?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    techniqueId?: string;
    /**
     *
     * @type {number}
     * @memberof DomainBehavior
     */
    templateInstanceId: number;
    /**
     *
     * @type {Date}
     * @memberof DomainBehavior
     */
    timestamp: Date;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    userName?: string;
}

/**
 * Check if a given object implements the DomainBehavior interface.
 */
export function instanceOfDomainBehavior(value: object): value is DomainBehavior {
    if (!("patternId" in value) || value["patternId"] === undefined) return false;
    if (!("templateInstanceId" in value) || value["templateInstanceId"] === undefined) return false;
    if (!("timestamp" in value) || value["timestamp"] === undefined) return false;
    return true;
}

export function DomainBehaviorFromJSON(json: any): DomainBehavior {
    return DomainBehaviorFromJSONTyped(json, false);
}

export function DomainBehaviorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBehavior {
    if (json == null) {
        return json;
    }
    return {
        aid: json["aid"] == null ? undefined : json["aid"],
        alertIds: json["alert_ids"] == null ? undefined : json["alert_ids"],
        behaviorId: json["behavior_id"] == null ? undefined : json["behavior_id"],
        cid: json["cid"] == null ? undefined : json["cid"],
        cmdline: json["cmdline"] == null ? undefined : json["cmdline"],
        compoundTto: json["compound_tto"] == null ? undefined : json["compound_tto"],
        detectionIds: json["detection_ids"] == null ? undefined : json["detection_ids"],
        displayName: json["display_name"] == null ? undefined : json["display_name"],
        domain: json["domain"] == null ? undefined : json["domain"],
        exclusionType: json["exclusion_type"] == null ? undefined : json["exclusion_type"],
        filepath: json["filepath"] == null ? undefined : json["filepath"],
        groupingIds: json["grouping_ids"] == null ? undefined : json["grouping_ids"],
        incidentId: json["incident_id"] == null ? undefined : json["incident_id"],
        incidentIds: json["incident_ids"] == null ? undefined : json["incident_ids"],
        iocSource: json["ioc_source"] == null ? undefined : json["ioc_source"],
        iocType: json["ioc_type"] == null ? undefined : json["ioc_type"],
        iocValue: json["ioc_value"] == null ? undefined : json["ioc_value"],
        objective: json["objective"] == null ? undefined : json["objective"],
        patternDisposition: json["pattern_disposition"] == null ? undefined : json["pattern_disposition"],
        patternDispositionDetails: json["pattern_disposition_details"] == null ? undefined : PatterndispositionPatternDispositionFromJSON(json["pattern_disposition_details"]),
        patternId: json["pattern_id"],
        sha256: json["sha256"] == null ? undefined : json["sha256"],
        tactic: json["tactic"] == null ? undefined : json["tactic"],
        tacticId: json["tactic_id"] == null ? undefined : json["tactic_id"],
        technique: json["technique"] == null ? undefined : json["technique"],
        techniqueId: json["technique_id"] == null ? undefined : json["technique_id"],
        templateInstanceId: json["template_instance_id"],
        timestamp: new Date(json["timestamp"]),
        userName: json["user_name"] == null ? undefined : json["user_name"],
    };
}

export function DomainBehaviorToJSON(value?: DomainBehavior | null): any {
    if (value == null) {
        return value;
    }
    return {
        aid: value["aid"],
        alert_ids: value["alertIds"],
        behavior_id: value["behaviorId"],
        cid: value["cid"],
        cmdline: value["cmdline"],
        compound_tto: value["compoundTto"],
        detection_ids: value["detectionIds"],
        display_name: value["displayName"],
        domain: value["domain"],
        exclusion_type: value["exclusionType"],
        filepath: value["filepath"],
        grouping_ids: value["groupingIds"],
        incident_id: value["incidentId"],
        incident_ids: value["incidentIds"],
        ioc_source: value["iocSource"],
        ioc_type: value["iocType"],
        ioc_value: value["iocValue"],
        objective: value["objective"],
        pattern_disposition: value["patternDisposition"],
        pattern_disposition_details: PatterndispositionPatternDispositionToJSON(value["patternDispositionDetails"]),
        pattern_id: value["patternId"],
        sha256: value["sha256"],
        tactic: value["tactic"],
        tactic_id: value["tacticId"],
        technique: value["technique"],
        technique_id: value["techniqueId"],
        template_instance_id: value["templateInstanceId"],
        timestamp: value["timestamp"].toISOString(),
        user_name: value["userName"],
    };
}
