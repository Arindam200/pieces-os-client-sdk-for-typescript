/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Distribution, EmbeddedModelSchema } from './';
/**
 * This is the plural Model of a Distribution.
 * @export
 * @interface Distributions
 */
export interface Distributions {
    /**
     *
     * @type {Array<Distribution>}
     * @memberof Distributions
     */
    iterable: Array<Distribution>;
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Distributions
     */
    schema?: EmbeddedModelSchema;
}
export declare function DistributionsFromJSON(json: any): Distributions;
export declare function DistributionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Distributions;
export declare function DistributionsToJSON(value?: Distributions | null): any;