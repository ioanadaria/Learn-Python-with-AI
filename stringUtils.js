/**
 * String utility helpers.
 *
 * Note: This module uses CommonJS exports because the tests load it via `require()`.
 */

/**
 * Capitalizes the first character of a string.
 *
 * @param {string} value
 * @returns {string}
 */
function capitalize(value) {
  if (typeof value !== 'string') {
    throw new TypeError(`capitalize(value) expects a string, got ${typeof value}`);
  }

  if (value.length === 0) return '';

  return value[0].toUpperCase() + value.slice(1);
}

/**
 * Reverses a string.
 *
 * Note: This reverses by Unicode code points via `Array.from()`.
 * It handles surrogate pairs (e.g. many emoji) better than splitting into
 * individual UTF-16 code units, but it still won't preserve grapheme clusters
 * (e.g. "🇺🇸" or "e\u0301") as a single visual character.
 *
 * @param {string} value
 * @returns {string}
 */
function reverse(value) {
  if (typeof value !== 'string') {
    throw new TypeError(`reverse(value) expects a string, got ${typeof value}`);
  }

  if (value.length <= 1) return value;

  return Array.from(value).reverse().join('');
}

module.exports = { capitalize, reverse };
