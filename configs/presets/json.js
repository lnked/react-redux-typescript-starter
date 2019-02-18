const json = require("../loaders/json-loader");

module.exports = () => {
  return [
    {
      test: /\.json$/,
      use: [
        json(),
      ],
    },
  ];
};
