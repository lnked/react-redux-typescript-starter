const { resolve } = require('path');

const { root, distName, hashName, staticPath, publicPath } = require('../options');

module.exports = {
  output: {
    pathinfo: false,
    publicPath: publicPath,
    path: resolve(root, distName),
    filename: `${staticPath}/${hashName}.m.js`,
    chunkFilename: `${staticPath}/${hashName}.c.js`,
    sourceMapFilename: '[name].js.map',
    crossOriginLoading: 'anonymous',
  },
}
