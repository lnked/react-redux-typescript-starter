const CopyPlugin = require('copy-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new CopyPlugin({
      patterns: [
        {
          from: 'public/**',
          to: options.dist,
          force: true,
          globOptions: {
            ignore: ['.gitkeep', '.DS_Store', 'index.html'],
          },
        },
      ],
    }),
  ]
}
