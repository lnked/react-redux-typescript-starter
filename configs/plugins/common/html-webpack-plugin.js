const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

const { configs } = require('../../html-minify');
const { environment } = require('../../tools/env');
const { root, production, preload, prefetch } = require('../../options');

const options = production
  ? {
      hash: false,
      cache: true,
      inject: true,
      compile: false,
      preload,
      prefetch,
      production: production,
      minify: {
        ...configs,
      },
    }
  : {
      minify: false,
    };

module.exports = () => {
  return [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: resolve(root, 'public/index.html'),
      filename: 'index.html',
      PUBLIC_URL: '/',
      title: JSON.parse(environment.APP_NAME),
      description: JSON.parse(environment.APP_DESCRIPTION),
      excludeAssets: [/runtime.*.js/],
      ...options,
    }),
    new ResourceHintWebpackPlugin(),
  ];
};
