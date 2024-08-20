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
import type { ChangesGroup } from './ChangesGroup';
import {
    ChangesGroupFromJSON,
    ChangesGroupFromJSONTyped,
    ChangesGroupToJSON,
} from './ChangesGroup';
import type { ChangesDACL } from './ChangesDACL';
import {
    ChangesDACLFromJSON,
    ChangesDACLFromJSONTyped,
    ChangesDACLToJSON,
} from './ChangesDACL';
import type { ChangesOwner } from './ChangesOwner';
import {
    ChangesOwnerFromJSON,
    ChangesOwnerFromJSONTyped,
    ChangesOwnerToJSON,
} from './ChangesOwner';

/**
 * 
 * @export
 * @interface ChangesPermissions
 */
export interface ChangesPermissions {
    /**
     * 
     * @type {ChangesDACL}
     * @memberof ChangesPermissions
     */
    dacl?: ChangesDACL;
    /**
     * 
     * @type {ChangesGroup}
     * @memberof ChangesPermissions
     */
    group?: ChangesGroup;
    /**
     * 
     * @type {ChangesOwner}
     * @memberof ChangesPermissions
     */
    owner?: ChangesOwner;
    /**
     * Possible values: 0 - OWNER, 1 - GROUP, 2 - DACL, 3 - SACL
     * @type {number}
     * @memberof ChangesPermissions
     */
    securityInfo?: number;
}

/**
 * Check if a given object implements the ChangesPermissions interface.
 */
export function instanceOfChangesPermissions(value: object): value is ChangesPermissions {
    return true;
}

export function ChangesPermissionsFromJSON(json: any): ChangesPermissions {
    return ChangesPermissionsFromJSONTyped(json, false);
}

export function ChangesPermissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangesPermissions {
    if (json == null) {
        return json;
    }
    return {
        
        'dacl': json['dacl'] == null ? undefined : ChangesDACLFromJSON(json['dacl']),
        'group': json['group'] == null ? undefined : ChangesGroupFromJSON(json['group']),
        'owner': json['owner'] == null ? undefined : ChangesOwnerFromJSON(json['owner']),
        'securityInfo': json['security_info'] == null ? undefined : json['security_info'],
    };
}

export function ChangesPermissionsToJSON(value?: ChangesPermissions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dacl': ChangesDACLToJSON(value['dacl']),
        'group': ChangesGroupToJSON(value['group']),
        'owner': ChangesOwnerToJSON(value['owner']),
        'security_info': value['securityInfo'],
    };
}

