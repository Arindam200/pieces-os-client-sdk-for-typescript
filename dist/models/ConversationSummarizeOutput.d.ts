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
import { EmbeddedModelSchema, ReferencedAnnotation, ReferencedConversation } from './index';
/**
 * This is the output model for "/conversation/{conversation}/summarize
 * @export
 * @interface ConversationSummarizeOutput
 */
export interface ConversationSummarizeOutput {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ConversationSummarizeOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {ReferencedConversation}
     * @memberof ConversationSummarizeOutput
     */
    conversation: ReferencedConversation;
    /**
     *
     * @type {ReferencedAnnotation}
     * @memberof ConversationSummarizeOutput
     */
    annotation: ReferencedAnnotation;
}
export declare function ConversationSummarizeOutputFromJSON(json: any): ConversationSummarizeOutput;
export declare function ConversationSummarizeOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationSummarizeOutput;
export declare function ConversationSummarizeOutputToJSON(value?: ConversationSummarizeOutput | null): any;