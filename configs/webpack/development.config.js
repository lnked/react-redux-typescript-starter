const merge = require('webpack-merge');
const webpack = require('webpack');

const devServer = require('../parts/dev-server');

const plugins = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(
  plugins,
  devServer,
);
