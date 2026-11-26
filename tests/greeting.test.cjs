'use strict';

const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
console.log('greeting: ok');
