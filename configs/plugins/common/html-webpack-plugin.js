const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

const { configs } = require('../../html-minify');
const { environment } = require('../../tools/env');
const { root, production, preload, prefetch } = require('../../options');

const options = production ? {
  hash: false,
  cache: true,
  inject: true,
  compile: false,
  preload,
  prefetch,
  // chunksSortMode: 'dependency',
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
      PUBLIC_URL: '/',
      inject: true,
      filename: 'index.html',
      template: resolve(root, 'public/index.html'),
      title: JSON.parse(environment.REACT_APP_NAME),
      description: JSON.parse(environment.REACT_APP_DESCRIPTION),
      excludeAssets: [/runtime.*.js/],
      ...options,
    }),
    new ResourceHintWebpackPlugin(),
  ]
}
