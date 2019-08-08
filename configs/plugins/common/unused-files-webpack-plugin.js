const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = () => {
  return [
    new UnusedFilesWebpackPlugin({
      patterns: ['src/**/*.*']
    }),
  ]
}
