'use strict';

/**
 * class BigFaker.Team
 **/


var Helpers = require('./helpers');
var BigFaker = require('../big_faker');

/**
 * BigFaker.Team.name() -> String
 *
 * Genreate team name
 *
 **/
exports.name = function() {
	return BigFaker.parse('team.name');
};


/**
 * BigFaker.Team.suffix() -> String
 *
 * Return random suffix, for example "Inc"
 *
 **/
exports.suffix = function() {
	return BigFaker.fetch('team.suffix');
};

/**
 * BigFaker.Team.catchPhrase() -> String
 *
 * Generate catch phrase
 **/
exports.catchPhrase = function() {
	return BigFaker.translate('team.buzzwords').map(function(list) {
		return Helpers.sample(list);
	}).join(' ');
};


/**
 * BigFaker.Team.bs() -> String
 *
 * Generate bullshet
 **/
exports.bs = function() {
	return BigFaker.translate('team.bs').map(function(list) {
		return Helpers.sample(list);
	}).join(' ');
};
