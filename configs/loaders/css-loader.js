const { cacheDirectory } = require('../options');

module.exports = ({ importLoaders = 1, ...props }) => {
  return {
    loader: 'css-loader',
    options: {
      ...props,
      importLoaders,
      localIdentName: '[folder]__[local]--[hash:base64:5]',
    }
  };
}
