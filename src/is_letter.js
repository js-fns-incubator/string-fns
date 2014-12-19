/**
 * Returns true if str have only letters
 * @param  {string}
 * @return {boolean}
 */
var isLetter = function(str){
  if (str.length > 1) {
    return str.split('').every(isLetter);
  };
  return str.toUpperCase() !== str.toLowerCase();
}
module.exports = isLetter;