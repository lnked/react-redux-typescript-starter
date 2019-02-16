const html = require('../loaders/html-loader')
const markdown = require('../loaders/markdown-loader')

module.exports = {
  test: /\.md$/,
  use: [
    html(),
    markdown(),
  ],
}
