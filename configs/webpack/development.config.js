const webpack = require('webpack');

module.exports = {
  mode: 'development',
  // devtool: 'cheap-source-map',
  // devtool: 'cheap-eval-source-map', // cheap-module-eval-source-map
  devtool: 'eval',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
