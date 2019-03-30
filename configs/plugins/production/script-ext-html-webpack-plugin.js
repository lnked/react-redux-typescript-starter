const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new ScriptExtHtmlWebpackPlugin({
      defer: [/vendors/, /bundle/, /.*bundle/],
      inline: 'runtime',
      defaultAttribute: 'async',
    }),
  ]
}
