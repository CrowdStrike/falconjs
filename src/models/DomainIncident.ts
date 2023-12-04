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

import { exists, mapValues } from "../runtime";
import type { DetectsDeviceDetailIndexed } from "./DetectsDeviceDetailIndexed";
import { DetectsDeviceDetailIndexedFromJSON, DetectsDeviceDetailIndexedFromJSONTyped, DetectsDeviceDetailIndexedToJSON } from "./DetectsDeviceDetailIndexed";
import type { DomainEventHistogram } from "./DomainEventHistogram";
import { DomainEventHistogramFromJSON, DomainEventHistogramFromJSONTyped, DomainEventHistogramToJSON } from "./DomainEventHistogram";

/**
 *
 * @export
 * @interface DomainIncident
 */
export interface DomainIncident {
    /**
     *
     * @type {string}
     * @memberof DomainIncident
     */
    assignedTo?: string;
    /**
     *
     * @type {string}
     * @memberof DomainIncident
     */
    assignedToName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainIncident
     */
    cid: string;
    /**
     *
     * @type {Date}
     * @memberof DomainIncident
     */
    created: Date;
    /**
     *
     * @type {string}
     * @memberof DomainIncident
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof DomainIncident
     */
    emailState?: string;
    /**
     *
     * @type {Date}
     * @memberof DomainIncident
     */
    end: Date;
    /**
     *
     * @type {Array<DomainEventHistogram>}
     * @memberof DomainIncident
     */
    eventsHistogram?: Array<DomainEventHistogram>;
    /**
     *
     * @type {number}
     * @memberof DomainIncident
     */
    fineScore: number;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIncident
     */
    hostIds: Array<string>;
    /**
     *
     * @type {Array<DetectsDeviceDetailIndexed>}
     * @memberof DomainIncident
     */
    hosts?: Array<DetectsDeviceDetailIndexed>;
    /**
     *
     * @type {string}
     * @memberof DomainIncident
     */
    incidentId: string;
    /**
     *
     * @type {number}
     * @memberof DomainIncident
     */
    incidentType?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIncident
     */
    lmHostIds?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof DomainIncident
     */
    lmHostsCapped?: boolean;
    /**
     *
     * @type {number}
     * @memberof DomainIncident
     */
    lmTypes?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIncident
     */
    lmraHostIds?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof DomainIncident
     */
    lmraHostsCapped?: boolean;
    /**
     *
     * @type {Date}
     * @memberof DomainIncident
     */
    modifiedTimestamp?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainIncident
     */
    name?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIncident
     */
    objectives?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof DomainIncident
     */
    start: Date;
    /**
     *
     * @type {string}
     * @memberof DomainIncident
     */
    state: string;
    /**
     *
     * @type {number}
     * @memberof DomainIncident
     */
    status?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIncident
     */
    tactics?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIncident
     */
    tags?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIncident
     */
    techniques?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIncident
     */
    users?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof DomainIncident
     */
    visibility?: number;
}

/**
 * Check if a given object implements the DomainIncident interface.
 */
export function instanceOfDomainIncident(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "end" in value;
    isInstance = isInstance && "fineScore" in value;
    isInstance = isInstance && "hostIds" in value;
    isInstance = isInstance && "incidentId" in value;
    isInstance = isInstance && "start" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function DomainIncidentFromJSON(json: any): DomainIncident {
    return DomainIncidentFromJSONTyped(json, false);
}

export function DomainIncidentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainIncident {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assignedTo: !exists(json, "assigned_to") ? undefined : json["assigned_to"],
        assignedToName: !exists(json, "assigned_to_name") ? undefined : json["assigned_to_name"],
        cid: json["cid"],
        created: new Date(json["created"]),
        description: !exists(json, "description") ? undefined : json["description"],
        emailState: !exists(json, "email_state") ? undefined : json["email_state"],
        end: new Date(json["end"]),
        eventsHistogram: !exists(json, "events_histogram") ? undefined : (json["events_histogram"] as Array<any>).map(DomainEventHistogramFromJSON),
        fineScore: json["fine_score"],
        hostIds: json["host_ids"],
        hosts: !exists(json, "hosts") ? undefined : (json["hosts"] as Array<any>).map(DetectsDeviceDetailIndexedFromJSON),
        incidentId: json["incident_id"],
        incidentType: !exists(json, "incident_type") ? undefined : json["incident_type"],
        lmHostIds: !exists(json, "lm_host_ids") ? undefined : json["lm_host_ids"],
        lmHostsCapped: !exists(json, "lm_hosts_capped") ? undefined : json["lm_hosts_capped"],
        lmTypes: !exists(json, "lm_types") ? undefined : json["lm_types"],
        lmraHostIds: !exists(json, "lmra_host_ids") ? undefined : json["lmra_host_ids"],
        lmraHostsCapped: !exists(json, "lmra_hosts_capped") ? undefined : json["lmra_hosts_capped"],
        modifiedTimestamp: !exists(json, "modified_timestamp") ? undefined : new Date(json["modified_timestamp"]),
        name: !exists(json, "name") ? undefined : json["name"],
        objectives: !exists(json, "objectives") ? undefined : json["objectives"],
        start: new Date(json["start"]),
        state: json["state"],
        status: !exists(json, "status") ? undefined : json["status"],
        tactics: !exists(json, "tactics") ? undefined : json["tactics"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
        techniques: !exists(json, "techniques") ? undefined : json["techniques"],
        users: !exists(json, "users") ? undefined : json["users"],
        visibility: !exists(json, "visibility") ? undefined : json["visibility"],
    };
}

export function DomainIncidentToJSON(value?: DomainIncident | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        assigned_to: value.assignedTo,
        assigned_to_name: value.assignedToName,
        cid: value.cid,
        created: value.created.toISOString(),
        description: value.description,
        email_state: value.emailState,
        end: value.end.toISOString(),
        events_histogram: value.eventsHistogram === undefined ? undefined : (value.eventsHistogram as Array<any>).map(DomainEventHistogramToJSON),
        fine_score: value.fineScore,
        host_ids: value.hostIds,
        hosts: value.hosts === undefined ? undefined : (value.hosts as Array<any>).map(DetectsDeviceDetailIndexedToJSON),
        incident_id: value.incidentId,
        incident_type: value.incidentType,
        lm_host_ids: value.lmHostIds,
        lm_hosts_capped: value.lmHostsCapped,
        lm_types: value.lmTypes,
        lmra_host_ids: value.lmraHostIds,
        lmra_hosts_capped: value.lmraHostsCapped,
        modified_timestamp: value.modifiedTimestamp === undefined ? undefined : value.modifiedTimestamp.toISOString(),
        name: value.name,
        objectives: value.objectives,
        start: value.start.toISOString(),
        state: value.state,
        status: value.status,
        tactics: value.tactics,
        tags: value.tags,
        techniques: value.techniques,
        users: value.users,
        visibility: value.visibility,
    };
}
