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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { Model } from './Model';
import {
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
} from './Model';
import type { ReferencedFormat } from './ReferencedFormat';
import {
    ReferencedFormatFromJSON,
    ReferencedFormatFromJSONTyped,
    ReferencedFormatToJSON,
} from './ReferencedFormat';

/**
 * [DAG Safe] Ocr Analysis that will reference FlattenedFormats.
 * @export
 * @interface FlattenedOCRAnalysis
 */
export interface FlattenedOCRAnalysis {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedOCRAnalysis
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedOCRAnalysis
     */
    id: string;
    /**
     * 
     * @type {ReferencedFormat}
     * @memberof FlattenedOCRAnalysis
     */
    raw: ReferencedFormat;
    /**
     * 
     * @type {ReferencedFormat}
     * @memberof FlattenedOCRAnalysis
     */
    hocr: ReferencedFormat;
    /**
     * 
     * @type {Model}
     * @memberof FlattenedOCRAnalysis
     */
    model: Model;
    /**
     * this is a refernece to the image analysis.
     * @type {string}
     * @memberof FlattenedOCRAnalysis
     */
    image: string;
}

/**
 * Check if a given object implements the FlattenedOCRAnalysis interface.
 */
export function instanceOfFlattenedOCRAnalysis(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "raw" in value;
    isInstance = isInstance && "hocr" in value;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "image" in value;

    return isInstance;
}

export function FlattenedOCRAnalysisFromJSON(json: any): FlattenedOCRAnalysis {
    return FlattenedOCRAnalysisFromJSONTyped(json, false);
}

export function FlattenedOCRAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedOCRAnalysis {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'raw': ReferencedFormatFromJSON(json['raw']),
        'hocr': ReferencedFormatFromJSON(json['hocr']),
        'model': ModelFromJSON(json['model']),
        'image': json['image'],
    };
}

export function FlattenedOCRAnalysisToJSON(value?: FlattenedOCRAnalysis | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'raw': ReferencedFormatToJSON(value.raw),
        'hocr': ReferencedFormatToJSON(value.hocr),
        'model': ModelToJSON(value.model),
        'image': value.image,
    };
}

