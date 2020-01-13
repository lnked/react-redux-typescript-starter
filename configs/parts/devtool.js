const options = require('../options');

const devtool = options.production ? 'source-map' : 'eval-source-map';

module.exports = {
  devtool,
};
