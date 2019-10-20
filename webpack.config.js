var path = require('path');

module.exports = {
  entry: "./src/index.js",
  devServer: {
    port: 1025,
    open: true
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
