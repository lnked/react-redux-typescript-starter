const url = require('../loaders/url-loader');
const file = require('../loaders/file-loader');
const cache = require('../loaders/cache-loader');

const { staticPath } = require('../options');

module.exports = () => {
  return [
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        cache(),
        url({
          prefix: 'fonts',
          limit: 50000,
          mimetype: 'application/font-woff',
        }),
      ],
    },
    {
      test: /\.svg$/,
      use: [
        cache(),
        url({
          limit: 50000,
          prefix: `${staticPath}/images`,
          mimetype: 'image/svg+xml',
        }),
      ],
    },
    {
      test: /\.(ttf|eot|woff|woff2)(\?\S*)?$/,
      use: [
        cache(),
        file({ prefix: 'fonts' }),
      ],
    },
  ];
};
