const {cacheDirectory} = require('../options');

module.exports = () => {
  return {
    loader: 'cache-loader',
    options: {
      cacheDirectory,
    }
  };
}
