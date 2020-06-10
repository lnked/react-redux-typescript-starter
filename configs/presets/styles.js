const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { development, production, stylesPath } = require('../options');

const css = require('../loaders/css-loader');
const cache = require('../loaders/cache-loader');
const cssModules = require('../loaders/css-modules');
const style = require('../loaders/style-loader');
const postcss = require('../loaders/postcss-loader');

const miniCssExtract = () => ({
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: stylesPath,
    hmr: development,
  }
});

module.exports = () => {
  const baseLoader = () => {
    if (production) {
      return miniCssExtract();
    }

    return style();
  }

  return [
    {
      test: /\.s?(a|c)?ss$/,
      use: [
        baseLoader(),
        cache(),
        cssModules(),
        css({
          sourceMap: true,
          importLoaders: 2,
        }),
        postcss({
          sourceMap: true,
        }),
      ],
    },
  ];
};
