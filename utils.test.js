const assert = require('node:assert/strict');
const test = require('node:test');

test('reverseString("hello") returns "olleh"', () => {
  const { reverseString } = require('./utils');
  assert.strictEqual(reverseString('hello'), 'olleh');
});

test('reverseString handles surrogate pairs (emoji) as a single unit', () => {
  const { reverseString } = require('./utils');
  const grinningFaceEmoji = '\u{1F600}';
  assert.strictEqual(reverseString(`${grinningFaceEmoji}a`), `a${grinningFaceEmoji}`);
});

test('reverseString throws on non-string input', () => {
  const { reverseString } = require('./utils');
  assert.throws(() => reverseString(123), {
    name: 'TypeError',
  });
});
