const { resolve } = require('path');

const options = require('../options');
const { polyfills } = require('../polyfills');

module.exports = {
  entry: {
    app: [
      ...polyfills,
      resolve(options.sourcePath, 'index'),
    ],
  },
}
