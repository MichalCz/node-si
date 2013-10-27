// Copyright Michał Czapracki, budleigh.salterton@gmail.com
// License: https://github.com/MichalCz/node-si/blob/master/LICENSE

var v = require('./vars');

/**
 * Returns human readable time representation (0days 00:00:00).
 * @param {Number} number time in seconds
 * @returns {String}
 */
exports.format = function(number, res) {
	return (number >= 86400 ? ~~(number/86400) + ' day' + (number >= 172800 ? 's ' : ' ') : '') 
		+ v.twoPad(~~(number%86400/3600)) 
		+ ':' + v.twoPad(~~(number%3600/60)) 
		+ ':' + v.twoPad(~~(number%60+''))
		+ '.' + ~~(10000*(number%1));
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
            .replace(v.dhmsRegexp,
                function(a, g, d, h, m, s) {
                    return (g == '-' ? -1 : 1) * (86400 * d + 3600 * h + 60 * m + (+s));
                }));
};
