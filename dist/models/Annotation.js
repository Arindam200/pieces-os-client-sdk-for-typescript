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
exports.AnnotationToJSON = exports.AnnotationFromJSONTyped = exports.AnnotationFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function AnnotationFromJSON(json) {
    return AnnotationFromJSONTyped(json, false);
}
exports.AnnotationFromJSON = AnnotationFromJSON;
function AnnotationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'created': (0, index_1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, index_1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, index_1.GroupedTimestampFromJSON)(json['deleted']),
        'mechanism': !(0, runtime_1.exists)(json, 'mechanism') ? undefined : (0, index_1.MechanismEnumFromJSON)(json['mechanism']),
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : (0, index_1.ReferencedAssetFromJSON)(json['asset']),
        'person': !(0, runtime_1.exists)(json, 'person') ? undefined : (0, index_1.ReferencedPersonFromJSON)(json['person']),
        'type': (0, index_1.AnnotationTypeEnumFromJSON)(json['type']),
        'text': json['text'],
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : (0, index_1.ReferencedModelFromJSON)(json['model']),
        'pseudo': !(0, runtime_1.exists)(json, 'pseudo') ? undefined : json['pseudo'],
        'favorited': !(0, runtime_1.exists)(json, 'favorited') ? undefined : json['favorited'],
        'anchor': !(0, runtime_1.exists)(json, 'anchor') ? undefined : (0, index_1.ReferencedAnchorFromJSON)(json['anchor']),
        'conversation': !(0, runtime_1.exists)(json, 'conversation') ? undefined : (0, index_1.ReferencedConversationFromJSON)(json['conversation']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, index_1.ScoreFromJSON)(json['score']),
        'messages': !(0, runtime_1.exists)(json, 'messages') ? undefined : (0, index_1.FlattenedConversationMessagesFromJSON)(json['messages']),
    };
}
exports.AnnotationFromJSONTyped = AnnotationFromJSONTyped;
function AnnotationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'created': (0, index_1.GroupedTimestampToJSON)(value.created),
        'updated': (0, index_1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, index_1.GroupedTimestampToJSON)(value.deleted),
        'mechanism': (0, index_1.MechanismEnumToJSON)(value.mechanism),
        'asset': (0, index_1.ReferencedAssetToJSON)(value.asset),
        'person': (0, index_1.ReferencedPersonToJSON)(value.person),
        'type': (0, index_1.AnnotationTypeEnumToJSON)(value.type),
        'text': value.text,
        'model': (0, index_1.ReferencedModelToJSON)(value.model),
        'pseudo': value.pseudo,
        'favorited': value.favorited,
        'anchor': (0, index_1.ReferencedAnchorToJSON)(value.anchor),
        'conversation': (0, index_1.ReferencedConversationToJSON)(value.conversation),
        'score': (0, index_1.ScoreToJSON)(value.score),
        'messages': (0, index_1.FlattenedConversationMessagesToJSON)(value.messages),
    };
}
exports.AnnotationToJSON = AnnotationToJSON;