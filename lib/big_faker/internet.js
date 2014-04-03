'use strict';

/**
 * class BigFaker.Internet
 *
 **/


var Helpers = require('./helpers');
var BigFaker = require('../big_faker');


function fix_umlauts(string) {
	return string.replace(/[äöüß]/ig, function(str) {
		switch (str) {
			case 'ä':
				return 'ae';
			case 'ö':
				return 'oe';
			case 'ü':
				return 'ue';
			case 'ß':
				return 'ss';
		}
	});
}


/**
 * BigFaker.Internet.email([name]) -> String
 * - name (string) : user name, optional
 *
 * Generate email :-)
 *
 **/
exports.email = function(name) {
	return this.userName(name).toLowerCase() + '@' + this.domainName();
};


/**
 * BigFaker.Internet.freeEmail([name]) -> String
 * - name (string) : user name, optional
 *
 * Generate email in public domain souch as gmail and hotmail
 *
 **/
exports.freeEmail = function(name) {
	return this.userName(name).toLowerCase() + '@' + BigFaker.fetch(
		'internet.free_email');
};


/**
 * BigFaker.Internet.safeEmail([name]) -> String
 * - name (string) : user name, optional
 *
 * Generate email in example.[org|com|net]
 *
 **/
exports.safeEmail = function(name) {
	var domain = 'example.' + Helpers.sample(['org', 'com', 'net']);

	return this.userName(name).toLowerCase() + '@' + domain;
};


/**
 * BigFaker.Internet.userName([name]) -> String
 * - name (string) : user name, optional
 *
 * Generate nickname.
 *
 **/
exports.userName = function(name) {
	var glue = Helpers.sample(['.', '_']);

	if (!name) {
		name = Helpers.sample([
			BigFaker.Name.firstName(), [BigFaker.Name.firstName(), BigFaker.Name.lastName()]
			.join(' ')
		]);
	}
	name = name.split(' ').join(glue).toLowerCase().replace('\'', '');

	return fix_umlauts(name);
};



/**
 * BigFaker.Internet.domainName() -> String
 *
 * Generate domain.
 *
 **/
exports.domainName = function() {
	return this.domainWord() + '.' + this.domainSuffix();
};


/**
 * BigFaker.Internet.domainWord() -> String
 *
 * Generate domain without dot suffix
 *
 **/
exports.domainWord = function() {
	// lorem can return word with apostrophe
	return BigFaker.fetch('lorem.words')
		.replace(/[^a-z]/gi, '')
		.toLowerCase();
};


/**
 * BigFaker.Internet.domainSuffix() -> String
 *
 * Fetch first level domain souch as `com`
 *
 **/
exports.domainSuffix = function() {
	// lorem can return word with apostrophe
	return BigFaker.fetch('internet.domain_suffix');
};


/**
 * BigFaker.Internet.IPv4() -> String
 *
 * Generate IP address
 *
 **/
exports.IPv4 = function() {
	var i, result = [];

	for (i = 0; i < 4; i++) {
		result[i] = (Math.random() * 254 + 1).toFixed(0);
	}

	return result.join('.');
};


/**
 * BigFaker.Internet.IPv6() -> String
 *
 * Generate IPv6 address
 *
 **/
exports.IPv6 = function() {
	var group, result = [],
		i, j;

	for (i = 0; i < 8; i++) {
		group = '';
		for (j = 0; j < 4; j++) {
			group += Helpers.rand(15).toString(16);
		}
		result.push(group);
	}

	return result.join(':');
};
