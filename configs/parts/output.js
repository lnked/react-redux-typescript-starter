const { dist, hashName, staticPath, publicPath } = require('../options');

// const buildPath = process.env.BUILD_PATH || 'build';

// appBuild: resolveApp(buildPath),
// path: paths.appBuild,

module.exports = {
  output: {
    path: dist,
    pathinfo: false,
    publicPath: publicPath,
    filename: `${staticPath}/${hashName}.js`,
    chunkFilename: `${staticPath}/[name].[contenthash:5].js`,
    sourceMapFilename: '[name].[contenthash:5].js.map',
    assetModuleFilename: `${staticPath}/images/[hash][ext][query]`,
    crossOriginLoading: 'anonymous',
    webassemblyModuleFilename: '[hash].wasm',
  },
};
