const { merge } = require('webpack-merge');

const { environment } = require('./options');
const common = require('./env/common.config.js');
const config = require(`./env/${environment}.config.js`);

module.exports = merge(common, config);
