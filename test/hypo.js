
/**
 * Test dependencies.
 */

var assert = require('assert');
var Person = require('./person');
var hypo = require('..');


describe("Factory", function() {
	var plugin, Citizen;
	beforeEach(function() {
		plugin = function(ctx) {
			ctx.name = function(lastName) {
				return this.firstName + ' ' + lastName;
			};
		};
		Citizen = hypo(Person).use(plugin);
	});
	
	it('should create factory to add plugins', function() {
		var doe = new Citizen();
		var name = doe.name('doe');
		assert.equal(name, 'john doe');
	});

	it('should create new object every time', function() {
		var beep = new Citizen();
		var boop = new Citizen();
		assert.notEqual(beep, boop);
	});

	it('should pass arguments', function() {
		var olivier = new Citizen('olivier');
		var result = olivier.name('wietrich')
		assert.equal(result, 'olivier wietrich');
	});

});
