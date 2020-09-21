const { resolve } = require('path');

const { development } = require('../options');
const { addRule } = require('../tools/rules');

const babel = require('../loaders/babel-loader');
const thread = require('../loaders/thread-loader');
const nullLoader = require('../loaders/null-loader');
const sourceMap = require('../loaders/source-map-loader');

const ignoredGSAPFiles = ['BezierPlugin', 'DirectionalRotationPlugin', 'RoundPropsPlugin'];

module.exports = () => {
  return [
    addRule(/\.(ts|js)x?$/, {
      enforce: 'pre',
      exclude: /(node_modules)/,
      use: [
        sourceMap(),
      ],
    }, false),

    addRule(/\.(ts|js)x?$/, {
      exclude: /(node_modules)/,
      use: [
        thread('js'),
        'react-hot-loader/webpack',
        babel(),
      ],
    }, development),

    addRule(/\.(ts|js)x?$/, {
      include: ignoredGSAPFiles.map(fileName => resolve(`node_modules/gsap/${fileName}`)),
      use: [
        nullLoader(),
      ],
    }, false),
  ];
};
