const cache = require('../loaders/cache-loader');
const babel = require('../loaders/babel-loader');
const thread = require('../loaders/thread-loader');
const sourceMap = require('../loaders/source-map-loader');

module.exports = () => {
  return [
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [
        cache(),
        sourceMap(),
      ],
    },
    {
      test: /\.(ts|js)x?$/,
      exclude: /(node_modules)/,
      use: [
        cache(),
        thread(),
        babel(),
      ],
    },
  ];
};
