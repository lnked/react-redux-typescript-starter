const WebpackPlugins = require('./webpack-plugins');
const DuplicatesPlugin = require('./duplicates-plugin');
const CopyWebpackPlugin = require('./copy-webpack-plugin');
const HtmlWebpackPlugin = require('./html-webpack-plugin');
const CssExtractPlugin = require('./mini-css-extract-plugin');
const WebpackManifestPlugin = require('./webpack-manifest-plugin');
const CircularDependencyPlugin = require('./circular-dependency-plugin');
const CaseSensitivePathsPlugin = require('./case-sensitive-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('./ts-checker-webpack');
const EslintWebpackPlugin = require('./eslint-webpack-plugin');

module.exports = {
  plugins: [
    ...WebpackPlugins(),
    ...DuplicatesPlugin(),
    ...CopyWebpackPlugin(),
    ...CssExtractPlugin(),
    ...HtmlWebpackPlugin(),
    ...EslintWebpackPlugin(),
    ...WebpackManifestPlugin(),
    ...CaseSensitivePathsPlugin(),
    ...CircularDependencyPlugin(),
    ...ForkTsCheckerWebpackPlugin(),
  ].filter(Boolean),
};
