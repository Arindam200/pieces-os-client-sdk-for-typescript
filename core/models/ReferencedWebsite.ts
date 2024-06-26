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
import type { FlattenedWebsite } from './FlattenedWebsite';
import {
    FlattenedWebsiteFromJSON,
    FlattenedWebsiteFromJSONTyped,
    FlattenedWebsiteToJSON,
} from './FlattenedWebsite';

/**
 * 
 * @export
 * @interface ReferencedWebsite
 */
export interface ReferencedWebsite {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedWebsite
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedWebsite
     */
    id: string;
    /**
     * 
     * @type {FlattenedWebsite}
     * @memberof ReferencedWebsite
     */
    reference?: FlattenedWebsite;
}

/**
 * Check if a given object implements the ReferencedWebsite interface.
 */
export function instanceOfReferencedWebsite(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ReferencedWebsiteFromJSON(json: any): ReferencedWebsite {
    return ReferencedWebsiteFromJSONTyped(json, false);
}

export function ReferencedWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedWebsite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedWebsiteFromJSON(json['reference']),
    };
}

export function ReferencedWebsiteToJSON(value?: ReferencedWebsite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedWebsiteToJSON(value.reference),
    };
}

