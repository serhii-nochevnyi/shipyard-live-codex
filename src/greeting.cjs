'use strict';

function greet(name, options = undefined) {
  if (options?.style === 'formal') {
    return `Good day, ${name}.`;
  }
  return `Hello, ${name}!`;
}

module.exports = { greet };
