const file = require('../loaders/file-loader');
const json = require('../loaders/json-loader');
const cache = require('../loaders/cache-loader');
const options = require('../options');

const use = [
  cache()
];

if (options.production) {
  use.push(file({ prefix: 'configs' }))
}

use.push(json())

module.exports = () => {
  return [
    {
      test: /\.json$/,
      type: 'javascript/auto',
      exclude: /(node_modules)/,
      use,
    },
  ];
};
