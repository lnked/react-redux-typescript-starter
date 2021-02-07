const WebpackPlugins = require('./webpack-plugins');
const CompressionPlugin = require('./compression-webpack-plugin');
const WebpackCleanupPlugin = require('./webpack-cleanup-plugin');
const WorkboxWebpackPlugin = require('./workbox-webpack-plugin');
const BundleAnalyzerPlugin = require('./webpack-bundle-analyzer');
const PreloadWebpackPlugin = require('./preload-webpack-plugin');

module.exports = {
  plugins: [
    // ...WebpackPlugins(),
    // ...WebpackCleanupPlugin(),
    // ...WorkboxWebpackPlugin(),
    // ...CompressionPlugin(),
    // ...PreloadWebpackPlugin(),
    // ...BundleAnalyzerPlugin(),
  ].filter(Boolean),
};
