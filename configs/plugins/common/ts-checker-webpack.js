const { resolve } = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { root, development } = require('../../options');

module.exports = () => {
  return [
    new ForkTsCheckerWebpackPlugin({
      async: development,
      typescript: {
        configFile: resolve(root, './tsconfig.json'),
      },
    }),
  ]
}
