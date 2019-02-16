const json = require('../loaders/json-loader')

module.exports = {
  test: /\.json$/,
  use: [
    json(),
  ],
}
