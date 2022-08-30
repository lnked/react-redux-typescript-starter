const WebpackCleanupPlugin = require('cleanup-webpack-plugin');

const options = require('../../options');

module.exports = () => [
  new WebpackCleanupPlugin({
    when: 'before',
    exclude: [],
    include: [`${options.dist}/*.*`],
  }),
];
