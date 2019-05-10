const css = require('../loaders/css-loader');
const style = require('../loaders/style-loader');
const cache = require('../loaders/cache-loader');
const thread = require('../loaders/thread-loader');

module.exports = () => {
  return [
    {
      test: /\.s?(a|c)?ss$/,
      use: [
        style(),
        cache(),
        thread(),
        css({
          modules: true,
          importLoaders: 0,
        }),
      ],
    },
  ];
};
