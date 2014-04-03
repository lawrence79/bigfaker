'use strict';

/**
 * class BigFaker.Company
 **/

var Helpers = require('./helpers');
var BigFaker = require('../big_faker');


/**
 * BigFaker.Company.name() -> String
 *
 * Genreate company name
 *
 **/
exports.name = function() {
	return BigFaker.parse('company.name');
};


/**
 * BigFaker.Company.suffix() -> String
 *
 * Return random suffix, for example "Inc"
 *
 **/
exports.suffix = function() {
	return BigFaker.fetch('company.suffix');
};

/**
 * BigFaker.Company.catchPhrase() -> String
 *
 * Generate catch phrase
 **/
exports.catchPhrase = function() {
	return BigFaker.translate('company.buzzwords').map(function(list) {
		return Helpers.sample(list);
	}).join(' ');
};


/**
 * BigFaker.Company.bs() -> String
 *
 * Generate bullshet
 **/
exports.bs = function() {
	return BigFaker.translate('company.bs').map(function(list) {
		return Helpers.sample(list);
	}).join(' ');
};
