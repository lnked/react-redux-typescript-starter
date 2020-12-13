const Minimizer = require('../parts/minimizer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const options = require('../options');

module.exports = {
  optimization: {
    nodeEnv: 'production',
    chunkIds: 'deterministic',
    moduleIds: 'deterministic',
    mangleExports: 'deterministic',
    usedExports: true,
    emitOnErrors: true,
    mangleWasmImports: true,
    removeEmptyChunks: false,
    concatenateModules: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,
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
    minimize: true,
    minimizer: [...Minimizer(), new CssMinimizerPlugin({ cache: options.cacheDirectory })],
  },
};
