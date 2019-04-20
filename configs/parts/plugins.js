
const WebpackPlugins = require('../plugins/common/webpack-plugins');
const DuplicatesPlugin = require('../plugins/common/duplicates-plugin');
const CopyWebpackPlugin = require('../plugins/common/copy-webpack-plugin');
const HtmlWebpackPlugin = require('../plugins/common/html-webpack-plugin');

module.exports = {
  plugins: [
    ...WebpackPlugins(),
    ...DuplicatesPlugin(),
    ...CopyWebpackPlugin(),
    ...HtmlWebpackPlugin(),
  ],
};
