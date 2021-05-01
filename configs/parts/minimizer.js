const TerserPlugin = require('terser-webpack-plugin');

const terserOptions = require('../terser-options');

module.exports = () => [
  new TerserPlugin({
    test: /\.js(\?.*)?$/i,
    parallel: true,
    extractComments: false,
    terserOptions,
  }),
];
