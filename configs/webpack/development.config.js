const merge = require('webpack-merge');

const devServer = require('../parts/dev-server');
const plugins = require('../plugins/development');

module.exports = merge(
  plugins,
  devServer,
);
