/**
 * Generic utility helpers.
 *
 * Note: This module uses CommonJS exports because the repo's Node tests load
 * modules via `require()`.
 */

/**
 * Reverses a string.
 *
 * Implementation notes:
 * - We use `Array.from(value)` to iterate over Unicode code points rather than
 *   raw UTF-16 code units (what you'd get from `value.split('')`).
 * - This means many surrogate-pair characters (e.g. lots of emoji) are kept
 *   intact when reversing.
 * - This still does not preserve grapheme clusters (visual characters) such as
 *   "e\u0301" (e + combining accent) or certain flag/skin-tone sequences.
 *
 * @param {string} value
 * @returns {string}
 */
function reverseString(value) {
  if (typeof value !== 'string') {
    throw new TypeError(`reverseString(value) expects a string, got ${typeof value}`);
  }

  // Fast path: empty and 1-character strings are already "reversed".
  if (value.length <= 1) return value;

  return Array.from(value).reverse().join('');
}

module.exports = { reverseString };
