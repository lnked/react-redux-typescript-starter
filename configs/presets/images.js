const svg = require('../loaders/svg-url-loader');
const file = require('../loaders/file-loader');
const imageWebpack = require('../loaders/image-webpack-loader');

const { production, fileName, staticPath } = require('../options');
const { addRule } = require('../tools/rules');

module.exports = () => {
  return [
    addRule(/\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i, {
      use: [
        file({
          name: () => fileName,
          useRelativePath: true,
          outputPath: `${staticPath}/images`,
          publicPath: `${staticPath}/images`,
        }),
        imageWebpack(),
      ],
    }, true),

    addRule(/\.svg$/, {
      exclude: /assets\/fonts/,
      use: [
        svg({
          limit: 10 * 1024,
          noquotes: production,
        }),
      ],
    }, true),
  ];
};
