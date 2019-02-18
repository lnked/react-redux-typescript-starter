const source = require("../loaders/source-map-loader");
const imageWebpack = require("../loaders/image-webpack-loader");

module.exports = () => {
  return [
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [
        imageWebpack(),
      ],
      enforce: "pre",
    },
    {
      test: /\.js$/,
      enforce: "pre",
      use: [
        source(),
      ],
    },
  ];
};
