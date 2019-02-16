const style = require('../loaders/style-loader')
const css = require('../loaders/css-loader')

module.exports = {
  test: /\.css$/,
  use: [
    style(),
    css(),
  ],
}
