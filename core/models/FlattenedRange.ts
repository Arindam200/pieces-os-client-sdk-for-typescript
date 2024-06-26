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
import type { FlattenedConversations } from './FlattenedConversations';
import {
    FlattenedConversationsFromJSON,
    FlattenedConversationsFromJSONTyped,
    FlattenedConversationsToJSON,
} from './FlattenedConversations';
import type { FlattenedWorkstreamSummaries } from './FlattenedWorkstreamSummaries';
import {
    FlattenedWorkstreamSummariesFromJSON,
    FlattenedWorkstreamSummariesFromJSONTyped,
    FlattenedWorkstreamSummariesToJSON,
} from './FlattenedWorkstreamSummaries';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a DAG-Safe minimal representation of a Range.
 * @export
 * @interface FlattenedRange
 */
export interface FlattenedRange {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedRange
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedRange
     */
    id: string;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedRange
     */
    score?: Score;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedRange
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedRange
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedRange
     */
    to?: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedRange
     */
    from?: GroupedTimestamp;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedRange
     */
    between?: boolean;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof FlattenedRange
     */
    summaries?: FlattenedWorkstreamSummaries;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof FlattenedRange
     */
    conversations?: FlattenedConversations;
}

/**
 * Check if a given object implements the FlattenedRange interface.
 */
export function instanceOfFlattenedRange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;

    return isInstance;
}

export function FlattenedRangeFromJSON(json: any): FlattenedRange {
    return FlattenedRangeFromJSONTyped(json, false);
}

export function FlattenedRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'to': !exists(json, 'to') ? undefined : GroupedTimestampFromJSON(json['to']),
        'from': !exists(json, 'from') ? undefined : GroupedTimestampFromJSON(json['from']),
        'between': !exists(json, 'between') ? undefined : json['between'],
        'summaries': !exists(json, 'summaries') ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
        'conversations': !exists(json, 'conversations') ? undefined : FlattenedConversationsFromJSON(json['conversations']),
    };
}

export function FlattenedRangeToJSON(value?: FlattenedRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'score': ScoreToJSON(value.score),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'to': GroupedTimestampToJSON(value.to),
        'from': GroupedTimestampToJSON(value.from),
        'between': value.between,
        'summaries': FlattenedWorkstreamSummariesToJSON(value.summaries),
        'conversations': FlattenedConversationsToJSON(value.conversations),
    };
}

