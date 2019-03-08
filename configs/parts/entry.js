const path = require('path');
const options = require('../options');
const { polyfills} = require('../polyfills');

module.exports = {
  entry: {
    app: [
      ...polyfills,
      path.resolve(options.source, 'index.tsx'),
    ],
  },
}
