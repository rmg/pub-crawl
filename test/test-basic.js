'use strict';

var test = require('tap').test;

test('module is requireable', function(t) {
  t.doesNotThrow(function() { require('../'); });
  t.end();
});
