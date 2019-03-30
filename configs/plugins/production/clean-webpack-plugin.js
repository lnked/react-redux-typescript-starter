const CleanWebpackPlugin = require('clean-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new CleanWebpackPlugin({
      root: options.root,
      verbose: false,
    }),
  ]
}
