const TerserPlugin = require('terser-webpack-plugin');

const terserOptions = require('../terser-options');

module.exports = () => [
  new TerserPlugin({
    test: /\.js(\?.*)?$/i,
    parallel: true,
    extractComments: false,
    terserOptions,
    minify: (file, sourceMap) => {
      const uglifyOptions = require(`${process.cwd()}/configs/uglify-options`);

      const uglifyJsOptions = {
        ...uglifyOptions,
      };

      if (sourceMap) {
        uglifyJsOptions.sourceMap = {
          content: sourceMap,
        };
      }

      return require('uglify-js').minify(file, uglifyJsOptions);
    },
  }),
];
