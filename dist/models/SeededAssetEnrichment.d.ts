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
 * This is a specific Model for the SeededAsset that will enable the developer to modify the enrichment levels of persons, tags, websites.
 *
 * These enrichment levels will guarentee that the # of people/tags/websites do not eceeed the provided value, but will not guarentee a minimum.
 * @export
 * @interface SeededAssetEnrichment
 */
export interface SeededAssetEnrichment {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAssetEnrichment
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {number}
     * @memberof SeededAssetEnrichment
     */
    tags?: number;
    /**
     *
     * @type {number}
     * @memberof SeededAssetEnrichment
     */
    websites?: number;
    /**
     *
     * @type {number}
     * @memberof SeededAssetEnrichment
     */
    persons?: number;
    /**
     *
     * @type {number}
     * @memberof SeededAssetEnrichment
     */
    hints?: number;
}
export declare function SeededAssetEnrichmentFromJSON(json: any): SeededAssetEnrichment;
export declare function SeededAssetEnrichmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetEnrichment;
export declare function SeededAssetEnrichmentToJSON(value?: SeededAssetEnrichment | null): any;
