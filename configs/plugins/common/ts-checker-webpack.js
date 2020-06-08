const { resolve } = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { root, development } = require('../../options');

module.exports = () => {
  return [
    new ForkTsCheckerWebpackPlugin({
      async: development,
      tsconfig: resolve(root, './tsconfig.json'),
    }),
  ]
}
