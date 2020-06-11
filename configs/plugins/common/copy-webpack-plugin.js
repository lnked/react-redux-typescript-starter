const { resolve } = require('path');
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
            ignore: [
              resolve(options.public, 'index.html'),
              '**/.gitkeep',
              '**/.DS_Store',
            ],
          },
        },
      ],
    }),
  ]
}
