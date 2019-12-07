const PreloadWebpackPlugin = require('preload-webpack-plugin');

const { preload } = require('../../options');

module.exports = () => {
  if (!preload) {
    return [];
  }

  return [
    new PreloadWebpackPlugin({
      el: 'preload',
      as: 'script',
      include: 'asyncChunks',
    }),
  ];
}
