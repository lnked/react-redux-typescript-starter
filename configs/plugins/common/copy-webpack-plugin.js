const CopyWebpackPlugin = require('copy-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new CopyWebpackPlugin([
      {
        context: 'public',
        from: { glob: '**/*', dot: true },
        to: options.dist,
        force: true,
        cache: true,
      },
    ], {
      ignore: ['.gitkeep', '.DS_Store', 'index.html'],
      copyUnmodified: true,
    }),
  ]
}
