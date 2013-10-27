// Copyright Michał Czapracki, budleigh.salterton@gmail.com
// License: https://github.com/MichalCz/node-si/blob/master/LICENSE

var v = require('./vars');

/**
 * Returns human readable number representation (up to nY - 2^80).
 * @param {Number} number
 * @returns {String}
 */
exports.format = function(number, div, res) {
    div = +(div || 1); 
    res = +(res || 0.1);
    
	for (var i = 1; i < v.siMultiples.length; i++) {
		div *= 1024;
		res = number / div;
		if (res <= 800 || i == v.siMultiples.length)
			return ("" + res).substr(0, 5) + v.siMulUp[i];
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
        string
            .toLowerCase()
            .replace(v.siRegexp, 
                function(a, b, c) {
                	console.log(+b, v.siMulStr.indexOf(c), c);
                    return (+b) * Math.pow(2, v.siMulStr.indexOf(c)*10);
                }));
};
