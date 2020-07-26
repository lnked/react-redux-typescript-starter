const { resolve } = require('path');

const { development } = require('../options');

const cache = require('../loaders/cache-loader');
const babel = require('../loaders/babel-loader');
const thread = require('../loaders/thread-loader');
const nullLoader = require('../loaders/null-loader');
const sourceMap = require('../loaders/source-map-loader');

const ignoredGSAPFiles = ['BezierPlugin', 'DirectionalRotationPlugin', 'RoundPropsPlugin'];

module.exports = () => {
  return [
    {
      enforce: 'pre',
      test: /\.(ts|js)x?$/,
      exclude: /(node_modules)/,
      use: [
        sourceMap(),
      ],
    },
    {
      test: /\.(ts|js)x?$/,
      exclude: /(node_modules)/,
      use: [
        ...(development ? [cache()] : []),
        thread('js'),
        babel(),
      ],
    },
    {
      test: /\.(ts|js)x?$/,
      include: ignoredGSAPFiles.map(fileName => resolve(`node_modules/gsap/${fileName}`)),
      use: [
        nullLoader(),
      ],
    },
  ];
};
