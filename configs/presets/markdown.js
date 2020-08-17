const html = require('../loaders/html-loader');
const markdown = require('../loaders/markdown-loader');
const { addRule } = require('../tools/rules');

module.exports = () => {
  return [
    addRule(/\.md$/, {
      use: [
        html(),
        markdown(),
      ],
    }, true),
  ];
};
