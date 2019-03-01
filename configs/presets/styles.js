const style = require("../loaders/style-loader");
const css = require("../loaders/css-loader");

module.exports = () => {
  return [
    {
      test: /\.s?(a|c)?ss$/,
      use: [
        style(),
        css({
          modules: true,
          importLoaders: 0,
        }),
      ],
    },
  ];
};
