'use strict';

/**
 * class BigFaker.Department
 **/


var Helpers = require('./helpers');
var BigFaker = require('../big_faker');

/**
 * BigFaker.Department.name() -> String
 *
 * Genreate department name
 *
 **/
exports.name = function() {
	return BigFaker.parse('department.name');
};


/**
 * BigFaker.Department.suffix() -> String
 *
 * Return random suffix, for example "Inc"
 *
 **/
exports.suffix = function() {
	return BigFaker.fetch('department.suffix');
};

/**
 * BigFaker.Department.catchPhrase() -> String
 *
 * Generate catch phrase
 **/
exports.catchPhrase = function() {
	return BigFaker.translate('department.buzzwords').map(function(list) {
		return Helpers.sample(list);
	}).join(' ');
};


/**
 * BigFaker.Department.bs() -> String
 *
 * Generate bullshet
 **/
exports.bs = function() {
	return BigFaker.translate('department.bs').map(function(list) {
		return Helpers.sample(list);
	}).join(' ');
};
