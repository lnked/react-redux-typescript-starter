const url = require('../loaders/url-loader');
const file = require('../loaders/file-loader');
const cache = require('../loaders/cache-loader');

const { staticPath } = require('../options');

module.exports = () => {
  return [
    {
      include: /assets\/fonts/,
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
      include: /assets\/fonts/,
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
      include: /assets\/fonts/,
      test: /\.(ttf|eot|woff|woff2)(\?\S*)?$/,
      use: [
        cache(),
        file({ prefix: 'fonts' }),
      ],
    },
  ];
};
