var isLetter = require('./is_letter');

/**
 * Returns true if str is made of letters, and letters are in uppercase
 * @param  {string}
 * @return {boolean}
 */
var isUpperCase = function(str){
  return str.toUpperCase() === str && isLetter(str);
}

module.exports = isUpperCase;