const PreloadWebpackPlugin = require('preload-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new PreloadWebpackPlugin({
      el: 'preload',
      as: 'script',
      include: 'asyncChunks',
    }),
  ]
}
