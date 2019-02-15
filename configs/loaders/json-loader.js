const { cacheDirectory } = require('./options');

module.exports = () => {
  return {
    loader: 'json-loader',
    options: {}
  };
}
