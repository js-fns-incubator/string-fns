/**
 * Trims string
 * @example
 *  trim('  string  '); // 'string'
 * @param  {string}
 * @return {string}
 */
var trim = function(str){
  var nativeTrim = String.prototype.trim;
  if (nativeTrim) return nativeTrim.call(str);

  return str.replace(/(^\s+|\s+$)/g, '');
}

module.exports = trim;