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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { QGPTTaskPipelineForCodeCommentation } from './QGPTTaskPipelineForCodeCommentation';
import {
    QGPTTaskPipelineForCodeCommentationFromJSON,
    QGPTTaskPipelineForCodeCommentationFromJSONTyped,
    QGPTTaskPipelineForCodeCommentationToJSON,
} from './QGPTTaskPipelineForCodeCommentation';
import type { QGPTTaskPipelineForCodeCompletion } from './QGPTTaskPipelineForCodeCompletion';
import {
    QGPTTaskPipelineForCodeCompletionFromJSON,
    QGPTTaskPipelineForCodeCompletionFromJSONTyped,
    QGPTTaskPipelineForCodeCompletionToJSON,
} from './QGPTTaskPipelineForCodeCompletion';
import type { QGPTTaskPipelineForCodeExplanation } from './QGPTTaskPipelineForCodeExplanation';
import {
    QGPTTaskPipelineForCodeExplanationFromJSON,
    QGPTTaskPipelineForCodeExplanationFromJSONTyped,
    QGPTTaskPipelineForCodeExplanationToJSON,
} from './QGPTTaskPipelineForCodeExplanation';
import type { QGPTTaskPipelineForCodeFix } from './QGPTTaskPipelineForCodeFix';
import {
    QGPTTaskPipelineForCodeFixFromJSON,
    QGPTTaskPipelineForCodeFixFromJSONTyped,
    QGPTTaskPipelineForCodeFixToJSON,
} from './QGPTTaskPipelineForCodeFix';
import type { QGPTTaskPipelineForCodeModification } from './QGPTTaskPipelineForCodeModification';
import {
    QGPTTaskPipelineForCodeModificationFromJSON,
    QGPTTaskPipelineForCodeModificationFromJSONTyped,
    QGPTTaskPipelineForCodeModificationToJSON,
} from './QGPTTaskPipelineForCodeModification';

/**
 * This model is specifically for QGPT Task pipelines, the model is used to group one off tasks for instance fix/explaining/commenting
 * that dont necessarily require a conversation form factor.
 * @export
 * @interface QGPTTaskPipeline
 */
export interface QGPTTaskPipeline {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTTaskPipeline
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {QGPTTaskPipelineForCodeExplanation}
     * @memberof QGPTTaskPipeline
     */
    codeExplanation?: QGPTTaskPipelineForCodeExplanation;
    /**
     * 
     * @type {QGPTTaskPipelineForCodeCommentation}
     * @memberof QGPTTaskPipeline
     */
    codeCommentation?: QGPTTaskPipelineForCodeCommentation;
    /**
     * 
     * @type {QGPTTaskPipelineForCodeFix}
     * @memberof QGPTTaskPipeline
     */
    codeFix?: QGPTTaskPipelineForCodeFix;
    /**
     * 
     * @type {QGPTTaskPipelineForCodeModification}
     * @memberof QGPTTaskPipeline
     */
    codeModification?: QGPTTaskPipelineForCodeModification;
    /**
     * 
     * @type {QGPTTaskPipelineForCodeCompletion}
     * @memberof QGPTTaskPipeline
     */
    codeCompletion?: QGPTTaskPipelineForCodeCompletion;
}

/**
 * Check if a given object implements the QGPTTaskPipeline interface.
 */
export function instanceOfQGPTTaskPipeline(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QGPTTaskPipelineFromJSON(json: any): QGPTTaskPipeline {
    return QGPTTaskPipelineFromJSONTyped(json, false);
}

export function QGPTTaskPipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTTaskPipeline {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'codeExplanation': !exists(json, 'code_explanation') ? undefined : QGPTTaskPipelineForCodeExplanationFromJSON(json['code_explanation']),
        'codeCommentation': !exists(json, 'code_commentation') ? undefined : QGPTTaskPipelineForCodeCommentationFromJSON(json['code_commentation']),
        'codeFix': !exists(json, 'code_fix') ? undefined : QGPTTaskPipelineForCodeFixFromJSON(json['code_fix']),
        'codeModification': !exists(json, 'code_modification') ? undefined : QGPTTaskPipelineForCodeModificationFromJSON(json['code_modification']),
        'codeCompletion': !exists(json, 'code_completion') ? undefined : QGPTTaskPipelineForCodeCompletionFromJSON(json['code_completion']),
    };
}

export function QGPTTaskPipelineToJSON(value?: QGPTTaskPipeline | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'code_explanation': QGPTTaskPipelineForCodeExplanationToJSON(value.codeExplanation),
        'code_commentation': QGPTTaskPipelineForCodeCommentationToJSON(value.codeCommentation),
        'code_fix': QGPTTaskPipelineForCodeFixToJSON(value.codeFix),
        'code_modification': QGPTTaskPipelineForCodeModificationToJSON(value.codeModification),
        'code_completion': QGPTTaskPipelineForCodeCompletionToJSON(value.codeCompletion),
    };
}

