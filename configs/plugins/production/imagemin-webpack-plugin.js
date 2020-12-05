const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozJpeg = require('imagemin-mozjpeg');

const options = require('../../options');

module.exports = () => {
  return [
    new ImageminPlugin({
      pngquant: { quality: '70' },
      plugins: [imageminMozJpeg({ quality: '70' })],
    }),
  ];
};
