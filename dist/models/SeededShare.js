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
exports.SeededShareToJSON = exports.SeededShareFromJSONTyped = exports.SeededShareFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function SeededShareFromJSON(json) {
    return SeededShareFromJSONTyped(json, false);
}
exports.SeededShareFromJSON = SeededShareFromJSON;
function SeededShareFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : (0, index_1.AssetFromJSON)(json['asset']),
        'users': !(0, runtime_1.exists)(json, 'users') ? undefined : (json['users'].map(index_1.SeededUserFromJSON)),
        'access': (0, index_1.AccessEnumFromJSON)(json['access']),
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, index_1.AssetsFromJSON)(json['assets']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.SeededShareFromJSONTyped = SeededShareFromJSONTyped;
function SeededShareToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'asset': (0, index_1.AssetToJSON)(value.asset),
        'users': value.users === undefined ? undefined : (value.users.map(index_1.SeededUserToJSON)),
        'access': (0, index_1.AccessEnumToJSON)(value.access),
        'assets': (0, index_1.AssetsToJSON)(value.assets),
        'name': value.name,
    };
}
exports.SeededShareToJSON = SeededShareToJSON;
