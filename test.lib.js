var assert = require('assert');
var fib = require('./lib.js');
var eq = require('./eq.js');

describe('Fib', function() {
  it('should return 1 for fib(1)', function() {
    assert.equal(1, fib(1));
  });
  it('should return 2 for fib(3)', function() {
    assert.equal(2, fib(3));
  });
});

describe('Eq', function() {
  it('1 should be 1', function() {
    assert.equal(true, eq(1,1));
  })
});