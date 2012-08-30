// Copyright Michał Czapracki, budleigh.salterton@gmail.com
// License: https://github.com/MichalCz/node-si-numbers/blob/master/LICENSE

/**
 * Human readable number multipliers (2^(10*pos))
 */
var siMultiples = "\0kMGTPEZY",
    siMulStr = siMultiples.toLowerCase(),
    siRegexp = /^([\+\-]?[\d\.]+)\s?([kmgtpezy]?).*?$/;

exports.si = {};

/**
 * Returns human readable number representation (up to nY - 1e24).
 * @param {Number} number
 * @returns {String}
 */
exports.format = exports.si.format = function(number) {
    var div = 1, 
        res = 0.1;
        
	for (var i = 1; i < siMultiples.length; i++) {
		div *= 1e3;
		res = number / div;
		if (res <= 800 || i == siMultiples.length)
			return ("" + res).substr(0, 5) + siMultiples[i];
	}
	return number+'';
};

/**
 * Parses human readable numbers to Number. 
 * @param {String} string number representation
 * @returns {Number}
 */
exports.parse = exports.si.parse = function(string) {
    return +(
        string
            .toLowerCase()
            .replace(siRegexp, 
                function(a, b, c) {
                    return (+b) * ('1e' + siMulStr.indexOf(c)*3);
                }));
};
