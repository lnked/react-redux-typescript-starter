const file = require('../loaders/file-loader')

module.exports = {
  test: /\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i,
  use: [
    file({ outputPath: 'assets/' })
  ],
}
