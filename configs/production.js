const merge = require('webpack-merge');

process.env.NODE_ENV = process.env.BABEL_ENV = 'production';

const common = require('./webpack/common.config.js')
const configs = require(`./webpack/production.config.js`);

module.exports = merge(
  common,
  configs,
)
