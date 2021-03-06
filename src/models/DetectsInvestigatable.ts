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

import { exists, mapValues } from "../runtime";
import type { ThreatgraphCrawlEdgesRequest } from "./ThreatgraphCrawlEdgesRequest";
import { ThreatgraphCrawlEdgesRequestFromJSON, ThreatgraphCrawlEdgesRequestFromJSONTyped, ThreatgraphCrawlEdgesRequestToJSON } from "./ThreatgraphCrawlEdgesRequest";

/**
 *
 * @export
 * @interface DetectsInvestigatable
 */
export interface DetectsInvestigatable {
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    agentId?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    aggregateId?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    assignedToName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    assignedToUid?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    assignedToUuid?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    compositeId?: string;
    /**
     *
     * @type {number}
     * @memberof DetectsInvestigatable
     */
    confidence?: number;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof DetectsInvestigatable
     */
    crawlEdgeIds?: { [key: string]: object };
    /**
     *
     * @type {Array<ThreatgraphCrawlEdgesRequest>}
     * @memberof DetectsInvestigatable
     */
    crawlTraversal?: Array<ThreatgraphCrawlEdgesRequest>;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof DetectsInvestigatable
     */
    crawlVertexIds?: { [key: string]: object };
    /**
     *
     * @type {Date}
     * @memberof DetectsInvestigatable
     */
    createdTimestamp?: Date;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    displayName?: string;
    /**
     *
     * @type {boolean}
     * @memberof DetectsInvestigatable
     */
    emailSent?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DetectsInvestigatable
     */
    external?: boolean;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    objective?: string;
    /**
     *
     * @type {number}
     * @memberof DetectsInvestigatable
     */
    patternId?: number;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    product?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    scenario?: string;
    /**
     *
     * @type {number}
     * @memberof DetectsInvestigatable
     */
    severity?: number;
    /**
     *
     * @type {boolean}
     * @memberof DetectsInvestigatable
     */
    showInUi?: boolean;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    tactic?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    tacticId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsInvestigatable
     */
    tags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    technique?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    techniqueId?: string;
    /**
     *
     * @type {Date}
     * @memberof DetectsInvestigatable
     */
    timestamp?: Date;
    /**
     *
     * @type {string}
     * @memberof DetectsInvestigatable
     */
    type: string;
    /**
     *
     * @type {Date}
     * @memberof DetectsInvestigatable
     */
    updatedTimestamp?: Date;
}

/**
 * Check if a given object implements the DetectsInvestigatable interface.
 */
export function instanceOfDetectsInvestigatable(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DetectsInvestigatableFromJSON(json: any): DetectsInvestigatable {
    return DetectsInvestigatableFromJSONTyped(json, false);
}

export function DetectsInvestigatableFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectsInvestigatable {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        agentId: !exists(json, "agent_id") ? undefined : json["agent_id"],
        aggregateId: !exists(json, "aggregate_id") ? undefined : json["aggregate_id"],
        assignedToName: !exists(json, "assigned_to_name") ? undefined : json["assigned_to_name"],
        assignedToUid: !exists(json, "assigned_to_uid") ? undefined : json["assigned_to_uid"],
        assignedToUuid: !exists(json, "assigned_to_uuid") ? undefined : json["assigned_to_uuid"],
        cid: !exists(json, "cid") ? undefined : json["cid"],
        compositeId: !exists(json, "composite_id") ? undefined : json["composite_id"],
        confidence: !exists(json, "confidence") ? undefined : json["confidence"],
        crawlEdgeIds: !exists(json, "crawl_edge_ids") ? undefined : json["crawl_edge_ids"],
        crawlTraversal: !exists(json, "crawl_traversal") ? undefined : (json["crawl_traversal"] as Array<any>).map(ThreatgraphCrawlEdgesRequestFromJSON),
        crawlVertexIds: !exists(json, "crawl_vertex_ids") ? undefined : json["crawl_vertex_ids"],
        createdTimestamp: !exists(json, "created_timestamp") ? undefined : new Date(json["created_timestamp"]),
        description: !exists(json, "description") ? undefined : json["description"],
        displayName: !exists(json, "display_name") ? undefined : json["display_name"],
        emailSent: !exists(json, "email_sent") ? undefined : json["email_sent"],
        external: !exists(json, "external") ? undefined : json["external"],
        id: json["id"],
        name: !exists(json, "name") ? undefined : json["name"],
        objective: !exists(json, "objective") ? undefined : json["objective"],
        patternId: !exists(json, "pattern_id") ? undefined : json["pattern_id"],
        product: !exists(json, "product") ? undefined : json["product"],
        scenario: !exists(json, "scenario") ? undefined : json["scenario"],
        severity: !exists(json, "severity") ? undefined : json["severity"],
        showInUi: !exists(json, "show_in_ui") ? undefined : json["show_in_ui"],
        status: !exists(json, "status") ? undefined : json["status"],
        tactic: !exists(json, "tactic") ? undefined : json["tactic"],
        tacticId: !exists(json, "tactic_id") ? undefined : json["tactic_id"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
        technique: !exists(json, "technique") ? undefined : json["technique"],
        techniqueId: !exists(json, "technique_id") ? undefined : json["technique_id"],
        timestamp: !exists(json, "timestamp") ? undefined : new Date(json["timestamp"]),
        type: json["type"],
        updatedTimestamp: !exists(json, "updated_timestamp") ? undefined : new Date(json["updated_timestamp"]),
    };
}

export function DetectsInvestigatableToJSON(value?: DetectsInvestigatable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        agent_id: value.agentId,
        aggregate_id: value.aggregateId,
        assigned_to_name: value.assignedToName,
        assigned_to_uid: value.assignedToUid,
        assigned_to_uuid: value.assignedToUuid,
        cid: value.cid,
        composite_id: value.compositeId,
        confidence: value.confidence,
        crawl_edge_ids: value.crawlEdgeIds,
        crawl_traversal: value.crawlTraversal === undefined ? undefined : (value.crawlTraversal as Array<any>).map(ThreatgraphCrawlEdgesRequestToJSON),
        crawl_vertex_ids: value.crawlVertexIds,
        created_timestamp: value.createdTimestamp === undefined ? undefined : value.createdTimestamp.toISOString(),
        description: value.description,
        display_name: value.displayName,
        email_sent: value.emailSent,
        external: value.external,
        id: value.id,
        name: value.name,
        objective: value.objective,
        pattern_id: value.patternId,
        product: value.product,
        scenario: value.scenario,
        severity: value.severity,
        show_in_ui: value.showInUi,
        status: value.status,
        tactic: value.tactic,
        tactic_id: value.tacticId,
        tags: value.tags,
        technique: value.technique,
        technique_id: value.techniqueId,
        timestamp: value.timestamp === undefined ? undefined : value.timestamp.toISOString(),
        type: value.type,
        updated_timestamp: value.updatedTimestamp === undefined ? undefined : value.updatedTimestamp.toISOString(),
    };
}
