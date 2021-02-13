const { development } = require('../options');

module.exports = development && {
  devServer: {
    hot: true,
    open: true,
    stats: 'errors-only',
    overlay: { errors: true, warnings: false },
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
    clientLogLevel: 'error',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
