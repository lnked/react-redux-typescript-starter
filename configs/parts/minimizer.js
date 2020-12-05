const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const terserOptions = require('../terser-options');

module.exports = () => {
  return [
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      parallel: true,
      extractComments: true,
      terserOptions,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ];
};
