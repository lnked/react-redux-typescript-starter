const webpack = require('webpack');

const options = require('../../options');

const environment = require('../../tools/env').config
const formatter = require('../../tools/formatter').formatter

module.exports = () => {
  return [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': Object.assign(formatter(environment, true), {
        BROWSER: true,
        NODE_ENV: JSON.stringify(options.environment),
        BABEL_ENV: JSON.stringify(options.environment),
      }),
      __DEV__: options.development,
      __PROD__: options.production,
    }),
  ]
}
