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
/**
 *
 * @export
 * @interface DomainAPIRuleDetailsV1
 */
export interface DomainAPIRuleDetailsV1 {
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    additionalInformation: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainAPIRuleDetailsV1
     */
    applicableProfiles: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    assessmentStatus: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    auditProcedure: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    authority: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    benchmarkTitle: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    impactStatement: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    platform: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    rationaleStatement: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    recommendationId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainAPIRuleDetailsV1
     */
    references?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    remediationProcedure: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIRuleDetailsV1
     */
    title: string;
}

/**
 * Check if a given object implements the DomainAPIRuleDetailsV1 interface.
 */
export function instanceOfDomainAPIRuleDetailsV1(value: object): value is DomainAPIRuleDetailsV1 {
    if (!("additionalInformation" in value) || value["additionalInformation"] === undefined) return false;
    if (!("applicableProfiles" in value) || value["applicableProfiles"] === undefined) return false;
    if (!("assessmentStatus" in value) || value["assessmentStatus"] === undefined) return false;
    if (!("auditProcedure" in value) || value["auditProcedure"] === undefined) return false;
    if (!("authority" in value) || value["authority"] === undefined) return false;
    if (!("benchmarkTitle" in value) || value["benchmarkTitle"] === undefined) return false;
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("impactStatement" in value) || value["impactStatement"] === undefined) return false;
    if (!("platform" in value) || value["platform"] === undefined) return false;
    if (!("rationaleStatement" in value) || value["rationaleStatement"] === undefined) return false;
    if (!("recommendationId" in value) || value["recommendationId"] === undefined) return false;
    if (!("remediationProcedure" in value) || value["remediationProcedure"] === undefined) return false;
    if (!("title" in value) || value["title"] === undefined) return false;
    return true;
}

export function DomainAPIRuleDetailsV1FromJSON(json: any): DomainAPIRuleDetailsV1 {
    return DomainAPIRuleDetailsV1FromJSONTyped(json, false);
}

export function DomainAPIRuleDetailsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIRuleDetailsV1 {
    if (json == null) {
        return json;
    }
    return {
        additionalInformation: json["additional_information"],
        applicableProfiles: json["applicable_profiles"],
        assessmentStatus: json["assessment_status"],
        auditProcedure: json["audit_procedure"],
        authority: json["authority"],
        benchmarkTitle: json["benchmark_title"],
        description: json["description"],
        id: json["id"],
        impactStatement: json["impact_statement"],
        platform: json["platform"],
        rationaleStatement: json["rationale_statement"],
        recommendationId: json["recommendation_id"],
        references: json["references"] == null ? undefined : json["references"],
        remediationProcedure: json["remediation_procedure"],
        title: json["title"],
    };
}

export function DomainAPIRuleDetailsV1ToJSON(value?: DomainAPIRuleDetailsV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        additional_information: value["additionalInformation"],
        applicable_profiles: value["applicableProfiles"],
        assessment_status: value["assessmentStatus"],
        audit_procedure: value["auditProcedure"],
        authority: value["authority"],
        benchmark_title: value["benchmarkTitle"],
        description: value["description"],
        id: value["id"],
        impact_statement: value["impactStatement"],
        platform: value["platform"],
        rationale_statement: value["rationaleStatement"],
        recommendation_id: value["recommendationId"],
        references: value["references"],
        remediation_procedure: value["remediationProcedure"],
        title: value["title"],
    };
}