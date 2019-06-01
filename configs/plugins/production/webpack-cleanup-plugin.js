const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new WebpackCleanupPlugin(),
  ]
}
