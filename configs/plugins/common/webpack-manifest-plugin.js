const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const { prefix, cacheDirectory } = require('../../options');

module.exports = () => [
  new WebpackManifestPlugin({
    fileName: `${cacheDirectory}/${prefix}/manifest.json`,
  }),
];
