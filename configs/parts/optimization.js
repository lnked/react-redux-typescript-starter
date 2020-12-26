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
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxAsyncRequests: 20,
      enforceSizeThreshold: 50000,
      maxInitialRequests: Infinity,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
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
