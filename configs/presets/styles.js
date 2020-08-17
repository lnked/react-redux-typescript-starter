const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { development, production, stylesPath } = require('../options');

const css = require('../loaders/css-loader');
const sass = require('../loaders/sass-loader');
const thread = require('../loaders/thread-loader');
const cssModules = require('../loaders/css-modules');
const style = require('../loaders/style-loader');
const postcss = require('../loaders/postcss-loader');
const { addRule } = require('../tools/rules');

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
      thread('css'),
      style(),
    ].filter(Boolean);
  }

  return [
    addRule(/\.s?(a|c)?ss$/, {
      use: [
        ...baseLoader(),
        cssModules(),
        css({
          importLoaders: 2,
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
    }, development),
  ];
};
