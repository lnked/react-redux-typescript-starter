const url = require('../loaders/url-loader');
const file = require('../loaders/file-loader');

const { staticPath } = require('../options');
const { addRule } = require('../tools/rules');

module.exports = () => {
  return [
    addRule(/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, {
      include: /assets\/fonts/,
      use: [
        url({
          prefix: 'fonts',
          limit: 50000,
          mimetype: 'application/font-woff',
        }),
      ],
    }, true),

    addRule(/\.svg$/, {
      include: /assets\/fonts/,
      use: [
        url({
          limit: 50000,
          prefix: `${staticPath}/images`,
          mimetype: 'image/svg+xml',
        }),
      ],
    }, true),

    addRule(/\.(ttf|eot|woff|woff2)(\?\S*)?$/, {
      include: /assets\/fonts/,
      use: [
        file({ prefix: 'fonts' }),
      ],
    }, true),
  ];
};
