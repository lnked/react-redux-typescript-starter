const html = require('../loaders/html-loader');
const cache = require('../loaders/cache-loader');
const markdown = require('../loaders/markdown-loader');

module.exports = () => {
  return [
    {
      test: /\.md$/,
      use: [
        cache(),
        html(),
        markdown(),
      ],
    },
  ];
};
