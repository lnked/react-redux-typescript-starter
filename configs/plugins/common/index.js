const WebpackPlugins = require('./webpack-plugins');
const DuplicatesPlugin = require('./duplicates-plugin');
const CopyWebpackPlugin = require('./copy-webpack-plugin');
const HtmlWebpackPlugin = require('./html-webpack-plugin');
const MiniCssExtractPlugin = require('./mini-css-extract-plugin');
const WebpackManifestPlugin = require('./webpack-manifest-plugin');
const CircularDependencyPlugin = require('./circular-dependency-plugin');
const UnusedFilesWebpackPlugin = require('./unused-files-webpack-plugin');
const CaseSensitivePathsPlugin = require('./case-sensitive-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('./ts-checker-webpack');

module.exports = {
  plugins: [
    ...WebpackPlugins(),
    ...DuplicatesPlugin(),
    ...CopyWebpackPlugin(),
    ...HtmlWebpackPlugin(),
    ...MiniCssExtractPlugin(),
    ...WebpackManifestPlugin(),
    ...UnusedFilesWebpackPlugin(),
    ...CaseSensitivePathsPlugin(),
    ...CircularDependencyPlugin(),
    ...ForkTsCheckerWebpackPlugin(),
  ].filter(Boolean),
};
