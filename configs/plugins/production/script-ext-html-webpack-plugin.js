const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

module.exports = () => {
  return [
    new ScriptExtHtmlWebpackPlugin({
      defer: [/vendors/, /bundle/, /.*bundle/],
      inline: 'runtime',
      defaultAttribute: 'async',
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
  ]
}
