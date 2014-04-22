Hypo
====

  Plugin injector for use-friendly interfaces.

## Concept

  The **use** pattern emerged with [express](http://github.com/visionmedia/express) and allows you to expose an object's context in order to extend it. Here's its implementation:

```js
function Person() {
	this.name = 'beep';
}

Person.prototype.use = function(fn, opts) {
  fn(this, opts);
  return this;
};
```
and a plugin example:
```js
var obj = new Person();

// create dummy plugin
obj.use(function(ctx) {
	ctx.dummy = function() {
    return this.name + ' boop';
  };
});

obj.dummy();
// => beep boop
```

  Nothing really complicated but it provides a consistent interface to compose your modules. A good example is **[datastore](http://github.com/bredele/datastore)** and its [plugins](http://github.com/bredele/datastore#plugins).

  Hypo is a **use factory** that allows you to add plugins before an object is actually instanciated.
  
## Usage

```js
var hypo = require('hypo');
var Citizen = hypo(Person)
  .use(dummy);

var obj = new Citizen();
obj.name();
// beep boop
```

