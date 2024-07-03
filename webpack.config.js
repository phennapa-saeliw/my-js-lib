// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'myJsLib',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production'
};
