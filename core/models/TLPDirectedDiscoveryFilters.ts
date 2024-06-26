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
import type { TLPDirectedDiscoveryFilter } from './TLPDirectedDiscoveryFilter';
import {
    TLPDirectedDiscoveryFilterFromJSON,
    TLPDirectedDiscoveryFilterFromJSONTyped,
    TLPDirectedDiscoveryFilterToJSON,
} from './TLPDirectedDiscoveryFilter';

/**
 * Contains array of TLPDirectedDiscoveryFilter
 * @export
 * @interface TLPDirectedDiscoveryFilters
 */
export interface TLPDirectedDiscoveryFilters {
    /**
     * Array that contains filters like class/function/loop
     * @type {Array<TLPDirectedDiscoveryFilter>}
     * @memberof TLPDirectedDiscoveryFilters
     */
    iterable: Array<TLPDirectedDiscoveryFilter>;
}

/**
 * Check if a given object implements the TLPDirectedDiscoveryFilters interface.
 */
export function instanceOfTLPDirectedDiscoveryFilters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function TLPDirectedDiscoveryFiltersFromJSON(json: any): TLPDirectedDiscoveryFilters {
    return TLPDirectedDiscoveryFiltersFromJSONTyped(json, false);
}

export function TLPDirectedDiscoveryFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPDirectedDiscoveryFilters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iterable': ((json['iterable'] as Array<any>).map(TLPDirectedDiscoveryFilterFromJSON)),
    };
}

export function TLPDirectedDiscoveryFiltersToJSON(value?: TLPDirectedDiscoveryFilters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iterable': ((value.iterable as Array<any>).map(TLPDirectedDiscoveryFilterToJSON)),
    };
}

