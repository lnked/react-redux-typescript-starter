require('./tools/env');

const merge = require('webpack-merge');

const options = require('./options');
const common = require('./webpack/common.config.js')
const configs = require(`./webpack/${options.env}.config.js`);

module.exports = merge(
  common,
  configs,
)

// https://github.com/contentful-labs/file-upload-example/blob/f22bc6f2edb9f713eeb4e2f9917bdb6ef6978b49/config/paths.default.js
