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
import type { TextMatch } from './TextMatch';
import {
    TextMatchFromJSON,
    TextMatchFromJSONTyped,
    TextMatchToJSON,
} from './TextMatch';

/**
 * This is optional metatdata attached to a sensitive piece of data.
 * @export
 * @interface SensitiveMetadata
 */
export interface SensitiveMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SensitiveMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TextMatch}
     * @memberof SensitiveMetadata
     */
    match?: TextMatch;
    /**
     * entropy of the sensitive
     * @type {number}
     * @memberof SensitiveMetadata
     */
    entropy?: number;
}

/**
 * Check if a given object implements the SensitiveMetadata interface.
 */
export function instanceOfSensitiveMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SensitiveMetadataFromJSON(json: any): SensitiveMetadata {
    return SensitiveMetadataFromJSONTyped(json, false);
}

export function SensitiveMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensitiveMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'match': !exists(json, 'match') ? undefined : TextMatchFromJSON(json['match']),
        'entropy': !exists(json, 'entropy') ? undefined : json['entropy'],
    };
}

export function SensitiveMetadataToJSON(value?: SensitiveMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'match': TextMatchToJSON(value.match),
        'entropy': value.entropy,
    };
}

