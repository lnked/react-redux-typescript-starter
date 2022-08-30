const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = () => [
  new ESLintPlugin({
    files: ['src/**/*.tsx?', 'src/**/*.jsx?'],
    exclude: ['/node_modules/'],
    extensions: ['js', 'jsx', 'ts', 'tsx'],
  }),
];
