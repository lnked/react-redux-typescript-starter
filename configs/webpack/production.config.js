const Minimizer = require('../plugins/production/minimizer');
const WebpackPlugins = require('../plugins/production/webpack-plugins');
const WebpackChunkHash = require('../plugins/production/webpack-chunk-hash');
const CompressionPlugin = require('../plugins/production/compression-webpack-plugin');
const CleanWebpackPlugin = require('../plugins/production/clean-webpack-plugin');
const WorkboxWebpackPlugin = require('../plugins/production/workbox-webpack-plugin');
const BundleAnalyzerPlugin = require('../plugins/production/webpack-bundle-analyzer');
const ImageminWebpackPlugin = require('../plugins/production/imagemin-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('../plugins/production/script-ext-html-webpack-plugin');

module.exports = {
  mode: 'production',
  // devtool: 'cheap-source-map',
  // devtool: 'cheap-module-source-map',
  devtool: false,
  bail: true,
  performance: {
    hints: 'warning',
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    chunkIds: 'named',
    moduleIds: 'hashed',
    sideEffects: true,
    usedExports: true,
    namedChunks: true,
    namedModules: true,
    noEmitOnErrors: true,
    providedExports: false,
    occurrenceOrder: false,
    concatenateModules: true,
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      maxAsyncRequests: 20,
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        commons: {
          test: /\.(j|t)sx?$/,
          chunks: 'all',
          minChunks: 2,
          name: 'commons',
          enforce: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
          priority: -10,
          enforce: true,
          reuseExistingChunk: true,
        },
        default: false,
      },
    },
    minimizer: [
      ...Minimizer(),
    ],
  },
  plugins: [
    ...WebpackPlugins(),
    ...CleanWebpackPlugin(),
    ...WebpackChunkHash(),
    ...ScriptExtHtmlWebpackPlugin(),
    ...WorkboxWebpackPlugin(),
    ...ImageminWebpackPlugin(),
    ...CompressionPlugin(),
    ...BundleAnalyzerPlugin(),
  ].filter(Boolean),
};
