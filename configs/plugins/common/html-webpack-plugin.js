const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new HtmlWebpackPlugin({
      title: 'React app',
      inject: true,
      filename: 'index.html',
      template: path.resolve(options.root, 'public/index.html'),
      PUBLIC_URL: '/',
      description: 'React starter',

      // production
      hash: false,
      cache: true,
      inject: true,
      compile: false,
      prefetch: ['**/*.js'],
      preload: ['**/*.js'],
      chunksSortMode: 'dependency',
      production: true,
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
    }),
  ]
}
