Hypo
====

  > an hypodermic injection for your modules

  Plugin injector for use-friendly interfaces.

## Concept

  The **use** pattern emerged with [express](http://github.com/visionmedia/express) and allows you to expose an object's context in order to extend it. Here's its implementation:

```js
function Person(name) {
	this.name = name || 'beep';
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

  Extend an object constructor with plugins:

```js
var hypo = require('hypo');
var Citizen = hypo(Person)
  .use(dummy);

var obj = new Citizen();
obj.name();
// beep boop
```
  you can also pass some arguments

```js
var obj = new Citizen('bredele');
obj.name();
// bredele boop
```

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

