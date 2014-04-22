
/**
 * Test dependencies.
 */

var assert = require('assert');
var hypo = require('..');

describe("Factory", function() {
	var Person, plugin;
	beforeEach(function() {
		Person = function() {
			this.firstName = 'john';
		};
		plugin = function(ctx) {
			ctx.name = function(lastName) {
				return this.firstName + ' ' + lastName;
			};
		};
	});
	
	it('should create factory to add plugins', function() {
		var Bar = hypo(Person)
		  .use(plugin);

		var person = new Bar();
		var name = person.name('doe');
		assert.equal(name, 'john doe');
	});

});
