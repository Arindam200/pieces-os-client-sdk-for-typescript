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
    AssetFilterPhrase,
    AssetFilterPhraseFromJSON,
    AssetFilterPhraseFromJSONTyped,
    AssetFilterPhraseToJSON,
    AssetFilterTimestamp,
    AssetFilterTimestampFromJSON,
    AssetFilterTimestampFromJSONTyped,
    AssetFilterTimestampToJSON,
    AssetFilters,
    AssetFiltersFromJSON,
    AssetFiltersFromJSONTyped,
    AssetFiltersToJSON,
    ClassificationSpecificEnum,
    ClassificationSpecificEnumFromJSON,
    ClassificationSpecificEnumFromJSONTyped,
    ClassificationSpecificEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './index';

/**
 * ** in the future, consider adding an optional bool's called nextAnd, nextOr which will say that the next filter will be  AND behavor or OR behavior.
 * 
 * "operations": here is is an optional property to allow or behavior,(we will only allow 1 level deep of or's), if or is not passed in then it is just simply ignored. If or is passed in then we will be or'd together with the top level filter and considered extras. default behavior for operations is and, however yoour can specifiy OR operations as well.
 * @export
 * @interface AssetFilter
 */
export interface AssetFilter {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetFilter
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ClassificationSpecificEnum}
     * @memberof AssetFilter
     */
    classification?: ClassificationSpecificEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof AssetFilter
     */
    tags?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AssetFilter
     */
    websites?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AssetFilter
     */
    persons?: Array<string>;
    /**
     * 
     * @type {AssetFilterPhrase}
     * @memberof AssetFilter
     */
    phrase?: AssetFilterPhrase;
    /**
     * 
     * @type {AssetFilterTimestamp}
     * @memberof AssetFilter
     */
    created?: AssetFilterTimestamp;
    /**
     * 
     * @type {AssetFilterTimestamp}
     * @memberof AssetFilter
     */
    updated?: AssetFilterTimestamp;
    /**
     * 
     * @type {AssetFilters}
     * @memberof AssetFilter
     */
    operations?: AssetFilters;
}

export function AssetFilterFromJSON(json: any): AssetFilter {
    return AssetFilterFromJSONTyped(json, false);
}

export function AssetFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'classification': !exists(json, 'classification') ? undefined : ClassificationSpecificEnumFromJSON(json['classification']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'websites': !exists(json, 'websites') ? undefined : json['websites'],
        'persons': !exists(json, 'persons') ? undefined : json['persons'],
        'phrase': !exists(json, 'phrase') ? undefined : AssetFilterPhraseFromJSON(json['phrase']),
        'created': !exists(json, 'created') ? undefined : AssetFilterTimestampFromJSON(json['created']),
        'updated': !exists(json, 'updated') ? undefined : AssetFilterTimestampFromJSON(json['updated']),
        'operations': !exists(json, 'operations') ? undefined : AssetFiltersFromJSON(json['operations']),
    };
}

export function AssetFilterToJSON(value?: AssetFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'classification': ClassificationSpecificEnumToJSON(value.classification),
        'tags': value.tags,
        'websites': value.websites,
        'persons': value.persons,
        'phrase': AssetFilterPhraseToJSON(value.phrase),
        'created': AssetFilterTimestampToJSON(value.created),
        'updated': AssetFilterTimestampToJSON(value.updated),
        'operations': AssetFiltersToJSON(value.operations),
    };
}


