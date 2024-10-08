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
 * @interface GraphEnd
 */
export interface GraphEnd {
    /**
     * Reference to the ID of the flow nodes inbound to the end node.
     * @type {Array<string>}
     * @memberof GraphEnd
     */
    incomingFlows: Array<string>;
    /**
     *
     * @type {string}
     * @memberof GraphEnd
     */
    nodeID: string;
    /**
     * Keys of the fields that are the output for this model
     * @type {Array<string>}
     * @memberof GraphEnd
     */
    outputFields?: Array<string>;
}

/**
 * Check if a given object implements the GraphEnd interface.
 */
export function instanceOfGraphEnd(value: object): value is GraphEnd {
    if (!("incomingFlows" in value) || value["incomingFlows"] === undefined) return false;
    if (!("nodeID" in value) || value["nodeID"] === undefined) return false;
    return true;
}

export function GraphEndFromJSON(json: any): GraphEnd {
    return GraphEndFromJSONTyped(json, false);
}

export function GraphEndFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphEnd {
    if (json == null) {
        return json;
    }
    return {
        incomingFlows: json["incoming_flows"],
        nodeID: json["nodeID"],
        outputFields: json["output_fields"] == null ? undefined : json["output_fields"],
    };
}

export function GraphEndToJSON(value?: GraphEnd | null): any {
    if (value == null) {
        return value;
    }
    return {
        incoming_flows: value["incomingFlows"],
        nodeID: value["nodeID"],
        output_fields: value["outputFields"],
    };
}
