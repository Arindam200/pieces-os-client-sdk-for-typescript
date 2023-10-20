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
import { EmbeddedModelSchema, ReferencedAsset, TrackedAssetEventIdentifierDescriptionPairs, TrackedAssetEventMetadata } from './';
/**
 * This seeded tracked asset event will be recieved by a context on the OS Server side, which will then be able to look up the asset id and structure the asset for shipment to Segment aka a fully built TrackedAssetEvent
 * @export
 * @interface SeededTrackedAssetEvent
 */
export interface SeededTrackedAssetEvent {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedAssetEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {ReferencedAsset}
     * @memberof SeededTrackedAssetEvent
     */
    asset: ReferencedAsset;
    /**
     *
     * @type {TrackedAssetEventIdentifierDescriptionPairs}
     * @memberof SeededTrackedAssetEvent
     */
    identifierDescriptionPair: TrackedAssetEventIdentifierDescriptionPairs;
    /**
     *
     * @type {TrackedAssetEventMetadata}
     * @memberof SeededTrackedAssetEvent
     */
    metadata?: TrackedAssetEventMetadata;
}
export declare function SeededTrackedAssetEventFromJSON(json: any): SeededTrackedAssetEvent;
export declare function SeededTrackedAssetEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedAssetEvent;
export declare function SeededTrackedAssetEventToJSON(value?: SeededTrackedAssetEvent | null): any;