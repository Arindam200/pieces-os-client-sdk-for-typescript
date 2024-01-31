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
import { Asset, EmbeddedModelSchema, Score } from './index';
/**
 * A base class for a collection of assets and some additional meta properties. Fully Populated with Formats internally (not just uuid's).
 * @export
 * @interface Assets
 */
export interface Assets {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Assets
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Asset>}
     * @memberof Assets
     */
    iterable: Array<Asset>;
    /**
     * This is a Map<String, int> where the the key is an asset id.
     * @type {{ [key: string]: number; }}
     * @memberof Assets
     */
    indices?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Score}
     * @memberof Assets
     */
    score?: Score;
}
export declare function AssetsFromJSON(json: any): Assets;
export declare function AssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Assets;
export declare function AssetsToJSON(value?: Assets | null): any;
