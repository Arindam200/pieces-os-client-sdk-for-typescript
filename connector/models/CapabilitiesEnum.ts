/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * This lets us know what capabilites in relation to ml/ cloud infrastructure you are opting into.
 * @export
 * @enum {string}
 */
export enum CapabilitiesEnum {
    Local = 'LOCAL',
    Cloud = 'CLOUD',
    Blended = 'BLENDED'
}

export function CapabilitiesEnumFromJSON(json: any): CapabilitiesEnum {
    return CapabilitiesEnumFromJSONTyped(json, false);
}

export function CapabilitiesEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapabilitiesEnum {
    return json as CapabilitiesEnum;
}

export function CapabilitiesEnumToJSON(value?: CapabilitiesEnum | null): any {
    return value as any;
}
