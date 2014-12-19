var trim = require('./trim');

/**
 * Camelizes the str
 * @example
 *  camelize('some-string'); // 'SomeString'
 * @param  {string}
 * @return {string}
 */
var camelize = function(str){
  return trim(str).replace(/[-_\s]+(.)?/g,
    function(match, c){
      return c ? c.toUpperCase() : "";
    }
  );
}

module.exports = camelize;