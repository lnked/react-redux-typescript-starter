const url = require('../loaders/url-loader');
const file = require('../loaders/file-loader');

module.exports = () => {
  return [
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
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
        url({
          prefix: 'static/images',
          limit: 50000,
          mimetype: 'image/svg+xml',
        }),
      ],
    },
    // {
    //   test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
    //   use: [
    //     url({
    //       limit: 100000,
    //     }),
    //   ],
    // },
    {
      test: /\.(ttf|eot|woff|woff2)(\?\S*)?$/,
      use: [
        file({ prefix: 'fonts' }),
      ],
    },
  ];
};
