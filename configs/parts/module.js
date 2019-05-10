const rules = require('../loaders');

module.exports = {
  module: {
    rules,
    noParse: [
      new RegExp('node_modules/dist/axios.min.js'),
    ],
  },
}
