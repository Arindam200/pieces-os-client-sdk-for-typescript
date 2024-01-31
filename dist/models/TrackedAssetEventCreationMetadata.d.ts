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
import { EmbeddedModelSchema, TrackedAssetEventCreationMetadataClipboard, TrackedAssetEventCreationMetadataFile } from './index';
/**
 * Metadata attached to a creation event on an Asset
 * @export
 * @interface TrackedAssetEventCreationMetadata
 */
export interface TrackedAssetEventCreationMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetEventCreationMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TrackedAssetEventCreationMetadataClipboard}
     * @memberof TrackedAssetEventCreationMetadata
     */
    clipboard?: TrackedAssetEventCreationMetadataClipboard;
    /**
     *
     * @type {TrackedAssetEventCreationMetadataFile}
     * @memberof TrackedAssetEventCreationMetadata
     */
    file?: TrackedAssetEventCreationMetadataFile;
}
export declare function TrackedAssetEventCreationMetadataFromJSON(json: any): TrackedAssetEventCreationMetadata;
export declare function TrackedAssetEventCreationMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventCreationMetadata;
export declare function TrackedAssetEventCreationMetadataToJSON(value?: TrackedAssetEventCreationMetadata | null): any;
