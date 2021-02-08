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
      // chunks: 'async',
      chunks: 'all',
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: Infinity,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [...Minimizer(), new CssMinimizerPlugin({ cache: options.cacheDirectory })],
  },
};
