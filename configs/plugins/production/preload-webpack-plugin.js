const PreloadWebpackPlugin = require('preload-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new PreloadWebpackPlugin({
      el: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';

        return 'script';
      },
      include: 'asyncChunks',
    }),
  ]
}
