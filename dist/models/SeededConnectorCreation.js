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
exports.SeededConnectorCreationToJSON = exports.SeededConnectorCreationFromJSONTyped = exports.SeededConnectorCreationFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function SeededConnectorCreationFromJSON(json) {
    return SeededConnectorCreationFromJSONTyped(json, false);
}
exports.SeededConnectorCreationFromJSON = SeededConnectorCreationFromJSON;
function SeededConnectorCreationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : (0, index_1.SeededConnectorAssetFromJSON)(json['asset']),
    };
}
exports.SeededConnectorCreationFromJSONTyped = SeededConnectorCreationFromJSONTyped;
function SeededConnectorCreationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'asset': (0, index_1.SeededConnectorAssetToJSON)(value.asset),
    };
}
exports.SeededConnectorCreationToJSON = SeededConnectorCreationToJSON;