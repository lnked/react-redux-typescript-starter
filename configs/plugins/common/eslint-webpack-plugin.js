const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new ESLintPlugin({
      files: ['src/**/*.tsx?', 'src/**/*.jsx?'],
      exclude: ['/node_modules/'],
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    // new ESLintPlugin({
    //   cache: true,
    //   ignore: true,
    //   emitWarning: true,
    //   useEslintrc: true,
    //   exclude: ['/node_modules/'],
    //   extensions: ['js', 'jsx', 'ts', 'tsx'],
    //   eslintPath: resolve(options.rootPath, '.eslintrc.js'),
    //   resolvePluginsRelativeTo: __dirname,
    // }),
  ];
};
