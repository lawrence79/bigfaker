'use strict';

/**
 * class BigFaker.Address
 *
 **/


var BigFaker = require('../big_faker');


/**
 * BigFaker.Address.zipCode(format = null) -> String
 * - format (string): input format for example '#####-####'
 *
 * Generate zip code by from format. Each sharp symbol will be replaced by number.
 * If format is null, then random choise "#####" or '#####-####'
 *
 **/
/** alias of: BigFaker.Address.zipCode
 * BigFaker.Address.postcode() -> String
 **/
/** alias of: BigFaker.Address.zipCode
 * BigFaker.Address.zip() -> String
 **/
exports.postcode = exports.zip = exports.zipCode = function() {
	return BigFaker.letterify(BigFaker.numerify(BigFaker.fetch('address.postcode')));
};


/**
 * BigFaker.Address.city() -> String
 *
 * Generate city name. For example 'Port Marianashire'
 **/
exports.city = function() {
	return BigFaker.parse('address.city');
};


/**
 * BigFaker.Address.streetName() -> String
 *
 * Generate street name. For example 'Schuster borough'
 **/
exports.streetName = function() {
	return BigFaker.parse('address.street_name');
};


/**
 * BigFaker.Address.secondaryAddress() -> String
 *
 * Generate secodary address part Apt/Suite.
 **/
var secondaryAddress = exports.secondaryAddress = function() {
	return BigFaker.numerify(BigFaker.fetch('address.secondary_address'));
};


/**
 * BigFaker.Address.streetAddress(include_secondary = false) -> String
 * - include_secondary (boolean) : is need add apartment/suite part
 *
 * Generate street address. For example 'Schuster borough'
 **/
exports.streetAddress = function(include_secondary) {
	return BigFaker.numerify(BigFaker.parse('address.street_address') +
		(include_secondary ? ' ' + secondaryAddress() : ''));
};



/**
 * BigFaker.Address.state(abbr = false) -> String
 * - abbr (boolean): flag abbr or full name
 *
 * Return random state(or state abbr).
 **/
var state = exports.state = function(abbr) {
	return !!abbr ? BigFaker.fetch('address.state_abbr') :
		BigFaker.fetch('address.state');
};


/**
 * BigFaker.Address.stateAbbr() -> String
 *
 * Return abbr of random state.
 **/
exports.stateAbbr = function() {
	return state(true);
};


/**
 * BigFaker.Address.county() -> String
 *
 * Return random county.
 * Note: if county dosen't set in current locale, then return empy string
 **/
exports.county = function() {
	try {
		return BigFaker.fetch('address.county');
	} catch (e) {
		return '';
	}
};


/**
 * BigFaker.Address.country() -> String
 *
 * Return random country
 **/
exports.country = function() {
	return BigFaker.fetch('address.country');
};


/**
 * BigFaker.Address.latitude() -> string
 *
 * Generate latitude
 **/
exports.latitude = function() {
	return ((Math.random() * 180) - 90).toString();
};


/**
 * BigFaker.Address.longitude() ->string
 *
 * Generate longitude
 **/
exports.longitude = function() {
	return ((Math.random() * 360) - 180).toString();
};
