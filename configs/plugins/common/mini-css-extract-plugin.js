const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { development } = require('../../options');

module.exports = () => {
  return [
    new MiniCssExtractPlugin({
      ignoreOrder: false,
      chunkFilename: '[id].css',
      filename: development ? '[name].css' : '[name].[contenthash:5].css',
    }),
  ];
};
