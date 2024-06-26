/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { GitHubDistribution } from './GitHubDistribution';
import {
    GitHubDistributionFromJSON,
    GitHubDistributionFromJSONTyped,
    GitHubDistributionToJSON,
} from './GitHubDistribution';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { MailgunDistribution } from './MailgunDistribution';
import {
    MailgunDistributionFromJSON,
    MailgunDistributionFromJSONTyped,
    MailgunDistributionToJSON,
} from './MailgunDistribution';

/**
 * 
 * @export
 * @interface FlattenedDistribution
 */
export interface FlattenedDistribution {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedDistribution
     */
    id: string;
    /**
     * This is the UUId of the share.
     * @type {string}
     * @memberof FlattenedDistribution
     */
    share: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedDistribution
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedDistribution
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedDistribution
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {MailgunDistribution}
     * @memberof FlattenedDistribution
     */
    mailgun?: MailgunDistribution;
    /**
     * 
     * @type {GitHubDistribution}
     * @memberof FlattenedDistribution
     */
    github?: GitHubDistribution;
}

/**
 * Check if a given object implements the FlattenedDistribution interface.
 */
export function instanceOfFlattenedDistribution(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "share" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;

    return isInstance;
}

export function FlattenedDistributionFromJSON(json: any): FlattenedDistribution {
    return FlattenedDistributionFromJSONTyped(json, false);
}

export function FlattenedDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedDistribution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'share': json['share'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'mailgun': !exists(json, 'mailgun') ? undefined : MailgunDistributionFromJSON(json['mailgun']),
        'github': !exists(json, 'github') ? undefined : GitHubDistributionFromJSON(json['github']),
    };
}

export function FlattenedDistributionToJSON(value?: FlattenedDistribution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'share': value.share,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'mailgun': MailgunDistributionToJSON(value.mailgun),
        'github': GitHubDistributionToJSON(value.github),
    };
}

