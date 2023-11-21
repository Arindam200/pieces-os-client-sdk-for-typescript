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
 * This is a String representaion of any of these changes.
 *
 * [NOT IMPLEMENTED] base64, base64_url, data_url
 * [IMPLEMENTED] raw
 * @export
 * @interface TransferableString
 */
export interface TransferableString {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TransferableString
     */
    schema?: EmbeddedModelSchema;
    /**
     * IMPLEMENTED
     * @type {string}
     * @memberof TransferableString
     */
    raw?: string;
    /**
     * NOT IMPLEMENTED
     * @type {string}
     * @memberof TransferableString
     */
    base64?: string;
    /**
     * NOT IMPLEMENTED
     * @type {string}
     * @memberof TransferableString
     */
    base64Url?: string;
    /**
     * NOT IMPLEMENTED
     * @type {string}
     * @memberof TransferableString
     */
    dataUrl?: string;
}
export declare function TransferableStringFromJSON(json: any): TransferableString;
export declare function TransferableStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferableString;
export declare function TransferableStringToJSON(value?: TransferableString | null): any;