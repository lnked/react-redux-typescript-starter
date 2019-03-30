const zopfli = require('@gfx/zopfli');
const CompressionPlugin = require('compression-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  if (!options.compression) {
    return []
  }

  return [
    new CompressionPlugin({
      cache: options.cacheDirectory,
      test: /\.(js|css|html|svg)$/,
      filename: '[path].gz[query]',
      minRatio: 0.8,
      threshold: 8192,
      compressionOptions: {
        level: 1,
        numiterations: 15,
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      },
    }),
  ]
}
