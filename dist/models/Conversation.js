"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationToJSON = exports.ConversationFromJSONTyped = exports.ConversationFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function ConversationFromJSON(json) {
    return ConversationFromJSONTyped(json, false);
}
exports.ConversationFromJSON = ConversationFromJSON;
function ConversationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'created': (0, index_1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, index_1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, index_1.GroupedTimestampFromJSON)(json['deleted']),
        'favorited': !(0, runtime_1.exists)(json, 'favorited') ? undefined : json['favorited'],
        'application': !(0, runtime_1.exists)(json, 'application') ? undefined : (0, index_1.ApplicationFromJSON)(json['application']),
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : (0, index_1.FlattenedAnnotationsFromJSON)(json['annotations']),
        'messages': (0, index_1.FlattenedConversationMessagesFromJSON)(json['messages']),
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : (0, index_1.ReferencedModelFromJSON)(json['model']),
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, index_1.FlattenedAssetsFromJSON)(json['assets']),
        'anchors': !(0, runtime_1.exists)(json, 'anchors') ? undefined : (0, index_1.FlattenedAnchorsFromJSON)(json['anchors']),
        'type': (0, index_1.ConversationTypeEnumFromJSON)(json['type']),
        'grounding': !(0, runtime_1.exists)(json, 'grounding') ? undefined : (0, index_1.ConversationGroundingFromJSON)(json['grounding']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, index_1.ScoreFromJSON)(json['score']),
    };
}
exports.ConversationFromJSONTyped = ConversationFromJSONTyped;
function ConversationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'name': value.name,
        'created': (0, index_1.GroupedTimestampToJSON)(value.created),
        'updated': (0, index_1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, index_1.GroupedTimestampToJSON)(value.deleted),
        'favorited': value.favorited,
        'application': (0, index_1.ApplicationToJSON)(value.application),
        'annotations': (0, index_1.FlattenedAnnotationsToJSON)(value.annotations),
        'messages': (0, index_1.FlattenedConversationMessagesToJSON)(value.messages),
        'model': (0, index_1.ReferencedModelToJSON)(value.model),
        'assets': (0, index_1.FlattenedAssetsToJSON)(value.assets),
        'anchors': (0, index_1.FlattenedAnchorsToJSON)(value.anchors),
        'type': (0, index_1.ConversationTypeEnumToJSON)(value.type),
        'grounding': (0, index_1.ConversationGroundingToJSON)(value.grounding),
        'score': (0, index_1.ScoreToJSON)(value.score),
    };
}
exports.ConversationToJSON = ConversationToJSON;