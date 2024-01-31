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
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    SeededFile,
    SeededFileFromJSON,
    SeededFileFromJSONTyped,
    SeededFileToJSON,
    SeededFragment,
    SeededFragmentFromJSON,
    SeededFragmentFromJSONTyped,
    SeededFragmentToJSON,
    TLPDirectedDiscoveryFilters,
    TLPDirectedDiscoveryFiltersFromJSON,
    TLPDirectedDiscoveryFiltersFromJSONTyped,
    TLPDirectedDiscoveryFiltersToJSON,
} from './index';

/**
 * Assumption: filters applied in this model will overwrite filters passed in SeededDiscoverableAssets
 * @export
 * @interface SeededDiscoverableAsset
 */
export interface SeededDiscoverableAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededFile}
     * @memberof SeededDiscoverableAsset
     */
    file?: SeededFile;
    /**
     * 
     * @type {SeededFragment}
     * @memberof SeededDiscoverableAsset
     */
    fragment?: SeededFragment;
    /**
     * 
     * @type {string}
     * @memberof SeededDiscoverableAsset
     */
    directory?: string;
    /**
     * 
     * @type {TLPDirectedDiscoveryFilters}
     * @memberof SeededDiscoverableAsset
     */
    filters?: TLPDirectedDiscoveryFilters;
}

export function SeededDiscoverableAssetFromJSON(json: any): SeededDiscoverableAsset {
    return SeededDiscoverableAssetFromJSONTyped(json, false);
}

export function SeededDiscoverableAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'file': !exists(json, 'file') ? undefined : SeededFileFromJSON(json['file']),
        'fragment': !exists(json, 'fragment') ? undefined : SeededFragmentFromJSON(json['fragment']),
        'directory': !exists(json, 'directory') ? undefined : json['directory'],
        'filters': !exists(json, 'filters') ? undefined : TLPDirectedDiscoveryFiltersFromJSON(json['filters']),
    };
}

export function SeededDiscoverableAssetToJSON(value?: SeededDiscoverableAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'file': SeededFileToJSON(value.file),
        'fragment': SeededFragmentToJSON(value.fragment),
        'directory': value.directory,
        'filters': TLPDirectedDiscoveryFiltersToJSON(value.filters),
    };
}


