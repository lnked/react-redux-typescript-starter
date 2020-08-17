const cache = require('../loaders/cache-loader');

module.exports.addRule = (test, options, caching = true) => {
  const { use, ...restOptions } = options;

  if (caching) {
    use.unshift(cache());
  }

  return {
    test,
    use,
    ...restOptions,
  };
}
