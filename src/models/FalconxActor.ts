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
import type { FalconxEntity } from './FalconxEntity';
import {
    FalconxEntityFromJSON,
    FalconxEntityFromJSONTyped,
    FalconxEntityToJSON,
} from './FalconxEntity';

/**
 * 
 * @export
 * @interface FalconxActor
 */
export interface FalconxActor {
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    createdTimestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    firstActivityTimestamp?: string;
    /**
     * 
     * @type {number}
     * @memberof FalconxActor
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    imageArtifactId?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    knownAs?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    lastActivityTimestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    name?: string;
    /**
     * 
     * @type {Array<FalconxEntity>}
     * @memberof FalconxActor
     */
    origins?: Array<FalconxEntity>;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    shortDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    slug?: string;
    /**
     * 
     * @type {Array<FalconxEntity>}
     * @memberof FalconxActor
     */
    targetCountries?: Array<FalconxEntity>;
    /**
     * 
     * @type {Array<FalconxEntity>}
     * @memberof FalconxActor
     */
    targetIndustries?: Array<FalconxEntity>;
    /**
     * 
     * @type {string}
     * @memberof FalconxActor
     */
    thumbnailArtifactId?: string;
}

/**
 * Check if a given object implements the FalconxActor interface.
 */
export function instanceOfFalconxActor(value: object): value is FalconxActor {
    return true;
}

export function FalconxActorFromJSON(json: any): FalconxActor {
    return FalconxActorFromJSONTyped(json, false);
}

export function FalconxActorFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxActor {
    if (json == null) {
        return json;
    }
    return {
        
        'createdTimestamp': json['created_timestamp'] == null ? undefined : json['created_timestamp'],
        'description': json['description'] == null ? undefined : json['description'],
        'firstActivityTimestamp': json['first_activity_timestamp'] == null ? undefined : json['first_activity_timestamp'],
        'id': json['id'] == null ? undefined : json['id'],
        'imageArtifactId': json['image_artifact_id'] == null ? undefined : json['image_artifact_id'],
        'knownAs': json['known_as'] == null ? undefined : json['known_as'],
        'lastActivityTimestamp': json['last_activity_timestamp'] == null ? undefined : json['last_activity_timestamp'],
        'name': json['name'] == null ? undefined : json['name'],
        'origins': json['origins'] == null ? undefined : ((json['origins'] as Array<any>).map(FalconxEntityFromJSON)),
        'shortDescription': json['short_description'] == null ? undefined : json['short_description'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'targetCountries': json['target_countries'] == null ? undefined : ((json['target_countries'] as Array<any>).map(FalconxEntityFromJSON)),
        'targetIndustries': json['target_industries'] == null ? undefined : ((json['target_industries'] as Array<any>).map(FalconxEntityFromJSON)),
        'thumbnailArtifactId': json['thumbnail_artifact_id'] == null ? undefined : json['thumbnail_artifact_id'],
    };
}

export function FalconxActorToJSON(value?: FalconxActor | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_timestamp': value['createdTimestamp'],
        'description': value['description'],
        'first_activity_timestamp': value['firstActivityTimestamp'],
        'id': value['id'],
        'image_artifact_id': value['imageArtifactId'],
        'known_as': value['knownAs'],
        'last_activity_timestamp': value['lastActivityTimestamp'],
        'name': value['name'],
        'origins': value['origins'] == null ? undefined : ((value['origins'] as Array<any>).map(FalconxEntityToJSON)),
        'short_description': value['shortDescription'],
        'slug': value['slug'],
        'target_countries': value['targetCountries'] == null ? undefined : ((value['targetCountries'] as Array<any>).map(FalconxEntityToJSON)),
        'target_industries': value['targetIndustries'] == null ? undefined : ((value['targetIndustries'] as Array<any>).map(FalconxEntityToJSON)),
        'thumbnail_artifact_id': value['thumbnailArtifactId'],
    };
}

