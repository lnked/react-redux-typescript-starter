const file = require('../loaders/file-loader');
const json = require('../loaders/json-loader');
const options = require('../options');

const use = []

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
