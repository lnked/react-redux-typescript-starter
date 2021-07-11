const { resolve } = require('path');
const stylesheetsPath = resolve(__dirname, 'src/assets/stylesheets');

module.exports = env => {
  return {
    parser: 'postcss-scss',
    plugins: [
      require('postcss-import')({
        path: [stylesheetsPath],
      }),
      require('postcss-nested'),
      require('postcss-preset-env')({
        stage: 1,
      }),
      require('postcss-simple-vars')({
        silent: true,
      }),
      require('postcss-calc'),
      require('postcss-custom-media'),
      require('postcss-custom-properties'),
      require('postcss-custom-selectors'),
      require('postcss-hexrgba'),
      require('postcss-position'),
      require('postcss-url'),
      require('pixrem')({
        rootValue: 10,
      }),
      ...(env.mode === 'production'
        ? [
            require('postcss-will-change'),
            require('postcss-will-change-transition'),
            require('postcss-discard-comments'),
            require('cssnano')({
              safe: true,
              calc: false,
              zindex: false,
              sourcemap: true,
              autoprefixer: false,
              normalizeCharset: true,
              convertValues: { length: false },
              colormin: true,
            }),
            require('autoprefixer')({ flexbox: 'no-2009' }),
          ]
        : []),
    ].filter(Boolean),
  };
};

module.exports.postcss = true;
