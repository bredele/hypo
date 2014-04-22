
/**
 * Expose 'hypo'
 */

module.exports = function(constructor) {

	var plugins = [];


	/**
	 * hypo constructor.
	 * @api public
	 */

	var hypo = function() {
		var proto = {};
		proto.__proto__ = constructor.prototype;
		constructor.apply(proto, arguments);
		for(var l = plugins.length; l--;) {
			proto.use.apply(proto, plugins[l]);
		}
		return proto;
	};


	hypo.use = function(fn) {
		plugins.push(arguments);
		return hypo;
	};

	return hypo;
};
