const {cacheDirectory} = require('../options');

module.exports = ({ prefix = '', ...props }) => {
  return {
    loader: 'file-loader',
    options: {
      ...props,
      name: `${prefix}[name].[hash:6].[ext]`,
    }
  };
}
