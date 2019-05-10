const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { root, production } = require('../../options');

const options = production ? {
  hash: false,
  cache: true,
  inject: true,
  compile: false,
  prefetch: ['**/*.js'],
  preload: ['**/*.js'],
  chunksSortMode: 'dependency',
  production: production,
  minify: {
    html5: true,
    caseSensitive: true,
    keepClosingSlash: true,
    removeComments: true,
    decodeEntities: true,
    customAttrAssign: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    preventAttributesEscaping: true,
    processConditionalComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
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
      template: path.resolve(root, 'public/index.html'),
      description: 'React starter',
      PUBLIC_URL: '/',
      ...options
    }),
  ]
}
