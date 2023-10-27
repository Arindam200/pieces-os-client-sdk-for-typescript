"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieceApi = void 0;
const runtime = __importStar(require("../runtime"));
/**
 *
 */
class PieceApi extends runtime.BaseAPI {
    /**
     * This is a cloud only Api. This will get a preview of your publically accessble Piece.
     * / [GET]
     */
    async htmlShareRaw(requestParameters) {
        if (requestParameters.p === null || requestParameters.p === undefined) {
            throw new runtime.RequiredError('p', 'Required parameter requestParameters.p was null or undefined when calling htmlShare.');
        }
        const queryParameters = {};
        if (requestParameters.p !== undefined) {
            queryParameters['p'] = requestParameters.p;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * This is a cloud only Api. This will get a preview of your publically accessble Piece.
     * / [GET]
     */
    async htmlShare(requestParameters) {
        const response = await this.htmlShareRaw(requestParameters);
        return await response.value();
    }
}
exports.PieceApi = PieceApi;