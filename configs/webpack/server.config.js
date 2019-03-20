const webpack = require('webpack');

const options = require('../options');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    server: [
      path.resolve(options.source, 'server.tsx'),
    ],
  },
  output: {
    path: path.resolve(options.root, 'server'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
