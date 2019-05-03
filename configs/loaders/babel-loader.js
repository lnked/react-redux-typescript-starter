const { cacheDirectory } = require('../options');

module.exports = () => {
  return {
    loader: 'babel-loader',
    options: {
      cacheDirectory,
    }
  };
}
