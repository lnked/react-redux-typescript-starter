const style = require("../loaders/style-loader");
const css = require("../loaders/css-loader");

module.exports = () => {
  return [
    {
      test: /\.css$/,
      use: [
        style(),
        css(),
      ],
    },
  ];
};
