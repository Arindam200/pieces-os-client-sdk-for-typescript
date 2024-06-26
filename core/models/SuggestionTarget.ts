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
import type { SeededConnectorCreation } from './SeededConnectorCreation';
import {
    SeededConnectorCreationFromJSON,
    SeededConnectorCreationFromJSONTyped,
    SeededConnectorCreationToJSON,
} from './SeededConnectorCreation';

/**
 * This is the target that was sent to pieces. This will return the string that represents this coppied || pasted asset. This will also send along the SeededConnectorCreation and will send along the vector that we created based on the seed.
 * @export
 * @interface SuggestionTarget
 */
export interface SuggestionTarget {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SuggestionTarget
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededConnectorCreation}
     * @memberof SuggestionTarget
     */
    seed: SeededConnectorCreation;
    /**
     * This is the vector representation of this target that we generated.
     * @type {number}
     * @memberof SuggestionTarget
     */
    vector: number;
}

/**
 * Check if a given object implements the SuggestionTarget interface.
 */
export function instanceOfSuggestionTarget(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "seed" in value;
    isInstance = isInstance && "vector" in value;

    return isInstance;
}

export function SuggestionTargetFromJSON(json: any): SuggestionTarget {
    return SuggestionTargetFromJSONTyped(json, false);
}

export function SuggestionTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestionTarget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'seed': SeededConnectorCreationFromJSON(json['seed']),
        'vector': json['vector'],
    };
}

export function SuggestionTargetToJSON(value?: SuggestionTarget | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'seed': SeededConnectorCreationToJSON(value.seed),
        'vector': value.vector,
    };
}

