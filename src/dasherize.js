var dasherize = function(str){
  var slicesIndexes = [0];

  str = str.replace(/[_-]+/g, '-');

  str.split('').forEach(function(letter, index){
    var prevLetter = str.substr(index-1, 1);
    if (index != 0 && prevLetter != '-') {
      var caseChanged = isUpperCase(letter) && !isUpperCase(prevLetter);
      var numberChanged = isNumber(letter) && !isNumber(prevLetter);

      if ( caseChanged || numberChanged ) {
        slicesIndexes.push(index);
      };
    };
  });

  return slicesIndexes.map(function(sliceStart, index){
    var sliceEnd = slicesIndexes[index + 1];

    if (sliceEnd) {
      return str.slice(sliceStart, sliceEnd).toLowerCase();
    } else {
      return str.slice(sliceStart).toLowerCase();
    }
  }).join('-');
}

var isUpperCase = function(str){
  return str.toUpperCase() === str && isLetter(str);
}
var isLetter = function(str){
  return str.toUpperCase() !== str.toLowerCase();
}
var isNumber = function(str){
  return /\d/.test(str);
}

module.exports = dasherize;