const { resolve } = require('path');

const { root, distName, hashName, staticPath, publicPath } = require('../options');

module.exports = {
  output: {
    pathinfo: false,
    path: resolve(root, distName),
    filename: `${staticPath}/${hashName}.js`,
    publicPath: publicPath,
    chunkFilename: `${staticPath}/${hashName}.c.js`,
    sourceMapFilename: '[name].js.map',
    crossOriginLoading: 'anonymous',
  },
}
