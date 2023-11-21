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
import { EmbeddedModelSchema, Recipients } from './index';
/**
 * This is a specific Distribution for mailgun specific information.
 * @export
 * @interface MailgunDistribution
 */
export interface MailgunDistribution {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof MailgunDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Recipients}
     * @memberof MailgunDistribution
     */
    recipients: Recipients;
}
export declare function MailgunDistributionFromJSON(json: any): MailgunDistribution;
export declare function MailgunDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MailgunDistribution;
export declare function MailgunDistributionToJSON(value?: MailgunDistribution | null): any;