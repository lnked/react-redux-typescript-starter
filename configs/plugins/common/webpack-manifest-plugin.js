const WebpackManifestPlugin = require('webpack-manifest-plugin');

const { prefix, cacheDirectory } = require('../../options');

module.exports = () => {
  return [
    new WebpackManifestPlugin({
      fileName: `${cacheDirectory}/${prefix}/manifest.json`,
    }),
  ]
}
