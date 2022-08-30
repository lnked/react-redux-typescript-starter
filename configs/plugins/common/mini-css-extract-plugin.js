const CssExtractPlugin = require('mini-css-extract-plugin');

const { development } = require('../../options');

module.exports = () => [
  new CssExtractPlugin({
    ignoreOrder: false,
    chunkFilename: '[id].css',
    filename: development ? '[name].css' : '[name].[contenthash:5].css',
  }),
];
