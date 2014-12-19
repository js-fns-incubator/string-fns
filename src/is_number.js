/**
 * Returns true if str include only numbers
 * @param  {str|number}
 * @return {boolean}
 */
var isNumber = function(str){
  return /^\d+$/.test(str);
}
module.exports = isNumber;