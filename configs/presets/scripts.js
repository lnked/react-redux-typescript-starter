const cache = require('../loaders/cache-loader')
const babel = require('../loaders/babel-loader')

module.exports = {
  test: /\.(ts|js)x?$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    cache(),
    babel(),
  ],
}
