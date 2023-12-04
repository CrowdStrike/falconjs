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
/**
 *
 * @export
 * @interface DomainKillChain
 */
export interface DomainKillChain {
    /**
     * Free form text describing actions and objectives of the actor
     * @type {string}
     * @memberof DomainKillChain
     */
    actionsAndObjectives?: string;
    /**
     * Free form text describing methods and tools used to communicate with and control an infected machine or network
     * @type {string}
     * @memberof DomainKillChain
     */
    commandAndControl?: string;
    /**
     * Free form text describing malware delivery by actor
     * @type {string}
     * @memberof DomainKillChain
     */
    delivery?: string;
    /**
     * Comma separated values of vulnerabilities by CVE codes that are exploited by actor
     * @type {string}
     * @memberof DomainKillChain
     */
    exploitation?: string;
    /**
     * Free form text describing actor's malware installation on the asset
     * @type {string}
     * @memberof DomainKillChain
     */
    installation?: string;
    /**
     * Legacy field, not used and empty
     * @type {string}
     * @memberof DomainKillChain
     */
    objectives?: string;
    /**
     * Free form text describing how targets are researched, identified and selected
     * @type {string}
     * @memberof DomainKillChain
     */
    reconnaissance?: string;
    /**
     * Rich free form text describing actions and objectives of the actor
     * @type {string}
     * @memberof DomainKillChain
     */
    richTextActionsAndObjectives?: string;
    /**
     * Rich free form text describing methods and tools used to communicate with and control an infected machine or network
     * @type {string}
     * @memberof DomainKillChain
     */
    richTextCommandAndControl?: string;
    /**
     * Rich free form text describing malware delivery by actor
     * @type {string}
     * @memberof DomainKillChain
     */
    richTextDelivery?: string;
    /**
     * Rich text comma separated values of vulnerabilities by CVE codes that are exploited by actor
     * @type {string}
     * @memberof DomainKillChain
     */
    richTextExploitation?: string;
    /**
     * Rich free form text describing actor's malware installation on the asset
     * @type {string}
     * @memberof DomainKillChain
     */
    richTextInstallation?: string;
    /**
     * Legacy field, not used and empty
     * @type {string}
     * @memberof DomainKillChain
     */
    richTextObjectives?: string;
    /**
     * Rich free form text describing how targets are researched, identified and selected
     * @type {string}
     * @memberof DomainKillChain
     */
    richTextReconnaissance?: string;
    /**
     * Rich free form text describing weaponization of the threat/malware (couples exploit with backdoor into deliverable payload)
     * @type {string}
     * @memberof DomainKillChain
     */
    richTextWeaponization?: string;
    /**
     * Free form text describing weaponization of the threat/malware (couples exploit with backdoor into deliverable payload)
     * @type {string}
     * @memberof DomainKillChain
     */
    weaponization?: string;
}

/**
 * Check if a given object implements the DomainKillChain interface.
 */
export function instanceOfDomainKillChain(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DomainKillChainFromJSON(json: any): DomainKillChain {
    return DomainKillChainFromJSONTyped(json, false);
}

export function DomainKillChainFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainKillChain {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        actionsAndObjectives: !exists(json, "actions_and_objectives") ? undefined : json["actions_and_objectives"],
        commandAndControl: !exists(json, "command_and_control") ? undefined : json["command_and_control"],
        delivery: !exists(json, "delivery") ? undefined : json["delivery"],
        exploitation: !exists(json, "exploitation") ? undefined : json["exploitation"],
        installation: !exists(json, "installation") ? undefined : json["installation"],
        objectives: !exists(json, "objectives") ? undefined : json["objectives"],
        reconnaissance: !exists(json, "reconnaissance") ? undefined : json["reconnaissance"],
        richTextActionsAndObjectives: !exists(json, "rich_text_actions_and_objectives") ? undefined : json["rich_text_actions_and_objectives"],
        richTextCommandAndControl: !exists(json, "rich_text_command_and_control") ? undefined : json["rich_text_command_and_control"],
        richTextDelivery: !exists(json, "rich_text_delivery") ? undefined : json["rich_text_delivery"],
        richTextExploitation: !exists(json, "rich_text_exploitation") ? undefined : json["rich_text_exploitation"],
        richTextInstallation: !exists(json, "rich_text_installation") ? undefined : json["rich_text_installation"],
        richTextObjectives: !exists(json, "rich_text_objectives") ? undefined : json["rich_text_objectives"],
        richTextReconnaissance: !exists(json, "rich_text_reconnaissance") ? undefined : json["rich_text_reconnaissance"],
        richTextWeaponization: !exists(json, "rich_text_weaponization") ? undefined : json["rich_text_weaponization"],
        weaponization: !exists(json, "weaponization") ? undefined : json["weaponization"],
    };
}

export function DomainKillChainToJSON(value?: DomainKillChain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        actions_and_objectives: value.actionsAndObjectives,
        command_and_control: value.commandAndControl,
        delivery: value.delivery,
        exploitation: value.exploitation,
        installation: value.installation,
        objectives: value.objectives,
        reconnaissance: value.reconnaissance,
        rich_text_actions_and_objectives: value.richTextActionsAndObjectives,
        rich_text_command_and_control: value.richTextCommandAndControl,
        rich_text_delivery: value.richTextDelivery,
        rich_text_exploitation: value.richTextExploitation,
        rich_text_installation: value.richTextInstallation,
        rich_text_objectives: value.richTextObjectives,
        rich_text_reconnaissance: value.richTextReconnaissance,
        rich_text_weaponization: value.richTextWeaponization,
        weaponization: value.weaponization,
    };
}
