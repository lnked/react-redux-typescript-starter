const webpack = require('webpack');

const options = require('../../options');
const { environmentFiltered } = require('../../tools/env');

module.exports = () => [
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
];
