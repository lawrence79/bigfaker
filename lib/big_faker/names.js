'use strict';

/**

Big Faker::Names

**/

var BigFaker = require('../big_faker');

/**
  Names::Fullname
**/

exports.fullname = function() {
	return BigFaker.parse('name.name');
}
