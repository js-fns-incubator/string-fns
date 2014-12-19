var isLetter = require('./is_letter');

var isUpperCase = function(str){
  return str.toUpperCase() === str && isLetter(str);
}

module.exports = isUpperCase;