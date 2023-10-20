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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalProviderProfileDataToJSON = exports.ExternalProviderProfileDataFromJSONTyped = exports.ExternalProviderProfileDataFromJSON = void 0;
const runtime_1 = require("../runtime");
function ExternalProviderProfileDataFromJSON(json) {
    return ExternalProviderProfileDataFromJSONTyped(json, false);
}
exports.ExternalProviderProfileDataFromJSON = ExternalProviderProfileDataFromJSON;
function ExternalProviderProfileDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'picture': !(0, runtime_1.exists)(json, 'picture') ? undefined : json['picture'],
        'nickname': !(0, runtime_1.exists)(json, 'nickname') ? undefined : json['nickname'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'emailVerified': !(0, runtime_1.exists)(json, 'email_verified') ? undefined : json['email_verified'],
        'nodeId': !(0, runtime_1.exists)(json, 'node_id') ? undefined : json['node_id'],
        'gravatarId': !(0, runtime_1.exists)(json, 'gravatar_id') ? undefined : json['gravatar_id'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
        'htmlUrl': !(0, runtime_1.exists)(json, 'html_url') ? undefined : json['html_url'],
        'followersUrl': !(0, runtime_1.exists)(json, 'followers_url') ? undefined : json['followers_url'],
        'followingUrl': !(0, runtime_1.exists)(json, 'following_url') ? undefined : json['following_url'],
        'gistsUrl': !(0, runtime_1.exists)(json, 'gists_url') ? undefined : json['gists_url'],
        'starredUrl': !(0, runtime_1.exists)(json, 'starred_url') ? undefined : json['starred_url'],
        'subscriptionsUrl': !(0, runtime_1.exists)(json, 'subscriptions_url') ? undefined : json['subscriptions_url'],
        'organizationsUrl': !(0, runtime_1.exists)(json, 'organizations_url') ? undefined : json['organizations_url'],
        'reposUrl': !(0, runtime_1.exists)(json, 'repos_url') ? undefined : json['repos_url'],
        'eventsUrl': !(0, runtime_1.exists)(json, 'events_url') ? undefined : json['events_url'],
        'receivedEventsUrl': !(0, runtime_1.exists)(json, 'received_events_url') ? undefined : json['received_events_url'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'siteAdmin': !(0, runtime_1.exists)(json, 'site_admin') ? undefined : json['site_admin'],
        'company': !(0, runtime_1.exists)(json, 'company') ? undefined : json['company'],
        'blog': !(0, runtime_1.exists)(json, 'blog') ? undefined : json['blog'],
        'anchor': !(0, runtime_1.exists)(json, 'anchor') ? undefined : json['anchor'],
        'hireable': !(0, runtime_1.exists)(json, 'hireable') ? undefined : json['hireable'],
        'bio': !(0, runtime_1.exists)(json, 'bio') ? undefined : json['bio'],
        'twitterUsername': !(0, runtime_1.exists)(json, 'twitter_username') ? undefined : json['twitter_username'],
        'publicRepos': !(0, runtime_1.exists)(json, 'public_repos') ? undefined : json['public_repos'],
        'publicGists': !(0, runtime_1.exists)(json, 'public_gists') ? undefined : json['public_gists'],
        'followers': !(0, runtime_1.exists)(json, 'followers') ? undefined : json['followers'],
        'following': !(0, runtime_1.exists)(json, 'following') ? undefined : json['following'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : json['updated_at'],
        'privateGists': !(0, runtime_1.exists)(json, 'private_gists') ? undefined : json['private_gists'],
        'totalPrivateRepos': !(0, runtime_1.exists)(json, 'total_private_repos') ? undefined : json['total_private_repos'],
        'ownedPrivateRepos': !(0, runtime_1.exists)(json, 'owned_private_repos') ? undefined : json['owned_private_repos'],
        'diskUsage': !(0, runtime_1.exists)(json, 'disk_usage') ? undefined : json['disk_usage'],
        'collaborators': !(0, runtime_1.exists)(json, 'collaborators') ? undefined : json['collaborators'],
        'twoFactorAuthentication': !(0, runtime_1.exists)(json, 'two_factor_authentication') ? undefined : json['two_factor_authentication'],
    };
}
exports.ExternalProviderProfileDataFromJSONTyped = ExternalProviderProfileDataFromJSONTyped;
function ExternalProviderProfileDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'picture': value.picture,
        'nickname': value.nickname,
        'email': value.email,
        'email_verified': value.emailVerified,
        'node_id': value.nodeId,
        'gravatar_id': value.gravatarId,
        'url': value.url,
        'html_url': value.htmlUrl,
        'followers_url': value.followersUrl,
        'following_url': value.followingUrl,
        'gists_url': value.gistsUrl,
        'starred_url': value.starredUrl,
        'subscriptions_url': value.subscriptionsUrl,
        'organizations_url': value.organizationsUrl,
        'repos_url': value.reposUrl,
        'events_url': value.eventsUrl,
        'received_events_url': value.receivedEventsUrl,
        'type': value.type,
        'site_admin': value.siteAdmin,
        'company': value.company,
        'blog': value.blog,
        'anchor': value.anchor,
        'hireable': value.hireable,
        'bio': value.bio,
        'twitter_username': value.twitterUsername,
        'public_repos': value.publicRepos,
        'public_gists': value.publicGists,
        'followers': value.followers,
        'following': value.following,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'private_gists': value.privateGists,
        'total_private_repos': value.totalPrivateRepos,
        'owned_private_repos': value.ownedPrivateRepos,
        'disk_usage': value.diskUsage,
        'collaborators': value.collaborators,
        'two_factor_authentication': value.twoFactorAuthentication,
    };
}
exports.ExternalProviderProfileDataToJSON = ExternalProviderProfileDataToJSON;