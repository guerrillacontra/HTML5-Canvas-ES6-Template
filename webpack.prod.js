const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: "production", // "production" | "development" | "none"
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  target: "web"
});