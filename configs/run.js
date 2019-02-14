require('./tools/env')

const merge = require('webpack-merge')
const common = require('./webpack/common.config.js')
const options = require('./options')

module.exports = merge(
  common,
  require(`./webpack/${options.env}.config.js`)
)

// https://github.com/contentful-labs/file-upload-example/blob/f22bc6f2edb9f713eeb4e2f9917bdb6ef6978b49/config/paths.default.js
