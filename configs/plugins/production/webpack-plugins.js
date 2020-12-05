const webpack = require('webpack');

const options = require('../../options');

module.exports = () => {
  return [
    new webpack.ids.HashedModuleIdsPlugin({
      hashFunction: 'md4',
      hashDigest: 'base64',
      hashDigestLength: 5,
    }),

    new webpack.ids.DeterministicModuleIdsPlugin({
      maxLength: 5,
    }),

    new webpack.LoaderOptionsPlugin({
      debug: options.development,
      context: options.sourcePath,
      minimize: true,
      options: {},
    }),

    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.6,
    }),

    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ru/),

    new webpack.IgnorePlugin({
      resourceRegExp: /redux-immutable-state-invariant/,
    }),
  ];
};
