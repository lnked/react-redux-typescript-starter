const { cacheDirectory } = require('../options');

module.exports = ({ prefix = '', limit, ...props }) => {
  return {
    loader: 'url-loader',
    options: {
      ...props,
      limit,
      name: `${prefix}/[hash].[ext]`,
    }
  };
}
