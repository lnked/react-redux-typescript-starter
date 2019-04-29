const {cacheDirectory} = require('../options');

module.exports = ({ prefix = '', ...props }) => {
  return [
    // {
    //   test: /\.(glsl|frag|vert)$/,
    //   exclude: /node_modules/,
    //   loader: 'glslify-import-loader
    // },
    {
      test: /\.(glsl|frag|vert)$/,
      exclude: /node_modules/,
      loader: 'raw-loader'
    },
    {
      test: /\.(glsl|frag|vert)$/,
      exclude: /node_modules/,
      loader: 'glslify-loader'
    },
  ];
}
