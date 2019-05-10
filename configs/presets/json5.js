const file = require('../loaders/file-loader');
const cache = require('../loaders/cache-loader');
const json5 = require('../loaders/json5-loader');

module.exports = () => {
  return [
    {
      test: /\.json5$/,
      type: 'javascript/auto',
      exclude: /(node_modules)/,
      use: [
        cache(),
        file({ prefix: 'configs' }),
        json5(),
      ],
    },
  ];
};
