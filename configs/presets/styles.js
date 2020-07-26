const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { development, production, stylesPath } = require('../options');

const css = require('../loaders/css-loader');
const sass = require('../loaders/sass-loader');
const cache = require('../loaders/cache-loader');
const thread = require('../loaders/thread-loader');
const cssModules = require('../loaders/css-modules');
const style = require('../loaders/style-loader');
const postcss = require('../loaders/postcss-loader');

const miniCssExtract = () => ({
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: stylesPath,
    hmr: development,
    reloadAll: true,
  }
});

module.exports = () => {
  const baseLoader = () => {
    if (production) {
      return [miniCssExtract()];
    }

    return [
      ...(development && [cache()]),
      thread('css'),
      style(),
    ].filter(Boolean);
  }

  return [
    {
      test: /\.s?(a|c)?ss$/,
      use: [
        ...baseLoader(),
        css({
          importLoaders: 1,
        }),
        postcss({
          sourceMap: development,
        }),
        sass({
          sourceMap: development,
          implementation: require('dart-sass'),
          sassOptions: {
            fiber: false,
            outputStyle: 'compressed',
            webpackImporter: true,
          },
        }),
      ],
    },
  ];
};
