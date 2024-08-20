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
import type { DomainTelegramInfo } from './DomainTelegramInfo';
import {
    DomainTelegramInfoFromJSON,
    DomainTelegramInfoFromJSONTyped,
    DomainTelegramInfoToJSON,
} from './DomainTelegramInfo';
import type { DomainIOC } from './DomainIOC';
import {
    DomainIOCFromJSON,
    DomainIOCFromJSONTyped,
    DomainIOCToJSON,
} from './DomainIOC';
import type { DomainFragmentInfo } from './DomainFragmentInfo';
import {
    DomainFragmentInfoFromJSON,
    DomainFragmentInfoFromJSONTyped,
    DomainFragmentInfoToJSON,
} from './DomainFragmentInfo';
import type { DomainMarketplaceProduct } from './DomainMarketplaceProduct';
import {
    DomainMarketplaceProductFromJSON,
    DomainMarketplaceProductFromJSONTyped,
    DomainMarketplaceProductToJSON,
} from './DomainMarketplaceProduct';
import type { DomainAttachment } from './DomainAttachment';
import {
    DomainAttachmentFromJSON,
    DomainAttachmentFromJSONTyped,
    DomainAttachmentToJSON,
} from './DomainAttachment';

/**
 * 
 * @export
 * @interface DomainItemDetailsV1
 */
export interface DomainItemDetailsV1 {
    /**
     * The threat actor associated with a raw intelligence item, if available.
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    actorSlug?: string;
    /**
     * Attachments items linked to the raw intelligence item
     * @type {Array<DomainAttachment>}
     * @memberof DomainItemDetailsV1
     */
    attachments?: Array<DomainAttachment>;
    /**
     * The author’s username of a raw intelligence item
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    author?: string;
    /**
     * The raw intelligence item author identifier in our system
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    authorId?: string;
    /**
     * The type of source where the raw intelligence item was found
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    category: string;
    /**
     * The date and time the raw intelligence item was scraped from the original source
     * @type {Date}
     * @memberof DomainItemDetailsV1
     */
    collectionDate?: Date;
    /**
     * Highlighted content based on the monitoring rule that generated the notification. Highlights are surrounded with a `<cs-highlight>` tag
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    content: string;
    /**
     * The date and time when the raw intelligence item was created
     * @type {Date}
     * @memberof DomainItemDetailsV1
     */
    createdDate: Date;
    /**
     * The file type of the raw intelligence item, if available
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    fileType?: string;
    /**
     * 
     * @type {DomainFragmentInfo}
     * @memberof DomainItemDetailsV1
     */
    fragmentInfo?: DomainFragmentInfo;
    /**
     * The URL to download the full raw text content of the raw intelligence item. It has a limited time to live
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    fullContentUrl?: string;
    /**
     * The types of IOCs found in the raw intelligence item. List of keys populated in the iocs field
     * @type {Array<string>}
     * @memberof DomainItemDetailsV1
     */
    iocTypes?: Array<string>;
    /**
     * 
     * @type {DomainIOC}
     * @memberof DomainItemDetailsV1
     */
    iocs?: DomainIOC;
    /**
     * Labels for the type of information included in a raw intelligence item
     * @type {Array<string>}
     * @memberof DomainItemDetailsV1
     */
    labels?: Array<string>;
    /**
     * The language of the raw intelligence item
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    language?: string;
    /**
     * 
     * @type {DomainMarketplaceProduct}
     * @memberof DomainItemDetailsV1
     */
    marketplaceProduct?: DomainMarketplaceProduct;
    /**
     * The mime type of the file
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    mimeType?: string;
    /**
     * The SHA256 hash for the file
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    sha256?: string;
    /**
     * The site where the raw intelligence item was found
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    site?: string;
    /**
     * The ID of the site where the raw intelligence item was found
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    siteId: string;
    /**
     * The size of the item's content in bytes, if available
     * @type {number}
     * @memberof DomainItemDetailsV1
     */
    size?: number;
    /**
     * 
     * @type {DomainTelegramInfo}
     * @memberof DomainItemDetailsV1
     */
    telegramInfo?: DomainTelegramInfo;
    /**
     * Identifier that groups all raw intelligence items belonging to the same conversation thread
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    threadId?: string;
    /**
     * The title of the raw intelligence item
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    title?: string;
    /**
     * The type of the raw intelligence item
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    type: string;
    /**
     * The date and time when the raw intelligence item was updated
     * @type {Date}
     * @memberof DomainItemDetailsV1
     */
    updatedDate: Date;
    /**
     * The URL of the raw intelligence item
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    url?: string;
    /**
     * The raw intelligence item author identifier in the original source
     * @type {string}
     * @memberof DomainItemDetailsV1
     */
    userId?: string;
}

