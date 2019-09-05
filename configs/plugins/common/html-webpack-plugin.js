const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { configs } = require('../../html-minify');
const { root, production } = require('../../options');

const options = production ? {
  hash: false,
  cache: true,
  inject: true,
  compile: false,
  preload: ['**/*.js'],
  chunksSortMode: 'dependency',
  production: production,
  minify: {
    ...configs,
  },
} : {
  minify: false,
};

module.exports = () => {
  return [
    new HtmlWebpackPlugin({
      title: 'React app',
      inject: true,
      filename: 'index.html',
      template: resolve(root, 'public/index.html'),
      description: 'React starter',
      PUBLIC_URL: '/',
      ...options
    }),
  ]
}
