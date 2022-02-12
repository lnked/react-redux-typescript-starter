const { development, dist } = require('../options');

module.exports = development && {
  stats: 'errors-only',
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: dist,
    },
    client: {
      overlay: { errors: true, warnings: false },
    },
    allowedHosts: 'all',
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
