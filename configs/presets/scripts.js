const cache = require("../loaders/cache-loader");
const babel = require("../loaders/babel-loader");

module.exports = () => {
  return [
    {
      test: /\.(ts|js)x?$/,
      exclude: /(node_modules)/,
      use: [
        cache(),
        babel(),
      ],
    },
  ];
};
