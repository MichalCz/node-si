exports.siMultiples = "\0kMGTPEZY";
exports.siMulStr = exports.siMultiples.toLowerCase();
exports.siMulUp = exports.siMultiples.toUpperCase();
exports.siRegexp = /^([\+\-]?[\d\.]+)\s?([kmgtpezy]?).*?$/;
exports.dhmsRegexp = /^([\+\-]?)(?:(\d+)\s*d(?:ays?)?\s*)(\d+):(\d+):([\d\.]+)/
exports.twoPad = function(n) {
	return ('0' + n).substr(-2);
}