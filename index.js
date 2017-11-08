'use strict';
const re = '[^\\.\\s@:][^\\s@:]*(?!\\.)@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';

module.exports = options => {
	options = options || {};
	return options.exact ? new RegExp(`^${re}$`) : new RegExp(re, 'g');
};
