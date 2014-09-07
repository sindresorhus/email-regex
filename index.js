'use strict';
module.exports = function (opts) {
	opts = opts || {};
	var re = '[^\\.\\s@][^\\s@]*(?!\\.)@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';
	return opts.exact ? new RegExp('^' + re + '$') : new RegExp(re, 'g');
};
