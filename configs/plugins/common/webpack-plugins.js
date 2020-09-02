const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');

const options = require('../../options');
const { environment, environmentFiltered } = require('../../tools/env')

module.exports = () => {
  return [
    new webpack.WatchIgnorePlugin([
      /scss\.d\.ts$/
    ]),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      __DEV__: options.development,
      __PROD__: options.production,
      process: {
        env: {
          ...environmentFiltered,
          BROWSER: true,
          NODE_ENV: JSON.stringify(options.environment),
          BABEL_ENV: JSON.stringify(options.environment),
        },
      },
    }),

    new LoadablePlugin(),
  ]
}
