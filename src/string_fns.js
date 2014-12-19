var stringFns = {
  dasherize: require('./dasherize')
};

if (module && module.exports) {
  module.exports = stringFns;
} else {
  window.stringFns = stringFns;
}