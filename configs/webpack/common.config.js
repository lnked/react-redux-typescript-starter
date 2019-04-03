const path = require('path');

const WebpackPlugins = require('../plugins/common/webpack-plugins');
const DuplicatesPlugin = require('../plugins/common/duplicates-plugin');
const CopyWebpackPlugin = require('../plugins/common/copy-webpack-plugin');
const HtmlWebpackPlugin = require('../plugins/common/html-webpack-plugin');

const alias = require('../aliaces');
const rules = require('../loaders');
const options = require('../options');
const { polyfills } = require('../polyfills')

module.exports = {
  target: 'web',
  entry: {
    app: [
      // ...polyfills,
      path.resolve(options.sourcePath, 'client.tsx'),
    ],
  },
  output: {
    pathinfo: false,
    path: path.resolve(options.root, 'dist'),
    filename: `static/${options.hashName}.m.js`,
    chunkFilename: `static/${options.hashName}.c.js`,
    publicPath: '/',
  },
  plugins: [
    ...WebpackPlugins(),
    ...DuplicatesPlugin(),
    ...CopyWebpackPlugin(),
    ...HtmlWebpackPlugin(),
  ],
  resolve: {
    alias,
    mainFiles: ['index'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules,
  },
  stats: {
    maxModules: 0,
  },
  node: false, // remove Node polyfills
};
