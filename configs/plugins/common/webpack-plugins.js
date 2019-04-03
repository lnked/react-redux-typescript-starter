const webpack = require('webpack');

const options = require('../../options');

module.exports = () => {
  return [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(options.env),
      },
    }),
  ]
}
