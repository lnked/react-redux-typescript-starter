const file = require('../loaders/file-loader');
const json5 = require('../loaders/json5-loader');

module.exports = () => {
  return [
    {
      test: /\.json5$/,
      type: 'javascript/auto',
      exclude: /(node_modules)/,
      use: [
        file({ prefix: 'configs' }),
        json5(),
      ],
    },
  ];
};
