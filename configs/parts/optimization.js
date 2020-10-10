const Minimizer = require('../parts/minimizer');

module.exports = {
  optimization: {
    nodeEnv: 'production',

    chunkIds: 'named',
    moduleIds: 'hashed',

    minimize: true,
    usedExports: true,

    concatenateModules: true,
    mergeDuplicateChunks: true,

    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      maxAsyncRequests: 20,
      enforceSizeThreshold: 50000,
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
          priority: -10,
          chunks: 'all',
          name: 'vendors',
          enforce: true,
          reuseExistingChunk: true,
        },
        default: false,
      },
    },
    minimizer: Minimizer(),
  },
}
