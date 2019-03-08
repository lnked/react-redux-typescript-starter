const {cacheDirectory} = require('../options');

module.exports = ({ prefix = '', ...props }) => {
  return {
    loader: 'style-loader',
    options: {
      ...props,
    }
  };
}
