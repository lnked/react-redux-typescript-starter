const webpack = require('webpack');

const options = require('../../options');
const { environment } = require('../../tools/env')

module.exports = () => {
  return [
    new webpack.WatchIgnorePlugin([
      /scss\.d\.ts$/
    ]),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        ...environment,
        BROWSER: true,
        NODE_ENV: JSON.stringify(options.environment),
        BABEL_ENV: JSON.stringify(options.environment),
      },
      __DEV__: options.development,
      __PROD__: options.production,
    }),
  ]
}
