const { resolve } = require('path');

const { root, hashName, staticPath, publicPath } = require('../options');

module.exports = {
  output: {
    pathinfo: false,
    jsonpFunction: 'WJ',
    hotUpdateFunction: 'UF',
    path: resolve(root, 'dist'),
    filename: `${staticPath}/${hashName}.m.js`,
    publicPath: publicPath,
    chunkFilename: `${staticPath}/${hashName}.c.js`,
    sourceMapFilename: '[name].js.map',
    crossOriginLoading: 'anonymous',
  },
}
