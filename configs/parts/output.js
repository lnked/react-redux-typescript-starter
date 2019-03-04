const path = require('path');
const options = require('../options');

module.exports = {
  output: {
    pathinfo: false,
    path: path.resolve(options.root, 'dist'),
    filename: `static/${options.hashName}.m.js`,
    chunkFilename: `static/${options.hashName}.c.js`,
    publicPath: '/',
  },
}
