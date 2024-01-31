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
import {
    Application,
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    ConversationGrounding,
    ConversationGroundingFromJSON,
    ConversationGroundingFromJSONTyped,
    ConversationGroundingToJSON,
    ConversationTypeEnum,
    ConversationTypeEnumFromJSON,
    ConversationTypeEnumFromJSONTyped,
    ConversationTypeEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedAnchors,
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
    FlattenedAnnotations,
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
    FlattenedAssets,
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
    FlattenedConversationMessages,
    FlattenedConversationMessagesFromJSON,
    FlattenedConversationMessagesFromJSONTyped,
    FlattenedConversationMessagesToJSON,
    FlattenedWebsites,
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    QGPTPromptPipeline,
    QGPTPromptPipelineFromJSON,
    QGPTPromptPipelineFromJSONTyped,
    QGPTPromptPipelineToJSON,
    ReferencedModel,
    ReferencedModelFromJSON,
    ReferencedModelFromJSONTyped,
    ReferencedModelToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './index';

/**
 * This is a fully referenced Conversation.
 * 
 * This will hold together a conversation. Ie allthe message within a conversation.
 * 
 * All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.
 * 
 * model is a calculated property, and will be the model of the last message sent if applicable.
 * @export
 * @interface Conversation
 */
export interface Conversation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Conversation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Conversation
     */
    id: string;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof Conversation
     */
    name?: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {boolean}
     * @memberof Conversation
     */
    favorited?: boolean;
    /**
     * 
     * @type {Application}
     * @memberof Conversation
     */
    application?: Application;
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof Conversation
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof Conversation
     */
    messages: FlattenedConversationMessages;
    /**
     * 
     * @type {ReferencedModel}
     * @memberof Conversation
     */
    model?: ReferencedModel;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof Conversation
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof Conversation
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof Conversation
     */
    anchors?: FlattenedAnchors;
    /**
     * 
     * @type {ConversationTypeEnum}
     * @memberof Conversation
     */
    type: ConversationTypeEnum;
    /**
     * 
     * @type {ConversationGrounding}
     * @memberof Conversation
     */
    grounding?: ConversationGrounding;
    /**
     * 
     * @type {Score}
     * @memberof Conversation
     */
    score?: Score;
    /**
     * 
     * @type {QGPTPromptPipeline}
     * @memberof Conversation
     */
    pipeline?: QGPTPromptPipeline;
}

export function ConversationFromJSON(json: any): Conversation {
    return ConversationFromJSONTyped(json, false);
}

export function ConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Conversation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'favorited': !exists(json, 'favorited') ? undefined : json['favorited'],
        'application': !exists(json, 'application') ? undefined : ApplicationFromJSON(json['application']),
        'annotations': !exists(json, 'annotations') ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'messages': FlattenedConversationMessagesFromJSON(json['messages']),
        'model': !exists(json, 'model') ? undefined : ReferencedModelFromJSON(json['model']),
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'websites': !exists(json, 'websites') ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': !exists(json, 'anchors') ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'type': ConversationTypeEnumFromJSON(json['type']),
        'grounding': !exists(json, 'grounding') ? undefined : ConversationGroundingFromJSON(json['grounding']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'pipeline': !exists(json, 'pipeline') ? undefined : QGPTPromptPipelineFromJSON(json['pipeline']),
    };
}

export function ConversationToJSON(value?: Conversation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'name': value.name,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'favorited': value.favorited,
        'application': ApplicationToJSON(value.application),
        'annotations': FlattenedAnnotationsToJSON(value.annotations),
        'messages': FlattenedConversationMessagesToJSON(value.messages),
        'model': ReferencedModelToJSON(value.model),
        'assets': FlattenedAssetsToJSON(value.assets),
        'websites': FlattenedWebsitesToJSON(value.websites),
        'anchors': FlattenedAnchorsToJSON(value.anchors),
        'type': ConversationTypeEnumToJSON(value.type),
        'grounding': ConversationGroundingToJSON(value.grounding),
        'score': ScoreToJSON(value.score),
        'pipeline': QGPTPromptPipelineToJSON(value.pipeline),
    };
}


