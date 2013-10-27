"use strict";

// This file tests hms parsing.

var si = require('../');

if (process.argv.length > 2) {
	if (process.argv[2].toLowerCase() != '-r') 
		console.log(si.hms.parse(process.argv.slice(2).join(' ')));
	else
		console.log(si.hms.format(+process.argv[3]));

} else {
	console.error('Usage: node hms.js <interval as 1days 03:20:11.0381>');
}