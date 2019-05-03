const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

const options = require('../../options');

module.exports = () => {
  return [
    new ImageminPlugin({
      pngquant: ({ quality: '70' }),
      plugins: [imageminMozjpeg({ quality: '70' })]
    }),
  ]
}
