const options = require('../options');

const devtool = options.production ? false : 'cheap-module-source-map';

module.exports = {
  devtool,
};
