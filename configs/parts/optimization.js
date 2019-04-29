const Minimizer = require('../parts/minimizer');

const { environment, development, production } = require('../options');

module.exports = {
  optimization: {
    nodeEnv: environment,
    minimize: true,
    chunkIds: 'named',
    moduleIds: 'hashed',
    sideEffects: true,
    namedChunks: development,
    namedModules: development,
    noEmitOnErrors: true,
    occurrenceOrder: false,

    usedExports: production,
    providedExports: production,
    concatenateModules: production,

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
    minimizer: Minimizer(),
  },
}
