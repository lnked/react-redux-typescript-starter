module.exports = {
  linters: {
    './src/**/*.{ts,tsx}': [
      'yarn lint:fix',
      'git add -A'
    ],
    '**/*.{json,md,yaml,yml}': [
      'git add -A',
    ],
  },
  ignore: [
    '**/dist/*.*',
  ],
};
