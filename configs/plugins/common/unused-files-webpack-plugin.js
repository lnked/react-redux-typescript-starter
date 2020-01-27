const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

const { analyze } = require('../../options');

module.exports = () => {
  if (!analyze) {
    return []
  }

  return [
    new UnusedFilesWebpackPlugin({
      patterns: [
        'src/**/*.*',
      ],
      globOptions: {
        ignore: [
          '**/*.test.*',
          '**/*.spec.*',
          '**/*.config.*',
          '**/__mocks/**/*',
          '**/__tests__/**/*',
          'node_modules/**/*',
        ],
      },
    }),
  ]
}
