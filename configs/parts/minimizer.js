const TerserPlugin = require('terser-webpack-plugin');

const terserOptions = require('../terser-options');

module.exports = () => [
  new TerserPlugin({
    test: /\.js(\?.*)?$/i,
    parallel: true,
    extractComments: false,
    minify: (file, sourceMap) => {
      const extractedComments = [];
      const uglifyOptions = require(`${process.cwd()}/configs/uglify-options`);

      const { error, map, code, warnings } = require('uglify-js').minify(file, {
        ...uglifyOptions,
        sourceMap: {
          content: sourceMap,
        },
      });

      return { error, map, code, warnings, extractedComments };
    },
    terserOptions,
  }),
];
