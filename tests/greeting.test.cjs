'use strict';

const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.');
assert.strictEqual(greet('Élodie, Jr.', { style: 'casual' }), 'Hello, Élodie, Jr.!');
assert.strictEqual(greet('Élodie, Jr.', { style: 'formal' }), 'Good day, Élodie, Jr..');
console.log('greeting: ok');
