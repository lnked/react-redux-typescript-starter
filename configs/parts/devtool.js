const options = require('../options');

const devtool = options.production ? 'cheap-module-eval-source-map' : 'cheap-module-source-map';

module.exports = {
  devtool,
};
