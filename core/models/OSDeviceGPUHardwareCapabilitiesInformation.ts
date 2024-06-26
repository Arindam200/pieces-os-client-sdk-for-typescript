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

/**
 * This will give specific information on task specific capibilites for GPU.
 * @export
 * @interface OSDeviceGPUHardwareCapabilitiesInformation
 */
export interface OSDeviceGPUHardwareCapabilitiesInformation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSDeviceGPUHardwareCapabilitiesInformation
     */
    schema?: EmbeddedModelSchema;
    /**
     * This will let us know if in the case we have a gpu and our gpu has the capabilities to use llms
     * @type {boolean}
     * @memberof OSDeviceGPUHardwareCapabilitiesInformation
     */
    llm?: boolean;
}

/**
 * Check if a given object implements the OSDeviceGPUHardwareCapabilitiesInformation interface.
 */
export function instanceOfOSDeviceGPUHardwareCapabilitiesInformation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OSDeviceGPUHardwareCapabilitiesInformationFromJSON(json: any): OSDeviceGPUHardwareCapabilitiesInformation {
    return OSDeviceGPUHardwareCapabilitiesInformationFromJSONTyped(json, false);
}

export function OSDeviceGPUHardwareCapabilitiesInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSDeviceGPUHardwareCapabilitiesInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'llm': !exists(json, 'llm') ? undefined : json['llm'],
    };
}

export function OSDeviceGPUHardwareCapabilitiesInformationToJSON(value?: OSDeviceGPUHardwareCapabilitiesInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'llm': value.llm,
    };
}

