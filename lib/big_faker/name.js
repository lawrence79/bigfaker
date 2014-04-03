'use strict';

/**
 * class BigFaker.Name
 *
 **/


var BigFaker = require('../big_faker');

/**
 * BigFaker.Name.name() -> String
 *
 * Generate full name.
 **/
exports.name = function() {
	return BigFaker.parse('name.name');
};


/**
 * BigFaker.Name.firstName() -> String
 *
 * Generate first name. Example: 'Marjorie'
 **/
exports.firstName = function() {
	return BigFaker.fetch('name.first_name');
};


/**
 * BigFaker.Name.lastName() -> String
 *
 * Generate last name. Example: 'Lemke'
 **/
exports.lastName = function() {
	return BigFaker.fetch('name.last_name');
};


/**
 * BigFaker.Name.prefix() -> String
 *
 * Generate name prefix. Example: 'Dr.'
 **/
exports.prefix = function() {
	return BigFaker.fetch('name.prefix');
};


/**
 * BigFaker.Name.suffix() -> String
 *
 * Generate name suffix. Example: 'PhD'
 **/
exports.suffix = function() {
	return BigFaker.fetch('name.suffix');
};


/**
 * BigFaker.Name.title() -> String
 *
 * Generate a buzzword-laden job title
 * Wordlist from http://www.bullshitjob.com/title/
 **/
exports.title = function() {
	return BigFaker.fetch('name.title.descriptor') + ' ' +
		BigFaker.fetch('name.title.level') + ' ' +
		BigFaker.fetch('name.title.job');
};
