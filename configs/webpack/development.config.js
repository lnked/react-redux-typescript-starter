const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    open: true,
    overlay: true,
    compress: true,
    publicPath: '/',
    contentBase: ['./dist'],
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
