const Minimizer = require('../plugins/production/minimizer');

module.exports = {
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
}
