const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { development } = require('../../options');

module.exports = () => {
  return [
    new MiniCssExtractPlugin({
      filename: development ? '[name].css' : '[name].[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ]
}
