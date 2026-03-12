const assert = require('node:assert/strict');
const test = require('node:test');

test('capitalize("hello") returns "Hello"', () => {
  const { capitalize } = require('./stringUtils');
  assert.strictEqual(capitalize('hello'), 'Hello');
});

test('capitalize("") returns ""', () => {
  const { capitalize } = require('./stringUtils');
  assert.strictEqual(capitalize(''), '');
});

test('reverse("hello") returns "olleh"', () => {
  const { reverse } = require('./stringUtils');
  assert.strictEqual(reverse('hello'), 'olleh');
});
