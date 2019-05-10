const svg = require('../loaders/svg-url-loader');
const url = require('../loaders/url-loader');
const file = require('../loaders/file-loader');
const cache = require('../loaders/cache-loader');
const imageWebpack = require('../loaders/image-webpack-loader');

module.exports = () => {
  return [
    {
      test: /\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i,
      use: [
        cache(),
        file({
          outputPath: 'assets/',
        }),
        imageWebpack(),
      ],
    },
    {
      test: /\.svg$/,
      use: [
        cache(),
        svg({
          limit: 10 * 1024,
          noquotes: true,
        }),
      ],
    },
  ];
};
