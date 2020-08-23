const file = require('../loaders/file-loader');
const imageWebpack = require('../loaders/image-webpack-loader');

const { fileName, staticPath } = require('../options');
const { addRule } = require('../tools/rules');

module.exports = () => {
  return [
    addRule(/\.(gif|png|jpe?g|svg)$/i, {
      use: [
        file({
          name: () => fileName,
          outputPath: `${staticPath}/images`,
          publicPath: `${staticPath}/images`,
          useRelativePath: true,
        }),
        imageWebpack(),
      ],
    }, false),
  ];
};
