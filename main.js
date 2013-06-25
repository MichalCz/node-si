// Copyright Michał Czapracki, budleigh.salterton@gmail.com
// License: https://github.com/MichalCz/node-si-numbers/blob/master/LICENSE

/**
 * Human readable number multipliers in SI format (10^(pos*3))
 */
exports.si = require('./lib/si');

/**
 * Human readable number multipliers in binary prefixing format (2^(10*pos))
 */
exports.bin = require('./lib/bin');

/**
 * Human readable time (timestamp to hms)
 */
exports.hms = require('./lib/hms');

/**
 * Returns human readable number representation (up to nY - 1e24).
 * @param {Number} number
 * @returns {String}
 */
exports.format = exports.si.format;

/**
 * Parses human readable numbers to Number. 
 * @param {String} string number representation
 * @returns {Number}
 */
exports.parse = exports.si.parse;
