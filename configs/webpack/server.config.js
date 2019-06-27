const { resolve } = require('path')
const webpack = require('webpack')

const options = require('../options')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    server: [
      resolve(options.sourcePath, 'server.tsx'),
    ],
  },
  output: {
    path: resolve(options.root, 'server'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
