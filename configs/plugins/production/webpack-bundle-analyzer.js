const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const options = require('../../options');

module.exports = () => {
  if (!options.analyze) {
    return []
  }

  return [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ]
}
