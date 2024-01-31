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
import { EmbeddedModelSchema } from './index';
/**
 * This will describe the MaxTokens for an MLModel
 *
 * total is required.
 *
 * iff there is a differentiator with inputs/outputs, then we can also provide those as well.
 * @export
 * @interface ModelMaxTokens
 */
export interface ModelMaxTokens {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ModelMaxTokens
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {number}
     * @memberof ModelMaxTokens
     */
    total: number | null;
    /**
     *
     * @type {number}
     * @memberof ModelMaxTokens
     */
    input?: number | null;
    /**
     *
     * @type {number}
     * @memberof ModelMaxTokens
     */
    output?: number | null;
}
export declare function ModelMaxTokensFromJSON(json: any): ModelMaxTokens;
export declare function ModelMaxTokensFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelMaxTokens;
export declare function ModelMaxTokensToJSON(value?: ModelMaxTokens | null): any;
