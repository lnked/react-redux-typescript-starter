const CopyPlugin = require('copy-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new CopyPlugin({
      patterns: [
        {
          force: true,
          from: options.public,
          to: options.dist,
          globOptions: {
            dot: true,
            ignore: ['.gitkeep', '.DS_Store', 'index.html'],
          },
        },
      ],
    }),
  ]
}
