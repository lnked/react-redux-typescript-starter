const source = require('../loaders/source-map-loader');
const imageWebpack = require('../loaders/image-webpack-loader');

const { addRule } = require('../tools/rules');

module.exports = () => {
  return [
    addRule(/\.(jpe?g|png|gif|svg)$/, {
      enforce: 'pre',
      use: [
        imageWebpack(),
      ],
    }, true),

    addRule(/\.js$/, {
      enforce: 'pre',
      use: [
        source(),
      ],
    }, true),
  ];
};
