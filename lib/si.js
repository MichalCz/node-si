// Copyright Michał Czapracki, budleigh.salterton@gmail.com
// License: https://github.com/MichalCz/node-si/blob/master/LICENSE

var v = require('./vars');

/**
 * Returns human readable number representation (up to nY - 1e24).
 * @param {Number} number
 * @returns {String}
 */
exports.format = function(number, div, res) {
    div = +(div || 1); 
    res = +(res || 0.1);
        
	for (var i = 1; i < v.siMultiples.length; i++) {
		div *= 1e3;
		res = number / div;
		if (res <= 800 || i == v.siMultiples.length)
			return ("" + res).substr(0, 5) + v.siMultiples[i];
	}
	return number+'';
};

/**
 * Parses human readable numbers to Number. 
 * @param {String} string number representation
 * @returns {Number}
 */
exports.parse = function(string) {
    return +(
        (string || '')
            .toLowerCase()
            .replace(v.siRegexp, 
                function(a, b, c) {
                    return (+b) * ('1e' + v.siMulStr.indexOf(c)*3);
                }));
};
