import cache from '../loaders/cache'
import babel from '../loaders/babel'

module.exports = {
  test: /\.(ts|js)x?$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    cache(),
    babel(),
  ],
}
