const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack/common.config.js')
const dotenv = require('./tools/env')

const { parseArguments } = require('./tools/helpers')

const options = parseArguments(process.argv)

const env = options.env || 'development'

process.env.NODE_ENV = process.env.BABEL_ENV = env;

console.log('handler: ', options);

dotenv.init()

module.exports = merge(
  common,
  require(`./webpack/${env}.config.js`)
)
