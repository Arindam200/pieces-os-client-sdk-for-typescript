"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlattenedConversationsToJSON = exports.FlattenedConversationsFromJSONTyped = exports.FlattenedConversationsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function FlattenedConversationsFromJSON(json) {
    return FlattenedConversationsFromJSONTyped(json, false);
}
exports.FlattenedConversationsFromJSON = FlattenedConversationsFromJSON;
function FlattenedConversationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'iterable': (json['iterable'].map(_1.ReferencedConversationFromJSON)),
        'indices': !(0, runtime_1.exists)(json, 'indices') ? undefined : json['indices'],
    };
}
exports.FlattenedConversationsFromJSONTyped = FlattenedConversationsFromJSONTyped;
function FlattenedConversationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'iterable': (value.iterable.map(_1.ReferencedConversationToJSON)),
        'indices': value.indices,
    };
}
exports.FlattenedConversationsToJSON = FlattenedConversationsToJSON;