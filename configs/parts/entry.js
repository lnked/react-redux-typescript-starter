const { resolve } = require('path');

const options = require('../options');
const { polyfills } = require('../polyfills');

module.exports = {
  entry: {
    app: resolve(options.sourcePath, 'index.tsx'),
    // app: [
    //   ...polyfills,
    //   resolve(options.sourcePath, 'index.tsx'),
    // ],
  },
}
