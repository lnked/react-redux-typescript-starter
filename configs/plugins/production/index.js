const WebpackPlugins = require('./webpack-plugins');
const WebpackChunkHash = require('./webpack-chunk-hash');
const CompressionPlugin = require('./compression-webpack-plugin');
const WebpackCleanupPlugin = require('./webpack-cleanup-plugin');
const WorkboxWebpackPlugin = require('./workbox-webpack-plugin');
const BundleAnalyzerPlugin = require('./webpack-bundle-analyzer');
const ImageminWebpackPlugin = require('./imagemin-webpack-plugin');
const PreloadWebpackPlugin = require('./preload-webpack-plugin');

module.exports = {
  plugins: [
    ...WebpackPlugins(),
    ...WebpackCleanupPlugin(),
    ...WebpackChunkHash(),
    ...WorkboxWebpackPlugin(),
    ...ImageminWebpackPlugin(),
    ...CompressionPlugin(),
    ...PreloadWebpackPlugin(),
    ...BundleAnalyzerPlugin(),
  ].filter(Boolean),
};
