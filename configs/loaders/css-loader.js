const { development } = require('../options');

module.exports = ({ importLoaders = 1, ...props }) => {
  return {
    loader: 'css-loader',
    options: {
      ...props,
      importLoaders,
      localIdentName: development
        ? '[path][name][local]'
        : '[hash:base64:5]',
    }
  };
}
