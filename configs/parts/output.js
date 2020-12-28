const { dist, hashName, staticPath, publicPath } = require('../options');

module.exports = {
  output: {
    path: dist,
    pathinfo: false,
    publicPath: publicPath,
    filename: `${staticPath}/${hashName}.js`,
    chunkFilename: `${staticPath}/[name].[contenthash:5].js`,
    sourceMapFilename: '[name].[contenthash:5].js.map',
    crossOriginLoading: 'anonymous',
  },
};
