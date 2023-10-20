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
import { EmbeddedModelSchema, QGPTConversation, Seed } from './';
/**
 * This is used for /qgpt/persons/related.
 *
 * will accept a seed, or conversation all optionally.
 * @export
 * @interface QGPTPersonsRelatedInput
 */
export interface QGPTPersonsRelatedInput {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof QGPTPersonsRelatedInput
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Seed}
     * @memberof QGPTPersonsRelatedInput
     */
    seed?: Seed;
    /**
     *
     * @type {QGPTConversation}
     * @memberof QGPTPersonsRelatedInput
     */
    conversation?: QGPTConversation;
    /**
     * optional application id
     * @type {string}
     * @memberof QGPTPersonsRelatedInput
     */
    application?: string;
    /**
     * optional model id
     * @type {string}
     * @memberof QGPTPersonsRelatedInput
     */
    model?: string;
}
export declare function QGPTPersonsRelatedInputFromJSON(json: any): QGPTPersonsRelatedInput;
export declare function QGPTPersonsRelatedInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTPersonsRelatedInput;
export declare function QGPTPersonsRelatedInputToJSON(value?: QGPTPersonsRelatedInput | null): any;