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
    ClassificationGenericEnum,
    ClassificationGenericEnumFromJSON,
    ClassificationGenericEnumFromJSONTyped,
    ClassificationGenericEnumToJSON,
    ClassificationSpecificEnum,
    ClassificationSpecificEnumFromJSON,
    ClassificationSpecificEnumFromJSONTyped,
    ClassificationSpecificEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FragmentFormat,
    FragmentFormatFromJSON,
    FragmentFormatFromJSONTyped,
    FragmentFormatToJSON,
} from './index';

/**
 * This is the output iterable model for '/machine_learning/text/technical_language/parsers/segmentation'
 * 
 * specific is optional here, however you can pass in classify: true to get the specific classificaiton in the case the generic is code.
 * @export
 * @interface SegmentedTechnicalLanguageFragment
 */
export interface SegmentedTechnicalLanguageFragment {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SegmentedTechnicalLanguageFragment
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ClassificationGenericEnum}
     * @memberof SegmentedTechnicalLanguageFragment
     */
    generic: ClassificationGenericEnum;
    /**
     * 
     * @type {ClassificationSpecificEnum}
     * @memberof SegmentedTechnicalLanguageFragment
     */
    specific?: ClassificationSpecificEnum;
    /**
     * 
     * @type {FragmentFormat}
     * @memberof SegmentedTechnicalLanguageFragment
     */
    fragment: FragmentFormat;
}

export function SegmentedTechnicalLanguageFragmentFromJSON(json: any): SegmentedTechnicalLanguageFragment {
    return SegmentedTechnicalLanguageFragmentFromJSONTyped(json, false);
}

export function SegmentedTechnicalLanguageFragmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SegmentedTechnicalLanguageFragment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'generic': ClassificationGenericEnumFromJSON(json['generic']),
        'specific': !exists(json, 'specific') ? undefined : ClassificationSpecificEnumFromJSON(json['specific']),
        'fragment': FragmentFormatFromJSON(json['fragment']),
    };
}

export function SegmentedTechnicalLanguageFragmentToJSON(value?: SegmentedTechnicalLanguageFragment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'generic': ClassificationGenericEnumToJSON(value.generic),
        'specific': ClassificationSpecificEnumToJSON(value.specific),
        'fragment': FragmentFormatToJSON(value.fragment),
    };
}


