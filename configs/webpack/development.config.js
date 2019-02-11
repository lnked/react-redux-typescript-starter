const webpack = require('webpack')

module.exports = {
  debug: true,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  devServer: {
    hot: true,
    open: true,
    contentBase: './dist',
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    rules: [
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     }, {
      //       loader: 'css-loader'
      //     }, {
      //       loader: 'sass-loader'
      //     }
      //   ]
      // }
    ]
  }
}
