const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { GenerateSW} = require('workbox-webpack-plugin');
const WebpackChunkHash = require("webpack-chunk-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const options = require('../options');
const terserOptions = require("../terser-options");

const plugins = [];

if (options.development) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (options.compression) {
  plugins.push(
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  );
}

if (options.analyze) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
  );
}

module.exports = {
  plugins: [
    ...plugins,

    new webpack.NoEmitOnErrorsPlugin(),

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
}
