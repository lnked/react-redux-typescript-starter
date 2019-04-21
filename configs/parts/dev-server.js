const options = require('../options');

module.exports = options.development && {
  devServer: {
    hot: true,
    open: true,
    overlay: true,
    compress: true,
    publicPath: '/',
    // contentBase: ['./dist'],
    historyApiFallback: true,
    clientLogLevel: 'error',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
}
