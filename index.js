'use strict';
module.exports = function (opts) {
	opts = opts || {};

	var matchStart = opts.exact || opts.matchStart;
	var matchEnd = opts.exact || opts.matchEnd;

	var anchorStart = matchStart ? '^' : '';
	var anchorEnd = matchEnd ? '$' : '';

	var flags = (anchorStart || anchorEnd) ? undefined : 'g';

	var re = '[^\\.\\s@][^\\s@]*(?!\\.)@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';
	return new RegExp(anchorStart + re + matchEnd, flags);
};
