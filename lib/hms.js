// Copyright Michał Czapracki, budleigh.salterton@gmail.com
// License: https://github.com/MichalCz/node-si-numbers/blob/master/LICENSE

var v = require('./vars');

/**
 * Returns human readable time representation (0days 00:00:00).
 * @param {Number} number time in seconds
 * @returns {String}
 */
exports.format = function(number, res) {
	return (number > 86400 ? ~~(number/86400) + ' days ' : '') + ~~(number%86400/3600)+':'+~~(number%3600/60)+':'+(number%60+'').substr(0,5);
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
                function(a, b, c, d, e) {
                    return 86400 * b + 3600 *c + 60 * d + +e;
                }));
};
