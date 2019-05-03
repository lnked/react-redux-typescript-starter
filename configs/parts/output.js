const { resolve } = require('path');

const options = require('../options');

module.exports = {
  output: {
    pathinfo: false,
    jsonpFunction: 'WJ',
    hotUpdateFunction: 'UF',
    path: resolve(options.root, 'dist'),
    filename: `static/${options.hashName}.m.js`,
    publicPath: options.publicPath,
    chunkFilename: `static/${options.hashName}.c.js`,
    sourceMapFilename: '[name].js.map',
    crossOriginLoading: 'anonymous',
  },
}
