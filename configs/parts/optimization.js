const webpack = require('webpack');

const options = require('../options');
const TerserPlugin = require('terser-webpack-plugin');
const terserOptions = require('../terser-options');

module.exports = options.production && {
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
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
          priority: -10,
          enforce: true,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: options.sourceMap, // Must be set to true if using source-maps in production
        extractComments: false,
        terserOptions,
      }),
    ],
  },
}
