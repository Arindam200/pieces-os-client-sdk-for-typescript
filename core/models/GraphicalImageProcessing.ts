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
    GraphicalImageStatistics,
    GraphicalImageStatisticsFromJSON,
    GraphicalImageStatisticsFromJSONTyped,
    GraphicalImageStatisticsToJSON,
} from './index';

/**
 * 
 * @export
 * @interface GraphicalImageProcessing
 */
export interface GraphicalImageProcessing {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalImageProcessing
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {GraphicalImageStatistics}
     * @memberof GraphicalImageProcessing
     */
    statistics?: GraphicalImageStatistics;
}

export function GraphicalImageProcessingFromJSON(json: any): GraphicalImageProcessing {
    return GraphicalImageProcessingFromJSONTyped(json, false);
}

export function GraphicalImageProcessingFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalImageProcessing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'statistics': !exists(json, 'statistics') ? undefined : GraphicalImageStatisticsFromJSON(json['statistics']),
    };
}

export function GraphicalImageProcessingToJSON(value?: GraphicalImageProcessing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'statistics': GraphicalImageStatisticsToJSON(value.statistics),
    };
}


