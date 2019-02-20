const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const alias = require('../aliaces');
const rules = require('../loaders');
const options = require('../options');
const externals = require('../externals');

module.exports = {
  target: 'web',
  entry: {
    app: path.resolve(options.source, 'index.tsx'),
  },
  output: {
    pathinfo: false,
    path: path.resolve(options.root, 'dist'),
    filename: 'static/[name].[contenthash:4].m.js',
    chunkFilename: 'static/[name].[contenthash:4].c.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),

    new DuplicatePackageCheckerPlugin(),

    new CopyWebpackPlugin([
      {
        context: 'public',
        from: { glob: '**/*', dot: true },
        to: options.dist,
        force: true,
        cache: true,
      },
    ], {
      ignore: ['.gitkeep', '.DS_Store', 'index.html'],
      copyUnmodified: true,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(options.env),
      },
    }),

    new HtmlWebpackPlugin({
      title: 'React app',
      inject: true,
      filename: 'index.html',
      template: path.resolve(options.root, 'public/index.html'),
      PUBLIC_URL: '',

      // production
      hash: false,
      cache: true,
      inject: true,
      compile: false,
      prefetch: ['**/*.js'],
      preload: ['**/*.js'],
      chunksSortMode: 'dependency',
      production: true,
      minify: {
        html5: true,
        caseSensitive: true,
        keepClosingSlash: true,
        removeComments: true,
        decodeEntities: true,
        customAttrAssign: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        preventAttributesEscaping: true,
        processConditionalComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
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
  externals,
  node: false, // remove Node polyfills
};
