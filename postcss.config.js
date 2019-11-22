module.exports = ({ file, options, env }) => ({
  syntax: require('postcss-scss'),
  plugins: {
    'postcss-import': {
      path: ['src/assets/stylesheets'],
    },
    'postcss-preset-env': {
      stage: 1,
      browsers: 'last 2 versions',
    },
    'postcss-simple-vars': {
      silent: true,
    },
    'postcss-calc': {},
    'postcss-nested': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {},
    'postcss-custom-selectors': {},
    'postcss-emptymediaqueries': {},
    'postcss-hexrgba': {},
    'postcss-position': {},
    'postcss-url': {},
    'pixrem': {
      rootValue: 10,
    },
    ...(env === 'production' && {
      'postcss-will-change': {},
      'postcss-will-change-transition': {},
      'postcss-discard-comments': {},
      'cssnano': {
        safe: true,
        calc: false,
        zindex: false,
        sourcemap: true,
        autoprefixer: false,
        normalizeCharset: true,
        convertValues: { length: false },
        colormin: true,
      },
      'autoprefixer': {
        flexbox: 'no-2009',
      },
    }),
  },
});
