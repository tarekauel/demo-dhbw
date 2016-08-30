var assert = require('assert');
var fib = require('./lib.js');

describe('Fib', function() {
  it('should return 1 for fib(1)', function() {
    assert.equal(1, fib(1));
  });
  it('should return 2 for fib(3)', function() {
    assert.equal(2, fib(3));
  });
});