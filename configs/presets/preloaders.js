const cache = require('../loaders/cache-loader');
const source = require('../loaders/source-map-loader');
const imageWebpack = require('../loaders/image-webpack-loader');

module.exports = () => {
  return [
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [
        cache(),
        imageWebpack(),
      ],
      enforce: 'pre',
    },
    {
      test: /\.js$/,
      enforce: 'pre',
      use: [
        cache(),
        source(),
      ],
    },
  ];
};
