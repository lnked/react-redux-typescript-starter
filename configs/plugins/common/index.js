const WebpackPlugins = require('./webpack-plugins');
const DuplicatesPlugin = require('./duplicates-plugin');
const CopyWebpackPlugin = require('./copy-webpack-plugin');
const HtmlWebpackPlugin = require('./html-webpack-plugin');

module.exports = {
  plugins: [
    ...WebpackPlugins(),
    ...DuplicatesPlugin(),
    ...CopyWebpackPlugin(),
    ...HtmlWebpackPlugin(),
  ].filter(Boolean),
};
