const { merge } = require('webpack-merge');

const { environment } = require('./options');
const common = require('./webpack/common.config.js')
const configs = require(`./webpack/${environment}.config.js`);

module.exports = merge(
  common,
  configs,
);
