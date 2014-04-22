
/**
 * Expose 'hypo'
 */

module.exports = function(proto) {

	var plugins = [];


	/**
	 * hypo constructor.
	 * @api public
	 */

	function hypo() {
		// we also shou pass arguments, may be extend prototype
		// of a new object
		var obj = new proto();
		for(var l = plugins.length; l--;) {
			obj.use.apply(obj, plugins[l]);
		}
		return obj;
	}


	hypo.use = function(fn) {
		plugins.push(arguments);
		return hypo;
	};

	return hypo;
};