/**
 * Check if a given object implements the DomainItemDetailsV1 interface.
 */
export function instanceOfDomainItemDetailsV1(value: object): value is DomainItemDetailsV1 {
    if (!('category' in value) || value['category'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    if (!('createdDate' in value) || value['createdDate'] === undefined) return false;
    if (!('siteId' in value) || value['siteId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('updatedDate' in value) || value['updatedDate'] === undefined) return false;
    return true;
}

export function DomainItemDetailsV1FromJSON(json: any): DomainItemDetailsV1 {
    return DomainItemDetailsV1FromJSONTyped(json, false);
}

export function DomainItemDetailsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainItemDetailsV1 {
    if (json == null) {
        return json;
    }
    return {
        
        'actorSlug': json['actor_slug'] == null ? undefined : json['actor_slug'],
        'attachments': json['attachments'] == null ? undefined : ((json['attachments'] as Array<any>).map(DomainAttachmentFromJSON)),
        'author': json['author'] == null ? undefined : json['author'],
        'authorId': json['author_id'] == null ? undefined : json['author_id'],
        'category': json['category'],
        'collectionDate': json['collection_date'] == null ? undefined : (new Date(json['collection_date'])),
        'content': json['content'],
        'createdDate': (new Date(json['created_date'])),
        'fileType': json['file_type'] == null ? undefined : json['file_type'],
        'fragmentInfo': json['fragment_info'] == null ? undefined : DomainFragmentInfoFromJSON(json['fragment_info']),
        'fullContentUrl': json['full_content_url'] == null ? undefined : json['full_content_url'],
        'iocTypes': json['ioc_types'] == null ? undefined : json['ioc_types'],
        'iocs': json['iocs'] == null ? undefined : DomainIOCFromJSON(json['iocs']),
        'labels': json['labels'] == null ? undefined : json['labels'],
        'language': json['language'] == null ? undefined : json['language'],
        'marketplaceProduct': json['marketplace_product'] == null ? undefined : DomainMarketplaceProductFromJSON(json['marketplace_product']),
        'mimeType': json['mime_type'] == null ? undefined : json['mime_type'],
        'sha256': json['sha256'] == null ? undefined : json['sha256'],
        'site': json['site'] == null ? undefined : json['site'],
        'siteId': json['site_id'],
        'size': json['size'] == null ? undefined : json['size'],
        'telegramInfo': json['telegram_info'] == null ? undefined : DomainTelegramInfoFromJSON(json['telegram_info']),
        'threadId': json['thread_id'] == null ? undefined : json['thread_id'],
        'title': json['title'] == null ? undefined : json['title'],
        'type': json['type'],
        'updatedDate': (new Date(json['updated_date'])),
        'url': json['url'] == null ? undefined : json['url'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
    };
}

export function DomainItemDetailsV1ToJSON(value?: DomainItemDetailsV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'actor_slug': value['actorSlug'],
        'attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(DomainAttachmentToJSON)),
        'author': value['author'],
        'author_id': value['authorId'],
        'category': value['category'],
        'collection_date': value['collectionDate'] == null ? undefined : ((value['collectionDate']).toISOString()),
        'content': value['content'],
        'created_date': ((value['createdDate']).toISOString()),
        'file_type': value['fileType'],
        'fragment_info': DomainFragmentInfoToJSON(value['fragmentInfo']),
        'full_content_url': value['fullContentUrl'],
        'ioc_types': value['iocTypes'],
        'iocs': DomainIOCToJSON(value['iocs']),
        'labels': value['labels'],
        'language': value['language'],
        'marketplace_product': DomainMarketplaceProductToJSON(value['marketplaceProduct']),
        'mime_type': value['mimeType'],
        'sha256': value['sha256'],
        'site': value['site'],
        'site_id': value['siteId'],
        'size': value['size'],
        'telegram_info': DomainTelegramInfoToJSON(value['telegramInfo']),
        'thread_id': value['threadId'],
        'title': value['title'],
        'type': value['type'],
        'updated_date': ((value['updatedDate']).toISOString()),
        'url': value['url'],
        'user_id': value['userId'],
    };
}

