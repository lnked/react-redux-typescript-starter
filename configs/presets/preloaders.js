const source = require('../loaders/source-map-loader')

module.exports = {
  test: /\.js$/,
  enforce: 'pre',
  use: [
    source(),
  ],
}
