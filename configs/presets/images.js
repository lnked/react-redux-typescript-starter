const svg = require("../loaders/svg-url-loader");
const file = require("../loaders/file-loader");

module.exports = () => {
  return [
    {
      test: /\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i,
      use: [
        file({
          outputPath: "assets/",
        }),
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
    //   loader: 'url-loader',
    //   options: {
    //     limit: 10 * 1024
    //   }
    // },
  ];
};
