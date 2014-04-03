'use strict';

/**
 * class BigFaker.PhoneNumber
 *
 **/


var BigFaker = require('../big_faker');


/**
 * BigFaker.PhoneNumber.phoneNumber() -> String
 *
 * Generate phone number.
 **/
exports.phoneNumber = function() {
	return BigFaker.numerify(BigFaker.fetch('phone_number.formats'));
};


/**
 * BigFaker.PhoneNumber.cellPhone() -> String
 *
 * Generate cell phone number. If locale hasn't `cell_phone` section, then use `phone`.
 **/
exports.cellPhone = function() {
	try {
		BigFaker.numerify(BigFaker.fetch('phone_number.cell_phone'));
	} catch (e) {
		return exports.phoneNumber();
	}
};
