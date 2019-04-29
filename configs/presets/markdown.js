const html = require('../loaders/html-loader');
const markdown = require('../loaders/markdown-loader');

module.exports = () => {
  return [
    {
      test: /\.md$/,
      use: [
        html(),
        markdown(),
      ],
    },
  ];
};
