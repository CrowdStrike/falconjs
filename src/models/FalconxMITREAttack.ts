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
import type { FalconxMITREAttackParent } from "./FalconxMITREAttackParent";
import { FalconxMITREAttackParentFromJSON, FalconxMITREAttackParentFromJSONTyped, FalconxMITREAttackParentToJSON } from "./FalconxMITREAttackParent";

/**
 *
 * @export
 * @interface FalconxMITREAttack
 */
export interface FalconxMITREAttack {
    /**
     *
     * @type {string}
     * @memberof FalconxMITREAttack
     */
    attackId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxMITREAttack
     */
    attackIdWiki?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxMITREAttack
     */
    informativeIdentifiers?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxMITREAttack
     */
    maliciousIdentifiers?: Array<string>;
    /**
     *
     * @type {FalconxMITREAttackParent}
     * @memberof FalconxMITREAttack
     */
    parent?: FalconxMITREAttackParent;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxMITREAttack
     */
    suspiciousIdentifiers?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FalconxMITREAttack
     */
    tactic?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxMITREAttack
     */
    technique?: string;
}

/**
 * Check if a given object implements the FalconxMITREAttack interface.
 */
export function instanceOfFalconxMITREAttack(value: object): value is FalconxMITREAttack {
    return true;
}

export function FalconxMITREAttackFromJSON(json: any): FalconxMITREAttack {
    return FalconxMITREAttackFromJSONTyped(json, false);
}

export function FalconxMITREAttackFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxMITREAttack {
    if (json == null) {
        return json;
    }
    return {
        attackId: json["attack_id"] == null ? undefined : json["attack_id"],
        attackIdWiki: json["attack_id_wiki"] == null ? undefined : json["attack_id_wiki"],
        informativeIdentifiers: json["informative_identifiers"] == null ? undefined : json["informative_identifiers"],
        maliciousIdentifiers: json["malicious_identifiers"] == null ? undefined : json["malicious_identifiers"],
        parent: json["parent"] == null ? undefined : FalconxMITREAttackParentFromJSON(json["parent"]),
        suspiciousIdentifiers: json["suspicious_identifiers"] == null ? undefined : json["suspicious_identifiers"],
        tactic: json["tactic"] == null ? undefined : json["tactic"],
        technique: json["technique"] == null ? undefined : json["technique"],
    };
}

export function FalconxMITREAttackToJSON(value?: FalconxMITREAttack | null): any {
    if (value == null) {
        return value;
    }
    return {
        attack_id: value["attackId"],
        attack_id_wiki: value["attackIdWiki"],
        informative_identifiers: value["informativeIdentifiers"],
        malicious_identifiers: value["maliciousIdentifiers"],
        parent: FalconxMITREAttackParentToJSON(value["parent"]),
        suspicious_identifiers: value["suspiciousIdentifiers"],
        tactic: value["tactic"],
        technique: value["technique"],
    };
}
