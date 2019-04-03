const CRYPTO = require('crypto');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
// const SriPlugin = require('webpack-subresource-integrity-plugin');

const SHA256 = (str) => CRYPTO.createHash('sha256').update( str, 'utf8').digest('base64');
const sha256Str = SHA256( '' + Date.now() );

module.exports = () => {
  return [
    new ScriptExtHtmlWebpackPlugin({
      defer: [/vendors/, /bundle/, /.*bundle/],
      inline: 'runtime',
      defaultAttribute: 'async',
      custom: [{
        test: /\.js$/,
        attribute: 'nonce',
        value: 'nonce-' + sha256Str,
      }],
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new CspHtmlWebpackPlugin({
        'base-uri': '\'self\'',
        'object-src': '\'none\'',
        'script-src': ['\'self\'', '\'unsafe-eval\'', '\'nonce-' + sha256Str + '\''],
        'style-src': ['\'unsafe-inline\'', '\'self\'']
      }, {
        enabled: true,
        devAllowUnsafe: false,
        hashingMethod: 'sha256',
    }),
    // new SriPlugin({
    //   hashFuncNames: ['sha256', 'sha384'],
    //   enabled: true,
    // }),
  ]
}
