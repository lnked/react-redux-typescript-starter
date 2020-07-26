const svg = require('../loaders/svg-url-loader');
const file = require('../loaders/file-loader');
const cache = require('../loaders/cache-loader');
const imageWebpack = require('../loaders/image-webpack-loader');

const { development, production, staticPath } = require('../options');

module.exports = () => {
  return [
    {
      test: /\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i,
      use: [
        file({
          name: () => {
            if (development) {
              return '[path][name].[ext]';
            }

            return '[name].[contenthash].[ext]';
          },
          useRelativePath: true,
          outputPath: `${staticPath}/images`,
          publicPath: `${staticPath}/images`,
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
          noquotes: production,
        }),
      ],
    },
  ];
};
