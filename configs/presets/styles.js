const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { production, stylesPath } = require('../options');

const css = require('../loaders/css-loader');
const style = require('../loaders/style-loader');
const postcss = require('../loaders/postcss-loader');

const miniCssExtract = () => ({
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: stylesPath,
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
        css({
          sourceMap: true,
          importLoaders: 1,
        }),
        postcss({
          sourceMap: true,
        }),
      ],
    },
  ];
};
