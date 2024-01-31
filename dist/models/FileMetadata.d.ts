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
import { ClassificationSpecificEnum, EmbeddedModelSchema } from './index';
/**
 * This is a model for metadata of a file!
 * @export
 * @interface FileMetadata
 */
export interface FileMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FileMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the name of your file.
     * @type {string}
     * @memberof FileMetadata
     */
    name?: string;
    /**
     *
     * @type {ClassificationSpecificEnum}
     * @memberof FileMetadata
     */
    ext?: ClassificationSpecificEnum;
    /**
     * This is the size(in bytes)
     * @type {number}
     * @memberof FileMetadata
     */
    size?: number;
}
export declare function FileMetadataFromJSON(json: any): FileMetadata;
export declare function FileMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileMetadata;
export declare function FileMetadataToJSON(value?: FileMetadata | null): any;
