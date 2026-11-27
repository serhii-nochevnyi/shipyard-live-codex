'use strict';

const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
assert.strictEqual(greet('Grace', { style: 'formal' }), 'Good day, Grace.');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
assert.strictEqual(greet('Ada', null), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'unknown' }), 'Hello, Ada!');
console.log('greeting: ok');
