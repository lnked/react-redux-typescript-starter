const svg = require('../loaders/svg-url-loader');
const url = require('../loaders/url-loader');
const file = require('../loaders/file-loader');
const imageWebpack = require('../loaders/image-webpack-loader');

module.exports = () => {
  return [
    {
      test: /\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i,
      use: [
        file({
          outputPath: 'assets/',
        }),
        imageWebpack(),
      ],
    },
    {
      test: /\.svg$/,
      use: [
        svg({
          limit: 10 * 1024,
          noquotes: true,
        }),
      ],
    },
    // {
    //   test: /\.(jpe?g|png|gif)$/,
    //   use: [
    //     url({
    //       limit: 10 * 1024,
    //     }),
    //   ]
    // },
  ];
};
