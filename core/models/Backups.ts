/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    Backup,
    BackupFromJSON,
    BackupFromJSONTyped,
    BackupToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './';

/**
 * This is a plural model of many Cloud Backups.
 * @export
 * @interface Backups
 */
export interface Backups {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Backups
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Backup>}
     * @memberof Backups
     */
    iterable: Array<Backup>;
    /**
     * This is a Map<String, int> where the the key is an website id.
     * @type {{ [key: string]: number; }}
     * @memberof Backups
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof Backups
     */
    score?: Score;
}

export function BackupsFromJSON(json: any): Backups {
    return BackupsFromJSONTyped(json, false);
}

export function BackupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Backups {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(BackupFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function BackupsToJSON(value?: Backups | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(BackupToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}

