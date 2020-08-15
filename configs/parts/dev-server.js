const options = require('../options');

module.exports = options.development && {
  devServer: {
    hot: true,
    open: true,
    overlay: { errors: true, warnings: false },
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
    clientLogLevel: 'error',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
}
