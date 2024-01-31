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
exports.EmbeddingsToJSON = exports.EmbeddingsFromJSONTyped = exports.EmbeddingsFromJSON = void 0;
const index_1 = require("./index");
function EmbeddingsFromJSON(json) {
    return EmbeddingsFromJSONTyped(json, false);
}
exports.EmbeddingsFromJSON = EmbeddingsFromJSON;
function EmbeddingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'iterable': (json['iterable'].map(index_1.EmbeddingFromJSON)),
    };
}
exports.EmbeddingsFromJSONTyped = EmbeddingsFromJSONTyped;
function EmbeddingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'iterable': (value.iterable.map(index_1.EmbeddingToJSON)),
    };
}
exports.EmbeddingsToJSON = EmbeddingsToJSON;
