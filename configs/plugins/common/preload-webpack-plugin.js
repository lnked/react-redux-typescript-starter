const PreloadWebpackPlugin = require('preload-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      include: 'asyncChunks',
    }),
  ]
}
