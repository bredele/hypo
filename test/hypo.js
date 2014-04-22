
/**
 * Test dependencies.
 */

var assert = require('assert');
var Person = require('./person');
var hypo = require('..');


describe("Factory", function() {
	var plugin;
	beforeEach(function() {
		plugin = function(ctx) {
			ctx.name = function(lastName) {
				return this.firstName + ' ' + lastName;
			};
		};
	});
	
	it('should create factory to add plugins', function() {
		var Citizen = hypo(Person)
		  .use(plugin);

		var doe = new Citizen();
		var name = doe.name('doe');
		assert.equal(name, 'john doe');
	});

	it('should create new object every time', function() {
		var Citizen = hypo(Person)
		  .use(plugin);

		var beep = new Citizen();
		var boop = new Citizen();
		assert.notEqual(beep, boop);
	});

});
