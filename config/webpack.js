var path = require('path');

var config = {
  cache: true,
  entry: {
    'string_fns': './src/string_fns.js'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js'
  }
};

module.exports = config;

