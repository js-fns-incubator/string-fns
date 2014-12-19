/**
 * Adds `padStr` to the left side of str until it becomes `length` size
 * @param {string} str
 * @param {number} length
 * @param {string} padStr
 */
var pad = function(str, length, padStr) {
  var diff = length - str.length;

  if (diff > 0) {
    for (var i = 0; i < diff; i++) {
      str = padStr + str;
    }
  }

  return str;
};

module.exports = pad;