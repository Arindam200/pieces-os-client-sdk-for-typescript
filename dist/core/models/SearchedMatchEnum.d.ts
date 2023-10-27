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
/**
 *
 * @export
 * @enum {string}
 */
export declare enum SearchedMatchEnum {
    Title = "TITLE",
    Annotation = "ANNOTATION",
    Hint = "HINT",
    Content = "CONTENT",
    Fuzzy = "FUZZY",
    Multiple = "MULTIPLE",
    Tags = "TAGS",
    Websites = "WEBSITES",
    Persons = "PERSONS"
}
export declare function SearchedMatchEnumFromJSON(json: any): SearchedMatchEnum;
export declare function SearchedMatchEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedMatchEnum;
export declare function SearchedMatchEnumToJSON(value?: SearchedMatchEnum | null): any;